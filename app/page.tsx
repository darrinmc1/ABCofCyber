import Link from "next/link"
import { ArrowRight, Shield, BookOpen, Zap, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FeatureSection } from "@/components/feature-section"
import { FrameworksSection } from "@/components/frameworks-section"
import { EmailCapture } from "@/components/email-capture"

const testimonials = [
  {
    quote: "ABC of Cyber helped us go from zero security posture to a real, working program in under 90 days. The plain-language guides made all the difference.",
    name: "Sarah Chen",
    role: "Head of IT",
    company: "Meridian Logistics",
    initials: "MC"
  },
  {
    quote: "Finally, cybersecurity content that doesn't require a PhD to understand. Our whole team uses it for onboarding now.",
    name: "James Okafor",
    role: "CTO",
    company: "Stacklane Inc.",
    initials: "SI"
  },
  {
    quote: "We passed our SOC 2 audit on the first try. The framework checklists saved us weeks of research and guesswork.",
    name: "Priya Nair",
    role: "Compliance Manager",
    company: "Vaultify",
    initials: "VF"
  }
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:32px_32px]" />
        <div className="container relative mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <Shield className="h-4 w-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-medium">Trusted by 10,000+ security professionals</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Cybersecurity Made
            <br />
            <span className="text-blue-400">Simple & Actionable</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Plain-language guides, frameworks, and checklists that help your team build a real security program — no jargon, no fluff.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8" asChild>
              <Link href="/topics">
                Explore Topics <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-slate-600 text-slate-200 hover:bg-slate-700 hover:text-white" asChild>
              <Link href="/frameworks">
                View Frameworks
              </Link>
            </Button>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-5 text-left backdrop-blur-sm hover:bg-white/8 transition-colors"
              >
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-blue-300">{t.initials}</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{t.name}</p>
                    <p className="text-slate-400 text-xs">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeatureSection />

      {/* Frameworks Section */}
      <FrameworksSection />

      {/* Email Capture */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <EmailCapture />
        </div>
      </section>
    </div>
  )
}
