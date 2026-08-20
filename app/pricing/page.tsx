import Link from "next/link"
import { Check, X, Zap, Shield, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with the fundamentals. No credit card required.",
    icon: Zap,
    iconColor: "text-slate-500",
    borderColor: "border-slate-200",
    badgeColor: "bg-slate-100 text-slate-700",
    cta: "Get Started Free",
    ctaHref: "/sign-up",
    ctaVariant: "outline" as const,
    highlighted: false,
    features: [
      { text: "Up to 3 projects", included: true },
      { text: "5 GB storage", included: true },
      { text: "Basic analytics", included: true },
      { text: "Community support", included: true },
      { text: "API access", included: false },
      { text: "Custom domains", included: false },
      { text: "Team collaboration", included: false },
      { text: "Priority support", included: false },
      { text: "SSO / SAML", included: false },
      { text: "SLA guarantee", included: false },
    ],
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "Everything you need to scale your projects and collaborate.",
    icon: Shield,
    iconColor: "text-indigo-600",
    borderColor: "border-indigo-500",
    badgeColor: "bg-indigo-600 text-white",
    cta: "Start Pro Trial",
    ctaHref: "/sign-up?plan=pro",
    ctaVariant: "default" as const,
    highlighted: true,
    features: [
      { text: "Unlimited projects", included: true },
      { text: "50 GB storage", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Email & chat support", included: true },
      { text: "API access", included: true },
      { text: "Custom domains", included: true },
      { text: "Team collaboration (up to 10)", included: true },
      { text: "Priority support", included: false },
      { text: "SSO / SAML", included: false },
      { text: "SLA guarantee", included: false },
    ],
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "per month",
    description: "Advanced security, compliance, and dedicated support for large teams.",
    icon: Building2,
    iconColor: "text-amber-600",
    borderColor: "border-amber-400",
    badgeColor: "bg-amber-500 text-white",
    cta: "Contact Sales",
    ctaHref: "/contact",
    ctaVariant: "outline" as const,
    highlighted: false,
    features: [
      { text: "Unlimited projects", included: true },
      { text: "500 GB storage", included: true },
      { text: "Advanced analytics + exports", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Full API access", included: true },
      { text: "Custom domains", included: true },
      { text: "Unlimited team members", included: true },
      { text: "Priority support (24/7)", included: true },
      { text: "SSO / SAML", included: true },
      { text: "SLA guarantee", included: true },
    ],
  },
]

const faqs = [
  {
    q: "Can I upgrade or downgrade at any time?",
    a: "Yes. Plan changes take effect immediately. If you upgrade mid-cycle you are billed a prorated amount; if you downgrade, the credit rolls into your next invoice.",
  },
  {
    q: "Is there a free trial for paid plans?",
    a: "Pro comes with a 14-day free trial — no credit card required. Enterprise trials are available on request through our sales team.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards (Visa, Mastercard, Amex) and ACH bank transfers for annual Enterprise contracts.",
  },
  {
    q: "Do you offer annual billing discounts?",
    a: "Yes. Paying annually saves you 20% on both Pro and Enterprise plans. Switch to annual billing any time from your account settings.",
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-slate-50 to-white">
        <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-indigo-100 text-indigo-700 uppercase">
          Pricing
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
          Simple, transparent pricing
        </h1>
        <p className="max-w-xl mx-auto text-lg text-slate-500">
          Start for free, scale as you grow. No hidden fees, no surprises.
        </p>
      </section>

      {/* Tiers */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 items-start">
          {tiers.map((tier) => {
            const Icon = tier.icon
            return (
              <Card
                key={tier.name}
                className={`relative flex flex-col border-2 ${
                  tier.highlighted
                    ? `${tier.borderColor} shadow-2xl scale-105`
                    : `${tier.borderColor} shadow-md`
                } rounded-2xl overflow-hidden`}
              >
                {tier.highlighted && (
                  <div className="absolute top-0 inset-x-0 h-1 bg-indigo-500" />
                )}
                <CardHeader className="pb-4 pt-8 px-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`p-2 rounded-lg bg-slate-100 ${tier.iconColor}`}>
                      <Icon className="w-5 h-5" />
                    </span>
                    <span
                      className={`text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${
                        tier.badgeColor
                      }`}
                    >
                      {tier.name}
                    </span>
                  </div>
                  <CardTitle className="text-4xl font-extrabold text-slate-900">
                    {tier.price}
                    <span className="text-base font-normal text-slate-400 ml-1">
                      / {tier.period}
                    </span>
                  </CardTitle>
                  <p className="mt-2 text-sm text-slate-500">{tier.description}</p>
                </CardHeader>

                <CardContent className="flex flex-col flex-1 px-6 pb-8 gap-6">
                  <Button
                    asChild
                    variant={tier.ctaVariant}
                    className={`w-full ${
                      tier.highlighted
                        ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                        : ""
                    }`}
                  >
                    <Link href={tier.ctaHref}>{tier.cta}</Link>
                  </Button>

                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature.text} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="w-4 h-4 mt-0.5 shrink-0 text-emerald-500" />
                        ) : (
                          <X className="w-4 h-4 mt-0.5 shrink-0 text-slate-300" />
                        )}
                        <span
                          className={`text-sm ${
                            feature.included ? "text-slate-700" : "text-slate-400"
                          }`}
                        >
                          {feature.text}
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

      {/* Feature comparison table */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Full feature comparison
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-left px-6 py-4 font-semibold text-slate-700 w-1/2">
                    Feature
                  </th>
                  {tiers.map((t) => (
                    <th
                      key={t.name}
                      className={`px-6 py-4 font-semibold text-center ${
                        t.highlighted ? "text-indigo-600" : "text-slate-700"
                      }`}
                    >
                      {t.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tiers[0].features.map((feature, i) => (
                  <tr
                    key={feature.text}
                    className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className="px-6 py-3 text-slate-600">{feature.text}</td>
                    {tiers.map((t) => (
                      <td key={t.name} className="px-6 py-3 text-center">
                        {t.features[i].included ? (
                          <Check className="w-4 h-4 mx-auto text-emerald-500" />
                        ) : (
                          <X className="w-4 h-4 mx-auto text-slate-300" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Frequently asked questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-slate-100 pb-6">
                <h3 className="font-semibold text-slate-800 mb-2">{faq.q}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-16 px-4 bg-indigo-600">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-indigo-200 mb-8">
            Join thousands of teams already using our platform. Start free, upgrade when you need to.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50">
              <Link href="/sign-up">Start for free</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-indigo-700"
            >
              <Link href="/contact">Talk to sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
