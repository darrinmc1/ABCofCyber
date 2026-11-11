import "server-only";

export const DEFAULT_FEEDBACK_WEBHOOK_URL =
  "https://n8n.peelboss.com/webhook/feedback-creator-run";

/**
 * Kick the n8n feedback creator-run webhook after a feedback row is saved.
 * Awaited with a short timeout so the runtime does not drop the GET when the
 * function returns. Must never throw — failures are logged only.
 */
export async function notifyFeedbackWebhook(): Promise<void> {
  let timeout: ReturnType<typeof setTimeout> | undefined;
  try {
    const webhookUrl =
      process.env.FEEDBACK_WEBHOOK_URL?.trim() || DEFAULT_FEEDBACK_WEBHOOK_URL;
    if (!webhookUrl) return;

    // Server-only env. A missing secret must not fail the feedback save.
    const secret = process.env.KD7_WEBHOOK_SECRET?.trim();
    const headers: Record<string, string> = { Accept: "application/json" };
    if (secret) {
      headers["X-KD7-Secret"] = secret;
    } else {
      console.warn(
        "KD7_WEBHOOK_SECRET is unset; calling feedback webhook without X-KD7-Secret"
      );
    }

    const controller = new AbortController();
    timeout = setTimeout(() => controller.abort(), 4000);

    await fetch(webhookUrl, {
      method: "GET",
      headers,
      cache: "no-store",
      signal: controller.signal,
    });
  } catch (err) {
    console.error("feedback webhook notify failed (non-fatal):", err);
  } finally {
    if (timeout) clearTimeout(timeout);
  }
}
