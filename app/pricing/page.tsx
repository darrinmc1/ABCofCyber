import Link from "next/link"
import { Check, X, Zap, Shield, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Get started with the fundamentals. No credit card required.",
    icon: Zap,
    badge: null,
    cta: "Start for Free",
    ctaHref: "/sign-up",
    ctaVariant: "outline" as const,
    features: [
      { text: "Access to all Learn modules", included: true },
      { text: "Phishing awareness training", included: true },
      { text: "Password security guide", included: true },
      { text: "Basic security frameworks overview", included: true },
      { text: "Community blog & resources", included: true },
      { text: "AI-powered security walkthrough", included: false },
      { text: "Downloadable policy templates", included: false },
      { text: "Team progress dashboard", included: false },
      { text: "Priority support", included: false },
    ],
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "Everything you need to build a real security program for your team.",
    icon: Shield,
    badge: "Most Popular",
    cta: "Start 14-Day Free Trial",
    ctaHref: "/sign-up?plan=pro",
    ctaVariant: "default" as const,
    features: [
      { text: "Everything in Free", included: true },
      { text: "AI-powered security walkthrough", included: true },
      { text: "Downloadable policy & procedure templates", included: true },
      { text: "Full framework deep-dives (NIST, ISO 27001, CIS)", included: true },
      { text: "Incident response plan builder", included: true },
      { text: "Team progress dashboard (up to 10 users)", included: true },
      { text: "Monthly threat briefing digest", included: true },
      { text: "Email support (48-hour response)", included: true },
      { text: "Dedicated account manager", included: false },
    ],
  },
  {
    name: "Team",
    price: "$79",
    period: "/month",
    description: "For growing organizations that need security at scale, with hands-on support.",
    icon: Building2,
    badge: "Best Value",
    cta: "Contact Sales",
    ctaHref: "/contact",
    ctaVariant: "default" as const,
    features: [
      { text: "Everything in Pro", included: true },
      { text: "Unlimited team members", included: true },
      { text: "Custom security assessment report", included: true },
      { text: "Risk management framework templates", included: true },
      { text: "Quarterly security review call", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Priority support (4-hour response)", included: true },
      { text: "White-label training materials", included: true },
      { text: "SSO & advanced user management", included: true },
    ],
  },
]

const faqs = [
  {
    q: "Can I switch plans at any time?",
    a: "Yes. Upgrade or downgrade whenever you need. Changes take effect at the start of your next billing cycle.",
  },
  {
    q: "Is there a contract or commitment?",
    a: "No contracts. All plans are month-to-month. Cancel anytime with no penalties.",
  },
  {
    q: "What happens after my Pro trial ends?",
    a: "You'll be prompted to add a payment method. If you don't, your account automatically moves to the Free plan — no charges, no surprises.",
  },
  {
    q: "Do you offer discounts for nonprofits or education?",
    a: "Yes. Reach out via our contact page and we'll sort you out with a discounted rate.",
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
            Simple, honest pricing
          </h1>
          <p className="text-lg text-slate-600 leading-8">
            No hidden fees. No "call us for pricing" runaround. Pick the plan that fits your team and get to work.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto items-start">
          {tiers.map((tier) => {
            const Icon = tier.icon
            const isPopular = tier.badge === "Most Popular"
            return (
              <Card
                key={tier.name}
                className={`relative flex flex-col ${
                  isPopular
                    ? "border-2 border-blue-600 shadow-xl"
                    : "border border-slate-200 shadow-sm"
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge
                      className={`px-3 py-1 text-xs font-semibold ${
                        isPopular
                          ? "bg-blue-600 text-white hover:bg-blue-600"
                          : "bg-slate-800 text-white hover:bg-slate-800"
                      }`}
                    >
                      {tier.badge}
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-4 pt-8">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className={`h-5 w-5 ${isPopular ? "text-blue-600" : "text-slate-600"}`} />
                    <CardTitle className="text-xl">{tier.name}</CardTitle>
                  </div>
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-4xl font-bold text-slate-900">{tier.price}</span>
                    <span className="text-slate-500 mb-1">{tier.period}</span>
                  </div>
                  <CardDescription className="text-sm text-slate-600 leading-6">
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 gap-6">
                  <ul className="space-y-3">
                    {tier.features.map((f) => (
                      <li key={f.text} className="flex items-start gap-2 text-sm">
                        {f.included ? (
                          <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        ) : (
                          <X className="h-4 w-4 text-slate-300 mt-0.5 shrink-0" />
                        )}
                        <span className={f.included ? "text-slate-700" : "text-slate-400"}>
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Button
                      asChild
                      variant={tier.ctaVariant}
                      className={`w-full ${
                        isPopular
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : ""
                      }`}
                    >
                      <Link href={tier.ctaHref}>{tier.cta}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <p className="text-center text-sm text-slate-500 mt-8">
          All prices in USD. Pro plan includes a 14-day free trial — no credit card required to start.
        </p>
      </section>

      {/* Feature Comparison Note */}
      <section className="bg-slate-50 border-y">
        <div className="container mx-auto px-4 py-12 md:px-6 max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Not sure which plan is right?</h2>
          <p className="text-slate-600 mb-6">
            Start free and upgrade when you need more. Most small teams find everything they need in Pro.
            Larger organizations with compliance requirements or multiple departments should look at Team.
          </p>
          <Button asChild variant="outline">
            <Link href="/contact">Talk to us — we&apos;ll help you decide</Link>
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-16 md:px-6 max-w-3xl">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Frequently asked questions</h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="border-b border-slate-200 pb-6">
              <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
              <p className="text-slate-600 text-sm leading-7">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-blue-600">
        <div className="container mx-auto px-4 py-14 md:px-6 text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to stop winging it on security?</h2>
          <p className="text-blue-100 mb-8 leading-7">
            Join teams that have replaced guesswork with a real security program. Start free — no credit card needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-semibold">
              <Link href="/sign-up">Get Started Free</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
              <Link href="/sign-up?plan=pro">Start Pro Trial</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
