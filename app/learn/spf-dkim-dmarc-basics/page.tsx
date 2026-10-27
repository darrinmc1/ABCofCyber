import type { Metadata } from "next"
import Link from "next/link"
import { pageMeta } from "@/lib/seo"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, KeyRound, CheckCircle, AlertTriangle } from "lucide-react"
import HumorBreak from "@/components/humor-break"
import { LessonAside } from "@/components/lesson-aside"

export const metadata: Metadata = pageMeta({
  title: "SPF, DKIM, and DMARC",
  description:
    "What SPF, DKIM, and DMARC each do, how to read a DMARC record under RFC 9989, and a safe rollout from monitoring to reject.",
  path: "/learn/spf-dkim-dmarc-basics",
})

const topics = ["SPF", "DKIM", "DMARC", "RFC 9989", "Email authentication"]

export default function SpfDkimDmarcBasicsLesson() {
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
              SPF, DKIM, DMARC: The Bouncers for Your Domain
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Anyone can send a message claiming to be accounts@yourbusiness.com.au. These three DNS records tell the rest of the internet which mail is really yours.
            </p>
            <div className="flex flex-wrap gap-2">
              {topics.map((t) => (
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The problem: email trusts everyone</h2>
            <p className="text-slate-600 mb-4">
              Email was designed in an era when the internet was a few universities that trusted each other. Out of the box, anyone can send a message claiming to be your domain. The three records are SPF (RFC 7208), DKIM (RFC 6376), and DMARC (RFC 9989, May 2026; replaces RFC 7489). ACSC email security guidance is the local reference for the same trio.
            </p>
            <p className="text-slate-600">
              Think of a nightclub. SPF is the guest list, DKIM is the wristband that cannot be faked, and DMARC is the bouncer&apos;s policy for anyone who does not have either.
            </p>
            <LessonAside>
              p=none is a notebook at the door. The bouncer is still on smoko. Write down who walked in, then give them a policy.
            </LessonAside>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">SPF: the guest list</h2>
            <p className="text-slate-600 mb-4">
              SPF (Sender Policy Framework) is a TXT record in your DNS listing the servers allowed to send mail for your domain.
            </p>
            <pre className="overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-100 mb-4">
              <code>v=spf1 include:spf.protection.outlook.com include:_spf.google.com -all</code>
            </pre>
            <ul className="space-y-2 text-sm text-slate-700 mb-4">
              <li><code className="text-xs bg-slate-100 px-1 rounded">include:</code> adds a provider&apos;s servers (Microsoft 365, Google, Xero, your newsletter tool).</li>
              <li><code className="text-xs bg-slate-100 px-1 rounded">-all</code> means &ldquo;everyone else fails.&rdquo; <code className="text-xs bg-slate-100 px-1 rounded">~all</code> is a softfail, a gentler maybe.</li>
            </ul>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-amber-900">
                <strong>Catch:</strong> SPF allows at most <strong>10 DNS lookups</strong>. Each <code>include</code> can count several times. Go over the limit and SPF breaks completely (a permerror). Small businesses hit this all the time after adding their fifth SaaS tool.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">DKIM: the wax seal</h2>
            <p className="text-slate-600 mb-4">
              DKIM (DomainKeys Identified Mail) adds a cryptographic signature to every message. The public key sits in your DNS, and receivers use it to check that the message really came from your systems and was not changed on the way.
            </p>
            <p className="text-slate-600">
              You do not write DKIM by hand. Your email provider generates the key and tells you which DNS record to add. Google Workspace gives you one TXT record. Microsoft 365 uses two CNAMEs, called selectors. Turn it on in Microsoft 365 or Google Workspace admin, add the records, and check it shows as active.
            </p>
          </div>

          <HumorBreak tag="dmarc" />

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">DMARC: the bouncer&apos;s policy</h2>
            <p className="text-slate-600 mb-4">
              DMARC ties the other two together. It tells receivers: if a message claiming to be from my domain fails SPF and DKIM alignment, here is what to do with it, and please send me reports.
            </p>
            <pre className="overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-100 mb-4">
              <code>_dmarc.yourbusiness.com.au  TXT  &quot;v=DMARC1; p=none; rua=mailto:dmarc@yourbusiness.com.au&quot;</code>
            </pre>
            <ul className="space-y-2 text-sm text-slate-700">
              <li><code className="text-xs bg-slate-100 px-1 rounded">p=none</code>: monitor only and change nothing (yet).</li>
              <li><code className="text-xs bg-slate-100 px-1 rounded">p=quarantine</code>: send failures to spam.</li>
              <li><code className="text-xs bg-slate-100 px-1 rounded">p=reject</code>: block failures completely.</li>
              <li><code className="text-xs bg-slate-100 px-1 rounded">rua=</code>: where daily aggregate reports go.</li>
              <li>
                <code className="text-xs bg-slate-100 px-1 rounded">t=y</code>: testing mode. Receivers treat a stricter policy one step softer while you check nothing legitimate breaks. The old <code className="text-xs bg-slate-100 px-1 rounded">pct=</code> tag was removed in RFC 9989, so do not rely on it.
              </li>
            </ul>
            <p className="text-slate-600 mt-4">
              Alignment means the domain in the visible From: address has to match the domain SPF or DKIM checked. That is the part that stops someone spoofing exactly your address.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The rollout (do not skip steps)</h2>
            <p className="text-slate-600 mb-4">
              Going straight to <code className="text-xs bg-slate-100 px-1 rounded">p=reject</code> is how you find out your payroll system sends email for you, at the end of the month, with a phone full of angry staff.
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-slate-700">
              <li><strong>Inventory.</strong> List everything that sends email as your domain: your mailbox provider, accounting software, CRM, website contact form, newsletter platform.</li>
              <li><strong>Get SPF and DKIM working</strong> for each of them.</li>
              <li><strong>Publish <code>p=none</code></strong> with a <code>rua</code> address. Use a free or cheap DMARC report viewer, because raw reports are XML and nobody enjoys reading them.</li>
              <li><strong>Watch for 2–4 weeks.</strong> Fix any legitimate senders that are failing.</li>
              <li><strong>Move to <code>p=quarantine</code></strong>, with <code>t=y</code> first if you want a safety net, then drop <code>t=y</code> once reports stay clean.</li>
              <li><strong>Move to <code>p=reject</code></strong> once the reports are clean.</li>
            </ol>
            <p className="text-slate-600 mt-4">
              If you are on a domain you do not send email from at all (a parked domain), publish <code className="text-xs bg-slate-100 px-1 rounded">v=spf1 -all</code> and <code className="text-xs bg-slate-100 px-1 rounded">p=reject</code> straight away. Nobody should be sending from it, including attackers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Check your own domain</h2>
            <p className="text-slate-600 mb-4">
              Use read-only lookup tools such as MXToolbox, or your provider&apos;s admin checks, to see what is published for <strong>your</strong> domain. They only read public DNS. Look for:
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                Exactly one SPF record (two is an error).
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                DKIM showing as enabled.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                A DMARC record, and what policy it is at.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Common pitfalls</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Two SPF records</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">Merge them into one.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Too many lookups</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">Remove services you no longer use. Consider SPF flattening carefully.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Parking at p=none forever</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">Monitoring is step one, not the finish line. A lot of domains have sat at p=none for years.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Forgetting senders</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">Subdomains and third-party tools count. That newsletter platform has to be set up too. And somebody has to actually read the reports, or send them somewhere that summarises them.</CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Check yourself</h3>
            <ol className="space-y-2 text-sm text-slate-700">
              <li><span className="font-bold text-blue-700">1.</span> Which record lists the servers allowed to send for your domain?</li>
              <li><span className="font-bold text-blue-700">2.</span> What does <code>p=quarantine</code> do?</li>
              <li><span className="font-bold text-blue-700">3.</span> Why not start with <code>p=reject</code>?</li>
              <li><span className="font-bold text-blue-700">4.</span> Your SPF record has 14 lookups. What happens?</li>
            </ol>
            <details className="mt-4 text-sm text-slate-700">
              <summary className="cursor-pointer font-medium text-slate-900">Answers</summary>
              <p className="mt-2">1 — SPF. 2 — failing mail goes to spam. 3 — you will block your own legitimate senders. 4 — SPF fails (permerror).</p>
            </details>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Wrap</h2>
            <p className="text-slate-600">
              SPF lists who can send, DKIM proves it, and DMARC enforces it and reports back. Roll it out slowly and you make your domain much harder to impersonate, which helps a lot against the{" "}
              <Link href="/learn/business-email-compromise" className="text-blue-700 underline">
                invoice scam
              </Link>
              .
            </p>
          </div>

          <p className="text-sm text-slate-500 border-t border-slate-200 pt-6">
            Adapted from Apache-2.0 licensed source material (mukul975/Anthropic-Cybersecurity-Skills).
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Next Steps</h2>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/learn/phishing-by-the-numbers-email-headers">
                  Read a real header
                  <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/learn/business-email-compromise">Business email compromise</Link>
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
