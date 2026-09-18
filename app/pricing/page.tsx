import Link from "next/link"
import { Check, X, ArrowRight, Shield, Zap, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "Starter",
    icon: Shield,
    badge: null,
    price: "Free",
    period: "",
    description: "For individuals and small teams just getting started with cybersecurity fundamentals.",
    cta: "Get Started Free",
    ctaHref: "/sign-up",
    ctaVariant: "outline" as const,
    highlight: false,
    features: [
      { label: "Access to all Learn modules", included: true },
      { label: "Phishing awareness lessons", included: true },
      { label: "Password security guides", included: true },
      { label: "Community framework library", included: true },
      { label: "Basic security tools", included: true },
      { label: "AI-powered security walkthrough", included: false },
      { label: "Downloadable policy templates", included: false },
      { label: "Team progress dashboard", included: false },
      { label: "Priority support", included: false },
      { label: "Custom framework mapping", included: false },
    ],
  },
  {
    name: "Pro",
    icon: Zap,
    badge: "Most Popular",
    price: "$29",
    period: "/month",
    description: "For growing teams that need structured programs, templates, and guided walkthroughs.",
    cta: "Start Pro Trial",
    ctaHref: "/sign-up",
    ctaVariant: "default" as const,
    highlight: true,
    features: [
      { label: "Everything in Starter", included: true },
      { label: "AI-powered security walkthrough", included: true },
      { label: "Downloadable policy templates", included: true },
      { label: "Team progress dashboard", included: true },
      { label: "Full framework guides (NIST, ISO, CIS)", included: true },
      { label: "Incident response plan builder", included: true },
      { label: "Priority support", included: false },
      { label: "Custom framework mapping", included: false },
      { label: "Dedicated onboarding session", included: false },
      { label: "SLA-backed uptime guarantee", included: false },
    ],
  },
  {
    name: "Enterprise",
    icon: Building2,
    badge: null,
    price: "Custom",
    period: "",
    description: "For organizations that need tailored programs, compliance mapping, and dedicated support.",
    cta: "Contact Sales",
    ctaHref: "/contact",
    ctaVariant: "outline" as const,
    highlight: false,
    features: [
      { label: "Everything in Pro", included: true },
      { label: "Priority support", included: true },
      { label: "Custom framework mapping", included: true },
      { label: "Dedicated onboarding session", included: true },
      { label: "SLA-backed uptime guarantee", included: true },
      { label: "SSO & advanced access controls", included: true },
      { label: "Compliance audit exports", included: true },
      { label: "Custom integrations", included: true },
      { label: "Quarterly security reviews", included: true },
      { label: "Volume seat licensing", included: true },
    ],
  },
]

const comparisonRows = [
  { category: "Learning & Content", feature: "Core cybersecurity lessons", starter: true, pro: true, enterprise: true },
  { category: "Learning & Content", feature: "Advanced framework deep-dives", starter: false, pro: true, enterprise: true },
  { category: "Learning & Content", feature: "Downloadable policy templates", starter: false, pro: true, enterprise: true },
  { category: "Tools", feature: "Basic security tools", starter: true, pro: true, enterprise: true },
  { category: "Tools", feature: "AI-powered security walkthrough", starter: false, pro: true, enterprise: true },
  { category: "Tools", feature: "Incident response plan builder", starter: false, pro: true, enterprise: true },
  { category: "Team", feature: "Team progress dashboard", starter: false, pro: true, enterprise: true },
  { category: "Team", feature: "Volume seat licensing", starter: false, pro: false, enterprise: true },
  { category: "Team", feature: "SSO & advanced access controls", starter: false, pro: false, enterprise: true },
  { category: "Support", feature: "Community support", starter: true, pro: true, enterprise: true },
  { category: "Support", feature: "Priority email support", starter: false, pro: false, enterprise: true },
  { category: "Support", feature: "Dedicated onboarding session", starter: false, pro: false, enterprise: true },
  { category: "Compliance", feature: "NIST / ISO / CIS framework guides", starter: false, pro: true, enterprise: true },
  { category: "Compliance", feature: "Custom framework mapping", starter: false, pro: false, enterprise: true },
  { category: "Compliance", feature: "Compliance audit exports", starter: false, pro: false, enterprise: true },
]

