import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Eye, CheckCircle, AlertTriangle, Search, Smartphone, Lock } from "lucide-react"
import HumorBreak from "@/components/humor-break"
import { LessonAside } from "@/components/lesson-aside"

export default function DecodingDigitalFootprintsNavigatingOnlinePresenceLesson() {
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
                <Eye className="h-6 w-6 text-blue-700" />
              </div>
              <Badge className="bg-green-100 text-green-700">Beginner</Badge>
              <Badge variant="outline">16 min</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Decoding Digital Footprints: Navigating Your Online Presence
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Almost everything you do online leaves a receipt. Some receipts you wrote.
              Some were printed without asking. This lesson is how to find yours and stop
              handing spear-phishers a briefing book.
            </p>
            <div className="flex flex-wrap gap-2">
              {["digital footprint", "privacy settings", "LinkedIn hygiene", "search yourself", "spear-phishing"].map((t) => (
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Two piles of residue</h2>
            <p className="text-slate-600 mb-4">
              A digital footprint is the trail of data about you that exists because you used
              a network. You will not delete the internet. You can stop making the next
              pretext easy.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Active — you posted it</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>Social posts, photos, comments, reviews</li>
                    <li>Forms, newsletters, shopping accounts</li>
                    <li>Resumes, talks, GitHub, personal sites</li>
                    <li>The email you used to sign up for a gadget in 2014</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Passive — they logged it</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>Browse and search history, ad cookies</li>
                    <li>IP address and rough location</li>
                    <li>App permissions (camera, contacts, location)</li>
                    <li>Metadata on files you upload (sometimes more than the photo)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <LessonAside>
              Your LinkedIn is not a diary. It is a free briefing book. If a stranger can
              name your manager, your stack, and the fact you are in Denver this week, that
              is not intimacy. That is a product page.
            </LessonAside>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Why this is a security lesson</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-4">
                  <p className="text-sm font-medium text-red-900 mb-1">Spear-phishing</p>
                  <p className="text-sm text-red-800">
                    A message that cites a real project is more convincing than &ldquo;Dear User.&rdquo;
                    See Phishing Awareness and The Illusion of Control.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-amber-50 border-amber-200">
                <CardContent className="p-4">
                  <p className="text-sm font-medium text-amber-900 mb-1">Account recovery</p>
                  <p className="text-sm text-amber-800">
                    Pet names, schools, and birthdays are still used as reset questions.
                    They are also on your public profiles.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4">
                  <p className="text-sm font-medium text-blue-900 mb-1">Reputation</p>
                  <p className="text-sm text-blue-800">
                    Employers and clients search. Old posts do not get the context you
                    remember. Privacy settings are not vanity.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <HumorBreak tag="footprints" />

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Find yourself before someone else files you</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Search className="h-5 w-5 text-blue-600" />
                    Search like a stranger
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Your name, work email, personal email, phone, and username. Try more than
                    one search engine. Look past page one. Quotes around a unique email help.
                    Note what you did not know was indexed — PDFs, old bios, event lists.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Eye className="h-5 w-5 text-purple-600" />
                    Walk your own profiles
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    LinkedIn, Instagram, Facebook, X, TikTok, GitHub, community forums. Open
                    them in a private window while logged out, or ask a colleague what they
                    can see. Check tagged photos. The setting you meant to flip in 2019 may
                    have reset in a &ldquo;redesign.&rdquo;
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Smartphone className="h-5 w-5 text-green-600" />
                    Apps and accounts you forgot
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Phone: which apps still have location, contacts, or microphone. Browser:
                    which sites stay logged in. Close accounts you do not use. A dead forum
                    with a reused password is a gift. Have I Been Pwned will tell you if that
                    gift was already opened.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What to change this weekend</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Lock className="h-5 w-5 text-blue-600" />
                    Tighten the obvious
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>Friends-only or equivalent on personal social, unless the job is public-by-design</li>
                    <li>Hide birth date, home address, and kid names from strangers</li>
                    <li>Stop live-posting travel until you are home</li>
                    <li>Work posts: project names are optional; badges and desk photos of badges are not cute</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Close the loops
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>Unique passwords and MFA — Password Security lesson</li>
                    <li>Tracker-blocking in the browser you actually use</li>
                    <li>Revoke app permissions that are not required for the app to work</li>
                    <li>Ask sites to delete old accounts when they offer it; keep a note of what you closed</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <p className="text-slate-600 mt-4">
              A VPN can hide your IP from a café. It does not unsay a post. For what VPNs
              actually do, and for company-level exposure (WHOIS, job ads), use The Art of
              the Digital Ghost.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <h3 className="text-xl font-bold text-slate-900">Scenario: the accurate stranger</h3>
            <p>
              You get an email that mentions the conference you posted about on Monday, your
              manager&apos;s first name, and a PDF &ldquo;agenda update.&rdquo; It feels
              personal, therefore real.
            </p>
            <p>
              <strong>It is personal because you published the ingredients.</strong> Treat it
              as phishing until a second channel says otherwise. Hover, do not open the
              attachment, report it. Then decide whether that conference post needed a
              check-in photo with a badge barcode.
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-amber-900">You will not get to zero</p>
              <p className="text-sm text-amber-800">
                Data brokers, old leaks, and other people tagging you exist. The job is
                fewer cheap details and a habit of looking twice a year. Perfection is how
                people quit. A 40-minute audit is how people stay slightly harder to script.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Weekend audit checklist</h3>
            <div className="space-y-2 text-sm text-slate-700">
              {[
                "Searched my name, emails, and phone; noted surprises past page one",
                "Viewed main social profiles logged out; fixed audience and tagged photos",
                "Removed live travel, badge photos, and recovery-answer trivia from public posts",
                "Closed or locked accounts I do not use; checked Have I Been Pwned",
                "Revoked leftover app permissions on the phone I actually carry",
                "Enabled MFA on email first, then banking and work SSO",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <input type="checkbox" readOnly className="mt-1 h-4 w-4 rounded border-gray-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Next Steps</h2>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/learn/phishing-awareness">
                  Next: Phishing Awareness
                  <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/learn/the-art-of-the-digital-ghost-advanced-anonymity-techniques-beyond-vpns">
                  Digital Ghost (business exposure)
                </Link>
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
