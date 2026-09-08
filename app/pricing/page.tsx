import Link from "next/link"
import { Check, X, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with the fundamentals. No credit card required.",
    cta: "Get Started Free",
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
    description: "For growing organizations that need shared progress, reporting, and accountability.",
    cta: "Start Team Trial",
    ctaHref: "/sign-up?plan=team",
    highlight: false,
    badge: null,
  },
]

type FeatureValue = boolean | string

const featureGroups: { group: string; features: { label: string; free: FeatureValue; pro: FeatureValue; team: FeatureValue; note?: string }[] }[] = [
  {
    group: "Core Learning",
    features: [
      { label: "Access to all learning modules", free: true, pro: true, team: true },
      { label: "Phishing awareness training", free: true, pro: true, team: true },
      { label: "Password security module", free: true, pro: true, team: true },
      { label: "Social engineering module", free: false, pro: true, team: true },
      { label: "Advanced anonymity & OSINT modules", free: false, pro: true, team: true },
      { label: "Zero-trust architecture guide", free: false, pro: true, team: true },
    ],
  },
  {
    group: "Tools & Frameworks",
    features: [
      { label: "Security framework overviews (NIST, ISO, CIS)", free: true, pro: true, team: true },
      { label: "Interactive security tools", free: "3 tools", pro: "All tools", team: "All tools" },
      { label: "Incident response plan builder", free: false, pro: true, team: true },
      { label: "Risk management templates", free: false, pro: true, team: true },
      { label: "Downloadable policy templates", free: false, pro: true, team: true },
    ],
  },
  {
    group: "AI & Personalization",
    features: [
      { label: "AI security walkthrough assistant", free: "5 queries/mo", pro: "Unlimited", team: "Unlimited" },
      { label: "Personalized learning path", free: false, pro: true, team: true },
      { label: "Progress tracking & dashboard", free: false, pro: true, team: true },
    ],
  },
  {
    group: "Team & Reporting",
    features: [
      { label: "Team member seats", free: "1", pro: "1", team: "Up to 25" },
      { label: "Team progress dashboard", free: false, pro: false, team: true },
      { label: "Compliance-ready reports", free: false, pro: false, team: true },
      { label: "Role-based access controls", free: false, pro: false, team: true },
      { label: "Shared security policy workspace", free: false, pro: false, team: true },
    ],
  },
  {
    group: "Support",
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
        <Check className="h-5 w-5 text-emerald-500" aria-label="Included" />
      </span>
    )
  }
  if (value === false) {
    return (
      <span className="flex justify-center">
        <X className="h-4 w-4 text-slate-300" aria-label="Not included" />
      </span>
    )
  }
  return (
    <span className="flex justify-center text-xs font-medium text-slate-600 text-center leading-tight">
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
            Simple, honest pricing
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            No surprise add-ons. No enterprise-only features hidden behind a sales call. Pick the plan that fits where you are today.
          </p>
        </div>
      </section>

      {/* Tier Cards */}
      <section className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`relative flex flex-col ${
                tier.highlight
                  ? "border-2 border-blue-600 shadow-lg"
                  : "border border-slate-200"
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {tier.badge}
                  </span>
                </div>
              )}
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-slate-900">{tier.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-4xl font-bold text-slate-900">{tier.price}</span>
                  <span className="text-sm text-slate-500 ml-1">{tier.period}</span>
                </div>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{tier.description}</p>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 justify-end">
                <Link href={tier.ctaHref}>
                  <Button
                    className={`w-full ${
                      tier.highlight
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-slate-900 hover:bg-slate-800 text-white"
                    }`}
                  >
                    {tier.cta}
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
          <p className="text-slate-500 text-center mb-8 text-sm">See exactly what you get at each level — no asterisks, no fine print.</p>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="text-left px-5 py-4 font-semibold text-slate-700 w-1/2">Feature</th>
                  {tiers.map((tier) => (
                    <th
                      key={tier.name}
                      className={`px-4 py-4 text-center font-bold ${
                        tier.highlight ? "text-blue-700" : "text-slate-900"
                      }`}
                    >
                      {tier.name}
                      <div className={`text-xs font-normal mt-0.5 ${
                        tier.highlight ? "text-blue-500" : "text-slate-400"
                      }`}>
                        {tier.price}/{tier.period === "forever" ? "free" : "mo"}
                      </div>
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
                        className="px-5 py-2 text-xs font-semibold uppercase tracking-widest text-slate-500"
                      >
                        {group.group}
                      </td>
                    </tr>
                    {group.features.map((feature, fi) => (
                      <tr
                        key={`feature-${gi}-${fi}`}
                        className={`border-t border-slate-100 ${
                          fi % 2 === 0 ? "bg-white" : "bg-slate-50/40"
                        } hover:bg-blue-50/30 transition-colors`}
                      >
                        <td className="px-5 py-3 text-slate-700">{feature.label}</td>
                        <td className="px-4 py-3 text-center">
                          <FeatureCell value={feature.free} />
                        </td>
                        <td className="px-4 py-3 text-center bg-blue-50/20">
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

      {/* Value Props */}
      <section className="border-t bg-slate-50">
        <div className="container mx-auto px-4 py-16 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Why teams choose ABC of Cyber</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border border-slate-200">
                <CardHeader>
                  <CardTitle className="text-base font-bold text-slate-900">No fluff, no filler</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Every module is built around what actually reduces risk — not what sounds impressive in a vendor deck or satisfies a checkbox audit.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-slate-200">
                <CardHeader>
                  <CardTitle className="text-base font-bold text-slate-900">Cancel any time</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    No annual lock-ins, no cancellation fees, no awkward calls with a retention specialist. If it stops working for you, cancel in two clicks.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-slate-200">
                <CardHeader>
                  <CardTitle className="text-base font-bold text-slate-900">Built for real teams</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Security works when the whole team understands it. Team plans give everyone a shared baseline without requiring a dedicated security hire.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / CTA */}
      <section className="container mx-auto px-4 py-16 md:px-6 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-3">Still not sure which plan fits?</h2>
        <p className="text-slate-600 mb-6 max-w-xl mx-auto">
          Start free — no credit card required. You can upgrade, downgrade, or cancel at any time from your dashboard.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/sign-up">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">Start for free</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="px-8">Talk to us</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
