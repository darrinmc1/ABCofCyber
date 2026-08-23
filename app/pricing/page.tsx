import Link from "next/link"
import { Check, Minus, ArrowRight, Shield, Zap, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const tiers = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "For individuals and small teams just getting started with cybersecurity fundamentals.",
    cta: "Get Started Free",
    ctaHref: "/signup",
    highlighted: false,
    icon: Shield,
    color: "text-slate-400",
    borderColor: "border-slate-700",
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    description: "For growing teams that need advanced threat detection and real-time monitoring.",
    cta: "Start Free Trial",
    ctaHref: "/signup?plan=pro",
    highlighted: true,
    icon: Zap,
    color: "text-cyan-400",
    borderColor: "border-cyan-500",
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "/month",
    description: "For large organizations requiring full compliance, custom integrations, and dedicated support.",
    cta: "Contact Sales",
    ctaHref: "/contact",
    highlighted: false,
    icon: Building2,
    color: "text-violet-400",
    borderColor: "border-violet-700",
  },
]

const featureCategories = [
  {
    category: "Core Features",
    features: [
      {
        name: "Monitored assets",
        starter: "Up to 5",
        pro: "Up to 50",
        enterprise: "Unlimited",
      },
      {
        name: "Threat scans per month",
        starter: "10",
        pro: "500",
        enterprise: "Unlimited",
      },
      {
        name: "Real-time alerts",
        starter: false,
        pro: true,
        enterprise: true,
      },
      {
        name: "Vulnerability dashboard",
        starter: true,
        pro: true,
        enterprise: true,
      },
      {
        name: "Historical scan data",
        starter: "7 days",
        pro: "90 days",
        enterprise: "Unlimited",
      },
    ],
  },
  {
    category: "Detection & Response",
    features: [
      {
        name: "Automated threat detection",
        starter: false,
        pro: true,
        enterprise: true,
      },
      {
        name: "AI-powered risk scoring",
        starter: false,
        pro: true,
        enterprise: true,
      },
      {
        name: "Incident response playbooks",
        starter: false,
        pro: "5 templates",
        enterprise: "Custom + unlimited",
      },
      {
        name: "Zero-day threat intelligence",
        starter: false,
        pro: false,
        enterprise: true,
      },
      {
        name: "Behavioral anomaly detection",
        starter: false,
        pro: false,
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
        enterprise: "All frameworks",
      },
      {
        name: "Automated compliance reports",
        starter: false,
        pro: true,
        enterprise: true,
      },
      {
        name: "Audit-ready exports",
        starter: false,
        pro: "PDF only",
        enterprise: "PDF, CSV, API",
      },
      {
        name: "Custom report builder",
        starter: false,
        pro: false,
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
    category: "Integrations",
    features: [
      {
        name: "Pre-built integrations",
        starter: "3",
        pro: "25+",
        enterprise: "50+ + custom",
      },
      {
        name: "API access",
        starter: false,
        pro: "Read-only",
        enterprise: "Full read/write",
      },
      {
        name: "Webhook support",
        starter: false,
        pro: true,
        enterprise: true,
      },
      {
        name: "SIEM integration",
        starter: false,
        pro: false,
        enterprise: true,
      },
      {
        name: "SSO / SAML",
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
        name: "Support channels",
        starter: "Community",
        pro: "Email + Chat",
        enterprise: "24/7 Phone + Slack",
      },
      {
        name: "Response time SLA",
        starter: false,
        pro: "< 24 hours",
        enterprise: "< 1 hour",
      },
      {
        name: "Dedicated account manager",
        starter: false,
        pro: false,
        enterprise: true,
      },
      {
        name: "Onboarding assistance",
        starter: false,
        pro: "Self-serve docs",
        enterprise: "White-glove setup",
      },
      {
        name: "Security training resources",
        starter: "Basic",
        pro: "Full library",
        enterprise: "Custom training",
      },
    ],
  },
]

function FeatureValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <span className="flex justify-center">
        <Check className="h-5 w-5 text-cyan-400" />
      </span>
    )
  }
  if (value === false) {
    return (
      <span className="flex justify-center">
        <Minus className="h-4 w-4 text-slate-600" />
      </span>
    )
  }
  return (
    <span className="text-sm text-slate-300 text-center block">{value}</span>
  )
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="pt-24 pb-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 text-sm text-cyan-400 mb-6">
            <Zap className="h-3.5 w-3.5" />
            Simple, transparent pricing
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Choose the plan that fits{" "}
            <span className="text-cyan-400">your security needs</span>
          </h1>
          <p className="text-lg text-slate-400 mb-8">
            Start free and scale as your organization grows. No hidden fees, no surprise charges.
          </p>
          <div className="flex items-center justify-center gap-3 text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-cyan-400" /> 14-day free trial on Pro
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-600" />
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-cyan-400" /> No credit card required
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-600" />
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-cyan-400" /> Cancel anytime
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-4 pb-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => {
            const Icon = tier.icon
            return (
              <div
                key={tier.name}
                className={`relative rounded-2xl border ${
                  tier.highlighted
                    ? "border-cyan-500 bg-cyan-500/5"
                    : tier.borderColor + " bg-slate-900/60"
                } p-6 flex flex-col`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-cyan-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full">
                      {tier.badge}
                    </span>
                  </div>
                )}
                <div className="mb-4">
                  <div className={`inline-flex p-2 rounded-lg bg-slate-800 mb-3`}>
                    <Icon className={`h-5 w-5 ${tier.color}`} />
                  </div>
                  <h2 className="text-xl font-bold">{tier.name}</h2>
                  <p className="text-slate-400 text-sm mt-1">{tier.description}</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.period && (
                    <span className="text-slate-400 text-sm ml-1">{tier.period}</span>
                  )}
                </div>
                <Link href={tier.ctaHref} className="mt-auto">
                  <Button
                    className={`w-full ${
                      tier.highlighted
                        ? "bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold"
                        : "bg-slate-800 hover:bg-slate-700 text-white"
                    }`}
                  >
                    {tier.cta}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
            )
          })}
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="px-4 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Full feature comparison</h2>
            <p className="text-slate-400">See exactly what you get at each tier — no surprises.</p>
          </div>

          <div className="rounded-2xl border border-slate-800 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-4 bg-slate-900 border-b border-slate-800">
              <div className="p-4 text-sm font-medium text-slate-400">Feature</div>
              {tiers.map((tier) => (
                <div key={tier.name} className={`p-4 text-center border-l border-slate-800 ${
                  tier.highlighted ? "bg-cyan-500/10" : ""
                }`}>
                  <span className={`text-sm font-bold ${
                    tier.highlighted ? "text-cyan-400" : "text-white"
                  }`}>
                    {tier.name}
                  </span>
                  {tier.highlighted && (
                    <div className="text-xs text-cyan-500 mt-0.5">Most Popular</div>
                  )}
                </div>
              ))}
            </div>

            {/* Feature Rows */}
            {featureCategories.map((category, catIdx) => (
              <div key={category.category}>
                {/* Category Header */}
                <div className="grid grid-cols-4 bg-slate-900/80 border-b border-slate-800">
                  <div className="col-span-4 px-4 py-2.5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {category.category}
                    </span>
                  </div>
                </div>

                {/* Feature Rows */}
                {category.features.map((feature, featIdx) => (
                  <div
                    key={feature.name}
                    className={`grid grid-cols-4 border-b border-slate-800/60 ${
                      featIdx % 2 === 0 ? "bg-slate-950" : "bg-slate-900/30"
                    } hover:bg-slate-800/30 transition-colors`}
                  >
                    <div className="p-4 text-sm text-slate-300 flex items-center">
                      {feature.name}
                    </div>
                    <div className={`p-4 flex items-center justify-center border-l border-slate-800/60`}>
                      <FeatureValue value={feature.starter} />
                    </div>
                    <div className={`p-4 flex items-center justify-center border-l border-slate-800/60 bg-cyan-500/5`}>
                      <FeatureValue value={feature.pro} />
                    </div>
                    <div className={`p-4 flex items-center justify-center border-l border-slate-800/60`}>
                      <FeatureValue value={feature.enterprise} />
                    </div>
                  </div>
                ))}
              </div>
            ))}

            {/* CTA Row */}
            <div className="grid grid-cols-4 bg-slate-900 border-t border-slate-700">
              <div className="p-4" />
              {tiers.map((tier) => (
                <div key={tier.name} className={`p-4 border-l border-slate-800 ${
                  tier.highlighted ? "bg-cyan-500/10" : ""
                }`}>
                  <Link href={tier.ctaHref}>
                    <Button
                      size="sm"
                      className={`w-full ${
                        tier.highlighted
                          ? "bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold"
                          : "bg-slate-800 hover:bg-slate-700 text-white"
                      }`}
                    >
                      {tier.cta}
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Trust */}
      <section className="px-4 pb-24 border-t border-slate-800">
        <div className="max-w-3xl mx-auto pt-16">
          <h2 className="text-2xl font-bold text-center mb-10">Frequently asked questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Can I switch plans at any time?",
                a: "Yes. You can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is prorated.",
              },
              {
                q: "What happens when my free trial ends?",
                a: "After your 14-day Pro trial, you'll be moved to the Starter (free) plan unless you add a payment method. No charges without your consent.",
              },
              {
                q: "Do you offer discounts for annual billing?",
                a: "Yes — annual plans save you 20% compared to monthly billing. Contact us to switch to annual.",
              },
              {
                q: "Is there a setup fee for Enterprise?",
                a: "No setup fees. Enterprise pricing is all-inclusive. We'll work with you on custom contracts and volume discounts.",
              },
              {
                q: "How is data handled and stored?",
                a: "All data is encrypted at rest and in transit. We are SOC 2 Type II certified and GDPR compliant. Enterprise customers can request data residency options.",
              },
            ].map((item) => (
              <div key={item.q} className="border border-slate-800 rounded-xl p-5 bg-slate-900/40">
                <h3 className="font-semibold text-white mb-2">{item.q}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-400 mb-4">Still have questions? We're happy to help.</p>
            <Link href="/contact">
              <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
                Talk to our team
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
