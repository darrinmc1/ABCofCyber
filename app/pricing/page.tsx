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
    ctaHref: "/get-started",
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
    cta: "Contact Us",
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
      { label: "Beginner guides & articles", free: true, pro: true, team: true },
      { label: "Advanced deep-dive lessons", free: false, pro: true, team: true },
      { label: "Downloadable frameworks & templates", free: "3 templates", pro: "All templates", team: "All templates" },
      { label: "New content releases", free: "Delayed 30 days", pro: "Immediate", team: "Immediate" },
    ],
  },
  {
    category: "Tools & Assessments",
    features: [
      { label: "Security posture quiz", free: true, pro: true, team: true },
      { label: "AI-powered scenario tool (What's the Play)", free: "3 uses/month", pro: "Unlimited", team: "Unlimited" },
      { label: "Risk assessment generator", free: false, pro: true, team: true },
      { label: "Custom policy builder", free: false, pro: true, team: true },
      { label: "Incident response walkthrough", free: false, pro: true, team: true },
    ],
  },
  {
    category: "Dashboard & Tracking",
    features: [
      { label: "Personal progress dashboard", free: false, pro: true, team: true },
      { label: "Team member seats", free: "1", pro: "Up to 5", team: "Up to 25" },
      { label: "Team progress reporting", free: false, pro: false, team: true },
      { label: "Role-based access controls", free: false, pro: false, team: true },
    ],
  },
  {
    category: "Support",
    features: [
      { label: "Community forum access", free: true, pro: true, team: true },
      { label: "Email support", free: false, pro: true, team: true },
      { label: "Priority support", free: false, pro: false, team: true },
      { label: "Dedicated onboarding session", free: false, pro: false, team: true },
    ],
  },
]

function FeatureCell({ value }: { value: FeatureValue }) {
  if (value === true) {
    return (
      <span className="flex justify-center">
        <Check className="h-5 w-5 text-green-600" />
      </span>
    )
  }
  if (value === false) {
    return (
      <span className="flex justify-center">
        <X className="h-5 w-5 text-slate-300" />
      </span>
    )
  }
  return <span className="block text-center text-xs text-slate-600 font-medium">{value}</span>
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="container mx-auto px-4 py-16 md:px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 mb-3">Pricing</p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl mb-4">
          Simple, honest pricing
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          No hidden fees, no surprise overages. Pick the plan that fits where you are today — upgrade or downgrade any time.
        </p>
      </section>

      {/* Plan Cards */}
      <section className="container mx-auto px-4 pb-12 md:px-6">
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
                  <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-slate-900">{plan.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-sm text-slate-500 ml-1">{plan.period}</span>
                </div>
                <p className="text-sm text-slate-600 mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-end pt-4">
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
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Full feature comparison</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="text-left px-6 py-4 font-semibold text-slate-700 w-1/2">Feature</th>
                  {plans.map((plan) => (
                    <th
                      key={plan.name}
                      className={`px-4 py-4 font-semibold text-center ${
                        plan.highlight ? "text-blue-700" : "text-slate-700"
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
                    <tr key={cat.category} className="bg-slate-50 border-t border-slate-200">
                      <td
                        colSpan={4}
                        className="px-6 py-3 text-xs font-bold uppercase tracking-widest text-slate-500"
                      >
                        {cat.category}
                      </td>
                    </tr>
                    {cat.features.map((feature, i) => (
                      <tr
                        key={feature.label}
                        className={`border-t border-slate-100 ${
                          i % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                        } hover:bg-blue-50/30 transition-colors`}
                      >
                        <td className="px-6 py-3 text-slate-700">{feature.label}</td>
                        <td className="px-4 py-3">
                          <FeatureCell value={feature.free} />
                        </td>
                        <td className="px-4 py-3 bg-blue-50/40">
                          <FeatureCell value={feature.pro} />
                        </td>
                        <td className="px-4 py-3">
                          <FeatureCell value={feature.team} />
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

      {/* Bottom CTA */}
      <section className="bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 py-16 md:px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Not sure which plan is right for you?</h2>
          <p className="text-slate-600 mb-6 max-w-xl mx-auto">
            Start free and upgrade when you need more. No credit card required for the Free plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/get-started">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">Start for Free</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="px-8">Talk to Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
