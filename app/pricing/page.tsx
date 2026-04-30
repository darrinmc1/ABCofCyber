import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"

const plans = [
  {
    name: "Starter",
    price: "29",
    description: "For small teams getting serious about security without building a department first.",
    features: [
      "1 user",
      "NIST CSF framework mapping",
      "Basic risk assessment",
      "10 controls tracking",
      "Email support",
      "Monthly security digest",
    ],
    notIncluded: [
      "Advanced reporting",
      "Team collaboration",
      "Priority support",
    ],
    cta: "Start with Starter",
    popular: false,
  },
  {
    name: "Professional",
    price: "99",
    description: "For growing teams that need structured compliance without the enterprise overhead.",
    features: [
      "Up to 10 users",
      "NIST CSF, ISO 27001, CIS Controls",
      "Full risk assessment suite",
      "Unlimited controls tracking",
      "Compliance dashboard",
      "Quarterly strategy reviews",
      "Priority email support",
      "Custom frameworks",
    ],
    notIncluded: [
      "Dedicated security analyst",
      "24/7 phone support",
    ],
    cta: "Choose Professional",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "299",
    description: "For organizations that need comprehensive coverage and hands-on guidance.",
    features: [
      "Unlimited users",
      "All frameworks included",
      "Advanced threat monitoring",
      "Unlimited controls and assessments",
      "Dedicated security analyst",
      "Custom integrations",
      "24/7 phone support",
      "On-site workshops",
      "Board-level reporting",
    ],
    notIncluded: [],
    cta: "Contact Sales",
    popular: false,
  },
]

const faqs = [
  {
    question: "Can I change plans later?",
    answer: "Yes. You can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle. We do not lock you into annual contracts unless you want the discount.",
  },
  {
    question: "What happens after the free trial?",
    answer: "You choose a plan or you do not. We do not convert trials into surprise subscriptions. Your data remains accessible for 30 days after a trial ends if you decide not to continue.",
  },
  {
    question: "Do you offer discounts for nonprofits or education?",
    answer: "Yes. We offer 40% off for registered nonprofits, educational institutions, and startups under 3 years old. Ask us when you sign up.",
  },
  {
    question: "What frameworks are included?",
    answer: "Starter covers NIST CSF. Professional adds ISO 27001 and CIS Controls. Enterprise includes custom framework configuration and mapping for specialized requirements.",
  },
  {
    question: "Is there a setup fee?",
    answer: "No. Professional and Starter plans are self-serve. Enterprise includes onboarding workshops at no additional cost for annual contracts.",
  },
  {
    question: "What does 'unlimited controls tracking' mean?",
    answer: "It means we do not charge per control, per asset, or per whatever creative metric some vendors use to make their 'unlimited' plans limited. Track what you need to track.",
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto px-4 py-16 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Pricing</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Pick the level of protection your budget can emotionally process
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            No hidden fees. No per-seat surprises. No vendor lock-in that makes changing plans feel like a hostage negotiation.
          </p>
        </div>
      </section>

      <section className="container mx-auto grid gap-6 px-4 pb-16 md:px-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`flex flex-col ${plan.popular ? "border-blue-500 shadow-lg ring-2 ring-blue-500/20" : ""}`}
          >
            {plan.popular && (
              <div className="rounded-t-lg bg-blue-500 py-1 text-center text-sm font-medium text-white">
                Most Popular
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription className="mt-2">{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">${plan.price}</span>
                <span className="text-slate-600">/month</span>
              </div>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span className="text-sm text-slate-600">{feature}</span>
                  </li>
                ))}
                {plan.notIncluded.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 opacity-50">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-slate-400" />
                    <span className="text-sm text-slate-400">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className={`w-full ${plan.popular ? "bg-blue-900 hover:bg-blue-800" : ""}`}
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-slate-900">Frequently asked questions</h2>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <Card key={faq.question}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto py-16 px-4 md:px-6">
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="flex flex-col items-center py-12 text-center md:flex-row md:gap-12">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-slate-900">Not sure which plan fits?</h3>
              <p className="mt-2 text-slate-600">
                Talk to us. We will ask questions about your environment, your team, and your actual risks. No sales
                theater. No aggressive follow-up sequences.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-900 hover:bg-blue-800">
                  Talk to an analyst <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="bg-slate-900 py-12 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h3 className="text-xl font-bold">All plans include</h3>
              <p className="mt-1 text-slate-300">
                Secure infrastructure, data encryption, regular backups, and a team that actually responds to support tickets.
              </p>
            </div>
            <Link href="/get-started">
              <Button className="bg-white text-slate-900 hover:bg-blue-100">
                Start your free trial
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
