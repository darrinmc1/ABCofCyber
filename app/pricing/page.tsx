import Link from "next/link"
import { Check, X, Zap, Shield, Building2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "Starter",
    icon: Zap,
    monthlyPrice: 49,
    annualPrice: 39,
    description: "For small teams getting their security fundamentals in place.",
    badge: null,
    cta: "Start Free Trial",
    ctaHref: "/sign-up",
    features: [
      { label: "Up to 5 seats", included: true },
      { label: "Core learning modules (20+)", included: true },
      { label: "Phishing awareness training", included: true },
      { label: "Password security module", included: true },
      { label: "Progress tracking dashboard", included: true },
      { label: "Email support", included: true },
      { label: "Framework guides (NIST, CIS)", included: false },
      { label: "Custom policy templates", included: false },
      { label: "Team risk assessments", included: false },
      { label: "Dedicated success manager", included: false },
      { label: "SSO / SAML integration", included: false },
      { label: "API access", included: false },
    ],
  },
  {
    name: "Professional",
    icon: Shield,
    monthlyPrice: 129,
    annualPrice: 99,
    description: "For growing teams that need structured programs and compliance coverage.",
    badge: "Most Popular",
    cta: "Start Free Trial",
    ctaHref: "/sign-up",
    features: [
      { label: "Up to 25 seats", included: true },
      { label: "Full learning library (60+ modules)", included: true },
      { label: "Phishing awareness training", included: true },
      { label: "Password security module", included: true },
      { label: "Progress tracking dashboard", included: true },
      { label: "Priority email & chat support", included: true },
      { label: "Framework guides (NIST, CIS, ISO 27001)", included: true },
      { label: "Custom policy templates", included: true },
      { label: "Team risk assessments", included: true },
      { label: "Dedicated success manager", included: false },
      { label: "SSO / SAML integration", included: false },
      { label: "API access", included: false },
    ],
  },
  {
    name: "Enterprise",
    icon: Building2,
    monthlyPrice: null,
    annualPrice: null,
    description: "For organizations that need custom programs, compliance reporting, and white-glove support.",
    badge: null,
    cta: "Talk to Sales",
    ctaHref: "/contact",
    features: [
      { label: "Unlimited seats", included: true },
      { label: "Full learning library (60+ modules)", included: true },
      { label: "Phishing awareness training", included: true },
      { label: "Password security module", included: true },
      { label: "Progress tracking dashboard", included: true },
      { label: "24/7 priority support", included: true },
      { label: "All framework guides + custom content", included: true },
      { label: "Custom policy templates", included: true },
      { label: "Team risk assessments", included: true },
      { label: "Dedicated success manager", included: true },
      { label: "SSO / SAML integration", included: true },
      { label: "API access", included: true },
    ],
  },
]

const faqs = [
  {
    q: "Can I switch plans later?",
    a: "Yes. You can upgrade or downgrade at any time. Upgrades take effect immediately; downgrades apply at the next billing cycle.",
  },
  {
    q: "What counts as a seat?",
    a: "A seat is one active user account. Admins count toward your seat limit. You can deactivate users to free up seats at any time.",
  },
  {
    q: "Is there a free trial?",
    a: "Starter and Professional plans include a 14-day free trial — no credit card required. Enterprise trials are available on request.",
  },
  {
    q: "How does the annual discount work?",
    a: "Paying annually saves you roughly 20% compared to monthly billing. The discount is applied automatically at checkout when you select annual billing.",
  },
  {
    q: "Do you offer nonprofit or education pricing?",
    a: "Yes. Contact us at the link below and we'll work out a rate that makes sense for your organization.",
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
          <p className="text-lg leading-8 text-slate-600 max-w-2xl mx-auto mb-6">
            No hidden fees. No surprise overages. Pick the plan that fits your team today — and grow into the next one when you're ready.
          </p>
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 text-sm text-blue-800 font-medium">
            <Zap className="h-4 w-4" />
            Save up to 20% with annual billing
          </div>
        </div>
      </section>

      {/* Plan Cards */}
      <section className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {plans.map((plan) => {
            const Icon = plan.icon
            const isPro = plan.badge === "Most Popular"
            return (
              <Card
                key={plan.name}
                className={`relative flex flex-col ${
                  isPro
                    ? "border-blue-600 shadow-lg ring-2 ring-blue-600"
                    : "border-slate-200"
                }`}
              >
                {isPro && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-3 py-1 text-xs font-semibold">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg ${ isPro ? "bg-blue-100" : "bg-slate-100" }`}>
                      <Icon className={`h-5 w-5 ${ isPro ? "text-blue-700" : "text-slate-700" }`} />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900">{plan.name}</CardTitle>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{plan.description}</p>
                  <div className="mt-4">
                    {plan.annualPrice !== null ? (
                      <div>
                        <div className="flex items-end gap-1">
                          <span className="text-4xl font-bold text-slate-900">${plan.annualPrice}</span>
                          <span className="text-slate-500 text-sm mb-1">/mo billed annually</span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1">${plan.monthlyPrice}/mo billed monthly</p>
                      </div>
                    ) : (
                      <div>
                        <span className="text-3xl font-bold text-slate-900">Custom pricing</span>
                        <p className="text-xs text-slate-400 mt-1">Volume discounts available</p>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <Link href={plan.ctaHref}>
                    <Button
                      className={`w-full mb-6 ${
                        isPro
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : "bg-slate-900 hover:bg-slate-800 text-white"
                      }`}
                    >
                      {plan.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <ul className="space-y-3 flex-1">
                    {plan.features.map((f) => (
                      <li key={f.label} className="flex items-start gap-3 text-sm">
                        {f.included ? (
                          <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        ) : (
                          <X className="h-4 w-4 text-slate-300 mt-0.5 shrink-0" />
                        )}
                        <span className={f.included ? "text-slate-700" : "text-slate-400"}>
                          {f.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* ROI callout */}
      <section className="bg-slate-50 border-y">
        <div className="container mx-auto px-4 py-14 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-2 text-center">What does a breach actually cost?</h2>
            <p className="text-slate-600 text-center mb-10 max-w-2xl mx-auto">
              The average cost of a data breach for a small business is <strong>$4.45M</strong> (IBM, 2023). A Professional plan at $99/seat/month for a 10-person team is <strong>$11,880/year</strong> — roughly 0.27% of that exposure.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
                <p className="text-3xl font-bold text-blue-700 mb-1">95%</p>
                <p className="text-sm text-slate-600">of breaches involve human error — the exact thing security training addresses</p>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
                <p className="text-3xl font-bold text-blue-700 mb-1">14 days</p>
                <p className="text-sm text-slate-600">free trial on Starter and Professional — see results before you commit</p>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
                <p className="text-3xl font-bold text-blue-700 mb-1">20%</p>
                <p className="text-sm text-slate-600">saved when you choose annual billing over monthly on any paid plan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-16 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Frequently asked questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-slate-100 pb-6">
                <p className="font-semibold text-slate-900 mb-2">{faq.q}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA footer */}
      <section className="bg-blue-600">
        <div className="container mx-auto px-4 py-14 md:px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Not sure which plan is right for you?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Talk to us. We'll ask a few questions about your team size, compliance requirements, and goals — and point you to the right fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8">
                Talk to Sales
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button className="bg-blue-500 hover:bg-blue-400 text-white border border-blue-400 font-semibold px-8">
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
