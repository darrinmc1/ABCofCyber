/**
 * Paid checkout is not connected. This control never links to a payment page
 * and never shows a price.
 */
export function BuyButton() {
  return (
    <button
      type="button"
      disabled
      aria-disabled="true"
      className="w-full cursor-not-allowed rounded-lg border border-slate-200 bg-slate-100 px-6 py-3 text-center text-sm font-semibold text-slate-500"
    >
      Coming soon
    </button>
  )
}
