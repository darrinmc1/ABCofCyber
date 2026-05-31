import Link from "next/link"
import { BookOpen, MailWarning, KeyRound, Network, Users, LifeBuoy, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const lessons = [
  {
    title: "Phishing Awareness",
    slug: "phishing-awareness",
    icon: MailWarning,
    summary: "Learn how to spot phishing emails before they spot your credentials. Covers email red flags, link inspection, and what to do when you suspect a phish.",
    quip: "If the email says 'URGENT: Your password has been compromised' and asks you to click a link, it's not your IT team. It's a phishing expedition.",
    difficulty: "Beginner",
    duration: "15 min",
    topics: ["Email red flags", "Link inspection", "Reporting phishing"],
  },
  {
    title: "Password Security Basics",
    slug: "password-security",
    icon: KeyRound,
    summary: "Why 'Password123!' is not a password strategy. Learn password managers, passphrases, MFA, and the dark art of not reusing credentials across 47 different sites.",
    quip: "Your password should not be guessable from your LinkedIn profile, your pet's name, or the word 'password' in leetspeak.",
    difficulty: "Beginner",
    duration: "12 min",
    topics: ["Password managers", "Passphrases", "MFA/2FA", "Credential hygiene"],
  },
  {
    title: "Network Security Fundamentals",
    slug: "network-security",
    icon: Network,
    summary: "The basics of keeping your network from behaving like an open door. Firewalls, segmentation, patching, and why your office printer is probably a security risk.",
    quip: "A network without segmentation is one angry PDF attachment away from a bad day.",
    difficulty: "Intermediate",
    duration: "20 min",
    topics: ["Firewalls", "Network segmentation", "Patch management", "Wi-Fi security"],
  },
  {
    title: "Social Engineering Defense",
    slug: "social-engineering",
    icon: Users,
    summary: "The human side of security. Learn how attackers manipulate people through pretexting, baiting, tailgating, and the fine art of sounding like they belong there.",
    quip: "The most advanced hacking tool is not a zero-day exploit — it's someone confidently asking for the door code.",
    difficulty: "Beginner",
    duration: "15 min",
    topics: ["Pretexting", "Baiting", "Tailgating", "Phone-based attacks"],
  },
  {
    title: "Incident Response Basics",
    slug: "incident-response-basics",
    icon: LifeBuoy,
    summary: "What to do when things go sideways. A practical guide to detecting, containing, and recovering from security incidents without adding chaos to the crisis.",
    quip: "You cannot 'Ctrl+Z' a ransomware attack, but you can have a plan that makes the difference between a bad afternoon and a catastrophic quarter.",
    difficulty: "Intermediate",
    duration: "20 min",
    topics: ["Detection & triage", "Containment", "Recovery", "Post-incident review"],
  },
]

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
              Practical, no-nonsense lessons covering the security basics every team member should know.
              No jargon-for-jargon&apos;s-sake. No scare tactics. Just clear, actionable knowledge.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/learn/phishing-awareness">Start Learning</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/frameworks">Explore Frameworks</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto grid gap-6 px-4 py-12 md:px-6 lg:grid-cols-2">
        {lessons.map(({ title, slug, icon: Icon, summary, quip, difficulty, duration, topics }) => (
          <Card key={slug} className="border-slate-200 bg-white flex flex-col">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Icon className="h-6 w-6 text-blue-700" />
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
              <p className="text-sm italic leading-6 text-slate-500">&ldquo;{quip}&rdquo;</p>
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
