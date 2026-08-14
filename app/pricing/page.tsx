import Link from "next/link"
import { CheckCircle, ArrowRight } from "lucide-react"
import { JsonLd } from "@/components/json-ld"
import { PLANS, WHATS_THE_PLAY_OFFER, pricingDocument } from "@/lib/pricing"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <JsonLd data={pricingDocument()} />
      <section className="border-b bg-white py-16 text-center">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 mb-3">Pricing</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">One training membership.</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            $29/month for lessons, assessments, and reporting. Not 24/7 monitoring, not pentesting,
            not Enterprise custom pricing. Checkout is not live yet.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 md:px-6 py-12">
        <div className="mx-auto grid max-w-md gap-6 items-start">
          {PLANS.map((plan) => (
            <div key={plan.name} className={`rounded-xl border p-6 md:p-8 ${
              plan.highlighted
                ? "border-blue-500 bg-white shadow-lg ring-1 ring-blue-500"
                : "border-slate-200 bg-white"
            }`}>
              <h3 className="font-bold text-xl mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.priceDisplay}</span>
                <span className="text-sm text-slate-500">{plan.periodLabel}</span>
              </div>
              <p className="text-sm text-slate-600 mb-6">{plan.description}</p>
              <Link
                href={plan.href}
                className={`flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-colors mb-8 ${
                  plan.highlighted
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "border border-slate-300 text-slate-700 hover:bg-slate-50"
                }`}
              >
                {plan.cta} <ArrowRight className="h-4 w-4" />
              </Link>
              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle className={`h-4 w-4 mt-0.5 shrink-0 ${
                      plan.highlighted ? "text-blue-500" : "text-slate-400"
                    }`} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-xl border border-slate-200 bg-white p-6 md:p-8">
          <h2 className="text-xl font-bold">What&apos;s the play — included</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            {WHATS_THE_PLAY_OFFER.notes}
          </p>
          <p className="mt-4 text-xs text-slate-500">
            Machine-readable: <Link href="/pricing.json" className="text-blue-700 hover:underline">/pricing.json</Link>
            {" · "}
            <Link href="/llm.txt" className="text-blue-700 hover:underline">/llm.txt</Link>
          </p>
        </div>
      </section>
    </div>
  )
}
