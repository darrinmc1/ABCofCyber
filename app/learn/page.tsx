import type { ReactNode } from "react"
import Link from "next/link"
import { BookOpen, MailWarning, KeyRound, Network, Users, LifeBuoy, ArrowRight, Shield, Eye } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

import { lessons } from "@/lib/lessons"
import { getHumorEnabled } from "@/lib/humor"

const iconMap: Record<string, ReactNode> = {
  BookOpen: <BookOpen className="h-8 w-8" />,
  MailWarning: <MailWarning className="h-8 w-8" />,
  KeyRound: <KeyRound className="h-8 w-8" />,
  Network: <Network className="h-8 w-8" />,
  Users: <Users className="h-8 w-8" />,
  LifeBuoy: <LifeBuoy className="h-8 w-8" />,
  Shield: <Shield className="h-8 w-8" />,
  Eye: <Eye className="h-8 w-8" />,
}

const difficultyColors: Record<string, string> = {
  Beginner: "bg-green-100 text-green-700",
  Intermediate: "bg-yellow-100 text-yellow-700",
  Advanced: "bg-red-100 text-red-700",
}

export default function LearnPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="border-b bg-white">
        <div className="container mx-auto px-4 py-16 md:px-6">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Learn</p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Cybersecurity lessons that actually teach you something
            </h1>
            <p className="text-lg text-slate-600">
              {lessons.length} written lessons. Practical, no-nonsense security basics every
              team member should know. No jargon-for-jargon&apos;s-sake. No scare tactics.
              No invented catalog size.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/learn/phishing-awareness">Start Learning</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/whats-the-play">What&apos;s the play</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/frameworks">Explore Frameworks</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto grid gap-6 px-4 py-12 md:px-6 lg:grid-cols-2">
        {lessons.map(({ title, slug, icon, summary, quip, difficulty, duration, topics }) => (
          <Card key={slug} className="border-slate-200 bg-white flex flex-col">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  {iconMap[icon] || <BookOpen className="h-6 w-6 text-blue-700" />}
                </div>
                <div className="flex gap-2">
                  <Badge className={difficultyColors[difficulty]}>{difficulty}</Badge>
                  <Badge variant="outline" className="text-slate-500">{duration}</Badge>
                </div>
              </div>
              <CardTitle className="text-xl">{title}</CardTitle>
              <CardDescription className="text-base">{summary}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col gap-4">
              {getHumorEnabled() && quip ? (
                <p className="text-sm italic leading-6 text-slate-500">&ldquo;{quip}&rdquo;</p>
              ) : null}
              <div className="flex flex-wrap gap-2">
                {topics.map((topic) => (
                  <span key={topic} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md">
                    {topic}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-2">
                <Button asChild variant="default" className="w-full">
                  <Link href={`/learn/${slug}`}>
                    Start Lesson
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="border-t bg-slate-900 py-12 text-white">
        <div className="container mx-auto flex flex-col gap-4 px-4 md:flex-row md:items-center md:justify-between md:px-6">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Want to go deeper?</h2>
            <p className="text-slate-300">
              These lessons are just the start. Pair them with our framework assessments for a complete
              security education that goes beyond reading and into actually doing.
            </p>
          </div>
          <Button asChild className="bg-white text-slate-950 hover:bg-slate-200">
            <Link href="/frameworks">
              Explore Frameworks
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
