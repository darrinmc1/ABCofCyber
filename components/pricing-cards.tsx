import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RefundPolicyNote } from "@/components/refund-policy-note"
import { COLLECTIONS, FREE_ITEMS, PLAN } from "@/lib/pricing"

export default function PricingCards() {
  return (
    <div className="w-full">
      <p className="mx-auto mb-8 max-w-2xl text-sm leading-6 text-slate-600">
        One price map. Checkout is not on this page, so nothing here takes a card. The way to
        hold the A$5 first month is to create a free account with your email.
      </p>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <Card className="flex flex-col border-emerald-300 text-left">
          <div className="bg-emerald-600 py-1 text-center text-sm font-medium text-white">Free</div>
          <CardHeader>
            <CardTitle>Free</CardTitle>
            <CardDescription>The strongest material. It stays free. Labelled free so nobody has to guess.</CardDescription>
            <div className="mt-4">
              <span className="text-3xl font-bold">Free</span>
            </div>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-3">
              {FREE_ITEMS.map((item) => (
                <li key={item.id} className="text-sm leading-6 text-slate-700">
                  <Link href={item.href} className="font-medium text-blue-700 hover:underline">
                    {item.name}
                  </Link>
                  <span className="mt-0.5 block text-slate-600">{item.description}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/learn">Browse free lessons</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col border-blue-500 text-left shadow-lg">
          <div className="bg-blue-600 py-1 text-center text-sm font-medium text-white">Plan</div>
          <CardHeader>
            <CardTitle>{PLAN.name}</CardTitle>
            <CardDescription>{PLAN.description}</CardDescription>
            <div className="mt-4">
              <span className="text-3xl font-bold">{PLAN.priceDisplay}</span>
              <span className="ml-2 text-gray-500">{PLAN.periodLabel}</span>
              <span className="ml-2 text-sm text-slate-500">{PLAN.taxLabel}</span>
            </div>
            <p className="text-sm text-slate-700">
              <span className="font-semibold">{PLAN.introDisplay}</span> {PLAN.introLabel}, then {PLAN.priceDisplay}/month.
            </p>
          </CardHeader>
          <CardContent className="flex-grow space-y-3 text-sm leading-6 text-slate-700">
            <p>{PLAN.note}</p>
            <ul className="space-y-2">
              {["Lessons, the walkthrough, and the framework notes", "Cancel anytime", "No lifetime price"].map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="mr-2 mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="flex flex-col items-stretch gap-3">
            <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
              <Link href={PLAN.href}>{PLAN.cta}</Link>
            </Button>
            <RefundPolicyNote />
          </CardFooter>
        </Card>

        <Card className="flex flex-col text-left">
          <div className="bg-slate-800 py-1 text-center text-sm font-medium text-white">One-off</div>
          <CardHeader>
            <CardTitle>{COLLECTIONS.name}</CardTitle>
            <CardDescription>{COLLECTIONS.description}</CardDescription>
            <div className="mt-4">
              <span className="text-3xl font-bold">{COLLECTIONS.priceDisplay}</span>
              <span className="ml-2 text-gray-500">{COLLECTIONS.periodLabel}</span>
            </div>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-2">
              {COLLECTIONS.packs.map((pack) => (
                <li key={pack} className="flex items-start text-sm leading-6 text-slate-700">
                  <Check className="mr-2 mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                  <span>{pack}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="flex flex-col items-stretch gap-3">
            <Button asChild variant="outline" className="w-full">
              <Link href={COLLECTIONS.href}>{COLLECTIONS.cta}</Link>
            </Button>
            <RefundPolicyNote />
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
