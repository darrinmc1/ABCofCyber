import { Check } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  CHECKOUT_LIVE,
  PLANS,
  WAITLIST_HREF,
  WHATS_THE_PLAY_OFFER,
  planCta,
} from "@/lib/pricing"

export default function PricingCards() {
  return (
    <div className="w-full">
      {!CHECKOUT_LIVE && (
        <p className="mx-auto mb-8 max-w-2xl text-sm leading-6 text-slate-600">
          Checkout is not live. Free lessons are open now. Paid plans (
          {PLANS.filter((plan) => (plan.priceUsd ?? 0) > 0)
            .map((plan) => `${plan.name} ${plan.priceDisplay}${plan.periodLabel}`)
            .join(" and ")}
          ) are the planned training SKUs —{" "}
          <Link href={WAITLIST_HREF} className="font-medium text-blue-700 underline-offset-2 hover:underline">
            join the waitlist
          </Link>{" "}
          to get notified when billing launches.
        </p>
      )}

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {PLANS.map((plan) => {
          const cta = planCta(plan)
          return (
            <Card
              key={plan.id}
              className={`flex flex-col text-left ${
                plan.highlighted ? "border-blue-500 shadow-lg" : ""
              }`}
            >
              {plan.highlighted && (
                <div className="bg-blue-500 py-1 text-center text-sm font-medium text-white">
                  Early adopter rate
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">{plan.priceDisplay}</span>
                  <span className="ml-2 text-gray-500">{plan.periodLabel}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="mr-2 mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  className={`w-full ${plan.highlighted ? "bg-blue-500 hover:bg-blue-600" : ""}`}
                >
                  <Link href={cta.href}>{cta.label}</Link>
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>

      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 text-left">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
          {WHATS_THE_PLAY_OFFER.name}
        </p>
        <p className="mt-2 text-lg font-semibold text-slate-900">
          Included on paid plans
          {CHECKOUT_LIVE ? "" : " when billing launches"}
          {". "}
          ${WHATS_THE_PLAY_OFFER.priceUsd}/mo as a dedicated seat.
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-600">{WHATS_THE_PLAY_OFFER.notes}</p>
        <p className="mt-3">
          <Link href="/whats-the-play" className="text-sm font-medium text-blue-700 hover:underline">
            Open What&apos;s the play
          </Link>
        </p>
      </div>
    </div>
  )
}
