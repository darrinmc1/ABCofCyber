import Link from "next/link"
import { Check, Minus, ArrowRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: null,
    description: "For individuals and small teams getting started with cyber hygiene.",
    cta: "Get Started Free",
    ctaHref: "/sign-up",
    highlighted: false,
    badge: null,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    description: "For growing teams that need deeper visibility and automation.",
    cta: "Start Free Trial",
    ctaHref: "/sign-up?plan=pro",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: null,
    description: "For large organizations with advanced compliance and security needs.",
    cta: "Contact Sales",
    ctaHref: "/contact",
    highlighted: false,
    badge: null,
  },
]

const featureCategories = [
  {
    category: "Core Features",
    features: [
      {
        name: "Connected accounts",
        starter: "Up to 3",
        pro: "Up to 25",
        enterprise: "Unlimited",
      },
      {
        name: "Team members / seats",
        starter: "1 user",
        pro: "Up to 10 users",
        enterprise: "Unlimited",
      },
      {
        name: "Security scans",
        starter: "Weekly",
        pro: "Daily",
        enterprise: "Real-time",
      },
      {
        name: "Risk score dashboard",
        starter: true,
        pro: true,
        enterprise: true,
      },
      {
        name: "Vulnerability detection",
        starter: "Basic",
        pro: "Advanced",
        enterprise: "Advanced + Custom",
      },
    ],
  },
  {
    category: "Monitoring & Alerts",
    features: [
      {
        name: "Email alerts",
        starter: true,
        pro: true,
        enterprise: true,
      },
      {
        name: "Slack / Teams notifications",
        starter: false,
        pro: true,
        enterprise: true,
      },
      {
        name: "Custom alert thresholds",
        starter: false,
        pro: true,
        enterprise: true,
      },
      {
        name: "Incident timeline & history",
        starter: "30 days",
        pro: "1 year",
        enterprise: "Unlimited",
      },
      {
        name: "API access",
        starter: false,
        pro: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "Compliance & Reporting",
    features: [
      {
        name: "Compliance frameworks",
        starter: false,
        pro: "SOC 2, ISO 27001",
        enterprise: "SOC 2, ISO 27001, HIPAA, PCI-DSS + Custom",
      },
      {
        name: "Automated reports",
        starter: false,
        pro: "Monthly",
        enterprise: "Custom cadence",
      },
      {
        name: "Audit-ready exports",
        starter: false,
        pro: true,
        enterprise: true,
      },
      {
        name: "Executive summary reports",
        starter: false,
        pro: false,
        enterprise: true,
      },
    ],
  },
  {
    category: "Support",
    features: [
      {
        name: "Support channel",
        starter: "Community forum",
        pro: "Email (48h SLA)",
        enterprise: "Dedicated CSM + phone",
      },
      {
        name: "Onboarding assistance",
        starter: false,
        pro: "Self-serve guides",
        enterprise: "White-glove onboarding",
      },
      {
        name: "SLA guarantee",
        starter: false,
        pro: false,
        enterprise: true,
      },
      {
        name: "Security review sessions",
        starter: false,
        pro: false,
        enterprise: "Quarterly",
      },
    ],
  },
]

function FeatureValue({ value }: { value: boolean | string }) {
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
        <Minus className="h-4 w-4 text-muted-foreground" aria-label="Not included" />
      </span>
    )
  }
  return <span className="text-sm text-center block">{value}</span>
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            <Zap className="h-3 w-3 mr-1" />
            Simple, transparent pricing
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Plans that grow with your team
          </h1>
          <p className="text-xl text-muted-foreground">
            Start free, upgrade when you need more. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-4 pb-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                plan.highlighted
                  ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                  : "border-border bg-card"
              }`}
            >
              {plan.badge && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  {plan.badge}
                </Badge>
              )}
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-1">{plan.name}</h2>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground">{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>
              <div className="mt-auto">
                <Button
                  asChild
                  className="w-full"
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  <Link href={plan.ctaHref}>
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="px-4 pb-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2">Compare all features</h2>
          <p className="text-center text-muted-foreground mb-10">
            Everything you need to know before choosing a plan.
          </p>

          <div className="rounded-2xl border border-border overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-4 bg-muted/50">
              <div className="p-4 font-medium text-sm text-muted-foreground">Feature</div>
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`p-4 text-center font-semibold text-sm ${
                    plan.highlighted ? "text-primary" : ""
                  }`}
                >
                  {plan.name}
                  {plan.highlighted && (
                    <span className="ml-1 text-xs font-normal text-muted-foreground">(Popular)</span>
                  )}
                </div>
              ))}
            </div>

            {/* Feature rows */}
            {featureCategories.map((cat, catIdx) => (
              <div key={cat.category}>
                {/* Category header */}
                <div className="grid grid-cols-4 bg-muted/30 border-t border-border">
                  <div className="col-span-4 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {cat.category}
                  </div>
                </div>

                {/* Feature rows */}
                {cat.features.map((feature, featureIdx) => (
                  <div
                    key={feature.name}
                    className={`grid grid-cols-4 border-t border-border ${
                      featureIdx % 2 === 0 ? "bg-background" : "bg-muted/10"
                    }`}
                  >
                    <div className="p-4 text-sm font-medium">{feature.name}</div>
                    <div className="p-4 flex items-center justify-center">
                      <FeatureValue value={feature.starter} />
                    </div>
                    <div className="p-4 flex items-center justify-center bg-primary/5">
                      <FeatureValue value={feature.pro} />
                    </div>
                    <div className="p-4 flex items-center justify-center">
                      <FeatureValue value={feature.enterprise} />
                    </div>
                  </div>
                ))}
              </div>
            ))}

            {/* CTA row */}
            <div className="grid grid-cols-4 border-t border-border bg-muted/20">
              <div className="p-4" />
              {plans.map((plan) => (
                <div key={plan.name} className={`p-4 ${plan.highlighted ? "bg-primary/5" : ""}`}>
                  <Button
                    asChild
                    size="sm"
                    className="w-full"
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    <Link href={plan.ctaHref}>{plan.cta}</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ nudge */}
      <section className="pb-20 text-center px-4">
        <p className="text-muted-foreground">
          Have questions?{" "}
          <Link href="/contact" className="text-primary underline underline-offset-4 hover:no-underline">
            Talk to our team
          </Link>{" "}
          or{" "}
          <Link href="/faq" className="text-primary underline underline-offset-4 hover:no-underline">
            read the FAQ
          </Link>
          .
        </p>
      </section>
    </div>
  )
}
