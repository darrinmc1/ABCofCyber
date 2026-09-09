import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Script from "next/script"

const plans = [
  {
    name: "Free",
    price: "0",
    priceCurrency: "USD",
    description: "Get started with the basics of cybersecurity.",
    features: [
      "Access to core learning modules",
      "Basic security frameworks overview",
      "Community forum access",
      "Monthly security newsletter",
    ],
    cta: "Get started free",
    href: "/sign-up",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "29",
    priceCurrency: "USD",
    description: "For individuals serious about building security skills.",
    features: [
      "Everything in Free",
      "Full access to all learning modules",
      "Advanced framework deep-dives",
      "AI-powered security assistant",
      "Downloadable templates and checklists",
      "Priority support",
    ],
    cta: "Start Pro",
    href: "/sign-up?plan=pro",
    highlighted: true,
  },
  {
    name: "Team",
    price: "99",
    priceCurrency: "USD",
    description: "For teams building a security culture together.",
    features: [
      "Everything in Pro",
      "Up to 10 team members",
      "Team progress dashboard",
      "Custom learning paths",
      "Dedicated account manager",
      "Quarterly security reviews",
    ],
    cta: "Start Team trial",
    href: "/sign-up?plan=team",
    highlighted: false,
  },
]

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "ABC of Cyber Pricing Plans",
  "description": "Cybersecurity training and tools pricing plans for individuals and teams.",
  "itemListElement": plans.map((plan, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Product",
      "name": `ABC of Cyber ${plan.name} Plan`,
      "description": plan.description,
      "url": `https://abcofcyber.com/pricing`,
      "brand": {
        "@type": "Brand",
        "name": "ABC of Cyber"
      },
      "offers": {
        "@type": "Offer",
        "price": plan.price,
        "priceCurrency": plan.priceCurrency,
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": plan.price,
          "priceCurrency": plan.priceCurrency,
          "unitCode": "MON",
          "billingDuration": 1,
          "billingIncrement": 1
        },
        "availability": "https://schema.org/InStock",
        "url": `https://abcofcyber.com${plan.href}`
      }
    }
  }))
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Script
        id="schema-pricing"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />
      <section className="container mx-auto px-4 py-16 md:px-6">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Pricing</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Simple, transparent pricing
          </h1>
          <p className="text-lg leading-8 text-slate-600">
            No hidden fees, no surprise invoices. Pick the plan that fits your team and get to work.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`flex flex-col ${
                plan.highlighted
                  ? "border-blue-600 shadow-lg ring-2 ring-blue-600"
                  : "border-slate-200"
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl font-bold text-slate-900">{plan.name}</CardTitle>
                  {plan.highlighted && (
                    <Badge className="bg-blue-600 text-white text-xs">Most popular</Badge>
                  )}
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">${plan.price}</span>
                  <span className="text-slate-500 text-sm">/month</span>
                </div>
                <CardDescription className="text-slate-600 mt-2">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
                      <Check className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-slate-900 hover:bg-slate-800 text-white"
                  }`}
                >
                  <Link href={plan.href}>{plan.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-2xl mx-auto text-center space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">Frequently asked questions</h2>
          <div className="grid gap-6 text-left mt-8">
            <div className="space-y-2">
              <h3 className="font-semibold text-slate-900">Can I switch plans later?</h3>
              <p className="text-slate-600 text-sm">Yes. You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-slate-900">Is there a free trial for paid plans?</h3>
              <p className="text-slate-600 text-sm">Team plans include a 14-day free trial. No credit card required to start.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-slate-900">What payment methods do you accept?</h3>
              <p className="text-slate-600 text-sm">We accept all major credit cards and can arrange invoicing for annual Team plans.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-slate-900">Do you offer discounts for nonprofits or education?</h3>
              <p className="text-slate-600 text-sm">Yes. Contact us through the <Link href="/contact" className="text-blue-600 hover:underline">contact page</Link> and we will work something out.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
