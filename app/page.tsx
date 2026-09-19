import Link from "next/link"
import { ArrowRight, Shield, BookOpen, Wrench, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const testimonials = [
  {
    quote: "This platform cut our onboarding time in half. Our team was up and running in days, not weeks.",
    name: "Sarah Chen",
    role: "VP of Engineering, Acme Corp",
  },
  {
    quote: "The best investment we made this year. Support is incredible and the product just works.",
    name: "Marcus Rivera",
    role: "CTO, Bright Labs",
  },
  {
    quote: "We saw a 40% reduction in operational overhead within the first month. Highly recommend.",
    name: "Priya Patel",
    role: "Head of Operations, NovaTech",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-24 bg-gradient-to-b from-white to-gray-50">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 max-w-3xl">
          The Modern Platform for Growing Teams
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl">
          Streamline your workflows, collaborate in real time, and scale with confidence. Everything your team needs, in one place.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="text-base px-8">
            <Link href="/signup">
              Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-base px-8">
            <Link href="/demo">
              Request a Demo
            </Link>
          </Button>
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl w-full">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-left flex flex-col gap-4"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                <p className="text-gray-500 text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Everything you need to succeed</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Powerful features designed to help your team move faster and smarter.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-gray-100 shadow-sm">
              <CardHeader>
                <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center mb-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Enterprise Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  SOC 2 compliant with end-to-end encryption. Your data is always protected.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-gray-100 shadow-sm">
              <CardHeader>
                <div className="h-10 w-10 rounded-lg bg-green-50 flex items-center justify-center mb-2">
                  <BookOpen className="h-5 w-5 text-green-600" />
                </div>
                <CardTitle className="text-lg">Rich Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Comprehensive guides, API references, and tutorials to get you started fast.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-gray-100 shadow-sm">
              <CardHeader>
                <div className="h-10 w-10 rounded-lg bg-purple-50 flex items-center justify-center mb-2">
                  <Wrench className="h-5 w-5 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Powerful Integrations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Connect with 100+ tools your team already uses. Setup takes minutes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
          Join thousands of teams already using our platform to build better products.
        </p>
        <Button asChild size="lg" className="text-base px-8 bg-white text-gray-900 hover:bg-gray-100">
          <Link href="/signup">
            Start for free <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </section>
    </div>
  )
}
