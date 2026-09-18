import Link from "next/link"
import { Check, X, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with the fundamentals of cyber hygiene.",
    cta: "Get Started",
    ctaHref: "/sign-up",
    highlight: false,
    badge: null,
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "For individuals and small teams serious about security.",
    cta: "Start Free Trial",
    ctaHref: "/sign-up",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Team",
    price: "$99",
    period: "per month",
    description: "Full-featured security program for growing organizations.",
    cta: "Contact Sales",
    ctaHref: "/contact",
    highlight: false,
    badge: null,
  },
]

const featureGroups = [
  {
    group: "Learning & Content",
    features: [
      { label: "Core security lessons", free: true, pro: true, team: true },
      { label: "Phishing awareness training", free: true, pro: true, team: true },
      { label: "Advanced framework guides (NIST, ISO 27001, CIS)", free: false, pro: true, team: true },
      { label: "Downloadable policy templates", free: false, pro: true, team: true },
      { label: "Custom learning paths", free: false, pro: false, team: true },
    ],
  },
  {
    group: "Tools & Assessments",
    features: [
      { label: "Security posture self-assessment", free: true, pro: true, team: true },
      { label: "AI-powered security walkthrough", free: "3 uses", pro: true, team: true },
      { label: "Risk scoring dashboard", free: false, pro: true, team: true },
      { label: "Incident response plan builder", free: false, pro: true, team: true },
      { label: "Team risk reporting", free: false, pro: false, team: true },
    ],
  },
  {
    group: "Support & Collaboration",
    features: [
      { label: "Community access", free: true, pro: true, team: true },
      { label: "Email support", free: false, pro: true, team: true },
      { label: "Priority support", free: false, pro: false, team: true },
      { label: "Dedicated security advisor", free: false, pro: false, team: true },
      { label: "Team member seats", free: "1", pro: "3", team: "Unlimited" },
    ],
  },
]

function FeatureValue({ value }: { value: boolean | string }) {
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
    <span className="flex justify-center text-sm font-medium text-blue-700">{value}</span>
  )
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b bg-slate-50">
        <div className="container mx-auto px-4 py-16 md:px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 mb-4">Pricing</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            No hidden fees, no confusing bundles. Pick the plan that fits where you are today — and upgrade when you're ready to go further.
          </p>
        </div>
      </section>

      {/* Plan Cards */}
      <section className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                plan.highlight
                  ? "border-blue-600 shadow-lg bg-blue-50"
                  : "border-slate-200 bg-white"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white px-3 py-1 text-xs font-semibold">
                    {plan.badge}
                  </Badge>
                </div>
              )}
              <div className="mb-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-2">{plan.name}</p>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-slate-500 mb-1 text-sm">/{plan.period}</span>
                </div>
                <p className="text-sm text-slate-600">{plan.description}</p>
              </div>
              <div className="mt-auto">
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
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="container mx-auto px-4 pb-20 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Compare all features</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="text-left px-6 py-4 font-semibold text-slate-700 w-1/2">Feature</th>
                  {plans.map((plan) => (
                    <th
                      key={plan.name}
                      className={`px-6 py-4 text-center font-semibold ${
                        plan.highlight ? "text-blue-700" : "text-slate-700"
                      }`}
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureGroups.map((group, gi) => (
                  <>
                    <tr key={`group-${gi}`} className="bg-slate-50 border-t border-slate-200">
                      <td
                        colSpan={4}
                        className="px-6 py-3 text-xs font-bold uppercase tracking-widest text-slate-500"
                      >
                        {group.group}
                      </td>
                    </tr>
                    {group.features.map((feature, fi) => (
                      <tr
                        key={`feature-${gi}-${fi}`}
                        className="border-t border-slate-100 hover:bg-slate-50 transition-colors"
                      >
                        <td className="px-6 py-4 text-slate-700">{feature.label}</td>
                        <td className="px-6 py-4">
                          <FeatureValue value={feature.free} />
                        </td>
                        <td className="px-6 py-4 bg-blue-50/40">
                          <FeatureValue value={feature.pro} />
                        </td>
                        <td className="px-6 py-4">
                          <FeatureValue value={feature.team} />
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ / CTA */}
      <section className="border-t bg-slate-50">
        <div className="container mx-auto px-4 py-16 md:px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Not sure which plan is right for you?</h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Start free and upgrade at any time. If you have questions about what's included or need a custom quote for a larger team, we're happy to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sign-up">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">Start for free</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="px-8">Talk to sales</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
