import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { pageMeta } from "@/lib/seo"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, KeyRound, ScanFace, Filter, UserRound } from "lucide-react"
import HumorBreak from "@/components/humor-break"
import { LessonAside } from "@/components/lesson-aside"

export const metadata: Metadata = pageMeta({
  title: "When software decides who gets in",
  description: "Login-risk scores, biometrics, and content filters are already gatekeepers. They do not replace MFA or a human override.",
  path: "/learn/the-algorithmic-gatekeepers-how-ai-is-shaping-our-digital-access-and-security",
})

export default function AlgorithmicGatekeepersLesson() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b bg-slate-50">
        <div className="container mx-auto px-4 py-8">
          <Link href="/learn" className="inline-flex items-center text-sm text-slate-600 hover:text-slate-900 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Lessons
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-100">
                <KeyRound className="h-6 w-6 text-blue-700" />
              </div>
              <Badge className="bg-yellow-100 text-yellow-700">Intermediate</Badge>
              <Badge variant="outline">14 min</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
              The Algorithmic Gatekeepers: How AI is Shaping Our Digital Access and Security
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Software already decides whether a login looks normal, whether a face matches,
              and which posts you see. Useful. Also a new place for a quiet wrong answer.
            </p>
            <div className="flex flex-wrap gap-2">
              {["artificial intelligence", "access", "biometrics", "MFA", "override"].map((t) => (
                <span key={t} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">A score is not a verdict</h2>
            <p className="text-slate-600 mb-4">
              Passwords, MFA, and firewalls are still the doors. What got added is a judge
              at the door: a model that has seen &ldquo;normal&rdquo; and flags the rest.
              Banks do this for card payments. Identity products do it for logins
              (&ldquo;impossible travel&rdquo;, a new device, a paste of a password).
              Feeds do it when they rank or hide a post.
            </p>
            <p className="text-slate-600">
              The security question is not whether the model is clever. It is what happens
              when it is wrong, and who can overrule it without a week of email.
            </p>
            <LessonAside>
              If Finance is locked out on payday and the only explanation is &ldquo;the
              model said so,&rdquo; you do not have an access policy. You have a mood.
            </LessonAside>
          </div>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <KeyRound className="h-5 w-5 text-blue-700" />
                  <div>
                    <CardTitle className="text-lg">Login risk</CardTitle>
                    <CardDescription>A helper next to MFA, not a replacement for it.</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                A risk score can prompt a second check on a strange login. It should not
                be the only check, and a vendor who offers to &ldquo;replace MFA with AI&rdquo;
                is selling you a guess. Keep the authenticator app. Use the score to add
                friction, not to remove it. Write down who can force-allow a locked account,
                and log that they did.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <ScanFace className="h-5 w-5 text-green-700" />
                  <div>
                    <CardTitle className="text-lg">Biometrics</CardTitle>
                    <CardDescription>A face is not a password you can rotate.</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                Fingerprints, face, and voice matching are models with an error rate.
                They fail in bad light, and they can be fooled. You also cannot issue a
                new face after a breach the way you issue a new password. Treat biometrics
                as one factor on a device you control, with a fallback that is not
                &ldquo;email us a selfie.&rdquo; Behavioural signals (how you type) are
                the same class of guess: useful as a hint, weak as a sole door.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Filter className="h-5 w-5 text-amber-700" />
                  <div>
                    <CardTitle className="text-lg">Filters and fraud flags</CardTitle>
                    <CardDescription>They hide things. They also hide the wrong things.</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                Content filters and fraud models will block real work: a supplier in a
                new country, a blunt security write-up, a staff member who travels.
                Someone on your team needs a way to see why it was blocked and a way to
                let the legitimate case through. A filter is not a security boundary for
                your own files. Do not put secrets in a chatbot so it can &ldquo;check
                them.&rdquo; That is a new copy of the secret.
              </CardContent>
            </Card>
          </div>

          <HumorBreak tag="ai access" />

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Four questions before you turn a model on</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="bg-slate-50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <UserRound className="h-5 w-5 text-slate-700" />
                    <CardTitle className="text-lg">Ask these out loud</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
                    <li>What data does it keep, and for how long?</li>
                    <li>Who is locked out when it is wrong, and who lets them back in?</li>
                    <li>Can you export the decision, or only a green tick?</li>
                    <li>Does it sit beside MFA, or is someone proposing it instead of MFA?</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-lg">Keep a human path</CardTitle>
                  <CardDescription>Payday, travel, and new hires are not edge cases. They are the calendar.</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-slate-700">
                  Name the person. Write the steps. Test them once when nothing is on fire.
                  A model that cannot be overruled by a named human is an outage waiting
                  for a long weekend.
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
