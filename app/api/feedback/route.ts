// app/api/feedback/route.ts — unified feedback endpoint
// Writes to Neon, sends admin notification via Resend.

import { NextRequest, NextResponse } from "next/server";
import { sendAdminNotification } from "@/lib/email";
import { notifyFeedbackWebhook } from "@/lib/feedback-webhook";
import { FEEDBACK_SAVE_ERROR, saveFeedback } from "@/lib/intake";

const SITE_KEY = process.env.SITE_KEY ?? "abcofcyber";
const VALID_CATEGORIES = ["Bug", "Suggestion", "Content Request", "Other"];

const rateLimit = new Map<string, { count: number; reset: number }>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 10;
const MAX_MESSAGE = 5000;
const MAX_PAGE = 2000;
const MAX_EMAIL = 320;
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

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const body = await req.json().catch(() => ({}));
  const { rating, category, message, page, email } = body as {
    rating?: number; category?: string; message?: string; page?: string; email?: string;
  };

  if (!rating || !category || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (rating < 1 || rating > 5) {
    return NextResponse.json({ error: "Rating must be 1-5" }, { status: 400 });
  }
  if (!VALID_CATEGORIES.includes(category)) {
    return NextResponse.json({ error: "Invalid category" }, { status: 400 });
  }
  if (
    typeof message !== "string" ||
    message.length > MAX_MESSAGE ||
    (page != null && (typeof page !== "string" || page.length > MAX_PAGE)) ||
    (email != null && (typeof email !== "string" || email.length > MAX_EMAIL))
  ) {
    return NextResponse.json({ error: "Field too long" }, { status: 400 });
  }

  // 1. Persist to Neon. Fail closed when the usage database cannot be used.
  const _origin =
    req.headers.get("origin") ??
    (req.headers.get("host") ? `https://${req.headers.get("host")}` : null);
  const pageUrl =
    page && page.startsWith("http")
      ? page
      : _origin && page
      ? `${_origin}${page.startsWith("/") ? page : `/${page}`}`
      : _origin ?? null;
  const feedbackType =
    category === "Bug" ? "bug"
      : category === "Suggestion" ? "suggestion"
      : category === "Content Request" ? "content_request"
      : "general";

  const saved = await saveFeedback({
    site: SITE_KEY,
    category,
    rating,
    message,
    page: page ?? null,
    pageUrl,
    email: email ?? null,
    ipAddress: ip,
    feedbackType,
  });
  const dbWrote = saved.ok;

  // Kick n8n only after the row is saved. The helper never throws, so the
  // response below stays the same when the webhook fails.
  if (dbWrote) {
    await notifyFeedbackWebhook();
  }

  // 2. Notify admin
  await sendAdminNotification({
    kind: "feedback",
    payload: { site: SITE_KEY, rating, category, message, page, email, ip, dbWrote },
  });

  if (!dbWrote) {
    return NextResponse.json({ error: FEEDBACK_SAVE_ERROR }, { status: 503 });
  }

  return NextResponse.json({ ok: true });
}
