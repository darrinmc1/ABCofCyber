import { ABC_METHOD, WALKTHROUGH_DISCLAIMER } from "@/lib/disclaimer"
import { ARCHIVE_CITATIONS } from "@/lib/archive"
import { MERCHANT_OF_RECORD_DISCLOSURE } from "@/lib/merchant-of-record"
import { COLLECTIONS, FREE_ITEMS, INTRO_PRICE_NOTE, PLAN } from "@/lib/pricing"
import { REFUND_POLICY } from "@/lib/refund-policy"
import { SITE_NAME, SITE_URL } from "@/lib/site"
import { getSupportEmail } from "@/lib/support-email"
function llmTxt(): string {
  const method = ABC_METHOD.steps.map((s) => `${s.letter} — ${s.title}: ${s.summary}`).join("\n")
  const free = FREE_ITEMS.map((item) => `- Free: ${item.name} — ${item.description} ${SITE_URL}${item.href}`).join("\n")
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

## Pricing (parseable)

Machine-readable copy: ${SITE_URL}/pricing.json
Human copy: ${SITE_URL}/pricing
Currency: AUD, GST included
x402: false
Checkout: none. Commercial call to action is "Create a free account" at ${SITE_URL}/sign-up. No Stripe and no payment link.
Payments: ${MERCHANT_OF_RECORD_DISCLOSURE}
Refunds: ${REFUND_POLICY}
Plan: ${PLAN.priceDisplay}/month ${PLAN.taxLabel}. Intro ${PLAN.introDisplay} first month. ${INTRO_PRICE_NOTE}
Collections: ${COLLECTIONS.priceDisplay} ${COLLECTIONS.periodLabel}. ${COLLECTIONS.description}
Governing law: Queensland, Australia. The courts of Queensland have exclusive jurisdiction. The Service is operated by TTPN Pty Ltd.

${free}

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
A: You do not, on this site. Create a free account. The plan is A$9/month inc GST after an A$5 first month. Collections are about A$9–19 one-off. No checkout, no x402, no lifetime price.

## Contact

${getSupportEmail()}
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