const faqs = [
  {
    q: "Can I switch plans at any time?",
    a: "Yes. You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    q: "Is there a free trial for Pro?",
    a: "Pro includes a 14-day free trial with no credit card required. You get full access to every Pro feature during the trial period.",
  },
  {
    q: "What counts as a team seat?",
    a: "Each unique user account with login access counts as one seat. Enterprise plans include volume pricing for larger teams.",
  },
  {
    q: "Do you offer discounts for nonprofits or education?",
    a: "Yes. Contact us through the sales page and we will work out a plan that fits your organization's budget and needs.",
  },
]

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
          <p className="text-lg leading-8 text-slate-600 max-w-2xl mx-auto">
            No hidden fees, no surprise invoices. Pick the plan that fits your team and start building a security program that actually works.
          </p>
        </div>
      </section>

      {/* Plan Cards */}
      <section className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {plans.map((plan) => {
            const Icon = plan.icon
            return (
              <Card
                key={plan.name}
                className={`relative flex flex-col ${
                  plan.highlight
                    ? "border-blue-600 shadow-lg ring-2 ring-blue-600"
                    : "border-slate-200"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-3 py-1">{plan.badge}</Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg ${
                      plan.highlight ? "bg-blue-100" : "bg-slate-100"
                    }`}>
                      <Icon className={`h-5 w-5 ${
                        plan.highlight ? "text-blue-700" : "text-slate-700"
                      }`} />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900">{plan.name}</CardTitle>
                  </div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    {plan.period && (
                      <span className="text-slate-500 text-sm">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{plan.description}</p>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f.label} className="flex items-start gap-3">
                        {f.included ? (
                          <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        ) : (
                          <X className="h-4 w-4 text-slate-300 mt-0.5 shrink-0" />
                        )}
                        <span className={`text-sm ${
                          f.included ? "text-slate-700" : "text-slate-400"
                        }`}>{f.label}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={plan.ctaHref}>
                    <Button
                      variant={plan.ctaVariant}
                      className={`w-full ${
                        plan.highlight
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : ""
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="border-t bg-slate-50">
        <div className="container mx-auto px-4 py-16 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-2 text-center">Full feature comparison</h2>
            <p className="text-slate-600 text-center mb-10">See exactly what is included in each plan before you commit.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-4 pr-6 font-semibold text-slate-700 w-1/2">Feature</th>
                    <th className="text-center py-4 px-4 font-semibold text-slate-700">Starter</th>
                    <th className="text-center py-4 px-4 font-semibold text-blue-700">Pro</th>
                    <th className="text-center py-4 px-4 font-semibold text-slate-700">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {(() => {
                    let lastCategory = ""
                    return comparisonRows.map((row) => {
                      const showCategory = row.category !== lastCategory
                      lastCategory = row.category
                      return (
                        <>
                          {showCategory && (
                            <tr key={`cat-${row.category}`}>
                              <td colSpan={4} className="pt-6 pb-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
                                {row.category}
                              </td>
                            </tr>
                          )}
                          <tr key={row.feature} className="border-b border-slate-100 hover:bg-white transition-colors">
                            <td className="py-3 pr-6 text-slate-700">{row.feature}</td>
                            <td className="py-3 px-4 text-center">
                              {row.starter ? (
                                <Check className="h-4 w-4 text-green-600 mx-auto" />
                              ) : (
                                <X className="h-4 w-4 text-slate-300 mx-auto" />
                              )}
                            </td>
                            <td className="py-3 px-4 text-center bg-blue-50/40">
                              {row.pro ? (
                                <Check className="h-4 w-4 text-green-600 mx-auto" />
                              ) : (
                                <X className="h-4 w-4 text-slate-300 mx-auto" />
                              )}
                            </td>
                            <td className="py-3 px-4 text-center">
                              {row.enterprise ? (
                                <Check className="h-4 w-4 text-green-600 mx-auto" />
                              ) : (
                                <X className="h-4 w-4 text-slate-300 mx-auto" />
                              )}
                            </td>
                          </tr>
                        </>
                      )
                    })
                  })()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-16 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-2 text-center">Frequently asked questions</h2>
          <p className="text-slate-600 text-center mb-10">Still have questions? Reach out and we will get back to you the same day.</p>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <Card key={faq.q} className="border-slate-200">
                <CardContent className="pt-6">
                  <p className="font-semibold text-slate-900 mb-2">{faq.q}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t bg-slate-50">
        <div className="container mx-auto px-4 py-16 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Not sure which plan is right for you?</h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Start free and upgrade when you are ready. Our team is happy to walk you through the options and find the best fit for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sign-up">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                Start for free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="px-8">
                Talk to sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
