import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "For individuals and small teams getting started with security.",
    features: [
      "Access to all learning modules",
      "Basic security frameworks",
      "Community support",
      "Monthly security digest",
    ],
    cta: "Get started free",
    href: "/sign-up",
    primary: true,
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "For teams that need deeper tools and guided programs.",
    features: [
      "Everything in Free",
      "Advanced assessment tools",
      "Custom security roadmaps",
      "Priority support",
      "Team collaboration features",
    ],
    cta: "Start Pro trial",
    href: "/sign-up",
    primary: false,
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto px-4 py-16 md:px-6">
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Pricing</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">Simple, honest pricing</h1>
          <p className="text-lg text-slate-600">No hidden fees. No surprise invoices. Start free and upgrade when you need more.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.name} className={`border-2 ${plan.primary ? "border-blue-700" : "border-slate-200"}`}>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-slate-900">{plan.name}</CardTitle>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-slate-500 text-sm">/{plan.period}</span>
                </div>
                <p className="text-sm text-slate-600">{plan.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
                      <Check className="h-4 w-4 text-blue-700 mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  size="lg"
                  className={`w-full font-semibold ${
                    plan.primary
                      ? "bg-blue-700 hover:bg-blue-800 text-white"
                      : "bg-slate-900 hover:bg-slate-800 text-white"
                  }`}
                >
                  <Link href={plan.href}>{plan.cta} <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}
