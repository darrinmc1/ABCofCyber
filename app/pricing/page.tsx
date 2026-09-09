import Link from "next/link"
import { Check, X, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "For individuals getting started with cybersecurity basics.",
    cta: "Get started",
    ctaHref: "/sign-up",
    highlighted: false,
    badge: null,
  },
  {
    name: "Pro",
    price: "$19",
    period: "per month",
    description: "For professionals who need advanced tools and deeper insights.",
    cta: "Start free trial",
    ctaHref: "/sign-up?plan=pro",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "per month",
    description: "For teams and organizations requiring full-scale security coverage.",
    cta: "Contact sales",
    ctaHref: "/contact",
    highlighted: false,
    badge: null,
  },
]

type FeatureValue = boolean | string

const featureCategories: {
  category: string
  features: { name: string; free: FeatureValue; pro: FeatureValue; enterprise: FeatureValue; tooltip?: string }[]
}[] = [
  {
    category: "Core Features",
    features: [
      { name: "Vulnerability scanning", free: "5 scans/mo", pro: "Unlimited", enterprise: "Unlimited" },
      { name: "Threat intelligence reports", free: "Basic", pro: "Advanced", enterprise: "Custom" },
      { name: "Real-time alerts", free: false, pro: true, enterprise: true },
      { name: "Dashboard & analytics", free: "Basic", pro: "Full", enterprise: "Full + Custom" },
      { name: "API access", free: false, pro: true, enterprise: true },
    ],
  },
  {
    category: "Security Tools",
    features: [
      { name: "Port scanner", free: true, pro: true, enterprise: true },
      { name: "SSL/TLS checker", free: true, pro: true, enterprise: true },
      { name: "DNS lookup & analysis", free: "Limited", pro: true, enterprise: true },
      { name: "Malware detection", free: false, pro: true, enterprise: true },
      { name: "Penetration testing tools", free: false, pro: "Basic", enterprise: "Advanced" },
      { name: "Dark web monitoring", free: false, pro: false, enterprise: true },
    ],
  },
  {
    category: "Collaboration & Management",
    features: [
      { name: "Team members", free: "1", pro: "5", enterprise: "Unlimited" },
      { name: "Role-based access control", free: false, pro: false, enterprise: true },
      { name: "Audit logs", free: false, pro: "30 days", enterprise: "1 year" },
      { name: "Custom integrations", free: false, pro: false, enterprise: true },
      { name: "SSO / SAML", free: false, pro: false, enterprise: true },
    ],
  },
  {
    category: "Support",
    features: [
      { name: "Community support", free: true, pro: true, enterprise: true },
      { name: "Email support", free: false, pro: true, enterprise: true },
      { name: "Priority support", free: false, pro: false, enterprise: true },
      { name: "Dedicated account manager", free: false, pro: false, enterprise: true },
      { name: "SLA guarantee", free: false, pro: false, enterprise: true },
    ],
  },
]

function FeatureCell({ value }: { value: FeatureValue }) {
  if (value === true) {
    return (
      <span className="flex justify-center">
        <Check className="h-5 w-5 text-green-500" aria-label="Included" />
      </span>
    )
  }
  if (value === false) {
    return (
      <span className="flex justify-center">
        <X className="h-5 w-5 text-muted-foreground/40" aria-label="Not included" />
      </span>
    )
  }
  return (
    <span className="flex justify-center text-sm font-medium text-foreground">
      {value}
    </span>
  )
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <Badge variant="outline" className="mb-4">
          Pricing
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Simple, transparent pricing
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Choose the plan that fits your security needs. Upgrade or downgrade at any time.
        </p>
      </section>

      {/* Plan Cards */}
      <section className="px-4 pb-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex flex-col ${
                plan.highlighted
                  ? "border-primary shadow-lg shadow-primary/10 ring-2 ring-primary"
                  : ""
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-3 py-1">
                    {plan.badge}
                  </Badge>
                </div>
              )}
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-1 text-sm">/{plan.period}</span>
                </div>
                <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button
                  asChild
                  className="w-full"
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  <Link href={plan.ctaHref}>{plan.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-4 pb-24 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-2">Compare all features</h2>
        <p className="text-muted-foreground text-center mb-10">
          A full breakdown of what&apos;s included in each plan.
        </p>

        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left px-6 py-4 font-semibold text-foreground w-1/2">
                  Feature
                </th>
                {plans.map((plan) => (
                  <th
                    key={plan.name}
                    className={`px-6 py-4 text-center font-semibold ${
                      plan.highlighted ? "text-primary" : "text-foreground"
                    }`}
                  >
                    <div>{plan.name}</div>
                    <div className={`text-xs font-normal mt-0.5 ${
                      plan.highlighted ? "text-primary/70" : "text-muted-foreground"
                    }`}>
                      {plan.price}/{plan.period}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featureCategories.map((cat, catIdx) => (
                <>
                  <tr key={`cat-${catIdx}`} className="bg-muted/30">
                    <td
                      colSpan={4}
                      className="px-6 py-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground"
                    >
                      {cat.category}
                    </td>
                  </tr>
                  {cat.features.map((feature, featIdx) => (
                    <tr
                      key={`feat-${catIdx}-${featIdx}`}
                      className={`border-t border-border/50 transition-colors hover:bg-muted/20 ${
                        featIdx % 2 === 0 ? "" : "bg-muted/10"
                      }`}
                    >
                      <td className="px-6 py-3.5 text-foreground">{feature.name}</td>
                      <td className="px-6 py-3.5">
                        <FeatureCell value={feature.free} />
                      </td>
                      <td className={`px-6 py-3.5 ${
                        plans[1].highlighted ? "bg-primary/5" : ""
                      }`}>
                        <FeatureCell value={feature.pro} />
                      </td>
                      <td className="px-6 py-3.5">
                        <FeatureCell value={feature.enterprise} />
                      </td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-border bg-muted/50">
                <td className="px-6 py-5" />
                {plans.map((plan) => (
                  <td key={plan.name} className="px-6 py-5 text-center">
                    <Button
                      asChild
                      size="sm"
                      variant={plan.highlighted ? "default" : "outline"}
                      className="w-full"
                    >
                      <Link href={plan.ctaHref}>{plan.cta}</Link>
                    </Button>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      {/* FAQ nudge */}
      <section className="pb-24 text-center px-4">
        <p className="text-muted-foreground">
          Have questions?{" "}
          <Link href="/contact" className="text-primary underline underline-offset-4 hover:text-primary/80">
            Talk to our team
          </Link>
          {" "}or{" "}
          <Link href="/faq" className="text-primary underline underline-offset-4 hover:text-primary/80">
            read our FAQ
          </Link>
          .
        </p>
      </section>
    </div>
  )
}
