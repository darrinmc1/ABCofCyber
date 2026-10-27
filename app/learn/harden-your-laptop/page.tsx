import type { Metadata } from "next"
import Link from "next/link"
import { pageMeta } from "@/lib/seo"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Shield, CheckCircle, AlertTriangle } from "lucide-react"
import HumorBreak from "@/components/humor-break"
import { LessonAside } from "@/components/lesson-aside"

export const metadata: Metadata = pageMeta({
  title: "Harden Your Laptop",
  description:
    "Eight high-value laptop settings mapped to CIS Level 1 and the ACSC Essential Eight, and which settings to leave alone.",
  path: "/learn/harden-your-laptop",
})

const topics = ["CIS Level 1", "Essential Eight", "Disk encryption", "Backups"]

const essentialEight = [
  ["Auto-updates", "Patch applications / Patch operating systems"],
  ["Standard user account", "Restrict administrative privileges"],
  ["Macro blocking", "Configure Microsoft Office macro settings"],
  ["Browser hygiene, blocking ads/Java", "User application hardening"],
  ["MFA", "Multi-factor authentication"],
  ["Tested backups", "Regular backups"],
]

export default function HardenYourLaptopLesson() {
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
                <Shield className="h-6 w-6 text-blue-700" />
              </div>
              <Badge className="bg-green-100 text-green-700">Beginner</Badge>
              <Badge variant="outline">14 min</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Harden Your Laptop (Without Becoming a Sysadmin)
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              A new laptop comes set up for convenience, not safety. You need about eight settings, not a 900-page benchmark.
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What hardening means</h2>
            <p className="text-slate-600 mb-4">
              Hardening means changing defaults so that a stolen device, a bad download, or a reused password does less damage.
            </p>
            <p className="text-slate-600 mb-4">
              The Center for Internet Security (CIS) publishes free Benchmarks: long, consensus-written configuration guides for Windows, macOS, Linux, browsers and more. They come in two levels.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Level 1</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  Sensible settings that rarely break anything. This lesson sticks to these.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Level 2</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  Stricter settings for high-security environments that may break things you rely on.
                </CardContent>
              </Card>
            </div>
            <p className="text-slate-600 mt-4">
              Corporate IT teams apply hundreds of these with automated tools. You need about eight. The{" "}
              <Link href="/frameworks/cis-controls" className="text-blue-700 underline">CIS Controls</Link> and{" "}
              <Link href="/frameworks/nist-csf" className="text-blue-700 underline">NIST CSF 2.0 Protect</Link> pages sit next to this if you want the catalogue, not the afternoon of setup.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The eight that matter most</h2>
            <ol className="list-decimal pl-6 space-y-4 text-slate-700">
              <li>
                <strong>Automatic updates: on.</strong> Most attacks use known bugs that already have fixes. Turn on automatic OS updates, and update your browser and apps too. In the Essential Eight this is &ldquo;patch applications&rdquo; and &ldquo;patch operating systems&rdquo;. Restart when it asks. Yes, really. &ldquo;Remind me tomorrow&rdquo; does not count as a patching strategy.
              </li>
              <li>
                <strong>Full-disk encryption: on.</strong> If the laptop is left in an Uber, encryption means the thief gets a paperweight instead of your client files. Windows: BitLocker (or &ldquo;Device encryption&rdquo; on Home editions). macOS: FileVault. Linux: LUKS, usually chosen when you install. Save the recovery key somewhere safe that is not on the laptop.
              </li>
              <li>
                <strong>Firewall: on.</strong> Windows Defender Firewall and the macOS firewall are fine. On Linux, <code className="text-xs bg-slate-100 px-1 rounded">ufw</code> with default-deny for incoming connections is a solid start.
              </li>
              <li>
                <strong>Screen lock: short.</strong> Lock automatically after 5–10 minutes of inactivity and require a password when it wakes. Get used to pressing Win+L or Ctrl+Cmd+Q when you walk away. The café in Fortitude Valley is not as private as it feels.
              </li>
              <li>
                <strong>Do not use an admin account day to day.</strong> Create a standard user account for daily work and keep the admin account for installing software. Malware that runs as a standard user can do far less. The Essential Eight calls this &ldquo;restrict administrative privileges&rdquo;.
              </li>
              <li>
                <strong>MFA on everything important.</strong> Email, cloud storage, banking, accounting software. An authenticator app or passkey is better than SMS, but SMS is still far better than nothing.
              </li>
              <li>
                <strong>Backups you have actually tested.</strong> Automatic backups (File History, Time Machine, or a cloud backup), with at least one copy that is not permanently connected so ransomware cannot reach it. Restore one file every few months to prove it works. &ldquo;Regular backups&rdquo; is the Essential Eight item people most often assume they have.
              </li>
              <li>
                <strong>Browser hygiene.</strong> Keep the browser updated, remove extensions you do not use (each one can see a lot), block pop-ups, and use a password manager instead of the browser&apos;s &ldquo;remember everything&rdquo; feature where you can.
              </li>
            </ol>
            <LessonAside>
              &ldquo;Remind me tomorrow&rdquo; is not a patching strategy. It is how a laptop in Fortitude Valley becomes a paperweight with opinions.
            </LessonAside>
          </div>

          <HumorBreak tag="laptop" />

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Windows quick wins</h2>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>Settings → Windows Security: check that every tile shows a green tick.</li>
              <li>Turn on <strong>Smart App Control</strong> or <strong>Reputation-based protection</strong>.</li>
              <li>Office: block macros from the internet (this is the default in newer versions, but check). This is an Essential Eight item for a reason.</li>
              <li>Remove software you no longer use, and old Java and Flash-era plugins if any are still hanging around.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Linux quick wins</h2>
            <ul className="space-y-2 text-sm text-slate-700">
              <li><code className="text-xs bg-slate-100 px-1 rounded">sudo apt update &amp;&amp; sudo apt upgrade</code> regularly, or turn on unattended-upgrades.</li>
              <li>Disable SSH password login if you use SSH, and use keys instead.</li>
              <li>Remove services you do not need.</li>
              <li>Do not run your browser as root.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What to leave alone</h2>
            <p className="text-slate-600">
              CIS Benchmarks include things like strict audit policies, disabling USB storage, and kernel parameter tweaks. They are useful in managed fleets and confusing on a personal laptop. If a setting needs Group Policy, a registry edit, or a reboot into recovery mode, and you do not know why you are doing it, skip it or ask someone who does.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Mapping to the Essential Eight</h2>
            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full text-sm text-left">
                <caption className="sr-only">Laptop settings mapped to Essential Eight strategies</caption>
                <thead className="bg-slate-50 text-slate-900">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold">Your setting</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Essential Eight strategy</th>
                  </tr>
                </thead>
                <tbody>
                  {essentialEight.map(([setting, strategy]) => (
                    <tr key={setting} className="border-t border-slate-200">
                      <th scope="row" className="px-4 py-3 font-medium text-slate-800">{setting}</th>
                      <td className="px-4 py-3 text-slate-600">{strategy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-600 mt-4">
              That covers seven of the eight. The one left is application control (only letting approved programs run), which is mostly a job for business IT, not personal laptop owners. You will also hear about Essential Eight &ldquo;maturity levels&rdquo;. Those are not a ninth strategy, just a measure of how thoroughly each of the eight is done.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Common pitfalls</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-600" />
                    Encryption without a recovery key
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">That is how you lock yourself out permanently.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">&ldquo;I have antivirus, so I am fine.&rdquo;</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">Antivirus is one layer. Updates and MFA matter more.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Postponing updates for weeks</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">The gap between a fix being released and attackers using the bug keeps shrinking.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Backups connected all the time</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">Ransomware encrypts those too.</CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Check yourself</h3>
            <ol className="space-y-2 text-sm text-slate-700">
              <li><span className="font-bold text-blue-700">1.</span> What is the difference between CIS Level 1 and Level 2?</li>
              <li><span className="font-bold text-blue-700">2.</span> Your laptop is stolen. Which setting protects the files?</li>
              <li><span className="font-bold text-blue-700">3.</span> Why use a standard account day to day?</li>
              <li><span className="font-bold text-blue-700">4.</span> Name three Essential Eight strategies you can apply to a laptop.</li>
            </ol>
            <details className="mt-4 text-sm text-slate-700">
              <summary className="cursor-pointer font-medium text-slate-900">Answers</summary>
              <p className="mt-2">
                1 — Level 1 is safe baseline settings; Level 2 is stricter and may break things. 2 — full-disk encryption. 3 — malware gets fewer privileges. 4 — for example patching, MFA, backups, restricting admin, macro settings.
              </p>
            </details>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Wrap</h2>
            <p className="text-slate-600 mb-4">
              You do not need to read a 900-page benchmark. Updates, encryption, firewall, screen lock, a non-admin account, MFA, tested backups and a tidy browser cover most of the risk. One afternoon of setup is worth it.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                Stick to CIS Level 1 unless someone who does this for a living is helping.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                Seven Essential Eight strategies fit a laptop. Application control is the one left for business IT.
              </li>
            </ul>
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
                <Link href="/learn/small-business-incident-plan">
                  Next: one-page incident plan
                  <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/frameworks/cis-controls">CIS Controls</Link>
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
