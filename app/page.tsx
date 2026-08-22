import Link from "next/link"
import { ArrowRight, Shield, BookOpen, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Shield,
    title: "Practical security training",
    description: "Learn cybersecurity concepts that actually apply to your day-to-day work, not theoretical frameworks nobody uses.",
  },
  {
    icon: BookOpen,
    title: "Structured learning paths",
    description: "Follow curated paths from beginner to advanced, with hands-on labs and real-world scenarios.",
  },
  {
    icon: Users,
    title: "Community-driven",
    description: "Learn alongside thousands of security professionals and get help when you need it.",
  },
  {
    icon: Zap,
    title: "Always up to date",
    description: "Content is continuously updated to reflect the latest threats, tools, and techniques.",
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-24 bg-gradient-to-b from-background to-muted">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl max-w-3xl">
          Level up your cybersecurity skills
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          Hands-on training for security professionals and developers. Learn to think like an attacker so you can defend like a pro.
        </p>
        <div className="mt-10 flex gap-4 flex-wrap justify-center">
          <Button asChild size="lg">
            <Link href="/courses">
              Browse courses <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/pricing">View pricing</Link>
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-20 max-w-6xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-center mb-12">Why learn with us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <feature.icon className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20 bg-muted">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Start learning today</h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of security professionals already using our platform. Free tier available — no credit card required.
          </p>
          <Button asChild size="lg">
            <Link href="/signup">
              Get started free <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
