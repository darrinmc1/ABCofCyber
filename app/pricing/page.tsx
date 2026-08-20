import Link from "next/link"
import { Check, X, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "",
    description: "Get your bearings. No credit card, no commitment.",
    cta: "Start Free",
    ctaHref: "/sign-up",
    highlight: false,
    features: [
      "Access to all Learn modules",
      "5 AI security questions / month",
      "Community framework guides",
      "Basic phishing awareness content",
      "Public blog & resources",
    ],
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "For individuals and small teams ready to build real security habits.",
    cta: "Start 14-Day Free Trial",
    ctaHref: "/sign-up?plan=pro",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Everything in Free",
      "Unlimited AI security questions",
      "Full framework deep-dives (NIST, ISO 27001, CIS)",
      "Downloadable policy templates",
      "Interactive risk assessment tools",
      "Priority email support",
      "Progress tracking dashboard",
    ],
  },
  {
    name: "Team",
    price: "$49",
    period: "/month",
    description: "For growing teams that need shared visibility and accountability.",
    cta: "Start 14-Day Free Trial",
    ctaHref: "/sign-up?plan=team",
    highlight: false,
    features: [
      "Everything in Pro",
      "Up to 10 team seats",
      "Team progress dashboard",
      "Shared policy workspace",
      "Incident response plan builder",
      "Quarterly security review checklist",
      "Slack / email digest reports",
    ],
  },
]

const comparisonRows: {
  category: string
  features: { label: string; free: boolean | "partial"; pro: boolean | "partial"; team: boolean | "partial" }[]
}[] = [
  {
    category: "Learning & Content",
    features: [
      { label: "Core Learn modules", free: true, pro: true, team: true },
      { label: "Advanced framework deep-dives", free: false, pro: true, team: true },
      { label: "Blog & public resources", free: true, pro: true, team: true },
      { label: "Downloadable policy templates", free: false, pro: true, team: true },
    ],
  },
  {
    category: "AI Tools",
    features: [
      { label: "AI security Q&A", free: "partial", pro: true, team: true },
      { label: "Unlimited AI queries", free: false, pro: true, team: true },
      { label: "What's the Play? scenario tool", free: "partial", pro: true, team: true },
    ],
  },
  {
    category: "Risk & Compliance",
    features: [
      { label: "Risk assessment tools", free: false, pro: true, team: true },
      { label: "Incident response plan builder", free: false, pro: false, team: true },
      { label: "Quarterly review checklist", free: false, pro: false, team: true },
    ],
  },
  {
    category: "Team & Collaboration",
    features: [
      { label: "Personal progress dashboard", free: false, pro: true, team: true },
      { label: "Team seats (up to 10)", free: false, pro: false, team: true },
      { label: "Shared policy workspace", free: false, pro: false, team: true },
      { label: "Slack / email digest reports", free: false, pro: false, team: true },
    ],
  },
  {
    category: "Support",
    features: [
      { label: "Community access", free: true, pro: true, team: true },
      { label: "Priority email support", free: false, pro: true, team: true },
      { label: "Dedicated onboarding call", free: false, pro: false, team: true },
    ],
  },
]

