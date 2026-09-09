import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Shield, CheckCircle, AlertTriangle, KeyRound, Laptop, Network } from "lucide-react"
import HumorBreak from "@/components/humor-break"
import { LessonAside } from "@/components/lesson-aside"

export default function ZeroTrustArchitectureForSmallBusinessesLesson() {
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
                <Shield className="h-6 w-6 text-blue-700" />
              </div>
              <Badge className="bg-green-100 text-green-700">Beginner</Badge>
              <Badge variant="outline">18 min</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Zero Trust Architecture for Small Businesses: What It Is and How to Start
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Never trust, always verify is a habit, not a SKU. This lesson translates Zero
              Trust into MFA, least privilege, and assume-breach moves a small team can make
              without a platform bake-off.
            </p>
            <div className="flex flex-wrap gap-2">
              {["zero trust", "MFA", "least privilege", "small business", "assume breach"].map((t) => (
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The castle was a story</h2>
            <p className="text-slate-600 mb-4">
              Old model: strong door, trusted inside. People now work from kitchens, use
              SaaS that does not live in your rack, and click invoices on phones. &ldquo;On
              the VPN&rdquo; is not a personality test. A password-reset email is a
              verification event, not a loyalty test.
            </p>
            <p className="text-slate-600 mb-4">
              Zero Trust (see NIST SP 800-207 if you want the long form) means: authenticate
              the user, the device, and the request. Give the least access that still lets
              the job happen. Design as if someone is already in. You will not &ldquo;finish&rdquo;
              Zero Trust. You can start this month.
            </p>
            <LessonAside>
              If the plan starts with a vendor bake-off and no list of who can reset payroll,
              you bought a slogan. Slogans do not revoke sessions.
            </LessonAside>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Three sentences you can run the company on</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-lg">Verify explicitly</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700">
                    Identity plus device plus context. MFA on every account that can touch
                    money, mail, or customer data. No shared logins that four people know
                    &ldquo;because it is easier.&rdquo;
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-lg">Least privilege</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700">
                    The intern does not need the production database. The contractor does
                    not need last year&apos;s payroll. Access expires when the project does.
                    Admin is a named person, not a group chat.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-amber-50 border-amber-200">
                <CardHeader>
                  <CardTitle className="text-lg">Assume breach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700">
                    Segment guest Wi-Fi from the bookkeeping laptop. If one mailbox is
                    stolen, it should not be a skeleton key. Encrypt the laptop. Backups
                    you have restored once beat backups you have never tried.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <HumorBreak tag="zero trust" />

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Start with identity, not a new religion</h2>
            <p className="text-slate-600 mb-4">
              For a shop of 5–50 people, the protect surface is usually: email, identity
              (Microsoft 365 or Google), banking, the customer system, and the machines
              people type on. Map who uses those. Then apply the three sentences.
            </p>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <KeyRound className="h-5 w-5 text-blue-700" />
                    <div>
                      <CardTitle className="text-lg">MFA everywhere it will stick</CardTitle>
                      <CardDescription>Authenticator app or hardware key. SMS if that is all the bank offers.</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Email first. Then the identity provider. Then banking and the CRM.
                    Password Security covers the how. Zero Trust is the why: a stolen
                    password should not be a workday. Turn off legacy protocols that
                    skip MFA because &ldquo;the old mail app needs it.&rdquo; The old
                    mail app is a hole.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Laptop className="h-5 w-5 text-green-700" />
                    <div>
                      <CardTitle className="text-lg">Devices you can stand behind</CardTitle>
                      <CardDescription>Disk encryption, auto-lock, updates, and a way to wipe a lost laptop.</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    You do not need an enterprise MDM on day one. You do need BitLocker or
                    FileVault on, a screen lock, and a written rule that work mail does not
                    live only on a personal phone you cannot erase. If you already have
                    Intune or Google endpoint management, use it for the boring baseline
                    before you buy another logo.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Network className="h-5 w-5 text-purple-700" />
                    <div>
                      <CardTitle className="text-lg">Small segmentation still counts</CardTitle>
                      <CardDescription>Guest Wi-Fi, printers, and the laptop that does payroll do not need to be friends.</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Network Security covers VLANs and default-deny. Zero Trust adds:
                    applications should not trust a connection just because it came from
                    &ldquo;the office.&rdquo; Prefer SSO to each app over a flat network
                    that treats the building as a password.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">A 30-day starter, not a transformation deck</h2>
            <div className="space-y-3 text-sm text-slate-700">
              <div className="flex items-start gap-3 p-3 rounded bg-slate-50">
                <Badge className="bg-blue-100 text-blue-700 mt-0.5">Week 1</Badge>
                <p>
                  Inventory: email, identity, banking, CRM, file store, who is admin.
                  Turn on MFA for those admins today. Write down the offboarding steps
                  from the Insider Threats lesson.
                </p>
              </div>
              <div className="flex items-start gap-3 p-3 rounded bg-slate-50">
                <Badge className="bg-green-100 text-green-700 mt-0.5">Week 2</Badge>
                <p>
                  MFA for everyone who has a mailbox. Kill shared passwords or put them
                  in a manager with named access. Disable mailbox forwarding you did not
                  approve.
                </p>
              </div>
              <div className="flex items-start gap-3 p-3 rounded bg-slate-50">
                <Badge className="bg-yellow-100 text-yellow-700 mt-0.5">Week 3</Badge>
                <p>
                  Guest Wi-Fi isolated. Laptops encrypted. One restore test of the backup
                  you claim to have. Admin accounts are not the accounts people use for
                  mail.
                </p>
              </div>
              <div className="flex items-start gap-3 p-3 rounded bg-slate-50">
                <Badge className="bg-purple-100 text-purple-700 mt-0.5">Week 4</Badge>
                <p>
                  Access review: who still has last quarter&apos;s project. Conditional
                  access if your suite offers it (block legacy auth, require MFA from
                  new countries). Tabletop: one phish, one lost laptop. Use Incident
                  Response Basics for the script.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-amber-900">What this is not</p>
              <p className="text-sm text-amber-800">
                It is not &ldquo;never open a PDF.&rdquo; It is not a replacement for
                backups, patching, or teaching people not to type passwords into the
                email. Framework pages (NIST CSF, CIS) go deeper on control catalogs.
                This lesson is the posture: stop treating the office as a trusted country.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Zero Trust starter checklist</h3>
            <div className="space-y-2 text-sm text-slate-700">
              {[
                "Named admins only; daily work uses a non-admin account",
                "MFA on email, identity provider, banking, and the customer system",
                "Least privilege reviewed this quarter; leavers revoked the same day",
                "Guest / IoT / work networks are not one happy family",
                "Disk encryption and lock screens on laptops that hold work mail",
                "Backup restored once on purpose, not only in a fantasy",
                "Password-reset and vendor-pay requests get an out-of-band check",
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
                Zero Trust is verify, least privilege, assume breach — not a product name.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                Start with identity and the few systems that can ruin a quarter.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                A 30-day MFA and access pass beats a 90-page architecture that never ships.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                Pair with Password Security, Network Security, Insider Threats, and IR.
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
                <Link href="/frameworks/nist-csf">
                  NIST CSF framework
                  <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/learn/password-security">Password Security Basics</Link>
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
