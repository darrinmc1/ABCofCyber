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
  priceUsd: null as number | null,
  currency: "USD",
  billing: "included" as const,
  billingInterval: null as string | null,
  checkout: "coming-soon" as const,
  x402: false,
  includedInPlanIds: ["training"] as const,
  freeAllowance: "1 walkthrough",
  url: `${SITE_URL}/whats-the-play`,
  notes:
    "Included in the $29/month ABC of Cyber training membership. Not a separate product, not a managed-security SKU. Checkout is not live. No x402 or card charges.",
}

export const PLANS: PricePlan[] = [
  {
    id: "training",
    name: "Training",
    priceUsd: 29,
    priceDisplay: "$29",
    period: "month",
    periodLabel: "/month",
    description:
      "One training membership: lessons, assessments, and reporting. Not 24/7 monitoring, not pentesting, not a managed SOC.",
    features: [
      "All lessons and courses",
      "Assessments and progress tracking",
      "Reporting you can share",
      "What's the play walkthroughs (education, not legal advice)",
      "Training templates",
    ],
    cta: "Checkout coming",
    href: "/learn",
    highlighted: true,
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
      "One training membership for ABC of Cyber. What's the play is included — not a separate brand, not a live checkout.",
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
        availability: "https://schema.org/PreOrder",
        description: plan.description,
        category: "EducationalSubscription",
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
          {
            "@type": "PropertyValue",
            name: "checkout",
            value: "coming-soon",
          },
        ],
      },
    })),
    additionalProperty: {
      "@type": "Offer",
      "@id": `${SITE_URL}/pricing#whats-the-play`,
      name: WHATS_THE_PLAY_OFFER.name,
      url: WHATS_THE_PLAY_OFFER.url,
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
    updated: "2026-08-14",
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
      cta: plan.cta,
    })),
    offers: [WHATS_THE_PLAY_OFFER],
  }
}
