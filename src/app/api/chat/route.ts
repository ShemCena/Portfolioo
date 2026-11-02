import { google } from "@ai-sdk/google";
import { streamText } from "ai";
import { z } from "zod";
import { buildSystemPrompt } from "@/lib/profile-knowledge";

export const maxDuration = 30;

const MODEL_ID = "gemini-3.5-flash-lite";

const bodySchema = z
  .object({
    messages: z
      .array(
        z
          .object({
            role: z.enum(["user", "assistant"]),
            content: z.string().max(2000),
          })
          .strict(),
      )
      .min(1)
      .max(16),
  })
  .strict();

// Best-effort limiter: per server instance only. On serverless this is NOT a
// real guarantee.
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 30; // Elevated to avoid blocking mobile CGNAT users
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  if (ip === "unknown") return false;
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_REQUESTS;
}

function json(status: number, error: string) {
  return Response.json({ error }, { status });
}

export async function POST(req: Request) {
  if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
    return json(503, "Chat is not configured.");
  }

  const ip =
    req.headers.get("x-real-ip") ||
    req.headers.get("x-vercel-ip") ||
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown";

  if (rateLimited(ip)) return json(429, "Too many requests. Please try again in a moment.");

  if (Number(req.headers.get("content-length") ?? 0) > 30_000) {
    return json(413, "Request too large.");
  }

  let rawJson: { messages?: unknown[] } | null = null;
  try {
    rawJson = await req.json();
  } catch {
    return json(400, "Invalid JSON body.");
  }

  // Pre-filter: drop any empty or whitespace-only messages from client history
  if (rawJson && Array.isArray(rawJson.messages)) {
    rawJson.messages = rawJson.messages.filter(
      (m): m is { role: "user" | "assistant"; content: string } =>
        typeof m === "object" &&
        m !== null &&
        "content" in m &&
        typeof (m as { content: unknown }).content === "string" &&
        (m as { content: string }).content.trim().length > 0
    );
  }

  const parsed = bodySchema.safeParse(rawJson);
  if (!parsed.success || parsed.data.messages.length === 0) {
    return json(400, "Invalid messages format.");
  }

  try {
    const result = streamText({
      model: google(MODEL_ID),
      system: buildSystemPrompt(),
      messages: parsed.data.messages,
      maxOutputTokens: 1000,
      abortSignal: AbortSignal.timeout(25_000),
      onError: ({ error }) => {
        const err = error as Error;
        console.error("chat stream error:", err?.name, err?.message);
      },
    });

    return result.toTextStreamResponse({
      headers: {
        "Cache-Control": "no-cache, no-transform",
      },
    });
  } catch (error) {
    console.error("chat error", (error as Error)?.name, (error as Error)?.message);
    return json(500, "Something went wrong.");
  }
}
