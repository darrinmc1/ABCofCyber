import Link from "next/link"
import { Check, X, Zap, Shield, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: "Free",
    period: "",
    description: "For individuals and small teams just getting started with cybersecurity fundamentals.",
    cta: "Get Started Free",
    ctaHref: "/sign-up",
    highlight: false,
    badge: null,
    features: [
      { label: "Access to ABC of Cyber learning modules", included: true },
      { label: "Phishing awareness basics", included: true },
      { label: "Password security guide", included: true },
      { label: "Community blog & resources", included: true },
      { label: "Security framework overviews", included: true },
      { label: "AI-powered security walkthrough", included: false },
      { label: "Downloadable policy templates", included: false },
      { label: "Incident response playbooks", included: false },
      { label: "Priority support", included: false },
      { label: "Team progress dashboard", included: false },
    ],
  },
  {
    name: "Pro",
    icon: Shield,
    price: "$29",
    period: "/ month",
    description: "For growing teams that need structured security programs and hands-on tools.",
    cta: "Start Pro Trial",
    ctaHref: "/sign-up",
    highlight: true,
    badge: "Most Popular",
    features: [
      { label: "Everything in Starter", included: true },
      { label: "AI-powered security walkthrough", included: true },
      { label: "Downloadable policy templates", included: true },
      { label: "Incident response playbooks", included: true },
      { label: "Full framework deep-dives (NIST, ISO, CIS)", included: true },
      { label: "Security tools & assessments", included: true },
      { label: "Team progress dashboard", included: true },
      { label: "Email support (48h response)", included: true },
      { label: "Dedicated account manager", included: false },
      { label: "Custom security program build-out", included: false },
    ],
  },
  {
    name: "Enterprise",
    icon: Building2,
    price: "Custom",
    period: "",
    description: "For organizations that need a fully tailored security program with expert guidance.",
    cta: "Contact Us",
    ctaHref: "/contact",
    highlight: false,
    badge: null,
    features: [
      { label: "Everything in Pro", included: true },
      { label: "Dedicated account manager", included: true },
      { label: "Custom security program build-out", included: true },
      { label: "On-demand expert consultations", included: true },
      { label: "Custom policy & procedure authoring", included: true },
      { label: "Compliance gap analysis (SOC 2, ISO 27001)", included: true },
      { label: "Priority support (4h response)", included: true },
      { label: "Team onboarding & training sessions", included: true },
      { label: "SSO & advanced access controls", included: true },
      { label: "SLA guarantee", included: true },
    ],
  },
]

const faqs = [
  {
    q: "Can I upgrade or downgrade at any time?",
    a: "Yes. You can change your plan at any time from your account dashboard. Changes take effect at the start of your next billing cycle.",
  },
  {
    q: "Is there a free trial for Pro?",
    a: "Pro includes a 14-day free trial with no credit card required. You get full access to every Pro feature during the trial period.",
  },
  {
    q: "What counts as a team member?",
    a: "Any user with a login to your organization's ABC of Cyber workspace counts as a team member. You can add or remove members at any time.",
  },
  {
    q: "Do you offer discounts for nonprofits or education?",
    a: "Yes. Reach out via our contact page and we will work out a plan that fits your budget and mission.",
  },
]

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
            No hidden fees, no confusing tiers. Pick the plan that matches where your security program is today and upgrade when you are ready.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => {
            const Icon = plan.icon
            return (
              <Card
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border ${
                  plan.highlight
                    ? "border-blue-600 shadow-xl ring-2 ring-blue-600"
                    : "border-slate-200 shadow-sm"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-blue-600 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white shadow">
                      {plan.badge}
                    </span>
                  </div>
                )}
                <CardHeader className="pb-4 pt-8">
                  <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl ${
                    plan.highlight ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-700"
                  }`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">{plan.name}</CardTitle>
                  <div className="mt-2 flex items-end gap-1">
                    <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                    {plan.period && (
                      <span className="mb-1 text-sm text-slate-500">{plan.period}</span>
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{plan.description}</p>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-6">
                  <ul className="space-y-3">
                    {plan.features.map((f) => (
                      <li key={f.label} className="flex items-start gap-3">
                        {f.included ? (
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                        ) : (
                          <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-300" />
                        )}
                        <span className={`text-sm ${
                          f.included ? "text-slate-700" : "text-slate-400"
                        }`}>
                          {f.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Button
                      asChild
                      className={`w-full rounded-xl font-semibold ${
                        plan.highlight
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "bg-slate-900 text-white hover:bg-slate-700"
                      }`}
                    >
                      <a href={plan.ctaHref}>{plan.cta}</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Feature Comparison Row Table */}
      <section className="container mx-auto px-4 pb-16 md:px-6">
        <div className="rounded-2xl border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
            <h2 className="text-lg font-bold text-slate-900">Full feature comparison</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="px-6 py-3 text-left font-semibold text-slate-700 w-1/2">Feature</th>
                  <th className="px-4 py-3 text-center font-semibold text-slate-700">Starter</th>
                  <th className="px-4 py-3 text-center font-semibold text-blue-700 bg-blue-50">Pro</th>
                  <th className="px-4 py-3 text-center font-semibold text-slate-700">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Learning modules", true, true, true],
                  ["Blog & community resources", true, true, true],
                  ["Framework overviews", true, true, true],
                  ["AI security walkthrough", false, true, true],
                  ["Policy & procedure templates", false, true, true],
                  ["Incident response playbooks", false, true, true],
                  ["Security tools & assessments", false, true, true],
                  ["Team progress dashboard", false, true, true],
                  ["Email support", false, true, true],
                  ["Dedicated account manager", false, false, true],
                  ["Custom program build-out", false, false, true],
                  ["Compliance gap analysis", false, false, true],
                  ["Priority SLA support", false, false, true],
                ].map(([label, starter, pro, enterprise], i) => (
                  <tr key={String(label)} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-6 py-3 text-slate-700 font-medium">{label}</td>
                    <td className="px-4 py-3 text-center">
                      {starter ? <Check className="h-4 w-4 text-blue-600 mx-auto" /> : <X className="h-4 w-4 text-slate-300 mx-auto" />}
                    </td>
                    <td className="px-4 py-3 text-center bg-blue-50">
                      {pro ? <Check className="h-4 w-4 text-blue-600 mx-auto" /> : <X className="h-4 w-4 text-slate-300 mx-auto" />}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {enterprise ? <Check className="h-4 w-4 text-blue-600 mx-auto" /> : <X className="h-4 w-4 text-slate-300 mx-auto" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 py-16 md:px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Frequently asked questions</h2>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {faqs.map((faq) => (
              <Card key={faq.q} className="rounded-xl border border-slate-200 bg-white shadow-sm">
                <CardContent className="p-6">
                  <p className="font-semibold text-slate-900 mb-2">{faq.q}</p>
                  <p className="text-sm text-slate-600 leading-6">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container mx-auto px-4 py-16 md:px-6 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-3">Not sure which plan is right for you?</h2>
        <p className="text-slate-600 mb-8 max-w-xl mx-auto">
          Talk to us. We will help you figure out exactly what your team needs without overselling you on features you will never use.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="rounded-xl bg-blue-600 text-white hover:bg-blue-700 font-semibold px-8">
            <a href="/sign-up">Start for free</a>
          </Button>
          <Button asChild variant="outline" className="rounded-xl border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold px-8">
            <a href="/contact">Talk to us</a>
          </Button>
        </div>
      </section>
    </main>
  )
}
