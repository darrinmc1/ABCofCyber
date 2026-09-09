import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MailWarning, AlertTriangle, CheckCircle, Phone, MessageSquare, Shield } from "lucide-react"
import HumorBreak from "@/components/humor-break"
import { LessonAside } from "@/components/lesson-aside"

export default function TheIllusionOfControlRecognizingAndCounteringSocialEngineeringTacticsLesson() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b bg-slate-50">
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/learn"
            className="inline-flex items-center text-sm text-slate-600 hover:text-slate-900 mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Lessons
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-100">
                <MailWarning className="h-6 w-6 text-blue-700" />
              </div>
              <Badge className="bg-yellow-100 text-yellow-700">Intermediate</Badge>
              <Badge variant="outline">18 min</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
              The Illusion of Control: Recognizing and Countering Social Engineering Tactics
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              The beginner Social Engineering lesson names the costumes: pretext, bait, tailgate,
              vishing. This one is about the feeling those costumes produce — the sense that you
              are helping, deciding, and still in charge while someone else writes the next line.
            </p>
            <div className="flex flex-wrap gap-2">
              {["social engineering", "pretexting", "BEC", "callback verification", "urgency"].map((t) => (
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4">They need you competent, not terrified</h2>
            <p className="text-slate-600 mb-4">
              Panic is one script. The more expensive script is competence. You are walked through
              &ldquo;troubleshooting.&rdquo; You are asked to &ldquo;confirm the new bank details so
              the vendor gets paid on time.&rdquo; You approve a login because you are being a good
              teammate. The illusion of control is the belief that you are driving while someone
              else has the map.
            </p>
            <p className="text-slate-600 mb-4">
              If the other person is setting the clock, the channel, and the definition of helpful,
              you are not evaluating a request. You are finishing their sentence.
            </p>
            <LessonAside>
              The tell is not fear. The tell is unusual efficiency. If you are solving a problem
              you did not have ten minutes ago, and a stranger is coaching the clicks, put the
              mouse down.
            </LessonAside>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Where the script shows up now</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <MailWarning className="h-5 w-5 text-red-600" />
                    Email that looks like work
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Invoice, W-2, &ldquo;updated banking,&rdquo; or a thread that was real until
                    the last hop. Grammar is no longer a tell. Urgency plus money still is.
                    Read Phishing Awareness for the hover-and-report mechanics. Here, notice
                    whether you are being invited to skip the callback you already have.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-blue-600" />
                    Slack, Teams, WhatsApp
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    A boss who only messages about gift cards is not having a personality change.
                    A &ldquo;new IT&rdquo; account that wants you to approve an authenticator
                    prompt is not onboarding. Chat is email with less paper trail and more
                    &ldquo;just this once.&rdquo;
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Phone className="h-5 w-5 text-orange-600" />
                    Voice, including the familiar one
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Voice cloning is cheap enough that &ldquo;it sounded like them&rdquo; is not
                    a control. Real IT does not need your password. Real banks do not need you
                    to read the SMS code aloud. Hang up. Call the number you already trust.
                    The Social Engineering Defense lesson is the hang-up drill; this is why
                    the voice is not proof.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-purple-600" />
                    Remote &ldquo;support&rdquo;
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Anyone who called you, then wants a remote-control app installed while they
                    wait, is running a play. You will feel helpful and slightly behind. That
                    feeling is the payload. If you already installed it, disconnect and tell
                    IT. That is containment, not a confession.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <HumorBreak tag="social engineering" />

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The pause-and-verify ritual</h2>
            <p className="text-slate-600 mb-4">
              You do not need a perfect label (phish, BEC, vish) to slow down. You need a habit
              that does not use the attacker&apos;s contact details.
            </p>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">1. Name the ask in one sentence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Money, a password, a code, a file open, a door, or software. If you cannot
                    name it, you are still in the story. Write it down. Stories hate being
                    reduced to a verb.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">2. Leave their channel</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Close the email. Hang up. Do not reply in the same Slack DM. Open the
                    directory, the last good invoice, the bank app you already have, or the
                    ticket system you already use. Verification that reuses their phone number
                    is theater.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">3. Use the boring process</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Dual control on wires. Callback on bank-detail changes. IT never asks for
                    passwords. Visitors do not follow you through a badge door because their
                    hands are full. If your company has no process, this lesson is why Finance
                    wants one. &ldquo;Just this once&rdquo; is the product they are selling.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Scenario: the helpful CFO</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
              <p>
                <strong>The message:</strong> A Teams note from &ldquo;the CEO,&rdquo; traveling,
                phone dying, needs a vendor paid in the next hour. New account details attached.
                They know the project name. They thank you for being the person who gets things done.
              </p>
              <p>
                <strong>The illusion:</strong> You are the reliable one. You will not be the
                bottleneck. You have the power to keep the deal alive.
              </p>
              <p>
                <strong>The play:</strong> Stop. Call the CEO on the number in the directory —
                not the number in the chat. If money already moved, tell Finance and IT in the
                same breath. Paste the scenario into What&apos;s the play if you want the ABC
                walkthrough cited from these lessons. Do not argue with the chat. The inbox is
                not a courtroom.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-amber-900">Knowing a fact is not authenticity</p>
              <p className="text-sm text-amber-800">
                Project names, org charts, and travel weeks are often public. See Decoding
                Digital Footprints. A message that cites them is not proof it is real. It is
                proof someone can use a search engine.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Resistance checklist</h3>
            <div className="space-y-2 text-sm text-slate-700">
              {[
                "I can name the ask in one verb (pay, click, install, approve, open, admit).",
                "I left their channel and used a number or URL I already had.",
                "Money or bank-detail changes get a callback, even when the sender is 'the boss.'",
                "I will not read an MFA or SMS code to anyone, including 'IT.'",
                "I will not install remote-support software because a stranger sounded stressed.",
                "If I already acted, I tell IT once, with times — then read Incident Response Basics.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <input type="checkbox" readOnly className="mt-1 h-4 w-4 rounded border-gray-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Key takeaways</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                The illusion of control is competence under someone else&apos;s clock.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                Familiar facts and familiar voices are not verification.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                Pause, leave the channel, use the boring process.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                For costumes and physical tailgating, use Social Engineering Defense. For email
                flags, use Phishing Awareness.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Next Steps</h2>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/whats-the-play">
                  Paste a scenario: What&apos;s the play
                  <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/learn/social-engineering">Social Engineering Defense</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/learn">Back to All Lessons</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
