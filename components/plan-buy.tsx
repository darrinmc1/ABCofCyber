import { BuyButton } from "@/components/buy-button"
import { launchOfferLabel } from "@/lib/launch-offer"
import type { CheckoutSku } from "@/lib/offers"
import { stripePaymentsEnabled } from "@/lib/stripe"

/** Server wrapper. Launch copy is passed only while payments are on and the offer is open. */
export function PlanBuy({ sku }: { sku: CheckoutSku }) {
  const paymentsOn = stripePaymentsEnabled()
  return (
    <BuyButton
      sku={sku}
      paymentsOn={paymentsOn}
      launchOfferLabel={paymentsOn ? launchOfferLabel() : null}
    />
  )
}
