import Link from "next/link"
import { IBM_Plex_Mono, Source_Serif_4 } from "next/font/google"
import { ArrowLeft, MailWarning } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { lessons } from "@/lib/lessons"
import { ABC_METHOD } from "@/lib/disclaimer"
import { PLAY_EXAMPLE } from "@/lib/archive"
import { WAITLIST_HREF } from "@/lib/pricing"
import { getHumorEnabled } from "@/lib/humor"

const primerSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
})

const primerMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
})

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
    <div className="home-primer-still-clip relative h-[22rem] overflow-hidden border border-[#1c140e] bg-slate-100 md:h-[26rem]">
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
            <div className="border border-red-200 bg-red-50 p-4">
              <div className="space-y-2 text-sm">
                {lessonAnatomy.map((row) => (
                  <div key={row.n} className="rounded bg-white p-2">
                    <p className="font-medium text-slate-900">
                      {row.n}. {row.title}
                    </p>
                    <p className="text-slate-600">{row.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 border border-slate-200 p-3">
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
    <section className={`${primerSerif.className} home-primer-hero flex min-h-[calc(100svh-4rem)] flex-col bg-[#efe6d2] text-[#1c140e]`}>
      <div className="mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 gap-10 px-4 py-8 md:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
        <div className="max-w-xl text-left">
          <p className={`${primerMono.className} text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8c2f12]`}>
            Written awareness course
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
            Stop clicking the invoice PDF from a stranger.
          </h1>
          <p className="mt-5 text-xl leading-8 text-[#3f3428]">
            Here is the alphabet of how that scam works. You read the lesson. This page does not watch anyone&apos;s inbox.
          </p>
          {getHumorEnabled() ? (
            <p className={`${primerMono.className} mt-4 text-sm leading-6 text-[#8c2f12]`}>
              If you did not order the toner, the toner invoice can wait. Or forever.
            </p>
          ) : null}
          <p className={`${primerMono.className} mt-6 text-xs leading-5 text-[#5a4d3d]`}>
            {lessonCount} written lessons on this site. {beginnerCount} marked beginner. Free to read. Checkout is not
            live.
          </p>
          <div className="mt-6 flex flex-col items-stretch gap-2 sm:max-w-sm">
            <Link
              href={FIRST_LESSON_HREF}
              className="inline-flex items-center justify-center bg-[#8c2f12] px-4 py-3 text-sm font-semibold text-[#f7f1e4] hover:bg-[#6f240e]"
            >
              Start the free written lesson
            </Link>
            <Link
              href={TOPICS_HREF}
              className="inline-flex items-center justify-center border border-[#1c140e] bg-transparent px-4 py-3 text-sm font-semibold text-[#1c140e] hover:bg-[#e4d8bc]"
            >
              Browse topics
            </Link>
            <Link
              href={WAITLIST_HREF}
              className="inline-flex items-center justify-center px-4 py-3 text-sm font-semibold underline decoration-2 underline-offset-4 hover:text-[#8c2f12]"
            >
              Join the waitlist
            </Link>
          </div>
        </div>

        <HeroProductStill />
      </div>

      <div className="border-t border-[#1c140e] bg-[#1c140e] text-[#f7f1e4]">
        <div className="mx-auto flex max-w-6xl flex-col md:flex-row">
          {primer.map((item, index) => (
            <p
              key={item.letter}
              className={`flex-1 px-4 py-5 text-left text-[15px] leading-6 md:px-6 ${
                index > 0 ? "border-t border-[#f7f1e4]/20 md:border-l md:border-t-0" : ""
              }`}
            >
              <span className={`${primerMono.className} mr-2 text-[#e8b298]`}>{item.letter}</span>
              {" "}
              is for {item.phrase} — {item.rest}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
