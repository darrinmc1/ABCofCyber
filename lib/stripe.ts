import Stripe from "stripe"

const key = process.env.STRIPE_SECRET_KEY

export const stripe = key
  ? new Stripe(key, { apiVersion: "2026-09-30.endive" })
  : null

/**
 * Runtime gate for checkout and the webhook.
 * Both STRIPE_ENABLED and NEXT_PUBLIC_STRIPE_ENABLED must be the string "true".
 * Unset, "false", or any other value keeps payments closed.
 */
export function stripePaymentsEnabled(): boolean {
  return (
    process.env.STRIPE_ENABLED === "true" &&
    process.env.NEXT_PUBLIC_STRIPE_ENABLED === "true"
  )
}
