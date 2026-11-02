import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";

export const dynamic = "force-dynamic";

let memoryCount = 1;

function getFilePath(): string {
  if (process.env.VERCEL) {
    return path.join(os.tmpdir(), "visitors.json");
  }
  return path.join(process.cwd(), "src", "data", "visitors.json");
}

function readCount(): number {
  try {
    const tmpPath = path.join(os.tmpdir(), "visitors.json");
    const localPath = path.join(process.cwd(), "src", "data", "visitors.json");
    const targetPath = process.env.VERCEL && fs.existsSync(tmpPath) ? tmpPath : localPath;

    if (fs.existsSync(targetPath)) {
      const data = JSON.parse(fs.readFileSync(targetPath, "utf-8"));
      if (typeof data.totalVisits === "number") {
        memoryCount = data.totalVisits;
        return memoryCount;
      }
    }
  } catch (err) {
    console.error("Error reading visitors count:", err);
  }
  return memoryCount;
}

function writeCount(count: number): void {
  try {
    const filePath = getFilePath();
    const payload = JSON.stringify(
      {
        totalVisits: count,
        lastUpdated: new Date().toISOString(),
      },
      null,
      2
    );
    fs.writeFileSync(filePath, payload, "utf-8");
  } catch (err) {
    console.error("Error saving visitors count:", err);
  }
}

export async function GET() {
  const count = readCount();
  return NextResponse.json({ count });
}

export async function POST() {
  const current = readCount();
  const updated = current + 1;
  memoryCount = updated;
  writeCount(updated);
  return NextResponse.json({ count: updated });
}

