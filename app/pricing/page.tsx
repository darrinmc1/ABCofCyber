import Link from "next/link"
import { Check, X } from "lucide-react"
import { JsonLd } from "@/components/json-ld"
import PricingCards from "@/components/pricing-cards"
import { EmailCapture } from "@/components/email-capture"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CHECKOUT_LIVE, PLANS, WAITLIST_HREF, WHATS_THE_PLAY_OFFER, pricingDocument } from "@/lib/pricing"

const comparisonRows = [
  { label: "Courses and lessons", values: [true, true, true] },
  { label: "What's the play walkthroughs", values: ["1", "Unlimited", "Unlimited"] },
  { label: "Interactive tools", values: ["Basic", true, true] },
  { label: "Pro template packs", values: [false, true, true] },
  { label: "Price locked at $5/mo", values: [false, true, false] },
  { label: "Advanced features and AI tools", values: [false, false, true] },
  { label: "New content priority", values: [false, false, true] },
  { label: "Priority support", values: [false, false, true] },
]

const faqs = [
  {
    q: "Can I pay today?",
    a: CHECKOUT_LIVE
      ? "Yes. Paid plans use the same existing-subscription checkout as the rest of the site."
      : "Not yet. Checkout is not live. Join the waitlist and we will email you when billing launches. Free lessons are open now.",
  },
  {
    q: "What are the training plans?",
    a: "Free ($0), Early Adopter ($5/month, rate locked), and Pro ($10/month when it launches). Those are the only training SKUs.",
  },
  {
    q: "Is What's the play a separate product?",
    a: `No. It is a layer on this site. Paid plans include unlimited walkthroughs. If it is billed as a dedicated seat, the listed price is $${WHATS_THE_PLAY_OFFER.priceUsd}/month.`,
  },
  {
    q: "Do you sell 24/7 monitoring or vulnerability scanning retainers?",
    a: "No. This site is cybersecurity training. Those managed-service packages are not for sale here.",
  },
]

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return <Check className="mx-auto h-4 w-4 text-blue-600" />
  }
  if (value === false) {
    return <X className="mx-auto h-4 w-4 text-slate-300" />
  }
  return <span className="text-slate-700">{value}</span>
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={pricingDocument()} />

      <section className="border-b bg-slate-50">
        <div className="container mx-auto px-4 py-16 text-center md:px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Pricing</p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Simple, transparent pricing
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            One training price map: Free, Early Adopter $5/mo, and Pro $10/mo. What&apos;s the play is included on
            paid plans{CHECKOUT_LIVE ? "" : " when billing launches"}, or ${WHATS_THE_PLAY_OFFER.priceUsd}/mo as a
            dedicated seat.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:px-6">
        <PricingCards />
      </section>

      <section className="container mx-auto px-4 pb-16 md:px-6">
        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
            <h2 className="text-lg font-bold text-slate-900">Feature comparison</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="w-1/2 px-6 py-3 text-left font-semibold text-slate-700">Feature</th>
                  {PLANS.map((plan) => (
                    <th
                      key={plan.id}
                      className={`px-4 py-3 text-center font-semibold ${
                        plan.highlighted ? "bg-blue-50 text-blue-700" : "text-slate-700"
                      }`}
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-6 py-3 font-medium text-slate-700">{row.label}</td>
                    {row.values.map((value, index) => {
                      const plan = PLANS[index]
                      return (
                        <td
                          key={plan.id}
                          className={`px-4 py-3 text-center ${plan.highlighted ? "bg-blue-50" : ""}`}
                        >
                          <CellValue value={value} />
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="container mx-auto px-4 py-16 md:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-slate-900">Frequently asked questions</h2>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <Card key={faq.q} className="rounded-xl border border-slate-200 bg-white shadow-sm">
                <CardContent className="p-6">
                  <p className="mb-2 font-semibold text-slate-900">{faq.q}</p>
                  <p className="text-sm leading-6 text-slate-600">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="waitlist" className="container mx-auto px-4 py-16 md:px-6">
        <div className="mx-auto max-w-3xl">
          <EmailCapture
            variant="hero"
            theme="dark"
            heading={CHECKOUT_LIVE ? "Choose a plan" : "Join the waitlist"}
            subheading={
              CHECKOUT_LIVE
                ? "Paid plans use the same checkout as the rest of the site."
                : "Checkout is not live. Leave your email and we will tell you when Early Adopter ($5/mo) and Pro ($10/mo) can be billed."
            }
            source="pricing-waitlist"
            showName
          />
        </div>
        <p className="mt-8 text-center text-xs text-slate-500">
          Machine-readable:{" "}
          <Link href="/pricing.json" className="text-blue-700 hover:underline">
            /pricing.json
          </Link>
          {" · "}
          <Link href="/llm.txt" className="text-blue-700 hover:underline">
            /llm.txt
          </Link>
        </p>
        <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild className="rounded-xl bg-blue-600 px-8 font-semibold text-white hover:bg-blue-700">
            <Link href="/learn">Start for free</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-xl border-slate-300 px-8 font-semibold text-slate-700 hover:bg-slate-50">
            <Link href={CHECKOUT_LIVE ? "/contact" : WAITLIST_HREF}>
              {CHECKOUT_LIVE ? "Talk to us" : "Waitlist details"}
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
