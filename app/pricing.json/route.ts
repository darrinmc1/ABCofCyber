import { NextResponse } from "next/server";

export async function GET() {
  const pricingData = {
    tiers: [
      {
        name: "Free",
        price: "$0",
        description: "Get started with essential cybersecurity tools.",
        features: [
          "Basic vulnerability scanning",
          "Limited threat intelligence reports",
          "Community support",
          "1 User Account"
        ],
        cta: "Get Started for Free"
      },
      {
        name: "Pro",
        price: "$49/month",
        description: "Enhanced protection for growing businesses.",
        features: [
          "Advanced vulnerability scanning",
          "Real-time threat monitoring",
          "Detailed incident response guides",
          "Priority email support",
          "Up to 5 User Accounts"
        ],
        cta: "Start Your Pro Trial"
      },
      {
        name: "Enterprise",
        price: "Custom",
        description: "Tailored solutions for large organizations.",
        features: [
          "All Pro features",
          "Dedicated account manager",
          "Custom security assessments",
          "API access",
          "Unlimited User Accounts",
          "24/7 Phone Support"
        ],
        cta: "Contact Sales"
      }
    ]
  };

  return NextResponse.json(pricingData);
}
