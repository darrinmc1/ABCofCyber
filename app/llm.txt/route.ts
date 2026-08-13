import { ABC_METHOD, WALKTHROUGH_DISCLAIMER } from "@/lib/disclaimer"
import { ARCHIVE_CITATIONS } from "@/lib/archive"
import { PLANS, WHATS_THE_PLAY_OFFER } from "@/lib/pricing"
import { SITE_NAME, SITE_URL } from "@/lib/site"

function llmTxt(): string {
  const method = ABC_METHOD.steps.map((s) => `${s.letter} — ${s.title}: ${s.summary}`).join("\n")
  const plans = PLANS.map(
    (p) =>
      `- ${p.name}: ${p.priceDisplay}${p.periodLabel} — ${p.description} Includes What's the play: ${p.includesWhatsThePlay ? "yes (unlimited)" : "1 free walkthrough"}.`,
  ).join("\n")
  const citations = ARCHIVE_CITATIONS.map((c) => `- ${c.title} (${SITE_URL}${c.href}) [${c.kind}]`).join("\n")

  return `# ${SITE_NAME}

> Cybersecurity training and frameworks with serious controls and very little panic. Not a chatbot. Not a new brand.

Site: ${SITE_URL}
Product: ${SITE_NAME}
Layer (not a brand): What's the play — ${WHATS_THE_PLAY_OFFER.url}

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

## Pricing (parseable)

Machine-readable copy: ${SITE_URL}/pricing.json
Human copy: ${SITE_URL}/pricing
Currency: USD
x402: false
Checkout: existing-subscription (Early Adopter / Pro). No crypto rails.

${plans}

What's the play offer:
- kind: ${WHATS_THE_PLAY_OFFER.kind}
- priceUsd: ${WHATS_THE_PLAY_OFFER.priceUsd}
- billing: ${WHATS_THE_PLAY_OFFER.billing}
- includedIn: ${WHATS_THE_PLAY_OFFER.includedInPlanIds.join(", ")}
- freeAllowance: ${WHATS_THE_PLAY_OFFER.freeAllowance}
- x402: false
- notes: ${WHATS_THE_PLAY_OFFER.notes}

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
A: Paid-plan include on Early Adopter ($5/mo) and Pro ($10/mo), or $29/mo as a dedicated seat when billing is live. Same existing signup pattern. No x402.

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
