import Link from "next/link"
import { Check, X, Minus, Shield, Zap, Building2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const tiers = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "For individuals and small teams getting their security basics in order.",
    cta: "Get started free",
    ctaHref: "/sign-up",
    highlight: false,
    badge: null,
    icon: Shield,
    features: [
      "Access to all learning modules",
      "Phishing awareness training",
      "Password security guides",
      "Basic risk self-assessment",
      "Community support",
      "1 user",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For growing teams that need structured security programs and actionable tools.",
    cta: "Start free trial",
    ctaHref: "/sign-up",
    highlight: true,
    badge: "Most popular",
    icon: Zap,
    features: [
      "Everything in Starter",
      "Full framework library (NIST, ISO 27001, CIS)",
      "Interactive security walkthroughs",
      "Downloadable policy templates",
      "Security posture dashboard",
      "Priority email support",
      "Up to 10 users",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations that need tailored programs, dedicated support, and compliance reporting.",
    cta: "Contact us",
    ctaHref: "/contact",
    highlight: false,
    badge: null,
    icon: Building2,
    features: [
      "Everything in Pro",
      "Custom security program build-out",
      "Dedicated security advisor",
      "Compliance reporting (SOC 2, HIPAA, GDPR)",
      "Team training & workshops",
      "SLA-backed support",
      "Unlimited users",
    ],
  },
]

const featureMatrix = [
  {
    category: "Learning & Training",
    rows: [
      { feature: "Core learning modules", starter: true, pro: true, enterprise: true },
      { feature: "Advanced framework deep-dives", starter: false, pro: true, enterprise: true },
      { feature: "Custom team training workshops", starter: false, pro: false, enterprise: true },
      { feature: "Phishing simulation exercises", starter: false, pro: true, enterprise: true },
    ],
  },
  {
    category: "Tools & Templates",
    rows: [
      { feature: "Basic risk self-assessment", starter: true, pro: true, enterprise: true },
      { feature: "Downloadable policy templates", starter: false, pro: true, enterprise: true },
      { feature: "Security posture dashboard", starter: false, pro: true, enterprise: true },
      { feature: "Custom policy builder", starter: false, pro: false, enterprise: true },
    ],
  },
  {
    category: "Compliance & Reporting",
    rows: [
      { feature: "NIST CSF alignment guides", starter: false, pro: true, enterprise: true },
      { feature: "ISO 27001 checklist", starter: false, pro: true, enterprise: true },
      { feature: "SOC 2 / HIPAA / GDPR reporting", starter: false, pro: false, enterprise: true },
      { feature: "Audit-ready evidence packs", starter: false, pro: false, enterprise: true },
    ],
  },
  {
    category: "Support",
    rows: [
      { feature: "Community support", starter: true, pro: true, enterprise: true },
      { feature: "Priority email support", starter: false, pro: true, enterprise: true },
      { feature: "Dedicated security advisor", starter: false, pro: false, enterprise: true },
      { feature: "SLA-backed response times", starter: false, pro: false, enterprise: true },
    ],
  },
]

const faqs = [
  {
    q: "Can I switch plans at any time?",
    a: "Yes. You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle. Downgrades won't lose your data — it will simply become read-only until you upgrade again.",
  },
  {
    q: "Is there a free trial for the Pro plan?",
    a: "Absolutely. Pro comes with a 14-day free trial, no credit card required. You get full access to every Pro feature so you can evaluate it properly before committing.",
  },
  {
    q: "What counts as a 'user' on the Pro plan?",
    a: "A user is any person with their own login to your team's ABC of Cyber workspace. Viewers, editors, and admins all count toward your seat limit. The Enterprise plan has no seat cap.",
  },
  {
    q: "Do you offer discounts for nonprofits or educational institutions?",
    a: "Yes. We offer 50% off Pro for verified nonprofits and educational institutions. Reach out via our contact page with proof of status and we'll apply the discount to your account.",
  },
  {
    q: "How does the Enterprise pricing work?",
    a: "Enterprise pricing is scoped to your organization's size, compliance requirements, and the level of advisory support you need. We'll put together a proposal after a short discovery call — no pressure, no hard sell.",
  },
  {
    q: "What happens to my data if I cancel?",
    a: "Your data is yours. You have 30 days after cancellation to export everything. After that, data is permanently deleted from our systems in accordance with our privacy policy.",
  },
]

function FeatureValue({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="h-5 w-5 text-blue-600 mx-auto" aria-label="Included" />
  if (value === false) return <Minus className="h-5 w-5 text-slate-300 mx-auto" aria-label="Not included" />
  return <span className="text-sm text-slate-700">{value}</span>
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b bg-slate-50">
        <div className="container mx-auto px-4 py-16 md:px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 mb-4">Pricing</p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl mb-4">
              Simple pricing, serious security
            </h1>
            <p className="text-lg leading-8 text-slate-600">
              No confusing bundles. No features hidden behind enterprise paywalls just to make the demo look good.
              Pick the plan that fits where your team is today.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {tiers.map((tier) => {
            const Icon = tier.icon
            return (
              <Card
                key={tier.name}
                className={`relative flex flex-col ${
                  tier.highlight
                    ? "border-blue-600 shadow-lg ring-2 ring-blue-600"
                    : "border-slate-200"
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-3 py-1">{tier.badge}</Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg ${ tier.highlight ? "bg-blue-100" : "bg-slate-100" }`}>
                      <Icon className={`h-5 w-5 ${ tier.highlight ? "text-blue-700" : "text-slate-600" }`} />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900">{tier.name}</CardTitle>
                  </div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold text-slate-900">{tier.price}</span>
                    {tier.period && <span className="text-slate-500 text-sm">{tier.period}</span>}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{tier.description}</p>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                        <Check className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={tier.ctaHref}>
                    <Button
                      className={`w-full ${
                        tier.highlight
                          ? "bg-blue-700 hover:bg-blue-800 text-white"
                          : "bg-slate-900 hover:bg-slate-800 text-white"
                      }`}
                    >
                      {tier.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Feature comparison matrix */}
      <section className="border-t bg-slate-50">
        <div className="container mx-auto px-4 py-16 md:px-6">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-3">Full feature comparison</h2>
            <p className="text-slate-600">See exactly what's included in each plan before you decide.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 pr-6 font-semibold text-slate-700 w-1/2">Feature</th>
                  <th className="text-center py-3 px-4 font-semibold text-slate-700">Starter</th>
                  <th className="text-center py-3 px-4 font-semibold text-blue-700">Pro</th>
                  <th className="text-center py-3 px-4 font-semibold text-slate-700">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {featureMatrix.map((section) => (
                  <>
                    <tr key={section.category} className="bg-slate-100">
                      <td colSpan={4} className="py-2 px-2 font-semibold text-slate-800 text-xs uppercase tracking-wider">
                        {section.category}
                      </td>
                    </tr>
                    {section.rows.map((row) => (
                      <tr key={row.feature} className="border-b border-slate-100 hover:bg-white transition-colors">
                        <td className="py-3 pr-6 text-slate-700">{row.feature}</td>
                        <td className="py-3 px-4 text-center"><FeatureValue value={row.starter} /></td>
                        <td className="py-3 px-4 text-center bg-blue-50/40"><FeatureValue value={row.pro} /></td>
                        <td className="py-3 px-4 text-center"><FeatureValue value={row.enterprise} /></td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t">
        <div className="container mx-auto px-4 py-16 md:px-6">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-3">Frequently asked questions</h2>
            <p className="text-slate-600">Still have questions? <Link href="/contact" className="text-blue-700 underline underline-offset-2 hover:text-blue-900">Reach out</Link> and we'll get back to you quickly.</p>
          </div>
          <div className="max-w-3xl grid gap-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-slate-200 rounded-lg p-6">
                <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="border-t bg-slate-900">
        <div className="container mx-auto px-4 py-14 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Not sure which plan is right for you?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Start free and upgrade when you're ready. No credit card required, no sales pressure, no surprise invoices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sign-up">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                Start for free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8">
                Talk to us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
