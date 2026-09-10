import Link from "next/link"
import { Check, X, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with the essentials. No credit card required.",
    cta: "Get Started",
    ctaHref: "/signup",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "per month",
    description: "Everything you need to grow your business.",
    cta: "Start Free Trial",
    ctaHref: "/signup?plan=pro",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "per month",
    description: "Advanced features for large teams and organizations.",
    cta: "Contact Sales",
    ctaHref: "/contact",
    highlighted: false,
  },
]

type FeatureValue = boolean | string

const featureCategories = [
  {
    category: "Core Features",
    features: [
      {
        name: "Projects",
        free: "3 projects",
        pro: "Unlimited",
        enterprise: "Unlimited",
      },
      {
        name: "Team Members",
        free: "1 user",
        pro: "Up to 10",
        enterprise: "Unlimited",
      },
      {
        name: "Storage",
        free: "1 GB",
        pro: "50 GB",
        enterprise: "500 GB",
      },
      {
        name: "API Requests",
        free: "1,000 / mo",
        pro: "100,000 / mo",
        enterprise: "Unlimited",
      },
    ],
  },
  {
    category: "Collaboration",
    features: [
      {
        name: "Real-time Collaboration",
        free: false,
        pro: true,
        enterprise: true,
      },
      {
        name: "Comments & Annotations",
        free: false,
        pro: true,
        enterprise: true,
      },
      {
        name: "Version History",
        free: "7 days",
        pro: "90 days",
        enterprise: "Unlimited",
      },
      {
        name: "Guest Access",
        free: false,
        pro: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "Integrations",
    features: [
      {
        name: "Third-party Integrations",
        free: "2 integrations",
        pro: "20 integrations",
        enterprise: "Unlimited",
      },
      {
        name: "Webhooks",
        free: false,
        pro: true,
        enterprise: true,
      },
      {
        name: "Custom Integrations",
        free: false,
        pro: false,
        enterprise: true,
      },
      {
        name: "SSO / SAML",
        free: false,
        pro: false,
        enterprise: true,
      },
    ],
  },
  {
    category: "Security & Compliance",
    features: [
      {
        name: "Two-Factor Authentication",
        free: true,
        pro: true,
        enterprise: true,
      },
      {
        name: "Audit Logs",
        free: false,
        pro: "30 days",
        enterprise: "1 year",
      },
      {
        name: "Role-based Access Control",
        free: false,
        pro: true,
        enterprise: true,
      },
      {
        name: "SOC 2 Compliance",
        free: false,
        pro: false,
        enterprise: true,
      },
      {
        name: "Custom Data Retention",
        free: false,
        pro: false,
        enterprise: true,
      },
    ],
  },
  {
    category: "Support",
    features: [
      {
        name: "Community Support",
        free: true,
        pro: true,
        enterprise: true,
      },
      {
        name: "Email Support",
        free: false,
        pro: true,
        enterprise: true,
      },
      {
        name: "Priority Support",
        free: false,
        pro: false,
        enterprise: true,
      },
      {
        name: "Dedicated Account Manager",
        free: false,
        pro: false,
        enterprise: true,
      },
      {
        name: "SLA Guarantee",
        free: false,
        pro: false,
        enterprise: true,
      },
    ],
  },
]

function FeatureCell({ value }: { value: FeatureValue }) {
  if (typeof value === "boolean") {
    if (value) {
      return (
        <div className="flex justify-center">
          <Check className="h-5 w-5 text-green-500" aria-label="Included" />
        </div>
      )
    }
    return (
      <div className="flex justify-center">
        <X className="h-5 w-5 text-muted-foreground/40" aria-label="Not included" />
      </div>
    )
  }
  return (
    <div className="text-center text-sm font-medium text-foreground">
      {value}
    </div>
  )
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            Pricing
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-muted-foreground">
            Choose the plan that fits your needs. Upgrade or downgrade at any time.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-4 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-3 py-1">
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                <div className="mb-6">
                  <h2 className="text-xl font-bold mb-1">{plan.name}</h2>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground text-sm">/{plan.period}</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <Button
                    asChild
                    className="w-full"
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    <Link href={plan.ctaHref}>{plan.cta}</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-4 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Compare all features</h2>
            <p className="text-muted-foreground">
              A detailed breakdown of everything included in each plan.
            </p>
          </div>

          <div className="rounded-2xl border border-border overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-4 bg-muted/50">
              <div className="p-5 font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                Features
              </div>
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`p-5 text-center ${
                    plan.highlighted ? "bg-primary/10" : ""
                  }`}
                >
                  <div className="font-bold text-base">{plan.name}</div>
                  <div className="text-sm text-muted-foreground mt-0.5">
                    {plan.price}
                    <span className="text-xs">/{plan.period}</span>
                  </div>
                  {plan.badge && (
                    <Badge className="mt-2 text-xs bg-primary text-primary-foreground">
                      {plan.badge}
                    </Badge>
                  )}
                </div>
              ))}
            </div>

            {/* Feature Categories */}
            {featureCategories.map((category, categoryIndex) => (
              <div key={category.category}>
                {/* Category Header */}
                <div className="grid grid-cols-4 bg-muted/30 border-t border-border">
                  <div className="col-span-4 px-5 py-3">
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {category.category}
                    </span>
                  </div>
                </div>

                {/* Feature Rows */}
                {category.features.map((feature, featureIndex) => (
                  <div
                    key={feature.name}
                    className={`grid grid-cols-4 border-t border-border/50 hover:bg-muted/20 transition-colors ${
                      featureIndex % 2 === 0 ? "" : "bg-muted/10"
                    }`}
                  >
                    <div className="p-4 px-5 text-sm font-medium text-foreground flex items-center">
                      {feature.name}
                    </div>
                    <div
                      className={`p-4 flex items-center justify-center ${
                        plans[0].highlighted ? "bg-primary/5" : ""
                      }`}
                    >
                      <FeatureCell value={feature.free} />
                    </div>
                    <div className="p-4 flex items-center justify-center bg-primary/5">
                      <FeatureCell value={feature.pro} />
                    </div>
                    <div className="p-4 flex items-center justify-center">
                      <FeatureCell value={feature.enterprise} />
                    </div>
                  </div>
                ))}
              </div>
            ))}

            {/* CTA Row */}
            <div className="grid grid-cols-4 border-t border-border bg-muted/20">
              <div className="p-5" />
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`p-5 flex justify-center ${
                    plan.highlighted ? "bg-primary/10" : ""
                  }`}
                >
                  <Button
                    asChild
                    size="sm"
                    variant={plan.highlighted ? "default" : "outline"}
                    className="w-full max-w-[160px]"
                  >
                    <Link href={plan.ctaHref}>{plan.cta}</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Trust Section */}
      <section className="px-4 pb-24 border-t border-border">
        <div className="max-w-3xl mx-auto pt-16 text-center">
          <h2 className="text-2xl font-bold mb-3">Still have questions?</h2>
          <p className="text-muted-foreground mb-6">
            Our team is happy to help you find the right plan for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild variant="outline">
              <Link href="/faq">View FAQ</Link>
            </Button>
            <Button asChild>
              <Link href="/contact">Talk to Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
