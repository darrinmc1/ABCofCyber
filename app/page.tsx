import Link from "next/link"
import { ArrowRight, Shield, BookOpen, Zap, CheckCircle, Lock, Award, FileCheck, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import EmailCapture from "@/components/email-capture"
import FeatureSection from "@/components/feature-section"
import FrameworksSection from "@/components/frameworks-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-400 ring-1 ring-blue-500/20 mb-6">
            <Shield className="h-4 w-4" />
            <span>Enterprise-Grade Security Compliance</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl mb-6">
            Security Compliance
            <span className="block text-blue-400">Made Simple</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-300 mb-10">
            Automate your security compliance workflows, manage frameworks, and demonstrate trust to your customers — all in one platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <Link href="/signup">
                Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700" asChild>
              <Link href="/demo">View Demo</Link>
            </Button>
          </div>
          <EmailCapture />
        </div>
      </section>

      {/* Trust Badges & Security Certifications Section */}
      <section className="bg-slate-50 border-y border-slate-200 py-12">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-slate-500 mb-8">
            Trusted by security-conscious teams — certified &amp; compliant
          </p>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 items-center justify-items-center">
            {/* SOC 2 Type II */}
            <div className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-5 shadow-sm w-full">
              <ShieldCheck className="h-8 w-8 text-blue-600" />
              <span className="text-xs font-bold text-slate-800 text-center">SOC 2</span>
              <span className="text-xs text-slate-500 text-center">Type II</span>
            </div>
            {/* ISO 27001 */}
            <div className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-5 shadow-sm w-full">
              <Award className="h-8 w-8 text-green-600" />
              <span className="text-xs font-bold text-slate-800 text-center">ISO 27001</span>
              <span className="text-xs text-slate-500 text-center">Certified</span>
            </div>
            {/* GDPR */}
            <div className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-5 shadow-sm w-full">
              <FileCheck className="h-8 w-8 text-purple-600" />
              <span className="text-xs font-bold text-slate-800 text-center">GDPR</span>
              <span className="text-xs text-slate-500 text-center">Compliant</span>
            </div>
            {/* HIPAA */}
            <div className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-5 shadow-sm w-full">
              <Lock className="h-8 w-8 text-red-600" />
              <span className="text-xs font-bold text-slate-800 text-center">HIPAA</span>
              <span className="text-xs text-slate-500 text-center">Ready</span>
            </div>
            {/* PCI DSS */}
            <div className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-5 shadow-sm w-full">
              <Shield className="h-8 w-8 text-orange-600" />
              <span className="text-xs font-bold text-slate-800 text-center">PCI DSS</span>
              <span className="text-xs text-slate-500 text-center">Level 1</span>
            </div>
            {/* Pen Tested */}
            <div className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-5 shadow-sm w-full">
              <CheckCircle className="h-8 w-8 text-teal-600" />
              <span className="text-xs font-bold text-slate-800 text-center">Pen Tested</span>
              <span className="text-xs text-slate-500 text-center">Annually</span>
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
              <span>256-bit AES encryption at rest &amp; in transit</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
              <span>99.9% uptime SLA</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
              <span>Data residency in US &amp; EU</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
              <span>SSO &amp; MFA enforced</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeatureSection />

      {/* Frameworks Section */}
      <FrameworksSection />

      {/* CTA Section */}
      <section className="bg-slate-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to simplify compliance?</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Join hundreds of security teams who trust our platform to manage their compliance programs.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
            <Link href="/signup">
              Start for Free <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
