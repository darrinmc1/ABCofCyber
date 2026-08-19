import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

async function getPricingData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/pricing.json`);
  if (!res.ok) {
    throw new Error("Failed to fetch pricing data");
  }
  return res.json();
}

export default async function PricingPage() {
  const pricingData = await getPricingData();

  return (
    <div className="container py-20">
      <h1 className="text-4xl font-bold tracking-tight text-center mb-12">Flexible Pricing for Every Need</h1>
      <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">Choose the plan that best fits your cybersecurity requirements and budget. Start with our free tier or explore advanced features with our Pro and Enterprise options.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingData.tiers.map((tier: any) => (
          <Card key={tier.name} className="flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">{tier.name}</CardTitle>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-extrabold tracking-tight">{tier.price}</span>
                {tier.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
              </div>
              <CardDescription>{tier.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-left">
                {tier.features.map((feature: string) => (
                  <li key={feature} className="flex items-center">
                    <svg
                      className="h-5 w-5 text-primary mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Link href={tier.name === "Enterprise" ? "/contact" : "/get-started"} className="w-full">
                <Button className="w-full">
                  {tier.cta}
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
