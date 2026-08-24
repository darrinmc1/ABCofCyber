import Link from "next/link"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import JsonLd from "@/components/json-ld"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "For individuals getting started with cybersecurity fundamentals.",
    features: [
      "Access to all learning modules",
      "Basic security frameworks overview",
      "Community blog access",
      "Basic security tools",
    ],
    cta: "Get Started Free",
    href: "/get-started",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "For professionals and small teams building real security programs.",
    features: [
      "Everything in Free",
      "Advanced framework guides",
      "AI-powered security tools",
      "Downloadable templates and policies",
      "Priority support",
    ],
    cta: "Start Pro Trial",
    href: "/sign-up",
    highlight: true,
  },
  {
    name: "Team",
    price: "$99",
    period: "per month",
    description: "For teams that need collaborative security program management.",
    features: [
      "Everything in Pro",
      "Up to 10 team members",
      "Team dashboards and reporting",
      "Custom security assessments",
      "Dedicated onboarding",
    ],
    cta: "Contact Us",
    href: "/contact",
    highlight: false,
  },
]

export default function PricingPage() {
  const productSchemas = plans.map((plan) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `ABC of Cyber ${plan.name} Plan`,
    "description": plan.description,
    "brand": {
      "@type": "Brand",
      "name": "ABC of Cyber"
    },
    "offers": {
      "@type": "Offer",
      "price": plan.price.replace("$", ""),
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": plan.price.replace("$", ""),
        "priceCurrency": "USD",
        "unitText": plan.period
      },
      "availability": "https://schema.org/InStock",
      "url": `https://abcofcyber.com${plan.href}`
    }
  }))

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is there a free plan available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, ABC of Cyber offers a free plan that includes access to all learning modules, basic security frameworks, the community blog, and basic security tools. No credit card required."
        }
      },
      {
        "@type": "Question",
        "name": "Can I cancel my subscription at any time?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can cancel your Pro or Team subscription at any time. Your access will continue until the end of your current billing period."
        }
      },
      {
        "@type": "Question",
        "name": "What is included in the Pro plan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Pro plan includes everything in the Free plan plus advanced framework guides, AI-powered security tools, downloadable templates and policies, and priority support for $29 per month."
        }
      },
      {
        "@type": "Question",
        "name": "How many team members can use the Team plan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Team plan supports up to 10 team members and includes team dashboards, reporting, custom security assessments, and dedicated onboarding for $99 per month."
        }
      }
    ]
  }

  return (
    <>
      {productSchemas.map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}
      <JsonLd data={faqSchema} />
      <main className="min-h-screen bg-white">
        <section className="container mx-auto px-4 py-16 md:px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 mb-3">Pricing</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Start free and upgrade when you need more. No hidden fees, no surprise charges.
          </p>
        </section>

        <section className="container mx-auto px-4 pb-20 md:px-6">
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <Card key={plan.name} className={`border-2 ${plan.highlight ? "border-blue-700 shadow-lg" : "border-slate-200"}`}>
                {plan.highlight && (
                  <div className="bg-blue-700 text-white text-xs font-semibold text-center py-1 rounded-t-lg">Most Popular</div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    <span className="text-slate-500 ml-1">/{plan.period}</span>
                  </div>
                  <p className="text-sm text-slate-600 mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle className="h-4 w-4 text-blue-700 mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`w-full ${plan.highlight ? "bg-blue-700 hover:bg-blue-800" : ""}`}
                    variant={plan.highlight ? "default" : "outline"}
                  >
                    <Link href={plan.href}>{plan.cta} <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Frequently asked questions</h2>
            <div className="space-y-6">
              {faqSchema.mainEntity.map((item) => (
                <div key={item.name} className="border-b border-slate-200 pb-6">
                  <h3 className="font-semibold text-slate-900 mb-2">{item.name}</h3>
                  <p className="text-slate-600 text-sm">{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
