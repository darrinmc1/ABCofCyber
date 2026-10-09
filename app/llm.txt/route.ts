import { ABC_METHOD, WALKTHROUGH_DISCLAIMER } from "@/lib/disclaimer"
import { ARCHIVE_CITATIONS } from "@/lib/archive"
import { SITE_NAME, SITE_URL } from "@/lib/site"

function llmTxt(): string {
  const method = ABC_METHOD.steps.map((s) => `${s.letter} — ${s.title}: ${s.summary}`).join("\n")
  const citations = ARCHIVE_CITATIONS.map((c) => `- ${c.title} (${SITE_URL}${c.href}) [${c.kind}]`).join("\n")

  return `# ${SITE_NAME}

> Cybersecurity training and frameworks with serious controls and very little panic. Not a chatbot. Not a new brand.

Site: ${SITE_URL}
Product: ${SITE_NAME}
Layer (not a brand): What's the play — ${SITE_URL}/whats-the-play

## One job

Paste a "is this phishing / what's the play" scenario.
Get a plain-English walkthrough using the ABC method, cited from existing lessons and frameworks.

This is not chat-with-site. One paste, one walkthrough.

## ABC method

${method}

## Voice

Anti-hype. No scare tactics. No "military-grade." Education only — not legal advice.

## Disclaimer

${WALKTHROUGH_DISCLAIMER}

## Plans

Paid plans are coming soon. Join the list: ${SITE_URL}/pricing
Free lessons stay open.

## Citations the tool is allowed to use

${citations}

## FAQ

Q: Is this legal advice?
A: No. Education only.

Q: Will it tell me this is definitely phishing?
A: No. It names the likely play and the next move. It is not a verdict.

Q: Is this a chatbot for the whole site?
A: No. One job: scenario in, walkthrough out.

Q: What if the AI key is missing?
A: The archive walkthrough still runs from real lessons. No dead error page.

Q: How do I pay?
A: Payments are not set up yet. Join the list at ${SITE_URL}/pricing.

## Contact

${SITE_URL}/contact
`
}

export function GET() {
  return new Response(llmTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
