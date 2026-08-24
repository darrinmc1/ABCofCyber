import Link from "next/link"
import { ArrowRight, Shield, BookOpen, Zap, Lock, AlertTriangle, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FeatureSection } from "@/components/feature-section"
import { FrameworksSection } from "@/components/frameworks-section"
import { EmailCapture } from "@/components/email-capture"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 md:px-6">
        <div className="max-w-3xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Cybersecurity made practical</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Stop guessing. Start securing.
          </h1>
          <p className="text-lg leading-8 text-slate-600 md:text-xl">
            ABC of Cyber gives your team the frameworks, tools, and plain-English guidance to build a security program that actually works — not just one that looks good in a deck.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-4 text-base">
              <Link href="/sign-up">Get started free <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-slate-300 text-slate-700 font-medium px-8 py-4 text-base">
              <Link href="/learn">Explore resources</Link>
            </Button>
          </div>
        </div>
      </section>

      <FeatureSection />
      <FrameworksSection />

      {/* CTA Section */}
      <section className="bg-blue-700 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to build real security?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">Join teams using ABC of Cyber to move from reactive to proactive security — without the jargon.</p>
          <Button asChild size="lg" className="w-full sm:w-auto bg-white text-blue-700 hover:bg-blue-50 font-semibold px-10 py-4 text-base">
            <Link href="/sign-up">Create your free account <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      <EmailCapture />
    </main>
  )
}
