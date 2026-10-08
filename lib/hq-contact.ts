// Relays the public contact form to Empire HQ.
// HQ emails Darrin with Reply-To set to the visitor.
// Do not point this at n8n.peelboss.com/webhook/hq-contact (that webhook 404s).
// Adapted from the aiforsmb hq-contact helper: same JSON contract, this site's label.

const HQ_SEND_EMAIL_URL = "https://hq.peelboss.com/api/send-email"
const SITE_LABEL = "abcofcyber"

export function hqContactPayload(input: { name: string; email: string; message: string }) {
  const name = input.name.replace(/[\r\n]+/g, " ").trim()
  const email = input.email.trim()
  const message = input.message.trim()

  return {
    name: `${name} (${SITE_LABEL})`,
    email,
    message: `[${SITE_LABEL} contact form]\n${message}`,
  }
}

export async function sendHqContact(input: {
  name: string
  email: string
  message: string
}): Promise<boolean> {
  try {
    const res = await fetch(HQ_SEND_EMAIL_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(hqContactPayload(input)),
      signal: AbortSignal.timeout(8000),
      cache: "no-store",
    })
    if (!res.ok) {
      console.error("[hq-contact] relay failed", res.status)
      return false
    }
    return true
  } catch (err) {
    console.error("[hq-contact] request failed", err)
    return false
  }
}
