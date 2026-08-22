import Link from "next/link"
import { Check, X, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with the basics of cyber hygiene.",
    cta: "Get Started",
    ctaHref: "/sign-up",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "per month",
    description: "For individuals and small teams serious about security.",
    cta: "Start Free Trial",
    ctaHref: "/sign-up",
    highlight: true,
  },
  {
    name: "Team",
    price: "$49",
    period: "per month",
    description: "Full coverage for growing organizations.",
    cta: "Contact Sales",
    ctaHref: "/contact",
    highlight: false,
  },
]

type FeatureValue = boolean | string

const featureCategories: {
  category: string
  features: { label: string; free: FeatureValue; pro: FeatureValue; team: FeatureValue }[]
}[] = [
  {
    category: "Learning & Content",
    features: [
      { label: "Core learning modules", free: true, pro: true, team: true },
      { label: "Guided learning paths", free: "3 paths", pro: "All paths", team: "All paths" },
      { label: "Downloadable resources", free: false, pro: true, team: true },
      { label: "New content each month", free: false, pro: true, team: true },
      { label: "Framework deep-dives (NIST, ISO, CIS)", free: false, pro: true, team: true },
    ],
  },
  {
    category: "Tools & Assessments",
    features: [
      { label: "Security posture quiz", free: true, pro: true, team: true },
      { label: "AI-powered scenario tool", free: "3 uses/mo", pro: "Unlimited", team: "Unlimited" },
      { label: "Risk assessment templates", free: false, pro: true, team: true },
      { label: "Incident response playbooks", free: false, pro: true, team: true },
      { label: "Custom policy generator", free: false, pro: false, team: true },
    ],
  },
  {
    category: "Team & Collaboration",
    features: [
      { label: "Team member seats", free: "1", pro: "Up to 5", team: "Unlimited" },
      { label: "Team progress dashboard", free: false, pro: false, team: true },
      { label: "Role-based access controls", free: false, pro: false, team: true },
      { label: "Shared workspace", free: false, pro: false, team: true },
    ],
  },
  {
    category: "Support & Compliance",
    features: [
      { label: "Community forum access", free: true, pro: true, team: true },
      { label: "Email support", free: false, pro: true, team: true },
      { label: "Priority support", free: false, pro: false, team: true },
      { label: "Compliance reporting exports", free: false, pro: false, team: true },
      { label: "Dedicated onboarding session", free: false, pro: false, team: true },
    ],
  },
]

function FeatureCell({ value }: { value: FeatureValue }) {
  if (value === true) {
    return (
      <span className="flex justify-center">
        <Check className="h-5 w-5 text-green-600" aria-label="Included" />
      </span>
    )
  }
  if (value === false) {
    return (
      <span className="flex justify-center">
        <X className="h-5 w-5 text-slate-300" aria-label="Not included" />
      </span>
    )
  }
  return (
    <span className="flex justify-center text-sm font-medium text-slate-700">{value}</span>
  )
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b bg-slate-50">
        <div className="container mx-auto px-4 py-16 md:px-6 text-center max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 mb-3">Pricing</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-lg leading-8 text-slate-600">
            No hidden fees. No surprise add-ons. Pick the plan that fits your team and start building real security habits today.
          </p>
        </div>
      </section>

      {/* Plan Cards */}
      <section className="container mx-auto px-4 py-14 md:px-6">
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex flex-col ${
                plan.highlight
                  ? "border-2 border-blue-600 shadow-lg"
                  : "border border-slate-200"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-slate-900">{plan.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                  <span className="ml-1 text-sm text-slate-500">/ {plan.period}</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{plan.description}</p>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 justify-end">
                <Link href={plan.ctaHref}>
                  <Button
                    className={`w-full ${
                      plan.highlight
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-slate-900 hover:bg-slate-800 text-white"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="container mx-auto px-4 pb-20 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-2 text-center">Full feature comparison</h2>
          <p className="text-slate-500 text-center mb-10 text-sm">See exactly what you get at every tier — no fine print.</p>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="py-4 px-5 text-left font-semibold text-slate-700 w-1/2">Feature</th>
                  {plans.map((plan) => (
                    <th
                      key={plan.name}
                      className={`py-4 px-4 text-center font-bold ${
                        plan.highlight ? "text-blue-700" : "text-slate-900"
                      }`}
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureCategories.map((cat) => (
                  <>
                    <tr key={cat.category} className="bg-slate-100">
                      <td
                        colSpan={4}
                        className="py-2 px-5 text-xs font-semibold uppercase tracking-widest text-slate-500"
                      >
                        {cat.category}
                      </td>
                    </tr>
                    {cat.features.map((feature, i) => (
                      <tr
                        key={feature.label}
                        className={`border-b border-slate-100 ${
                          i % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                        } hover:bg-blue-50/30 transition-colors`}
                      >
                        <td className="py-3 px-5 text-slate-700">{feature.label}</td>
                        <td className="py-3 px-4">
                          <FeatureCell value={feature.free} />
                        </td>
                        <td className="py-3 px-4 bg-blue-50/40">
                          <FeatureCell value={feature.pro} />
                        </td>
                        <td className="py-3 px-4">
                          <FeatureCell value={feature.team} />
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <div className="mt-5 flex items-center gap-6 justify-center text-xs text-slate-500">
            <span className="flex items-center gap-1"><Check className="h-4 w-4 text-green-600" /> Included</span>
            <span className="flex items-center gap-1"><X className="h-4 w-4 text-slate-300" /> Not included</span>
            <span className="flex items-center gap-1"><Minus className="h-4 w-4 text-slate-400" /> Limited</span>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t bg-slate-50">
        <div className="container mx-auto px-4 py-16 md:px-6 text-center max-w-2xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Not sure which plan is right for you?</h2>
          <p className="text-slate-600 mb-6">
            Start free — no credit card required. Upgrade whenever your team is ready.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/sign-up">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">Start for Free</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="px-8">Talk to Sales</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
