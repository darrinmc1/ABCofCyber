import Link from "next/link"
import { Check, X, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with the fundamentals of cybersecurity at no cost.",
    cta: "Get Started",
    ctaHref: "/sign-up",
    highlight: false,
    badge: null,
  },
  {
    name: "Pro",
    price: "$19",
    period: "per month",
    description: "For individuals serious about advancing their cybersecurity skills.",
    cta: "Start Pro",
    ctaHref: "/sign-up?plan=pro",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Team",
    price: "$49",
    period: "per seat / month",
    description: "For organizations training multiple security professionals.",
    cta: "Contact Sales",
    ctaHref: "/contact",
    highlight: false,
    badge: null,
  },
]

type FeatureValue = boolean | string

interface Feature {
  category: string
  items: {
    name: string
    description?: string
    free: FeatureValue
    pro: FeatureValue
    team: FeatureValue
  }[]
}

const features: Feature[] = [
  {
    category: "Learning Content",
    items: [
      {
        name: "Course library access",
        description: "Browse and enroll in available courses",
        free: "5 courses",
        pro: "Unlimited",
        team: "Unlimited",
      },
      {
        name: "Hands-on labs",
        description: "Interactive virtual lab environments",
        free: "3 labs / month",
        pro: "Unlimited",
        team: "Unlimited",
      },
      {
        name: "CTF challenges",
        description: "Capture the Flag competitions and practice",
        free: "Basic",
        pro: "All levels",
        team: "All levels",
      },
      {
        name: "Learning paths",
        description: "Structured curriculum for specific roles",
        free: false,
        pro: true,
        team: true,
      },
      {
        name: "Offline downloads",
        description: "Download content for offline study",
        free: false,
        pro: true,
        team: true,
      },
    ],
  },
  {
    category: "Certifications & Progress",
    items: [
      {
        name: "Course completion certificates",
        description: "Shareable certificates upon course completion",
        free: false,
        pro: true,
        team: true,
      },
      {
        name: "Skill assessments",
        description: "Evaluate your knowledge with graded assessments",
        free: "Basic",
        pro: "Advanced",
        team: "Advanced",
      },
      {
        name: "Progress tracking",
        description: "Detailed analytics on your learning journey",
        free: "Basic",
        pro: "Detailed",
        team: "Detailed",
      },
      {
        name: "Leaderboard ranking",
        description: "Compete with peers on global leaderboards",
        free: true,
        pro: true,
        team: true,
      },
    ],
  },
  {
    category: "Community & Support",
    items: [
      {
        name: "Community forum access",
        description: "Participate in discussions and Q&A",
        free: true,
        pro: true,
        team: true,
      },
      {
        name: "Priority support",
        description: "Faster response times from our support team",
        free: false,
        pro: true,
        team: true,
      },
      {
        name: "Live Q&A sessions",
        description: "Monthly live sessions with instructors",
        free: false,
        pro: true,
        team: true,
      },
      {
        name: "Dedicated account manager",
        description: "Personal point of contact for your organization",
        free: false,
        pro: false,
        team: true,
      },
    ],
  },
  {
    category: "Team & Administration",
    items: [
      {
        name: "Team dashboard",
        description: "Centralized view of team progress and activity",
        free: false,
        pro: false,
        team: true,
      },
      {
        name: "User management",
        description: "Add, remove, and manage team members",
        free: false,
        pro: false,
        team: true,
      },
      {
        name: "Custom learning paths",
        description: "Create tailored curricula for your team",
        free: false,
        pro: false,
        team: true,
      },
      {
        name: "SSO / SAML integration",
        description: "Single sign-on with your identity provider",
        free: false,
        pro: false,
        team: true,
      },
      {
        name: "Usage & compliance reports",
        description: "Exportable reports for auditing and compliance",
        free: false,
        pro: false,
        team: true,
      },
    ],
  },
]

