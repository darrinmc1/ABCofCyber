import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, KeyRound, CheckCircle, AlertTriangle, Shield, Lock, Smartphone, Copy } from "lucide-react"

export default function PasswordSecurityLesson() {
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
                <KeyRound className="h-6 w-6 text-blue-700" />
              </div>
              <Badge className="bg-green-100 text-green-700">Beginner</Badge>
              <Badge variant="outline">12 min</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Password Security Basics
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Passwords are the keys to your digital life. Yet most people treat them like sticky notes on a
              monitor. This lesson covers how to create, manage, and protect credentials without losing your mind
              or your data.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* The Problem */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Passwords Matter</h2>
            <p className="text-slate-600 mb-4">
              Despite all the advances in cybersecurity, weak and reused passwords remain the #1 cause of
              account compromises. Attackers don&apos;t need sophisticated exploits when &ldquo;Password123!&rdquo;
              still appears in breach data year after year.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-4 text-center">
                  <p className="text-3xl font-bold text-red-700">81%</p>
                  <p className="text-sm text-red-600 mt-1">of data breaches involve weak or stolen passwords</p>
                </CardContent>
              </Card>
              <Card className="bg-yellow-50 border-yellow-200">
                <CardContent className="p-4 text-center">
                  <p className="text-3xl font-bold text-yellow-700">65%</p>
                  <p className="text-sm text-yellow-600 mt-1">of people reuse passwords across multiple accounts</p>
                </CardContent>
              </Card>
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4 text-center">
                  <p className="text-3xl font-bold text-blue-700">23M</p>
                  <p className="text-sm text-blue-600 mt-1">accounts use &ldquo;123456&rdquo; as their password</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Password Managers */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Use a Password Manager</h2>
            <p className="text-slate-600 mb-4">
              A password manager is the single most impactful security tool you can adopt. It generates,
              stores, and autofills strong, unique passwords for every account. You only need to remember
              one strong master password.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Generate Strong Passwords
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Password managers create 20+ character random strings that are effectively impossible to
                    guess or crack. No more relying on your cat&apos;s name plus a number.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Eliminate Password Reuse
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    When every account has a unique password, a breach at one service doesn&apos;t compromise
                    your other accounts. Reuse is the fastest way to turn one mistake into many.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Autofill &amp; Convenience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    No more typing or copying passwords. Autofill works across devices and browsers, and
                    it protects against keyloggers since you never type the password.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Security Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Most password managers alert you when a service you use has been breached, prompting
                    you to rotate that password immediately.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Creating Strong Passwords */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What Makes a Strong Password?</h2>
            <div className="space-y-4">
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Strong Password (Good)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-green-50 rounded-lg p-3 mb-3 font-mono text-sm text-green-800">
                    gX7!kL9#qR2@pO5&amp;wN1
                  </div>
                  <ul className="space-y-1 text-sm text-slate-600">
                    <li>✓ 16+ characters long</li>
                    <li>✓ Mix of uppercase, lowercase, numbers, and symbols</li>
                    <li>✓ No dictionary words, names, or patterns</li>
                    <li>✓ Completely random - generated by a password manager</li>
                    <li>✓ Unique - never used on another account</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                    Weak Password (Bad)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-red-50 rounded-lg p-3 mb-3 font-mono text-sm text-red-800">
                    Password123!
                  </div>
                  <ul className="space-y-1 text-sm text-slate-600">
                    <li>✗ Contains a common word (&ldquo;Password&rdquo;)</li>
                    <li>✗ Sequential numbers (&ldquo;123&rdquo;)</li>
                    <li>✗ Only 12 characters - crackable in seconds</li>
                    <li>✗ Likely reused across multiple accounts</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Passphrases Alternative */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-purple-600" />
                    Alternative: Passphrases
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-3">
                    If you need to remember a password (e.g., your master password), use a passphrase -
                    a sequence of random words strung together. They&apos;re easier to remember and harder to crack.
                  </p>
                  <div className="bg-purple-50 rounded-lg p-3 font-mono text-sm text-purple-800">
                    correct-horse-battery-staple
                  </div>
                  <p className="text-xs text-slate-500 mt-2">
                    This four-word passphrase would take centuries to crack, yet it&apos;s easy to type and
                    remember. Add a number and symbol for extra strength: Correct-Horse-7%!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Multi-Factor Authentication */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Multi-Factor Authentication (MFA)</h2>
            <p className="text-slate-600 mb-4">
              MFA adds a second layer of protection beyond your password. Even if an attacker steals your
              password, they cannot access your account without the second factor. This single step blocks
              over 99% of automated attacks.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Smartphone className="h-5 w-5 text-blue-600" />
                    Authenticator Apps
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Apps like Google Authenticator, Authy, or Microsoft Authenticator generate time-based
                    codes that change every 30 seconds. No network connection needed.
                  </p>
                  <p className="text-xs text-green-700 mt-2 font-medium">✓ Most Secure (App-based)</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-purple-600" />
                    Hardware Keys
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Physical security keys like YubiKey plug into your device and authenticate via USB or
                    NFC. Phishing-resistant by design - the best protection available.
                  </p>
                  <p className="text-xs text-green-700 mt-2 font-medium">✓ Gold Standard</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Copy className="h-5 w-5 text-yellow-600" />
                    SMS Codes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Codes sent via text message. Better than no MFA, but vulnerable to SIM swapping
                    attacks. Use an authenticator app or hardware key when available.
                  </p>
                  <p className="text-xs text-yellow-700 mt-2 font-medium">⚠ Better than nothing</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Password Hygiene Checklist */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Password Hygiene Checklist</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <input type="checkbox" readOnly className="mt-1 h-4 w-4 rounded border-gray-300" />
                <div>
                  <p className="text-sm font-medium text-slate-900">Use a password manager</p>
                  <p className="text-xs text-slate-500">Pick one (Bitwarden, 1Password, or your browser&apos;s built-in manager) and start using it today.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" readOnly className="mt-1 h-4 w-4 rounded border-gray-300" />
                <div>
                  <p className="text-sm font-medium text-slate-900">Enable MFA everywhere</p>
                  <p className="text-xs text-slate-500">Start with email, banking, and social media. Use an authenticator app, not SMS, where possible.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" readOnly className="mt-1 h-4 w-4 rounded border-gray-300" />
                <div>
                  <p className="text-sm font-medium text-slate-900">Never reuse passwords</p>
                  <p className="text-xs text-slate-500">Every account gets its own unique, randomly generated password. Your password manager handles this.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" readOnly className="mt-1 h-4 w-4 rounded border-gray-300" />
                <div>
                  <p className="text-sm font-medium text-slate-900">Rotate compromised passwords immediately</p>
                  <p className="text-xs text-slate-500">Use haveibeenpwned.com to check if your credentials appear in known breaches.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" readOnly className="mt-1 h-4 w-4 rounded border-gray-300" />
                <div>
                  <p className="text-sm font-medium text-slate-900">Never share passwords</p>
                  <p className="text-xs text-slate-500">Use password manager sharing features for team access instead of emailing or texting credentials.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" readOnly className="mt-1 h-4 w-4 rounded border-gray-300" />
                <div>
                  <p className="text-sm font-medium text-slate-900">Lock your devices</p>
                  <p className="text-xs text-slate-500">Set a strong PIN or biometric lock on your phone, laptop, and tablet. Auto-lock after 5 minutes of inactivity.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Common Mistakes */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Common Password Mistakes to Avoid</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    Using Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Birthdays, pet names, street names, and anniversary dates are easy to guess from
                    social media. Attackers scrape this data to crack passwords.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    Password Rotation Policies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Forcing password changes every 90 days actually reduces security - people choose weaker
                    passwords and use predictable patterns (e.g., Spring2024! → Fall2024!).
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    Writing Passwords Down
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Sticky notes on monitors, notebooks in desk drawers, or digital notes in unencrypted
                    files all create exposure. Use a password manager instead.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    Using the Same Password
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    When you reuse passwords, a breach at a small forum or shopping site hands attackers
                    the keys to your email, banking, and work accounts.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="bg-slate-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Next Steps</h2>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="/learn/network-security">
                  Next Lesson: Network Security Fundamentals
                  <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
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
