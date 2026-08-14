import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { PLANS } from "@/lib/pricing"

export default function PricingCards() {
  return (
    <div className="mx-auto mt-8 grid w-full max-w-md grid-cols-1 gap-8">
      {PLANS.map((plan) => (
        <Card key={plan.id} className={`flex flex-col ${plan.highlighted ? "border-blue-500 shadow-lg" : ""}`}>
          {plan.highlighted && (
            <div className="bg-blue-500 py-1 text-center text-sm font-medium text-white">
              Training membership
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
                <li key={feature} className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className={`w-full ${plan.highlighted ? "bg-blue-500 hover:bg-blue-600" : ""}`}>
              <Link href={plan.href}>{plan.cta}</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
