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
            content: z.string().min(1).max(1000),
          })
          .strict(),
      )
      .min(1)
      .max(12),
  })
  .strict();

// Best-effort limiter: per server instance only. On serverless this is NOT a
// real guarantee. Add Upstash Redis / Vercel Firewall rate limiting before launch.
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 10;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
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

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) return json(429, "Too many requests. Please try again soon.");

  if (Number(req.headers.get("content-length") ?? 0) > 20_000) {
    return json(413, "Request too large.");
  }

  let parsed;
  try {
    parsed = bodySchema.safeParse(await req.json());
  } catch {
    return json(400, "Invalid request.");
  }
  if (!parsed.success) return json(400, "Invalid request.");

  try {
    const result = streamText({
      model: google(MODEL_ID),
      system: buildSystemPrompt(),
      messages: parsed.data.messages,
      maxOutputTokens: 1000,
      abortSignal: AbortSignal.timeout(20_000),
      onError: ({ error }) => {
        const err = error as Error;
        console.error("chat stream error:", err?.name, err?.message);
      },
    });
    return result.toTextStreamResponse();
  } catch (error) {
    console.error("chat error", (error as Error)?.name);
    return json(500, "Something went wrong.");
  }
}
