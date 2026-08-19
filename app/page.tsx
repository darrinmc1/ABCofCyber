import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Check } from "lucide-react";

export default function Home() {
  return (
    <main>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Your Cybersecurity Command Center
          </h1>
          <p className="max-w-[42rem] text-lg text-muted-foreground sm:text-xl">
            Proactively manage your digital security with our AI-powered platform. 
            Gain unparalleled visibility and control over your organization's cyber posture.
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg">
              <Link href="/sign-up">
                Get Started Free
                <span className="sr-only">Get Started Free</span>
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/pricing">
                View Pricing
                <span className="sr-only">View Pricing</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-8 dark:bg-transparent md:py-12">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl">
          Trusted by Leading Organizations
        </h2>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <Image src="/logos/logo-1.svg" alt="Logo 1" width={120} height={60} className="grayscale hover:grayscale-0 transition-all duration-300" />
          <Image src="/logos/logo-2.svg" alt="Logo 2" width={120} height={60} className="grayscale hover:grayscale-0 transition-all duration-300" />
          <Image src="/logos/logo-3.svg" alt="Logo 3" width={120} height={60} className="grayscale hover:grayscale-0 transition-all duration-300" />
          <Image src="/logos/logo-4.svg" alt="Logo 4" width={120} height={60} className="grayscale hover:grayscale-0 transition-all duration-300" />
          <Image src="/logos/logo-5.svg" alt="Logo 5" width={120} height={60} className="grayscale hover:grayscale-0 transition-all duration-300" />
        </div>
      </section>

      <section className="container py-8 dark:bg-transparent md:py-12">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>"A Game Changer for Our Security!"</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                "AbcOfCyber has revolutionized how we approach cybersecurity. The insights and automation have saved us countless hours and significantly improved our threat detection capabilities."
              </p>
              <div className="mt-4">
                <p className="font-semibold">- Jane Doe, CTO at TechSolutions Inc.</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>"Invaluable Peace of Mind"</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                "Knowing that our digital assets are protected by AbcOfCyber gives us invaluable peace of mind. The platform is intuitive and the support is top-notch."
              </p>
              <div className="mt-4">
                <p className="font-semibold">- John Smith, CEO at Innovate Corp.</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>"Essential for Modern Businesses"</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                "In today's threat landscape, AbcOfCyber is not just a tool, it's a necessity. It provides a comprehensive view of our security posture and actionable steps to improve it."
              </p>
              <div className="mt-4">
                <p className="font-semibold">- Emily White, Head of Security at Global Enterprises</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container py-8 dark:bg-transparent md:py-12">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl">
          Features That Protect You
        </h2>
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>AI-Powered Threat Detection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Leverage advanced AI to identify and neutralize threats in real-time.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Vulnerability Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Continuously scan and prioritize vulnerabilities across your entire digital footprint.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Compliance & Reporting</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Stay compliant with industry regulations and generate comprehensive security reports.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container py-8 dark:bg-transparent md:py-12">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Ready to Secure Your Future?
          </h2>
          <p className="max-w-[42rem] text-lg text-muted-foreground">
            Join thousands of businesses securing their digital assets with AbcOfCyber. Start your free trial today!
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg">
              <Link href="/sign-up">
                Start Your Free Trial
                <span className="sr-only">Start Your Free Trial</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
