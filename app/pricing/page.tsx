import Link from "next/link"
import { Check, X, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "For individuals exploring cybersecurity basics.",
    cta: "Get Started",
    ctaHref: "/sign-up",
    highlight: false,
    badge: null,
  },
  {
    name: "Pro",
    price: "$19",
    period: "per month",
    description: "For professionals who need deeper tools and guidance.",
    cta: "Start Free Trial",
    ctaHref: "/sign-up",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Team",
    price: "$49",
    period: "per month",
    description: "For small teams building a security program together.",
    cta: "Contact Sales",
    ctaHref: "/contact",
    highlight: false,
    badge: null,
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
      { label: "Core security lessons", free: true, pro: true, team: true },
      { label: "Beginner learning paths", free: true, pro: true, team: true },
      { label: "Advanced learning paths", free: false, pro: true, team: true },
      { label: "Downloadable resources & templates", free: false, pro: true, team: true },
      { label: "Framework deep-dives (NIST, ISO, CIS)", free: "Limited", pro: true, team: true },
    ],
  },
  {
    category: "Tools & Assessments",
    features: [
      { label: "Security posture self-assessment", free: true, pro: true, team: true },
      { label: "AI-powered scenario tool (What's the Play)", free: "3/month", pro: "Unlimited", team: "Unlimited" },
      { label: "Risk management toolkit", free: false, pro: true, team: true },
      { label: "Incident response plan builder", free: false, pro: true, team: true },
      { label: "Custom policy generator", free: false, pro: false, team: true },
    ],
  },
  {
    category: "Dashboard & Tracking",
    features: [
      { label: "Personal progress dashboard", free: false, pro: true, team: true },
      { label: "Completion certificates", free: false, pro: true, team: true },
      { label: "Team progress tracking", free: false, pro: false, team: true },
      { label: "Admin management console", free: false, pro: false, team: true },
    ],
  },
  {
    category: "Support",
    features: [
      { label: "Community access", free: true, pro: true, team: true },
      { label: "Email support", free: false, pro: true, team: true },
      { label: "Priority support", free: false, pro: false, team: true },
      { label: "Onboarding call", free: false, pro: false, team: true },
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
    <span className="flex justify-center text-xs font-medium text-blue-700 bg-blue-50 rounded px-2 py-0.5">
      {value}
    </span>
  )
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b bg-slate-50">
        <div className="container mx-auto px-4 py-16 md:px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 mb-3">Pricing</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            No hidden fees. No surprise add-ons. Pick the plan that fits where you are today and upgrade when you need more.
          </p>
        </div>
      </section>

      {/* Plan Cards */}
      <section className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl border p-8 flex flex-col ${
                plan.highlight
                  ? "border-blue-600 bg-blue-50 shadow-lg"
                  : "border-slate-200 bg-white"
              }`}
            >
              {plan.badge && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-3 py-1">
                  {plan.badge}
                </Badge>
              )}
              <div className="mb-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-1">{plan.name}</p>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-slate-500 text-sm mb-1">{plan.period}</span>
                </div>
                <p className="text-sm text-slate-600">{plan.description}</p>
              </div>
              <div className="mt-auto">
                <Link href={plan.ctaHref}>
                  <Button
                    className={`w-full ${
                      plan.highlight
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-slate-900 hover:bg-slate-700 text-white"
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
          <h2 className="text-2xl font-bold text-slate-900 mb-2 text-center">Compare all features</h2>
          <p className="text-slate-500 text-center mb-10 text-sm">See exactly what you get at each tier before you commit.</p>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="text-left px-6 py-4 font-semibold text-slate-700 w-1/2">Feature</th>
                  {plans.map((plan) => (
                    <th
                      key={plan.name}
                      className={`px-4 py-4 text-center font-semibold ${
                        plan.highlight ? "text-blue-700" : "text-slate-700"
                      }`}
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureCategories.map((cat, catIdx) => (
                  <>
                    <tr key={`cat-${catIdx}`} className="bg-slate-50 border-t border-slate-200">
                      <td
                        colSpan={4}
                        className="px-6 py-3 text-xs font-bold uppercase tracking-widest text-slate-500"
                      >
                        {cat.category}
                      </td>
                    </tr>
                    {cat.features.map((feature, fIdx) => (
                      <tr
                        key={`feat-${catIdx}-${fIdx}`}
                        className={`border-t border-slate-100 ${
                          fIdx % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                        }`}
                      >
                        <td className="px-6 py-3 text-slate-700">{feature.label}</td>
                        <td className="px-4 py-3 text-center">
                          <FeatureCell value={feature.free} />
                        </td>
                        <td className="px-4 py-3 text-center bg-blue-50/40">
                          <FeatureCell value={feature.pro} />
                        </td>
                        <td className="px-4 py-3 text-center">
                          <FeatureCell value={feature.team} />
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-8 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Not sure which plan is right for you?</h3>
            <p className="text-slate-600 mb-6 text-sm max-w-xl mx-auto">
              Start free and upgrade at any time. If you have questions about Team pricing or need a custom arrangement, we're happy to talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/sign-up">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">Start for free</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="px-6">Talk to us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
