import Link from "next/link"
import { Check, X, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with the fundamentals. No credit card required.",
    cta: "Start Free",
    ctaHref: "/sign-up",
    highlight: false,
    badge: null,
  },
  {
    name: "Pro",
    price: "$19",
    period: "per month",
    description: "For individuals and small teams serious about building real security habits.",
    cta: "Start Pro Trial",
    ctaHref: "/sign-up?plan=pro",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Team",
    price: "$49",
    period: "per month",
    description: "For growing organizations that need shared visibility and team-wide coverage.",
    cta: "Start Team Trial",
    ctaHref: "/sign-up?plan=team",
    highlight: false,
    badge: null,
  },
]

type FeatureValue = boolean | string

const featureCategories: { category: string; features: { label: string; free: FeatureValue; pro: FeatureValue; team: FeatureValue; tooltip?: string }[] }[] = [
  {
    category: "Core Learning",
    features: [
      { label: "Cybersecurity fundamentals modules", free: true, pro: true, team: true },
      { label: "Phishing awareness training", free: true, pro: true, team: true },
      { label: "Password security guides", free: true, pro: true, team: true },
      { label: "Advanced threat modules", free: false, pro: true, team: true },
      { label: "Zero-trust architecture deep dives", free: false, pro: true, team: true },
      { label: "New content releases", free: "Monthly", pro: "Weekly", team: "Weekly" },
    ],
  },
  {
    category: "Frameworks & Tools",
    features: [
      { label: "NIST CSF framework guide", free: true, pro: true, team: true },
      { label: "CIS Controls reference", free: true, pro: true, team: true },
      { label: "ISO 27001 & risk management guides", free: false, pro: true, team: true },
      { label: "Interactive security tools", free: "2 tools", pro: "All tools", team: "All tools" },
      { label: "Downloadable templates & checklists", free: false, pro: true, team: true },
      { label: "Custom framework builder", free: false, pro: false, team: true },
    ],
  },
  {
    category: "Assessment & Reporting",
    features: [
      { label: "Security posture self-assessment", free: true, pro: true, team: true },
      { label: "Personal progress dashboard", free: false, pro: true, team: true },
      { label: "Incident response plan generator", free: false, pro: true, team: true },
      { label: "Team progress dashboard", free: false, pro: false, team: true },
      { label: "Exportable PDF reports", free: false, pro: true, team: true },
      { label: "Executive summary reports", free: false, pro: false, team: true },
    ],
  },
  {
    category: "Support & Collaboration",
    features: [
      { label: "Community forum access", free: true, pro: true, team: true },
      { label: "Email support", free: false, pro: true, team: true },
      { label: "Priority support", free: false, pro: false, team: true },
      { label: "Team member seats", free: "1", pro: "1", team: "Up to 25" },
      { label: "Shared team workspace", free: false, pro: false, team: true },
      { label: "Dedicated onboarding call", free: false, pro: false, team: true },
    ],
  },
]

function FeatureCell({ value }: { value: FeatureValue }) {
  if (value === true) {
    return <Check className="h-5 w-5 text-green-600 mx-auto" aria-label="Included" />
  }
  if (value === false) {
    return <X className="h-5 w-5 text-slate-300 mx-auto" aria-label="Not included" />
  }
  return <span className="text-sm font-medium text-slate-700">{value}</span>
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
        <p className="text-lg leading-8 text-slate-600 max-w-2xl mx-auto">
          No surprise add-ons. No "call us for pricing" runaround. Pick the plan that fits where you are today — upgrade when you need more.
        </p>
      </section>

      {/* Plan Cards */}
      <section className="container mx-auto px-4 pb-12 md:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex flex-col ${
                plan.highlight
                  ? "border-2 border-blue-600 shadow-lg"
                  : "border border-slate-200"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-slate-900">{plan.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-sm text-slate-500 ml-1">{plan.period}</span>
                </div>
                <p className="text-sm text-slate-600 mt-2">{plan.description}</p>
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
          <p className="text-slate-500 text-center mb-8 text-sm">See exactly what you get at each tier — no asterisks, no fine print.</p>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="text-left px-6 py-4 font-semibold text-slate-700 w-1/2">Feature</th>
                  {plans.map((plan) => (
                    <th
                      key={plan.name}
                      className={`text-center px-4 py-4 font-bold ${
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
                        className="px-6 py-2 text-xs font-semibold uppercase tracking-widest text-slate-500"
                      >
                        {cat.category}
                      </td>
                    </tr>
                    {cat.features.map((feature, i) => (
                      <tr
                        key={feature.label}
                        className={`border-b border-slate-100 ${
                          i % 2 === 0 ? "bg-white" : "bg-slate-50/50"
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
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 py-16 md:px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Not sure which plan is right for you?</h2>
          <p className="text-slate-600 mb-6 max-w-xl mx-auto">
            Start free and upgrade when you need more. Every paid plan includes a 14-day free trial — no credit card required to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/sign-up">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">Get started free</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="px-8">Talk to us</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
