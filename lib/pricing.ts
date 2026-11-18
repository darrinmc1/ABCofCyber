import { SITE_URL } from "./site"

export const CURRENCY = "AUD"
export const CHECKOUT_LIVE = false

/** Every commercial control uses this. There is no payment URL. */
export const FREE_ACCOUNT_CTA = {
  label: "Create a free account",
  href: "/sign-up",
} as const

export const INTRO_PRICE_NOTE =
  "The intro price applies to the first month only, then renews at A$9/month. Cancel anytime."

export interface FreeItem {
  id: string
  name: string
  description: string
  href: string
}

/** The two or three strongest things on the site. They stay free. */
export const FREE_ITEMS: FreeItem[] = [
  {
    id: "essential-eight",
    name: "Essential Eight starter path",
    description: "Eight practical steps, in order, each linked to the lesson that covers it.",
    href: "/essential-eight",
  },
  {
    id: "whats-the-play",
    name: "What's the play",
    description: "Paste a suspicious scenario. Get a walkthrough cited from lessons already on the site.",
    href: "/whats-the-play",
  },
  {
    id: "frameworks",
    name: "Framework explainers",
    description: "NIST CSF, ISO 27001, CIS, risk, monitoring, and incident response, written as notes.",
    href: "/frameworks",
  },
]

export const PLAN = {
  id: "plan",
  name: "Plan",
  priceAud: 9,
  priceDisplay: "A$9",
  periodLabel: "/month",
  taxLabel: "inc GST",
  introPriceAud: 5,
  introDisplay: "A$5",
  introLabel: "first month",
  description:
    "Limited-time A$5 first month for people who create a free account with their email. Then A$9/month inc GST.",
  note: INTRO_PRICE_NOTE,
  cta: FREE_ACCOUNT_CTA.label,
  href: FREE_ACCOUNT_CTA.href,
}

export const COLLECTIONS = {
  id: "collections",
  name: "Collections",
  priceDisplay: "A$9–19",
  periodLabel: "one-off",
  description: "Download packs of the templates. About A$9–19 each, paid once. Not a subscription.",
  cta: FREE_ACCOUNT_CTA.label,
  href: FREE_ACCOUNT_CTA.href,
  packs: [
    "Security policy, password policy, and access-control matrix",
    "Risk register, vulnerability tracker, and vendor assessment",
    "Incident plan, continuity plan, compliance checklist, and training log",
  ],
}

export function pricingDocument() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "ABC of Cyber pricing",
    url: `${SITE_URL}/pricing`,
    description:
      "One price map. Free lessons, the walkthrough, and framework notes. Plan A$9/month inc GST with an A$5 first month. Collections about A$9–19 one-off. No checkout on this site.",
    numberOfItems: 1 + FREE_ITEMS.length + 1,
    itemListElement: [
      ...FREE_ITEMS.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Offer",
          "@id": `${SITE_URL}/pricing#${item.id}`,
          name: item.name,
          url: `${SITE_URL}${item.href}`,
          price: 0,
          priceCurrency: CURRENCY,
          description: `${item.description} Free.`,
        },
      })),
      {
        "@type": "ListItem",
        position: FREE_ITEMS.length + 1,
        item: {
          "@type": "Offer",
          "@id": `${SITE_URL}/pricing#${PLAN.id}`,
          name: PLAN.name,
          url: `${SITE_URL}${PLAN.href}`,
          price: PLAN.priceAud,
          priceCurrency: CURRENCY,
          description: `${PLAN.description} ${PLAN.note}`,
        },
      },
      {
        "@type": "ListItem",
        position: FREE_ITEMS.length + 2,
        item: {
          "@type": "Offer",
          "@id": `${SITE_URL}/pricing#${COLLECTIONS.id}`,
          name: COLLECTIONS.name,
          url: `${SITE_URL}${COLLECTIONS.href}`,
          lowPrice: 9,
          highPrice: 19,
          priceCurrency: CURRENCY,
          description: COLLECTIONS.description,
        },
      },
    ],
  }
}

export function pricingJson() {
  return {
    product: "ABC of Cyber",
    currency: CURRENCY,
    gst: "included",
    x402: false,
    checkout: "none",
    checkoutLive: CHECKOUT_LIVE,
    updated: "2026-11-18",
    url: `${SITE_URL}/pricing`,
    commercialCta: FREE_ACCOUNT_CTA,
    free: FREE_ITEMS.map((item) => ({
      id: item.id,
      name: item.name,
      priceAud: 0,
      label: "Free",
      description: item.description,
      href: `${SITE_URL}${item.href}`,
    })),
    plan: {
      id: PLAN.id,
      name: PLAN.name,
      priceAud: PLAN.priceAud,
      period: "month",
      tax: PLAN.taxLabel,
      introPriceAud: PLAN.introPriceAud,
      introAppliesTo: "first month only",
      then: "A$9/month",
      cancel: "anytime",
      description: PLAN.description,
      note: PLAN.note,
      href: `${SITE_URL}${PLAN.href}`,
    },
    collections: {
      id: COLLECTIONS.id,
      name: COLLECTIONS.name,
      priceAud: { min: 9, max: 19 },
      period: "one-off",
      description: COLLECTIONS.description,
      packs: COLLECTIONS.packs,
      href: `${SITE_URL}${COLLECTIONS.href}`,
    },
  }
}
