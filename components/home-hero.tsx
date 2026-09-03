import Link from "next/link"
import { ArrowLeft, MailWarning } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { lessons } from "@/lib/lessons"
import { ABC_METHOD } from "@/lib/disclaimer"
import { PLAY_EXAMPLE } from "@/lib/archive"
import { WAITLIST_HREF } from "@/lib/pricing"
import { getHumorEnabled } from "@/lib/humor"

const FIRST_LESSON_HREF = "/learn/phishing-awareness"
const TOPICS_HREF = "/learn"

const lessonAnatomy = [
  {
    n: "1",
    title: "Spoofed Sender",
    body: "The “From” name says “IT Support” but the email address is it-support@secure-update-g43f.top",
  },
  {
    n: "2",
    title: "Urgent Subject Line",
    body: "“Action Required: Your Email Password Will Expire Today” — creates panic to bypass critical thinking.",
  },
  {
    n: "3",
    title: "Generic Greeting",
    body: "“Dear Valued User” — legitimate companies know your name.",
  },
] as const

const primer = [
  {
    letter: ABC_METHOD.steps[0].letter,
    phrase: "Attachment",
    rest: "the PDF you did not request. Assess the ask before you open it.",
  },
  {
    letter: ABC_METHOD.steps[1].letter,
    phrase: "BEC",
    rest: "the “accounts” email that is not accounts. Break down the play.",
  },
  {
    letter: ABC_METHOD.steps[2].letter,
    phrase: "Click",
    rest: "the only move they need. Choose not to.",
  },
] as const

function HeroProductStill() {
  return (
    <div className="home-primer-still-clip relative h-[22rem] overflow-hidden rounded-lg border border-slate-200 bg-slate-50 shadow-lg md:h-[26rem]">
      <div className="home-primer-still-pan origin-top-left" aria-hidden="true">
        <div className="w-[36rem] bg-white text-left md:w-[40rem]">
          <div className="border-b bg-slate-50 px-6 py-5">
            <p className="mb-4 inline-flex items-center text-sm text-slate-600">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Lessons
            </p>
            <div className="mb-3 flex items-center gap-3">
              <div className="rounded-lg bg-red-100 p-2">
                <MailWarning className="h-6 w-6 text-red-700" />
              </div>
              <Badge className="bg-green-100 text-green-700">Beginner</Badge>
              <Badge variant="outline">15 min</Badge>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Phishing Awareness</h2>
            <p className="mt-3 text-base text-slate-600">
              Phishing is the most common entry point for cyber attacks. This lesson teaches you how to spot the red
              flags, inspect suspicious messages, and respond appropriately.
            </p>
          </div>
          <div className="px-6 py-5">
            <h3 className="mb-3 text-xl font-bold text-slate-900">Anatomy of a Phishing Email</h3>
            <div className="rounded-lg border border-red-200 bg-red-50 p-4">
              <div className="space-y-2 text-sm">
                {lessonAnatomy.map((row) => (
                  <div key={row.n} className="rounded-md bg-white p-2">
                    <p className="font-medium text-slate-900">
                      {row.n}. {row.title}
                    </p>
                    <p className="text-slate-600">{row.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 rounded-lg border border-slate-200 p-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                What&apos;s the play · paste the scenario
              </p>
              <pre className="mt-2 whitespace-pre-wrap font-mono text-[11px] leading-5 text-slate-800">
                {PLAY_EXAMPLE}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HomeHero() {
  const lessonCount = lessons.length
  const beginnerCount = lessons.filter((lesson) => lesson.difficulty === "Beginner").length

  return (
    <section className="home-primer-hero flex min-h-[calc(100svh-4rem)] flex-col bg-slate-950 text-white">
      <div className="container mx-auto grid w-full flex-1 grid-cols-1 items-center gap-10 px-4 py-12 md:px-6 md:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div className="max-w-xl space-y-4 text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">
            Written awareness course
          </p>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Stop clicking the invoice PDF from a stranger.
          </h1>
          <p className="text-blue-100 md:text-xl">
            Here is the alphabet of how that scam works. You read the lesson. This page does not watch anyone&apos;s inbox.
          </p>
          {getHumorEnabled() ? (
            <p className="text-sm leading-6 text-blue-200">
              If you did not order the toner, the toner invoice can wait. Or forever.
            </p>
          ) : null}
          <p className="text-sm text-blue-200">
            {lessonCount} written lessons on this site. {beginnerCount} marked beginner. Free to read. Checkout is not
            live.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg" className="bg-white text-slate-950 hover:bg-blue-100">
              <Link href={FIRST_LESSON_HREF}>Start the free written lesson</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-blue-200 bg-transparent text-white hover:bg-white/10"
            >
              <Link href={TOPICS_HREF}>Browse topics</Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-blue-100 hover:bg-white/10 hover:text-white">
              <Link href={WAITLIST_HREF}>Join the waitlist</Link>
            </Button>
          </div>
        </div>

        <HeroProductStill />
      </div>

      <div className="border-t border-blue-900 bg-slate-900">
        <div className="container mx-auto flex flex-col px-4 md:flex-row md:px-6">
          {primer.map((item, index) => (
            <p
              key={item.letter}
              className={`flex-1 py-5 text-left text-sm leading-6 text-blue-100 md:py-6 ${
                index > 0 ? "border-t border-blue-900 md:border-l md:border-t-0 md:pl-6" : ""
              } ${index < primer.length - 1 ? "md:pr-6" : ""}`}
            >
              <span className="mr-2 font-bold text-blue-400">{item.letter}</span>
              is for {item.phrase} — {item.rest}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
