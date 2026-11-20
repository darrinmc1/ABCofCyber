// app/api/subscribe/route.ts – unified subscribe endpoint
// Replaces the old nodemailer+JSON-file pattern.
// Writes to Neon, upserts into Mailchimp, sends welcome via Resend.

import { NextRequest, NextResponse } from "next/server";
import { addToMailchimp } from "@/lib/mailchimp";
import { sendWelcome, sendAdminNotification } from "@/lib/email";
import { saveToHq } from "@/lib/hq-subscribe"
import { SUBSCRIBE_SAVE_ERROR, saveSubscriber } from "@/lib/intake";

const SITE_KEY = process.env.SITE_KEY || "abcofcyber";

// Simple in-memory rate limit (per-server-instance – good enough for now).
const rateLimit = new Map<string, { count: number; reset: number }>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string) {
  const now = Date.now();
  const e = rateLimit.get(ip);
  if (!e || now > e.reset) {
    rateLimit.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  e.count += 1;
  return e.count > MAX_PER_WINDOW;
}

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Slow down – that looks suspiciously like brute force, even from us." },
      { status: 429 }
    );
  }

  const body = await req.json().catch(() => ({}));
  const { email, name, source, website } = body as {
    email?: string; name?: string; source?: string; website?: string;
  };
  
  // HONEYPOT CHECK – reject silently if filled
  if (website && website !== '') {
    return NextResponse.json({
      ok: true,
      message: "You're on the list.",
    });
  }

  if (!email || !emailRe.test(email)) {
    return NextResponse.json(
      { error: "That email didn't validate. Even our regex has standards." },
      { status: 400 }
    );
  }

  // 1. Persist to Neon (source of truth for new rows).
  const saved = await saveSubscriber({
    site: SITE_KEY,
    email,
    name: name ?? null,
    source: source ?? null,
  });
  const dbWrote = saved.ok;

  // 2. Push to Mailchimp (best-effort – don't fail the request if this errors)
  // Always copy the signup to the shared HQ subscribers list.
  const hqSaved = await saveToHq(SITE_KEY, email, source)

  const mc = await addToMailchimp({ email, name, tags: source ? [source] : [] });

  // 3. Fire-and-forget welcome email + admin notification
  await Promise.allSettled([
    sendWelcome({ email, name }),
    sendAdminNotification({
      kind: "subscribe",
      payload: { site: SITE_KEY, email, name, source, ip, dbWrote, hqSaved, mc: mc.ok },
    }),
  ]);

  if (!dbWrote) {
    return NextResponse.json({ error: SUBSCRIBE_SAVE_ERROR }, { status: 503 });
  }

  return NextResponse.json({
    ok: true,
    message: "You're on the list. We'll only show up in your inbox when there's something actually worth opening.",
  });
}