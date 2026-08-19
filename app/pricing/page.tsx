import Link from "next/link";
import { Check, X, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Perfect for individuals getting started with cybersecurity basics.",
    cta: "Get Started Free",
    ctaHref: "/sign-up",
    highlight: false,
    badge: null,
  },
  {
    name: "Pro",
    price: "$9",
    period: "/month",
    description: "For professionals who need deeper tools and guided learning paths.",
    cta: "Start Pro Trial",
    ctaHref: "/sign-up?plan=pro",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Team",
    price: "$29",
    period: "/month",
    description: "For small teams and businesses building a security-aware culture.",
    cta: "Start Team Trial",
    ctaHref: "/sign-up?plan=team",
    highlight: false,
    badge: null,
  },
];

type FeatureValue = boolean | string;

interface FeatureRow {
  category: string;
  features: {
    name: string;
    free: FeatureValue;
    pro: FeatureValue;
    team: FeatureValue;
    tooltip?: string;
  }[];
}

const featureRows: FeatureRow[] = [
  {
    category: "Learning & Content",
    features: [
      { name: "Core cybersecurity lessons", free: true, pro: true, team: true },
      { name: "Lesson modules available", free: "5 modules", pro: "All 20+ modules", team: "All 20+ modules" },
      { name: "Framework guides (NIST, ISO, CIS)", free: "Preview only", pro: true, team: true },
      { name: "Downloadable cheat sheets & resources", free: false, pro: true, team: true },
      { name: "New content early access", free: false, pro: true, team: true },
    ],
  },
  {
    category: "AI-Powered Tools",
    features: [
      { name: "AI security scenario generator", free: "3/month", pro: "Unlimited", team: "Unlimited" },
      { name: "What's the Play? decision tool", free: "3/month", pro: "Unlimited", team: "Unlimited" },
      { name: "Guided walkthrough assistant", free: false, pro: true, team: true },
      { name: "Custom scenario creation", free: false, pro: true, team: true },
    ],
  },
  {
    category: "Dashboard & Tracking",
    features: [
      { name: "Personal progress dashboard", free: false, pro: true, team: true },
      { name: "Learning streak tracking", free: false, pro: true, team: true },
      { name: "Skill gap analysis", free: false, pro: true, team: true },
      { name: "Team member management", free: false, pro: false, team: true },
      { name: "Team progress reporting", free: false, pro: false, team: true },
      { name: "Seats included", free: "1", pro: "1", team: "Up to 10" },
    ],
  },
  {
    category: "Support & Community",
    features: [
      { name: "Community forum access", free: true, pro: true, team: true },
      { name: "Email support", free: false, pro: true, team: true },
      { name: "Priority support", free: false, pro: false, team: true },
      { name: "Onboarding call", free: false, pro: false, team: true },
    ],
  },
];

function FeatureCell({ value }: { value: FeatureValue }) {
  if (value === true) {
    return (
      <span className="flex justify-center">
        <Check className="h-5 w-5 text-green-500" aria-label="Included" />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="flex justify-center">
        <X className="h-5 w-5 text-zinc-400" aria-label="Not included" />
      </span>
    );
  }
  return (
    <span className="flex justify-center text-sm text-zinc-300 font-medium">
      {value}
    </span>
  );
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Hero */}
      <section className="py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          No hidden fees. No confusing tiers. Pick the plan that fits where you
          are in your cybersecurity journey — and upgrade anytime.
        </p>
      </section>

      {/* Plan Cards */}
      <section className="px-4 pb-12 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-6 flex flex-col gap-4 ${
                plan.highlight
                  ? "border-cyan-500 bg-zinc-900 shadow-lg shadow-cyan-500/10"
                  : "border-zinc-800 bg-zinc-900"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-500 text-zinc-950 text-xs font-bold px-3 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}
              <div>
                <h2 className="text-xl font-bold">{plan.name}</h2>
                <div className="mt-2 flex items-end gap-1">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="text-zinc-400 mb-1">{plan.period}</span>
                </div>
                <p className="text-zinc-400 text-sm mt-2">{plan.description}</p>
              </div>
              <Link href={plan.ctaHref} className="mt-auto">
                <Button
                  className={`w-full ${
                    plan.highlight
                      ? "bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold"
                      : "bg-zinc-800 hover:bg-zinc-700 text-white"
                  }`}
                >
                  {plan.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-4 pb-20 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">
          Full Feature Comparison
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-zinc-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-800 bg-zinc-900">
                <th className="text-left py-4 px-5 text-zinc-400 font-semibold w-1/2">
                  Feature
                </th>
                {plans.map((plan) => (
                  <th
                    key={plan.name}
                    className={`py-4 px-4 text-center font-bold ${
                      plan.highlight ? "text-cyan-400" : "text-white"
                    }`}
                  >
                    {plan.name}
                    <div
                      className={`text-xs font-normal mt-0.5 ${
                        plan.highlight ? "text-cyan-300" : "text-zinc-400"
                      }`}
                    >
                      {plan.price}{plan.period}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featureRows.map((section) => (
                <>
                  <tr
                    key={section.category}
                    className="bg-zinc-800/60 border-t border-zinc-700"
                  >
                    <td
                      colSpan={4}
                      className="py-2.5 px-5 text-xs font-bold uppercase tracking-widest text-zinc-400"
                    >
                      {section.category}
                    </td>
                  </tr>
                  {section.features.map((feature, i) => (
                    <tr
                      key={feature.name}
                      className={`border-t border-zinc-800/60 ${
                        i % 2 === 0 ? "bg-zinc-950" : "bg-zinc-900/40"
                      } hover:bg-zinc-800/30 transition-colors`}
                    >
                      <td className="py-3 px-5 text-zinc-300">{feature.name}</td>
                      <td className="py-3 px-4">
                        <FeatureCell value={feature.free} />
                      </td>
                      <td className="py-3 px-4 bg-cyan-500/5">
                        <FeatureCell value={feature.pro} />
                      </td>
                      <td className="py-3 px-4">
                        <FeatureCell value={feature.team} />
                      </td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-zinc-800 bg-zinc-900">
                <td className="py-5 px-5" />
                {plans.map((plan) => (
                  <td key={plan.name} className="py-5 px-4 text-center">
                    <Link href={plan.ctaHref}>
                      <Button
                        size="sm"
                        className={`w-full ${
                          plan.highlight
                            ? "bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold"
                            : "bg-zinc-800 hover:bg-zinc-700 text-white"
                        }`}
                      >
                        {plan.cta}
                      </Button>
                    </Link>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Trust note */}
        <p className="text-center text-zinc-500 text-sm mt-6">
          All paid plans include a{" "}
          <span className="text-zinc-300 font-medium">7-day free trial</span>.
          Cancel anytime. No credit card required to start Free.
        </p>
      </section>

      {/* FAQ teaser */}
      <section className="border-t border-zinc-800 py-14 px-4 text-center">
        <h2 className="text-xl font-bold mb-2">Still have questions?</h2>
        <p className="text-zinc-400 mb-6">
          We&apos;re happy to help you find the right plan for your needs.
        </p>
        <Link href="/contact">
          <Button variant="outline" className="border-zinc-600 text-white hover:bg-zinc-800">
            Contact Us
          </Button>
        </Link>
      </section>
    </main>
  );
}