function FeatureCell({ value }: { value: boolean | "partial" }) {
  if (value === true) return <Check className="mx-auto h-5 w-5 text-emerald-500" aria-label="Included" />
  if (value === "partial") return <Minus className="mx-auto h-5 w-5 text-amber-400" aria-label="Limited" />
  return <X className="mx-auto h-5 w-5 text-slate-300" aria-label="Not included" />
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center md:px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Pricing</p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Security skills that fit your budget
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600">
            Start free and upgrade when you need more. No surprise fees, no vendor lock-in — just practical security
            knowledge that actually sticks.
          </p>
        </div>
      </section>

      {/* Plan Cards */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.highlight
                  ? "border-blue-600 bg-blue-600 text-white shadow-xl"
                  : "border-slate-200 bg-white text-slate-900"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-slate-900">
                  {plan.badge}
                </span>
              )}
              <div className="mb-6">
                <p className={`mb-1 text-sm font-semibold uppercase tracking-widest ${
                  plan.highlight ? "text-blue-200" : "text-slate-500"
                }`}>{plan.name}</p>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className={`mb-1 text-sm ${
                      plan.highlight ? "text-blue-200" : "text-slate-500"
                    }`}>{plan.period}</span>
                  )}
                </div>
                <p className={`mt-2 text-sm leading-6 ${
                  plan.highlight ? "text-blue-100" : "text-slate-600"
                }`}>{plan.description}</p>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${
                      plan.highlight ? "text-blue-200" : "text-emerald-500"
                    }`} />
                    <span className={plan.highlight ? "text-blue-50" : "text-slate-700"}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link href={plan.ctaHref}>
                <Button
                  className={`w-full font-semibold ${
                    plan.highlight
                      ? "bg-white text-blue-600 hover:bg-blue-50"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  {plan.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-slate-500">
          All paid plans include a 14-day free trial. Cancel any time — no questions asked.
        </p>
      </section>

      {/* Comparison Table */}
      <section className="border-t bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-16 md:px-6">
          <h2 className="mb-2 text-center text-2xl font-bold text-slate-900 md:text-3xl">
            See exactly what you get
          </h2>
          <p className="mb-10 text-center text-slate-600">
            No asterisks. No fine print. Just a straight comparison.
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="px-6 py-4 text-left font-semibold text-slate-700">Feature</th>
                  {plans.map((p) => (
                    <th
                      key={p.name}
                      className={`px-4 py-4 text-center font-semibold ${
                        p.highlight ? "text-blue-600" : "text-slate-700"
                      }`}
                    >
                      {p.name}
                      <div className={`text-xs font-normal ${
                        p.highlight ? "text-blue-500" : "text-slate-400"
                      }`}>{p.price}{p.period}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((section) => (
                  <>
                    <tr key={section.category} className="bg-slate-50">
                      <td
                        colSpan={4}
                        className="px-6 py-2 text-xs font-bold uppercase tracking-widest text-slate-500"
                      >
                        {section.category}
                      </td>
                    </tr>
                    {section.features.map((row) => (
                      <tr key={row.label} className="border-t border-slate-100 hover:bg-slate-50">
                        <td className="px-6 py-3 text-slate-700">{row.label}</td>
                        <td className="px-4 py-3 text-center"><FeatureCell value={row.free} /></td>
                        <td className="px-4 py-3 text-center"><FeatureCell value={row.pro} /></td>
                        <td className="px-4 py-3 text-center"><FeatureCell value={row.team} /></td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
            <span className="flex items-center gap-1"><Check className="h-4 w-4 text-emerald-500" /> Included</span>
            <span className="flex items-center gap-1"><Minus className="h-4 w-4 text-amber-400" /> Limited</span>
            <span className="flex items-center gap-1"><X className="h-4 w-4 text-slate-300" /> Not included</span>
          </div>
        </div>
      </section>

      {/* FAQ / Objection handling */}
      <section className="border-t">
        <div className="mx-auto max-w-3xl px-4 py-16 md:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-slate-900">Common questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Can I really start for free?",
                a: "Yes. The Free plan never expires and gives you full access to all Learn modules and 5 AI queries per month. No credit card required.",
              },
              {
                q: "What happens when my trial ends?",
                a: "You'll drop to the Free tier automatically — nothing gets deleted. Upgrade again whenever you're ready.",
              },
              {
                q: "Is the Team plan per seat or a flat fee?",
                a: "It's a flat $49/month for up to 10 seats. Need more than 10? Contact us for a custom quote.",
              },
              {
                q: "Do you offer discounts for nonprofits or educators?",
                a: "Yes. Reach out via the contact page and we'll sort something out. Security education shouldn't be gated by budget.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="rounded-xl border border-slate-200 p-6">
                <p className="mb-2 font-semibold text-slate-900">{q}</p>
                <p className="text-sm leading-6 text-slate-600">{a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-blue-600 p-8 text-center text-white">
            <h3 className="mb-2 text-xl font-bold">Still not sure which plan fits?</h3>
            <p className="mb-6 text-blue-100">
              Start free — you can upgrade in under 60 seconds once you see what Pro unlocks.
            </p>
            <Link href="/sign-up">
              <Button className="bg-white font-semibold text-blue-600 hover:bg-blue-50">
                Get started for free
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
