import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Users, Phone, AlertTriangle, CheckCircle, Shield, UserX, DoorOpen, MessageSquare } from "lucide-react"

export default function SocialEngineeringLesson() {
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
              <div className="p-2 rounded-lg bg-orange-100">
                <Users className="h-6 w-6 text-orange-700" />
              </div>
              <Badge className="bg-green-100 text-green-700">Beginner</Badge>
              <Badge variant="outline">15 min</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Social Engineering Defense
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              The most dangerous hacking tool is not a zero-day exploit - it&apos;s a confident voice on the phone
              asking for the door code. Social engineering exploits human psychology, not technical flaws.
              This lesson teaches you to recognize and resist it.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* What is Social Engineering */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What is Social Engineering?</h2>
            <p className="text-slate-600 mb-4">
              Social engineering is the art of manipulating people into sharing confidential information or
              performing actions that compromise security. Attackers exploit natural human tendencies:
              trust, helpfulness, fear, and the desire to avoid conflict.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3 mb-6">
              <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-amber-900">Why It Works</p>
                <p className="text-sm text-amber-800">
                  Security technology can block many technical attacks, but it cannot block a persuasive
                  person. Social engineering bypasses firewalls, encryption, and MFA by targeting the one
                  element every system has: a human operator who wants to be helpful.
                </p>
              </div>
            </div>
          </div>

          {/* Common Attack Types */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Common Social Engineering Attacks</h2>

            <div className="space-y-6">
              {/* Pretexting */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100">
                      <MessageSquare className="h-5 w-5 text-blue-700" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Pretexting</CardTitle>
                      <CardDescription>Creating a fabricated scenario to steal information</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-3">
                    The attacker creates a believable scenario (the &ldquo;pretext&rdquo;) to engage their
                    target. They might pose as IT support, a vendor, a law enforcement officer, or a
                    colleague from another department.
                  </p>
                  <div className="bg-slate-50 rounded-lg p-3">
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">Example</p>
                    <p className="text-sm text-slate-700 italic">
                      &ldquo;Hi, this is Mark from IT. We&apos;re doing a security audit and need to verify your
                      account credentials. Can you confirm your username and password so we can run the test?&rdquo;
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Baiting */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100">
                      <AlertTriangle className="h-5 w-5 text-green-700" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Baiting</CardTitle>
                      <CardDescription>Offering something enticing to trick you into installing malware</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-3">
                    Attackers leave infected USB drives in parking lots, break rooms, or other areas where
                    curious employees might pick them up and plug them in. The drive is labeled with something
                    enticing like &ldquo;Confidential - Q4 Bonus Data&rdquo; or &ldquo;Employee Salary Records.&rdquo;
                  </p>
                  <div className="bg-red-50 rounded-lg p-3">
                    <p className="text-xs font-medium text-red-500 uppercase tracking-wide mb-1">Prevention</p>
                    <p className="text-sm text-red-700">
                      Never insert unknown USB drives into your computer. Report found drives to your
                      security team. Most organizations disable USB autorun for this reason.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Tailgating */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100">
                      <DoorOpen className="h-5 w-5 text-purple-700" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Tailgating (Piggybacking)</CardTitle>
                      <CardDescription>Following an authorized person into a restricted area</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-3">
                    An attacker waits near a secured door and follows an employee inside, often while
                    carrying boxes or pretending to be on the phone so it seems rude to challenge them.
                    Once inside, they have physical access to the building.
                  </p>
                  <div className="bg-slate-50 rounded-lg p-3">
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">Example</p>
                    <p className="text-sm text-slate-700 italic">
                      Someone in a delivery uniform approaches the secure entrance as you swipe in:
                      &ldquo;Oh, can you grab that door? My hands are full with these packages. Thanks!&rdquo;
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Vishing */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-red-100">
                      <Phone className="h-5 w-5 text-red-700" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Vishing (Voice Phishing)</CardTitle>
                      <CardDescription>Phone-based social engineering attacks</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-3">
                    Attackers use phone calls to extract sensitive information. They may spoof caller ID
                    to appear as a legitimate organization. The pressure of a live conversation makes it
                    harder to think critically.
                  </p>
                  <div className="bg-slate-50 rounded-lg p-3">
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">Example</p>
                    <p className="text-sm text-slate-700 italic">
                      &ldquo;Hello, this is Agent Rodriguez from the IRS. There is a warrant out for your
                      arrest regarding unpaid taxes. To avoid immediate detention, please verify your
                      Social Security number and make a payment via gift cards.&rdquo;
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quid Pro Quo */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-yellow-100">
                      <UserX className="h-5 w-5 text-yellow-700" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Quid Pro Quo</CardTitle>
                      <CardDescription>You scratch my back, I&apos;ll compromise yours</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-3">
                    Attackers offer a service or benefit in exchange for information or access. This might
                    be &ldquo;free&rdquo; tech support, a &ldquo;security assessment,&rdquo; or a fake survey
                    that rewards participants with a gift card - after collecting personal data.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Psychology of Social Engineering */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Psychological Principles Attackers Exploit</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Authority</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    People tend to obey figures of authority. Attackers pose as executives, IT directors,
                    law enforcement, or auditors to pressure targets into compliance.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Urgency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Creating a false sense of urgency bypasses rational thinking. &ldquo;If you don&apos;t
                    act right now, something terrible will happen&rdquo; is a classic social engineering script.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Likeability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Friendly, charming people are harder to say no to. Attackers invest time building rapport
                    before making their request.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Reciprocity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    If someone does you a small favor, you feel obligated to return it. Attackers offer small
                    &ldquo;favors&rdquo; to create a sense of indebtedness.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Social Proof</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    &ldquo;Everyone else is doing it&rdquo; is persuasive. Attackers may reference other
                    departments or employees who have already &ldquo;complied.&rdquo;
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Scarcity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    &ldquo;Limited time offer,&rdquo; &ldquo;only a few spots left,&rdquo; or &ldquo;exclusive
                    access&rdquo; creates FOMO and pushes people to act quickly without verification.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Defense Strategies */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">How to Defend Against Social Engineering</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-600" />
                    Verify Independently
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    If someone calls claiming to be from IT, your bank, or a vendor, hang up and call them
                    back using a number you know is legitimate - not one they provide. Independent
                    verification is your strongest defense.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-600" />
                    Trust Your Instincts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    If something feels off, it probably is. Social engineering works because it makes you
                    feel rude for questioning. Polite skepticism is not rudeness - it&apos;s security.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-purple-600" />
                    Follow Policy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Good organizations have clear policies: IT will never ask for your password; visitors
                    must be escorted; sensitive information is never shared over the phone without
                    verification. When in doubt, check the policy.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-red-600" />
                    Report Suspicious Contact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Report any suspicious phone calls, in-person encounters, or messages to your security
                    team immediately. Early reporting can prevent a broader attack.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Real-World Scenario */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Real-World Scenario</h3>
            <div className="space-y-3 text-sm text-slate-700">
              <p>
                <strong>The Call:</strong> You receive a call from someone claiming to be &ldquo;David&rdquo;
                from your company&apos;s help desk. He says there&apos;s been a security incident and they need
                to verify your account. He knows your name, your department, and your manager&apos;s name.
              </p>
              <p>
                <strong>The Red Flags:</strong> David sounds slightly rushed. The caller ID shows an unfamiliar
                number. Your company&apos;s actual help desk has never called you before. He&apos;s asking for
                your password, which IT should never do.
              </p>
              <p>
                <strong>What To Do:</strong> &ldquo;Thank you for letting me know, David. I&apos;ll call the
                help desk directly to follow up.&rdquo; Hang up, look up the official help desk number, and
                report the call to your security team.
              </p>
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Key Takeaways</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                Social engineering targets human psychology, not technical systems
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                Always verify identities through independent channels
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                Be skeptical of unsolicited requests for sensitive information
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                Never let strangers follow you into secured areas
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                Report suspicious contact - you might be the early warning for a bigger attack
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                IT will NEVER ask for your password. No exceptions.
              </li>
            </ul>
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
                <Link href="/learn/incident-response-basics">
                  Next Lesson: Incident Response Basics
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
