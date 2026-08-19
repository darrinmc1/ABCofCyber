import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import FeatureSection from "@/components/feature-section";
import FrameworksSection from "@/components/frameworks-section";
import EmailCapture from "@/components/email-capture";
import HumorBreak from "@/components/humor-break";
import JsonLd from "@/components/json-ld";
import {
  Shield,
  BookOpen,
  Zap,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Quote,
} from "lucide-react";

const testimonials = [
  {
    quote:
      "ABC of Cyber gave our team a shared language around security risks. We went from zero policy to a working incident response plan in under two weeks.",
    name: "Sarah Mitchell",
    role: "Head of IT",
    company: "Brightline Logistics",
    rating: 5,
  },
  {
    quote:
      "Finally, cybersecurity content that doesn't require a PhD to understand. Our non-technical staff actually read it — and retained it.",
    name: "James Okafor",
    role: "Operations Director",
    company: "Verdant Solutions",
    rating: 5,
  },
  {
    quote:
      "The frameworks section alone saved us weeks of research. Clear, actionable, and built for real businesses — not just enterprise giants.",
    name: "Priya Nair",
    role: "Founder & CEO",
    company: "Stackwise Labs",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "ABC of Cyber",
          description:
            "Cybersecurity education and frameworks for businesses of all sizes",
          url: "https://abcofcyber.com",
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge
              variant="outline"
              className="mb-6 border-cyan-500/50 bg-cyan-500/10 text-cyan-400"
            >
              <Zap className="mr-1.5 h-3 w-3" />
              Cybersecurity Made Accessible
            </Badge>

            <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Protect Your Business{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Without the Jargon
              </span>
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-300 sm:text-xl">
              Practical cybersecurity frameworks, plain-English guides, and
              actionable tools — built for teams who need real protection, not
              just compliance theatre.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-cyan-500 text-slate-900 hover:bg-cyan-400 font-semibold px-8"
              >
                <Link href="/get-started">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-200 hover:bg-slate-800"
              >
                <Link href="/frameworks">Explore Frameworks</Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-400">
              {[
                "No credit card required",
                "Free tier available",
                "Trusted by 500+ teams",
              ].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-cyan-500" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mx-auto mt-16 max-w-6xl">
            <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-slate-500">
              Trusted by security-conscious teams
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t) => (
                <Card
                  key={t.name}
                  className="border-slate-700/60 bg-slate-800/50 backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <div className="mb-3 flex items-center gap-0.5">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-cyan-400 text-cyan-400"
                        />
                      ))}
                    </div>
                    <Quote className="mb-3 h-5 w-5 text-slate-600" />
                    <p className="mb-5 text-sm leading-relaxed text-slate-300">
                      {t.quote}
                    </p>
                    <div className="border-t border-slate-700 pt-4">
                      <p className="text-sm font-semibold text-white">
                        {t.name}
                      </p>
                      <p className="text-xs text-slate-400">
                        {t.role},{" "}
                        <span className="text-cyan-400/80">{t.company}</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeatureSection />

      {/* Frameworks Section */}
      <FrameworksSection />

      {/* Stats / Social Proof Bar */}
      <section className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {[
              { value: "500+", label: "Teams Protected" },
              { value: "12", label: "Frameworks Covered" },
              { value: "50+", label: "Free Resources" },
              { value: "98%", label: "Satisfaction Rate" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-extrabold text-cyan-600 dark:text-cyan-400">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learn Section CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-700 p-10 text-center text-white shadow-xl">
          <Users className="mx-auto mb-4 h-10 w-10 opacity-80" />
          <h2 className="mb-3 text-3xl font-bold">
            Build a Security-Aware Culture
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-cyan-100">
            From phishing awareness to zero-trust architecture — our learning
            paths turn your whole team into your first line of defence.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-white text-cyan-700 hover:bg-cyan-50 font-semibold"
            >
              <Link href="/learn">
                <BookOpen className="mr-2 h-4 w-4" />
                Start Learning
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10"
            >
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Humor Break */}
      <HumorBreak />

      {/* Email Capture */}
      <EmailCapture />
    </>
  );
}
