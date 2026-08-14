import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Smartphone, Shield, AlertTriangle, CheckCircle, KeyRound } from "lucide-react"

export default function MfaBeyondPasswordsLesson() {
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
                <Smartphone className="h-6 w-6 text-blue-700" />
              </div>
              <Badge className="bg-green-100 text-green-700">Beginner</Badge>
              <Badge variant="outline">10 min</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
              MFA Beyond Passwords
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              A password is a secret you can be talked out of. MFA is supposed to be the second lock.
              This lesson covers authenticators, number matching, and phishing-resistant options — and
              why a text message is not a strategy so much as a courtesy.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The brief</h2>
            <p className="text-slate-600 mb-4">
              Multi-factor authentication asks for something you know (the password) plus something you
              have or are. It blocks most automated account takeovers. It does not block a tired person
              approving a prompt they did not start.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <p className="text-sm text-slate-700">
                Briefing note: if the second factor can be read aloud to a stranger on the phone, it is
                still a password wearing a different jacket.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What to use, in order</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-600" />
                    Phishing-resistant
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Passkeys and FIDO2 hardware keys (YubiKey and similar) bind the login to the real
                    site. A lookalike page cannot complete the ceremony. Use these for email, SSO, and
                    admin accounts.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Smartphone className="h-5 w-5 text-blue-600" />
                    Authenticator apps
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    TOTP apps (Microsoft Authenticator, Authy, Google Authenticator) generate a code
                    that changes every 30 seconds. Prefer number matching or &ldquo;approve this
                    number&rdquo; over a blind Yes button.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <KeyRound className="h-5 w-5 text-yellow-600" />
                    SMS and voice
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Better than nothing, in the same way a screen door is better than an open one. SIM
                    swaps and intercepted texts exist. Keep SMS only where the service offers nothing
                    else, then replace it.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">MFA fatigue is a real play</h2>
            <p className="text-slate-600 mb-4">
              Attackers who already have the password will spam approve-requests until someone taps
              Yes to make the noise stop. That is not a technical failure. It is a tired human being
              treated as a doorbell.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                Never approve a prompt you did not just initiate.
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                Turn on number matching. If the numbers do not match, deny and tell IT.
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                If you already approved a surprise prompt, change the password from a bookmark and
                revoke sessions. Then read Incident Response Basics.
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Do this week</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                Turn MFA on for email, Microsoft 365 / Google, banking, and the password manager.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                Prefer an authenticator or passkey over SMS. Register a second method so one lost
                phone is not a locked company.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                Store recovery codes in the password manager, not in a screenshot named
                &ldquo;codes.png&rdquo; on the desktop.
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
                <Link href="/learn/backups-that-actually-restore">
                  Next Lesson: Backups That Actually Restore
                  <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/learn/password-security">Related: Password Security Basics</Link>
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
