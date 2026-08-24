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
    description: "For individuals and small teams just getting started with cybersecurity basics.",
    cta: "Get Started Free",
    ctaHref: "/sign-up",
    highlight: false,
    badge: null,
    features: [
      { label: "Access to ABC of Cyber learning modules", included: true },
      { label: "Phishing awareness training", included: true },
      { label: "Password security guide", included: true },
      { label: "Community blog & resources", included: true },
      { label: "Security framework overviews", included: true },
      { label: "Downloadable policy templates", included: false },
      { label: "Interactive security walkthroughs", included: false },
      { label: "Team progress dashboard", included: false },
      { label: "Priority support", included: false },
      { label: "Custom security assessment", included: false },
    ],
  },
  {
    name: "Pro",
    icon: Shield,
    price: "$29",
    period: "/month",
    description: "For growing teams that need structured security programs and hands-on tools.",
    cta: "Start Pro Trial",
    ctaHref: "/sign-up",
    highlight: true,
    badge: "Most Popular",
    features: [
      { label: "Access to ABC of Cyber learning modules", included: true },
      { label: "Phishing awareness training", included: true },
      { label: "Password security guide", included: true },
      { label: "Community blog & resources", included: true },
      { label: "Security framework overviews", included: true },
      { label: "Downloadable policy templates", included: true },
      { label: "Interactive security walkthroughs", included: true },
      { label: "Team progress dashboard", included: true },
      { label: "Priority support", included: false },
      { label: "Custom security assessment", included: false },
    ],
  },
  {
    name: "Enterprise",
    icon: Building2,
    price: "Custom",
    period: "",
    description: "For organizations that need tailored security programs, compliance support, and dedicated guidance.",
    cta: "Contact Us",
    ctaHref: "/contact",
    highlight: false,
    badge: null,
    features: [
      { label: "Access to ABC of Cyber learning modules", included: true },
      { label: "Phishing awareness training", included: true },
      { label: "Password security guide", included: true },
      { label: "Community blog & resources", included: true },
      { label: "Security framework overviews", included: true },
      { label: "Downloadable policy templates", included: true },
      { label: "Interactive security walkthroughs", included: true },
      { label: "Team progress dashboard", included: true },
      { label: "Priority support", included: true },
      { label: "Custom security assessment", included: true },
    ],
  },
]

const faqs = [
  {
    q: "Can I switch plans at any time?",
    a: "Yes. You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    q: "Is there a free trial for Pro?",
    a: "Absolutely. Pro comes with a 14-day free trial — no credit card required. You get full access to every Pro feature from day one.",
  },
  {
    q: "What counts as a team member?",
    a: "Any user you invite to your team dashboard counts as a seat. The Pro plan includes up to 10 seats. Enterprise plans are scoped to your organization's size.",
  },
  {
    q: "Do you offer discounts for nonprofits or education?",
    a: "Yes. Reach out via the contact page and we will work out a plan that fits your budget and mission.",
  },
]

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
            No hidden fees. No confusing tiers. Pick the plan that matches where your team is today and upgrade when you are ready.
          </p>
        </div>
      </section>

      {/* Plan Cards */}
      <section className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto items-stretch">
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
                    <span className="inline-block rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white shadow">
                      {plan.badge}
                    </span>
                  </div>
                )}
                <CardHeader className="pb-4 pt-8">
                  <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg ${
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
                    <Link href={plan.ctaHref}>
                      <Button
                        className={`w-full rounded-lg font-semibold ${
                          plan.highlight
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : "bg-slate-900 text-white hover:bg-slate-700"
                        }`}
                      >
                        {plan.cta}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="border-t bg-slate-50">
        <div className="container mx-auto px-4 py-16 md:px-6 max-w-5xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-2 text-center">Full feature comparison</h2>
          <p className="text-slate-600 text-center mb-10">See exactly what is included in each plan before you commit.</p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="px-6 py-4 text-left font-semibold text-slate-700 w-1/2">Feature</th>
                  <th className="px-4 py-4 text-center font-semibold text-slate-700">Starter</th>
                  <th className="px-4 py-4 text-center font-semibold text-blue-700 bg-blue-50">Pro</th>
                  <th className="px-4 py-4 text-center font-semibold text-slate-700">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {plans[0].features.map((f, i) => (
                  <tr key={f.label} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-6 py-3 text-slate-700">{f.label}</td>
                    <td className="px-4 py-3 text-center">
                      {plans[0].features[i].included ? (
                        <Check className="mx-auto h-4 w-4 text-blue-600" />
                      ) : (
                        <X className="mx-auto h-4 w-4 text-slate-300" />
                      )}
                    </td>
                    <td className="px-4 py-3 text-center bg-blue-50">
                      {plans[1].features[i].included ? (
                        <Check className="mx-auto h-4 w-4 text-blue-600" />
                      ) : (
                        <X className="mx-auto h-4 w-4 text-slate-300" />
                      )}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {plans[2].features[i].included ? (
                        <Check className="mx-auto h-4 w-4 text-blue-600" />
                      ) : (
                        <X className="mx-auto h-4 w-4 text-slate-300" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-16 md:px-6 max-w-3xl">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-8 text-center">Frequently asked questions</h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <Card key={faq.q} className="rounded-xl border border-slate-200 shadow-sm">
              <CardContent className="px-6 py-5">
                <p className="font-semibold text-slate-900 mb-2">{faq.q}</p>
                <p className="text-sm text-slate-600 leading-6">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t bg-slate-900">
        <div className="container mx-auto px-4 py-16 md:px-6 text-center max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
            Not sure which plan is right for you?
          </h2>
          <p className="text-slate-400 mb-8 leading-7">
            Talk to us. We will help you figure out what your team actually needs — no upsell, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8 py-3 rounded-lg">
                Talk to us
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 font-semibold px-8 py-3 rounded-lg">
                Start for free
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
