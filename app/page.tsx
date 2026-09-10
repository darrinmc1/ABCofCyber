import Link from "next/link"
import { ArrowRight, Shield, BookOpen, Zap, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import EmailCapture from "@/components/email-capture"
import FeatureSection from "@/components/feature-section"
import FrameworksSection from "@/components/frameworks-section"

const testimonials = [
  {
    quote: "We went from spending 3 days preparing for our SOC 2 audit to just a few hours. The automated evidence collection alone saved our team over 40 hours a month.",
    author: "Sarah Chen",
    role: "Head of Security",
    company: "Fintech Startup",
    outcome: "40+ hours saved monthly"
  },
  {
    quote: "As a small team, we were overwhelmed by compliance requirements. This platform made it approachable and we achieved ISO 27001 certification in record time.",
    author: "Marcus Rodriguez",
    role: "CTO",
    company: "SaaS Company",
    outcome: "ISO 27001 certified"
  },
  {
    quote: "The gap analysis feature immediately showed us exactly what we were missing. We closed all critical gaps before our enterprise customer audit and won the contract.",
    author: "Priya Patel",
    role: "VP of Engineering",
    company: "B2B Software Co.",
    outcome: "Enterprise deal closed"
  }
]

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-600/20 text-blue-400 border-blue-600/30 hover:bg-blue-600/30">
              Compliance Made Simple
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Achieve Compliance
              <span className="text-blue-400"> Faster</span> Than
              <br />
              You Think Possible
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Automate your security compliance workflows, generate audit-ready documentation,
              and stay ahead of regulatory requirements — all in one platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8" asChild>
                <Link href="/dashboard">
                  Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800" asChild>
                <Link href="/frameworks">
                  View Frameworks
                </Link>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-400" />
                <span>SOC 2 Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-blue-400" />
                <span>ISO 27001</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-yellow-400" />
                <span>GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-600/20 text-green-400 border-green-600/30">
              Customer Stories
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Trusted by Security Teams
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              See how companies like yours are achieving compliance faster and with less effort.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-900 border-slate-700 hover:border-slate-500 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-blue-400 mb-3 opacity-60" />
                  <p className="text-slate-300 mb-6 leading-relaxed text-sm">
                    {testimonial.quote}
                  </p>
                  <div className="border-t border-slate-700 pt-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-semibold text-white text-sm">{testimonial.author}</p>
                        <p className="text-slate-400 text-xs">{testimonial.role}</p>
                        <p className="text-slate-500 text-xs">{testimonial.company}</p>
                      </div>
                      <Badge className="bg-green-600/20 text-green-400 border-green-600/30 text-xs shrink-0 ml-2">
                        {testimonial.outcome}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeatureSection />

      {/* Frameworks Section */}
      <FrameworksSection />

      {/* Email Capture / CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Simplify Compliance?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Join hundreds of security teams who have streamlined their compliance workflows.
          </p>
          <EmailCapture />
        </div>
      </section>
    </div>
  )
}