function FeatureCell({ value }: { value: FeatureValue }) {
  if (typeof value === "string") {
    return (
      <span className="text-sm text-foreground font-medium">{value}</span>
    )
  }
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center">
        <Check className="h-5 w-5 text-green-500" aria-label="Included" />
      </span>
    )
  }
  return (
    <span className="inline-flex items-center justify-center">
      <X className="h-4 w-4 text-muted-foreground/40" aria-label="Not included" />
    </span>
  )
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <Badge variant="outline" className="mb-4 text-xs uppercase tracking-widest">
            Pricing
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your goals. Upgrade or downgrade at any time.
          </p>
        </div>
      </section>

      {/* Tier Cards */}
      <section className="px-4 pb-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`relative flex flex-col ${
                tier.highlight
                  ? "border-primary shadow-lg shadow-primary/10 ring-1 ring-primary"
                  : "border-border"
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-3 py-0.5 text-xs font-semibold">
                    {tier.badge}
                  </Badge>
                </div>
              )}
              <CardHeader className="pb-4 pt-8">
                <CardTitle className="text-xl font-bold">{tier.name}</CardTitle>
                <div className="mt-2 flex items-end gap-1">
                  <span className="text-4xl font-extrabold tracking-tight">{tier.price}</span>
                  <span className="text-sm text-muted-foreground mb-1">/{tier.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{tier.description}</p>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 justify-end">
                <Button
                  asChild
                  className="w-full"
                  variant={tier.highlight ? "default" : "outline"}
                >
                  <Link href={tier.ctaHref}>{tier.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-4 pb-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Full feature comparison</h2>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="text-left px-6 py-4 font-semibold text-muted-foreground w-2/5">
                    Feature
                  </th>
                  {tiers.map((tier) => (
                    <th
                      key={tier.name}
                      className={`text-center px-6 py-4 font-bold ${
                        tier.highlight ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((section, sIdx) => (
                  <>
                    <tr key={`cat-${sIdx}`} className="bg-muted/20">
                      <td
                        colSpan={4}
                        className="px-6 py-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground"
                      >
                        {section.category}
                      </td>
                    </tr>
                    {section.items.map((item, iIdx) => (
                      <tr
                        key={`item-${sIdx}-${iIdx}`}
                        className="border-t border-border/50 hover:bg-muted/10 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="font-medium text-foreground">{item.name}</div>
                          {item.description && (
                            <div className="text-xs text-muted-foreground mt-0.5">
                              {item.description}
                            </div>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <FeatureCell value={item.free} />
                        </td>
                        <td className="px-6 py-4 text-center bg-primary/5">
                          <FeatureCell value={item.pro} />
                        </td>
                        <td className="px-6 py-4 text-center">
                          <FeatureCell value={item.team} />
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-8">
            {tiers.map((tier) => (
              <div key={tier.name} className="rounded-xl border border-border overflow-hidden">
                <div
                  className={`px-4 py-3 font-bold text-base ${
                    tier.highlight
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}
                >
                  {tier.name} — {tier.price}
                  <span className="text-xs font-normal opacity-75 ml-1">/{tier.period}</span>
                </div>
                {features.map((section, sIdx) => (
                  <div key={sIdx}>
                    <div className="px-4 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground bg-muted/30 border-t border-border">
                      {section.category}
                    </div>
                    {section.items.map((item, iIdx) => {
                      const val = tier.name === "Free" ? item.free : tier.name === "Pro" ? item.pro : item.team
                      return (
                        <div
                          key={iIdx}
                          className="flex items-center justify-between px-4 py-3 border-t border-border/50 text-sm"
                        >
                          <span className="text-foreground">{item.name}</span>
                          <FeatureCell value={val} />
                        </div>
                      )
                    })}
                  </div>
                ))}
                <div className="p-4 border-t border-border">
                  <Button
                    asChild
                    className="w-full"
                    variant={tier.highlight ? "default" : "outline"}
                    size="sm"
                  >
                    <Link href={tier.ctaHref}>{tier.cta}</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / CTA */}
      <section className="border-t border-border py-16 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Still have questions?</h2>
          <p className="text-muted-foreground mb-6">
            Our team is happy to walk you through the right plan for your needs.
          </p>
          <Button asChild variant="outline">
            <Link href="/contact">Talk to sales</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
