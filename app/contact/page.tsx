import type { Metadata } from "next"
import Link from "next/link"
import { AlarmClock, ShieldAlert } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { pageMeta } from "@/lib/seo"

export const metadata: Metadata = pageMeta({
  title: "Contact",
  description: "Send a message to ABC of Cyber. A person reads it. No hold music, and no jazz flute.",
  path: "/contact",
})

const responsePromises = [
  {
    title: "Sales and planning",
    detail: "Usually same business day",
    note: "Fast enough to keep momentum, slow enough to avoid sounding like a bot with espresso.",
    icon: AlarmClock,
  },
  {
    title: "Security incidents",
    detail: "Escalated immediately",
    note: "If your day is actively on fire, we do not put you in a cheerful nurture sequence.",
    icon: ShieldAlert,
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="container mx-auto px-4 py-16 md:px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Contact</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Contact the security people before the security incident contacts you
          </h1>
          <p className="text-lg leading-8 text-slate-600">
            If you need help with compliance, incident response, or convincing leadership that &ldquo;Summer2024!&rdquo;
            is not a password strategy, start here.
          </p>
          <Button asChild>
            <Link href="/get-started">Start with a plan</Link>
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16 md:px-6">
        <Card className="mx-auto max-w-2xl bg-white">
          <CardHeader>
            <CardTitle>Send a message</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </section>

      <section className="container mx-auto grid gap-6 px-4 pb-16 md:px-6 lg:grid-cols-2">
        {responsePromises.map(({ title, detail, note, icon: Icon }) => (
          <Card key={title} className="border-slate-200 bg-white">
            <CardHeader>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="font-medium text-slate-900">{detail}</p>
              <p className="text-sm leading-6 text-slate-600">{note}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="border-t bg-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle>What to include in your message</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-white p-4 text-sm leading-6 text-slate-600">
                What kind of help you need: compliance, readiness, incident response, or executive translation.
              </div>
              <div className="rounded-lg bg-white p-4 text-sm leading-6 text-slate-600">
                Your team size and environment. &ldquo;A bit of cloud and some mystery servers&rdquo; is still useful context.
              </div>
              <div className="rounded-lg bg-white p-4 text-sm leading-6 text-slate-600">
                Whether the issue is urgent, annoying, or full cinematic emergency. We plan differently for each.
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
