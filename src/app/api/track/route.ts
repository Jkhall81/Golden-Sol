import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase";

export async function POST(req: NextRequest) {
  const forwarded = req.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || "unknown";
  const userAgent = req.headers.get("user-agent") || "unkown";
  const referer = req.headers.get("referer") || "direct";
  const body = await req.json().catch(() => null);

  const log = {
    ip,
    userAgent,
    referer,
    timestamp: new Date().toISOString(),
    screen: body?.screen || null,
    page: body?.page || null,
    event: body?.event || null,
    extras: body?.extras || {},
  };
  await db.collection("tracking").add(log);

  return NextResponse.json({ success: true });
}
