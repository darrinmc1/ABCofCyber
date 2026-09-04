import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Network, CheckCircle, AlertTriangle, Shield, Eye, Wifi } from "lucide-react"
import HumorBreak from "@/components/humor-break"
import { LessonAside } from "@/components/lesson-aside"

export default function DigitalGhostLesson() {
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
              <div className="p-2 rounded-lg bg-purple-100">
                <Network className="h-6 w-6 text-purple-700" />
              </div>
              <Badge className="bg-yellow-100 text-yellow-700">Intermediate</Badge>
              <Badge variant="outline">16 min</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
              The Art of the Digital Ghost: Advanced Anonymity Techniques Beyond VPNs
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              You do not need to vanish. You need to stop leaving a public trail that writes the
              phishing email for the attacker. This is exposure reduction for a small team — not
              a costume, and not a guide to hiding from anyone who has a lawful reason to find you.
            </p>
            <div className="flex flex-wrap gap-2">
              {["digital footprint", "WHOIS privacy", "job postings", "VPN limits", "email exposure"].map((t) => (
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Ghost is a metaphor. The goal is less snack food.</h2>
            <p className="text-slate-600 mb-4">
              Attackers who bother to look will find your domain registration, your staff page,
              your job ads, and the email format you publish next to a full org chart. Most of
              them are opportunistic. When you stop being the easy dossier, they move on.
              Vanishing from the internet is neither possible nor the job of a company that
              wants customers.
            </p>
            <p className="text-slate-600 mb-4">
              Personal privacy cleanup lives in Decoding Digital Footprints. This lesson is the
              business-facing half: what you publish, what a VPN actually does, and the cheap
              cuts that remove the low-hanging fruit.
            </p>
            <LessonAside>
              If your privacy plan is a VPN logo in the footer and a staff directory with mobile
              numbers, you bought a sticker. The directory is doing more work than the sticker.
            </LessonAside>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What a VPN actually is</h2>
            <p className="text-slate-600 mb-4">
              A VPN encrypts traffic between you and the VPN provider, and it changes the IP
              address websites see. That is useful on coffee-shop Wi-Fi and for remote staff
              who should not dump work traffic onto a hotel network. It is not anonymity.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    A VPN can help with
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>Eavesdroppers on a shared network seeing your session in transit</li>
                    <li>Remote access when your company routes work through a known gateway</li>
                    <li>Stopping the café from being your ISP of record for that hour</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                    A VPN does not
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>Hide you from the site you just logged into as yourself</li>
                    <li>Erase cookies, account history, or the name on the invoice</li>
                    <li>Make a free &ldquo;unlimited streaming&rdquo; client trustworthy — you handed them your traffic</li>
                    <li>Replace HTTPS, MFA, or a password manager</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <p className="text-slate-600 mt-4">
              Company VPN for work is a control. A consumer VPN you picked from an ad is a
              different ISP. Read the Network Security lesson for public Wi-Fi habits. Do not
              stack mystery hops because a forum said that is how ghosts travel. Extra hops
              you do not understand are extra parties who can see the stream.
            </p>
          </div>

          <HumorBreak tag="anonymity" />

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Five cuts that beat a cloak</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">1. WHOIS privacy on every business domain</h3>
                <p className="text-slate-600">
                  Public registration records often list a name, address, and phone. Most
                  registrars will replace that with their own contact for free or cheap. Do it
                  for the company domain and the ones you registered &ldquo;just in case.&rdquo;
                  Two minutes. Recurring benefit.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">2. Stop publishing a mail-merge</h3>
                <p className="text-slate-600">
                  firstname.lastname@ plus a full staff page is a target list. Use a contact
                  form or role inboxes (hello@, billing@) on public pages. Employees can still
                  have email. You do not owe the internet the pattern.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">3. Job ads are recon</h3>
                <p className="text-slate-600">
                  &ldquo;Must know Salesforce, AWS, Okta, Slack, and our alarm vendor&rdquo;
                  is a shopping list. Say enough to hire. Do not inventory the stack, the
                  identity provider, and the fact that nobody owns patching.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">4. Headers and page source are not a brochure</h3>
                <p className="text-slate-600">
                  CMS and server version strings help visitors zero percent and scanners one
                  hundred. Ask hosting or your developer to suppress them. You are not hiding
                  a crime. You are declining to advertise unpatched software.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">5. Separate work and personal like an adult</h3>
                <p className="text-slate-600">
                  Browser profiles, a work password manager vault, and not posting &ldquo;on
                  a plane to the customer site&rdquo; from the CEO account. Compartments are
                  the grown-up version of anonymity: the breach of one life does not write
                  the pretext for the other.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">A word on heavier privacy tools</h2>
            <p className="text-slate-600 mb-4">
              Journalists, activists, and people with a documented threat model sometimes use
              privacy-focused browsers, Tor, or locked-down operating systems. Those tools
              have legitimate uses. They are not an SMB starter pack, and this course will
              not walk through how to disappear. If your threat model is a nation-state, you
              need a specialist, not a 16-minute lesson. If your threat model is a phish that
              cites last week&apos;s LinkedIn post, start with the five cuts above.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-amber-900">Hygiene, not evasion</p>
                <p className="text-sm text-amber-800">
                  Reducing public residue is allowed and wise. Using privacy tools to commit
                  crimes is not a topic we teach. If you wanted a cloak, you are in the wrong
                  classroom.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Quarterly exposure check</h2>
            <p className="text-slate-600 mb-4">
              Search your company name, domain, and a few employee names. Look at Have I Been
              Pwned for the domain. If you use a surface-scan service (Shodan and similar),
              look only at what is already facing the internet — you are inventorying your
              own porch lights, not someone else&apos;s house. Fix what is surprising. Calendar
              it. Fifteen minutes.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4 text-center">
                  <Eye className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-blue-900">Public pages</p>
                  <p className="text-xs text-blue-700">Staff lists, emails, job ads</p>
                </CardContent>
              </Card>
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-4 text-center">
                  <Wifi className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-green-900">Internet face</p>
                  <p className="text-xs text-green-700">Services you did not mean to publish</p>
                </CardContent>
              </Card>
              <Card className="bg-purple-50 border-purple-200">
                <CardContent className="p-4 text-center">
                  <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-purple-900">Credentials</p>
                  <p className="text-xs text-purple-700">Known dumps for your domain</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="rounded-xl border border-blue-100 bg-blue-50 p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-2">Quick-start checklist</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              {[
                "WHOIS privacy on every domain you own",
                "Public pages use role inboxes or a form, not a staff mail-merge",
                "Current job posts do not inventory the identity stack",
                "Hosting suppresses version banners you do not need",
                "Work and personal browsers / password vaults are separate",
                "VPN is for transit and remote work — not a personality",
                "Quarterly: search yourselves, check breach lists, glance at internet-facing services",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 shrink-0" />
                  {item}
                </li>
              ))}
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
                <Link href="/learn/decoding-digital-footprints-navigating-online-presence">
                  Next: Decoding Digital Footprints
                  <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/learn/network-security">Network Security Fundamentals</Link>
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
