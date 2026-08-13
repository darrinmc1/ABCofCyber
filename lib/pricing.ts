import { SITE_URL } from "./site"

export type BillingPeriod = "month" | "forever"

export interface PricePlan {
  id: string
  name: string
  priceUsd: number | null
  priceDisplay: string
  period: BillingPeriod
  periodLabel: string
  description: string
  features: string[]
  href: string
  highlighted: boolean
  cta: string
  includesWhatsThePlay: boolean
}

export const WHATS_THE_PLAY_OFFER = {
  id: "whats-the-play",
  name: "What's the play",
  product: "ABC of Cyber",
  kind: "paid-plan-include" as const,
  priceUsd: 29,
  currency: "USD",
  billing: "month" as const,
  billingInterval: "P1M",
  priceRangeUsd: { min: 19, max: 50 },
  checkout: "existing-subscription",
  x402: false,
  includedInPlanIds: ["early-adopter", "pro"] as const,
  freeAllowance: "1 walkthrough",
  url: `${SITE_URL}/whats-the-play`,
  notes:
    "Included on paid ABC of Cyber plans. Listed at $29/month if billed as a dedicated seat. Same signup pattern as Early Adopter / Pro. No x402 or crypto checkout.",
}

export const PLANS: PricePlan[] = [
  {
    id: "free",
    name: "Free",
    priceUsd: 0,
    priceDisplay: "$0",
    period: "forever",
    periodLabel: "forever",
    description: "Get started with courses and one educational walkthrough. No credit card needed.",
    features: [
      "All courses & lessons",
      "1 What's the play walkthrough",
      "Basic tools access",
      "Community access",
    ],
    cta: "Get Started Free",
    href: "/learn",
    highlighted: false,
    includesWhatsThePlay: false,
  },
  {
    id: "early-adopter",
    name: "Early Adopter",
    priceUsd: 5,
    priceDisplay: "$5",
    period: "month",
    periodLabel: "/month",
    description: "Lock in early adopter pricing forever — never pay more.",
    features: [
      "Everything in Free",
      "Unlimited What's the play walkthroughs",
      "All Pro template packs",
      "All interactive tools",
      "30-day refund guarantee",
      "Price locked forever",
    ],
    cta: "Lock in $5/mo",
    href: "/improvements",
    highlighted: true,
    includesWhatsThePlay: true,
  },
  {
    id: "pro",
    name: "Pro",
    priceUsd: 10,
    priceDisplay: "$10",
    period: "month",
    periodLabel: "/month",
    description: "Full access when it launches. More features coming.",
    features: [
      "Everything in Early Adopter",
      "Advanced features & AI tools",
      "New content priority",
      "Priority support",
    ],
    cta: "Coming Soon",
    href: "/improvements",
    highlighted: false,
    includesWhatsThePlay: true,
  },
]

export function pricingDocument() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${WHATS_THE_PLAY_OFFER.product} pricing`,
    url: `${SITE_URL}/pricing`,
    description:
      "Parseable subscription pricing for ABC of Cyber. What's the play is a paid-plan include, not a separate brand.",
    numberOfItems: PLANS.length,
    itemListElement: PLANS.map((plan, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Offer",
        "@id": `${SITE_URL}/pricing#${plan.id}`,
        name: plan.name,
        url: `${SITE_URL}${plan.href}`,
        price: plan.priceUsd ?? undefined,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        description: plan.description,
        category: "Subscription",
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "includesWhatsThePlay",
            value: String(plan.includesWhatsThePlay),
          },
          {
            "@type": "PropertyValue",
            name: "x402",
            value: "false",
          },
        ],
      },
    })),
    additionalProperty: {
      "@type": "Offer",
      "@id": `${SITE_URL}/pricing#whats-the-play`,
      name: WHATS_THE_PLAY_OFFER.name,
      url: WHATS_THE_PLAY_OFFER.url,
      price: WHATS_THE_PLAY_OFFER.priceUsd,
      priceCurrency: WHATS_THE_PLAY_OFFER.currency,
      description: WHATS_THE_PLAY_OFFER.notes,
      additionalProperty: [
        { "@type": "PropertyValue", name: "kind", value: WHATS_THE_PLAY_OFFER.kind },
        { "@type": "PropertyValue", name: "x402", value: "false" },
        {
          "@type": "PropertyValue",
          name: "includedIn",
          value: WHATS_THE_PLAY_OFFER.includedInPlanIds.join(", "),
        },
      ],
    },
  }
}

export function pricingJson() {
  return {
    product: WHATS_THE_PLAY_OFFER.product,
    currency: "USD",
    x402: false,
    checkout: WHATS_THE_PLAY_OFFER.checkout,
    updated: "2026-08-13",
    url: `${SITE_URL}/pricing`,
    plans: PLANS.map((plan) => ({
      id: plan.id,
      name: plan.name,
      priceUsd: plan.priceUsd,
      period: plan.period,
      description: plan.description,
      features: plan.features,
      href: `${SITE_URL}${plan.href}`,
      includesWhatsThePlay: plan.includesWhatsThePlay,
    })),
    offers: [WHATS_THE_PLAY_OFFER],
  }
}
