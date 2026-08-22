import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Primary CTA above the fold */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Build Something Amazing
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            We help teams ship faster with tools designed for modern development workflows.
          </p>
          {/* Primary CTA - single, prominent, above the fold */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/signup">
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-10 py-4 text-lg rounded-xl shadow-lg shadow-blue-500/30 transition-all duration-200 hover:scale-105"
              >
                Get Started Free
              </Button>
            </Link>
            {/* Secondary CTA - visually subordinate */}
            <Link href="/demo">
              <Button
                variant="outline"
                size="lg"
                className="border-slate-400 text-slate-200 hover:bg-slate-700 font-medium px-8 py-4 text-lg rounded-xl transition-all duration-200"
              >
                Watch Demo
              </Button>
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">No credit card required &middot; Free 14-day trial</p>
        </div>
      </section>

      {/* Mission Section - no competing CTAs */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            We believe great software should be accessible to every team, regardless of size or budget.
            Our platform removes friction from the development process so you can focus on what matters.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Founded in 2020, we&apos;ve helped over 10,000 teams deliver better products, faster.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">What We Stand For</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Simplicity', desc: 'We cut complexity so your team can move fast without breaking things.' },
              { title: 'Transparency', desc: 'No hidden fees, no dark patterns. Just honest software.' },
              { title: 'Reliability', desc: '99.9% uptime SLA backed by a team that cares about your success.' },
            ].map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section - single reinforcing CTA, not competing with hero */}
      <section className="py-24 px-6 bg-blue-600 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-blue-100 text-lg mb-10">
            Join thousands of teams already shipping faster.
          </p>
          <Link href="/signup">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-12 py-4 text-lg rounded-xl shadow-lg transition-all duration-200 hover:scale-105"
            >
              Start Your Free Trial
            </Button>
          </Link>
          <p className="mt-4 text-sm text-blue-200">No credit card required</p>
        </div>
      </section>
    </main>
  )
}
