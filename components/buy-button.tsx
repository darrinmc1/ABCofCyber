"use client"

import { useState } from "react"
import { LegalNotice } from "@/components/legal-notice"
import { MerchantOfRecordDisclosure } from "@/components/merchant-of-record-disclosure"
import { RefundPolicyNote } from "@/components/refund-policy-note"
import { CHECKOUT_OFFERS, publicStripeEnabled, type CheckoutSku } from "@/lib/offers"
import { getSupportEmail } from "@/lib/support-email"

/**
 * Buy stays a disabled "Coming soon: US$…" control, and never calls
 * /api/checkout, unless both payment flags are "true" AND the offer's
 * available flag is true.
 *
 * launchOfferLabel is computed on the server. It is shown only when payments
 * are on and the offer is still running. Pass null otherwise.
 */
export function BuyButton({
  sku,
  paymentsOn = false,
  launchOfferLabel = null,
}: {
  sku: CheckoutSku
  paymentsOn?: boolean
  launchOfferLabel?: string | null
}) {
  const offer = CHECKOUT_OFFERS[sku]
  const supportEmail = getSupportEmail()
  const onSale = paymentsOn && publicStripeEnabled() && offer.available
  const showLaunch = paymentsOn && publicStripeEnabled() && Boolean(launchOfferLabel)

  return (
    <div className="w-full">
      {onSale ? (
        <EnabledBuy sku={sku} label={`Buy — ${offer.priceLabel}`} />
      ) : (
        <button
          type="button"
          disabled
          aria-disabled="true"
          className="w-full cursor-not-allowed rounded-lg border border-slate-200 bg-slate-100 px-6 py-3 text-center text-sm font-semibold text-slate-500"
        >
          Coming soon: {offer.priceLabel}
        </button>
      )}

      {showLaunch ? (
        <p className="mt-2 text-sm font-semibold text-emerald-700">{launchOfferLabel}</p>
      ) : null}

      <MerchantOfRecordDisclosure className="mt-3 text-xs leading-5 text-slate-500" />
      <RefundPolicyNote className="mt-2 text-xs leading-5 text-slate-500" />
      {offer.legalTemplate ? (
        <LegalNotice className="mt-2 text-xs leading-5 text-slate-500" />
      ) : null}

      {supportEmail ? (
        <p className="mt-2 text-xs text-slate-500">
          Questions about a purchase?{" "}
          <a href={`mailto:${supportEmail}`} className="text-blue-700 hover:underline">
            {supportEmail}
          </a>
        </p>
      ) : null}
    </div>
  )
}

function EnabledBuy({ sku, label }: { sku: CheckoutSku; label: string }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onBuy() {
    setError(null)
    setLoading(true)
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sku }),
      })
      if (res.status === 401) {
        const next = encodeURIComponent(window.location.pathname)
        window.location.href = `/sign-in?redirect_url=${next}`
        return
      }
      const data = (await res.json().catch(() => null)) as { url?: string; error?: string } | null
      if (res.ok && data?.url) {
        window.location.href = data.url
        return
      }
      setError(data?.error ?? "Checkout is not available right now.")
      setLoading(false)
    } catch {
      setError("Checkout is not available right now.")
      setLoading(false)
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={onBuy}
        disabled={loading}
        className="w-full rounded-lg bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
      >
        {loading ? "Redirecting…" : label}
      </button>
      {error ? <p className="mt-2 text-xs text-red-600">{error}</p> : null}
    </>
  )
}
