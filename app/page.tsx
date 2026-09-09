import Link from "next/link"
import { ArrowRight, Shield, BookOpen, Wrench, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import EmailCapture from "@/components/email-capture"
import FeatureSection from "@/components/feature-section"
import FrameworksSection from "@/components/frameworks-section"

const testimonials = [
  {
    quote: "ABC of Cyber helped us go from zero security posture to a real program in weeks, not months. The clarity is unmatched.",
    name: "Sarah Chen",
    role: "Head of Engineering",
    company: "Stackline"
  },
  {
    quote: "Finally, a resource that explains compliance frameworks without the jargon. Our whole team uses it as a reference.",
    name: "Marcus Rivera",
    role: "CTO",
    company: "Vaultworks"
  },
  {
    quote: "We cut our audit prep time in half after adopting the playbooks from ABC of Cyber. Incredible ROI.",
    name: "Priya Nair",
    role: "VP of Security",
    company: "Meridian Health Tech"
  }
]

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30">
              Cybersecurity Made Simple
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              The ABC of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Cyber Security
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Your complete guide to understanding cybersecurity frameworks, compliance requirements, and best practices — without the complexity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8" asChild>
                <Link href="/frameworks">
                  Explore Frameworks <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8" asChild>
                <Link href="/glossary">
                  Browse Glossary
                </Link>
              </Button>
            </div>

            {/* Testimonials */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
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
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs">{t.role}, {t.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "50+", label: "Security Frameworks" },
              { value: "500+", label: "Glossary Terms" },
              { value: "100+", label: "Practical Tools" },
              { value: "10k+", label: "Security Professionals" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Ahead of Cyber Threats</h2>
          <p className="text-slate-300 mb-8">
            Get weekly insights on cybersecurity frameworks, compliance updates, and practical security tips delivered to your inbox.
          </p>
          <EmailCapture />
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Everything You Need</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From foundational concepts to advanced frameworks, we have resources for every stage of your security journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-slate-200">
              <CardHeader>
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Security Frameworks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Comprehensive guides to NIST, ISO 27001, SOC 2, and more. Understand what each framework requires and how to implement it.
                </p>
                <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0" asChild>
                  <Link href="/frameworks">
                    Explore Frameworks <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-slate-200">
              <CardHeader>
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Glossary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Plain-English definitions for hundreds of cybersecurity terms. From zero-day exploits to zero-trust architecture.
                </p>
                <Button variant="ghost" className="text-green-600 hover:text-green-700 p-0" asChild>
                  <Link href="/glossary">
                    Browse Terms <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-slate-200">
              <CardHeader>
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Tools & Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Practical checklists, templates, and tools to help you implement security controls and pass compliance audits.
                </p>
                <Button variant="ghost" className="text-purple-600 hover:text-purple-700 p-0" asChild>
                  <Link href="/tools">
                    View Tools <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
