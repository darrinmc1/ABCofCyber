/**
 * Server allowlist of Checkout SKUs. The client may send a sku. It must never
 * send a Stripe price id. Lookup keys are built here as
 * abcofcyber_<sku>_<interval>_usd<amount> and resolved with prices.list({ lookup_keys }).
 *
 * Amounts are the USD prices already shown for these plans. Do not add or change them.
 *   abcofcyber_early_adopter_month_usd5
 *   abcofcyber_pro_month_usd10
 *   abcofcyber_whats_the_play_month_usd29
 */

export const STATEMENT_DESCRIPTOR_SUFFIX = "ABCOFCYBER"
export const CHECKOUT_CURRENCY = "usd"

export type CheckoutSku = "early_adopter" | "pro" | "whats_the_play"
export type CheckoutMode = "subscription"
export type BillingInterval = "month"

export interface CheckoutOffer {
  sku: CheckoutSku
  /** Appended after `${siteKey}_`. */
  lookupKeySuffix: string
  mode: CheckoutMode
  interval: BillingInterval
  /** entitlements.product_id, linked to the Clerk user id. */
  entitlementId: string
  /** USD dollars. Stripe unit_amount must equal this × 100, currency usd. */
  priceUsd: number
  /** Button label amount, e.g. "US$5". */
  priceLabel: string
  /** Shown on the Stripe subscription. */
  statementDescription: string
  /**
   * Per-product gate. False keeps the control as "Coming soon" and
   * POST /api/checkout returns 503 even when both Stripe flags are true.
   * These stay false until a purchase delivers a distinct file or an
   * entitlement-gated feature.
   */
  available: boolean
  /** Policy or contract templates ship with this plan. */
  legalTemplate: boolean
}

export const CHECKOUT_OFFERS: Record<CheckoutSku, CheckoutOffer> = {
  early_adopter: {
    sku: "early_adopter",
    lookupKeySuffix: "early_adopter_month_usd5",
    mode: "subscription",
    interval: "month",
    entitlementId: "early_adopter",
    priceUsd: 5,
    priceLabel: "US$5",
    statementDescription: "ABC of Cyber Early Adopter",
    available: false,
    legalTemplate: true,
  },
  pro: {
    sku: "pro",
    lookupKeySuffix: "pro_month_usd10",
    mode: "subscription",
    interval: "month",
    entitlementId: "pro",
    priceUsd: 10,
    priceLabel: "US$10",
    statementDescription: "ABC of Cyber Pro",
    available: false,
    legalTemplate: true,
  },
  whats_the_play: {
    sku: "whats_the_play",
    lookupKeySuffix: "whats_the_play_month_usd29",
    mode: "subscription",
    interval: "month",
    entitlementId: "whats_the_play",
    priceUsd: 29,
    priceLabel: "US$29",
    statementDescription: "ABC of Cyber What's the play",
    available: false,
    legalTemplate: false,
  },
}

const SKUS = new Set<string>(Object.keys(CHECKOUT_OFFERS))

export function offerFromSku(sku: unknown): CheckoutOffer | null {
  if (typeof sku !== "string" || !SKUS.has(sku)) return null
  return CHECKOUT_OFFERS[sku as CheckoutSku]
}

/** Site prefix for lookup keys. Not a secret. Defaults to abcofcyber. */
export function stripeSiteKey(): string {
  const key = process.env.STRIPE_SITE_KEY?.trim()
  if (key && /^[a-z0-9_-]+$/i.test(key)) return key
  return "abcofcyber"
}

export function lookupKeyFor(offer: CheckoutOffer, site = stripeSiteKey()): string {
  return `${site}_${offer.lookupKeySuffix}`
}

/**
 * Client flag. Inlined at build time, so changing it needs a redeploy.
 * Anything other than the string "true" (including unset) leaves Buy disabled.
 */
export function publicStripeEnabled(): boolean {
  return process.env.NEXT_PUBLIC_STRIPE_ENABLED === "true"
}
