import Link from "next/link"
import { Check, Shield, ShieldCheck, Lock, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "For individuals and small teams getting started with security fundamentals.",
    features: [
      "Access to all learning modules",
      "Basic security assessments",
      "Community forum access",
      "Email support",
    ],
    cta: "Get Started Free",
    href: "/get-started",
    highlight: false,
  },
  {
    name: "Professional",
    price: "$49",
    period: "/month",
    description: "For growing teams that need structured security programs and guidance.",
    features: [
      "Everything in Starter",
      "Full framework library",
      "Security policy templates",
      "Priority email support",
      "Team progress tracking",
      "Monthly security briefings",
    ],
    cta: "Start Free Trial",
    href: "/get-started",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations that need tailored security programs and dedicated support.",
    features: [
      "Everything in Professional",
      "Dedicated security advisor",
      "Custom framework development",
      "SSO & advanced integrations",
      "SLA-backed support",
      "Compliance reporting",
      "On-site training available",
    ],
    cta: "Contact Sales",
    href: "/contact",
    highlight: false,
  },
]

const trustBadges = [
  {
    icon: ShieldCheck,
    label: "SOC 2 Type II",
    sublabel: "Audited & Certified",
  },
  {
    icon: Award,
    label: "ISO 27001",
    sublabel: "Aligned Controls",
  },
  {
    icon: Lock,
    label: "GDPR Compliant",
    sublabel: "Data Privacy Ready",
  },
  {
    icon: Shield,
    label: "NIST CSF",
    sublabel: "Framework Aligned",
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto px-4 py-16 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Pricing</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Simple, transparent pricing
          </h1>
          <p className="text-lg leading-8 text-slate-600">
            No hidden fees. No surprise invoices. Pick the plan that fits your team and start building a security program that actually works.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="max-w-4xl mx-auto mb-14">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-5">Trusted by security-conscious teams — built on industry standards</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-5 text-center shadow-sm"
              >
                <badge.icon className="h-7 w-7 text-blue-700" />
                <span className="text-sm font-bold text-slate-800">{badge.label}</span>
                <span className="text-xs text-slate-500">{badge.sublabel}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex flex-col ${
                plan.highlight
                  ? "border-blue-600 shadow-lg ring-2 ring-blue-600"
                  : "border-slate-200"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white px-3 py-1 text-xs font-semibold">Most Popular</Badge>
                </div>
              )}
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-slate-900">{plan.name}</CardTitle>
                <div className="flex items-end gap-1 mt-2">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  {plan.period && (
                    <span className="text-slate-500 mb-1">{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-slate-600 mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 gap-6">
                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
                      <Check className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`w-full ${
                    plan.highlight
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-slate-900 hover:bg-slate-800 text-white"
                  }`}
                >
                  <Link href={plan.href}>{plan.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Secondary trust signal below pricing cards */}
        <div className="max-w-2xl mx-auto mt-12 rounded-xl border border-slate-200 bg-slate-50 px-6 py-5 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <ShieldCheck className="h-10 w-10 text-blue-700 shrink-0" />
          <div>
            <p className="text-sm font-semibold text-slate-800">Enterprise-grade security, built in from day one</p>
            <p className="text-xs text-slate-500 mt-1">
              All plans include encrypted data storage, role-based access controls, and audit logging. Our infrastructure is SOC 2 Type II audited and ISO 27001 aligned — so your security team can approve us without the usual back-and-forth.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">Still have questions?</h2>
          <p className="text-slate-600">
            Talk to someone who actually knows security, not a sales script.
          </p>
          <Button asChild variant="outline" className="border-slate-300">
            <Link href="/contact">Get in touch</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
