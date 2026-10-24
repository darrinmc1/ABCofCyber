import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { pageMeta } from "@/lib/seo"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Eye, KeyRound, FileKey, AlertTriangle } from "lucide-react"
import HumorBreak from "@/components/humor-break"
import { LessonAside } from "@/components/lesson-aside"

export const metadata: Metadata = pageMeta({
  title: "Decentralized identity, without the slogan",
  description: "A DID is a key you hold and a claim an issuer signs. The issuer can still revoke the claim. Losing the key is not a password reset.",
  path: "/learn/the-blockchains-backbone-understanding-decentralized-identity-for-enhanced-secur",
})

export default function DecentralizedIdentityLesson() {
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
                <Eye className="h-6 w-6 text-blue-700" />
              </div>
              <Badge className="bg-yellow-100 text-yellow-700">Intermediate</Badge>
              <Badge variant="outline">14 min</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
              The Blockchain&apos;s Backbone: Understanding Decentralized Identity for Enhanced Security
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Decentralized identity is a key you control and a credential someone else
              signs. It is not a spell that makes a blockchain hold your passport safely.
            </p>
            <div className="flex flex-wrap gap-2">
              {["decentralized identity", "verifiable credentials", "keys", "privacy"].map((t) => (
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Two pieces, often sold as one</h2>
            <p className="text-slate-600 mb-4">
              A decentralized identifier (the W3C DID idea) is a name you can prove you
              control, because you hold the private key. A verifiable credential is a
              claim an issuer signs: this person is over 18, this person works here,
              this device belongs to that account. You show the claim. You do not have
              to hand over the whole file of everything else you are.
            </p>
            <p className="text-slate-600">
              Some DID methods anchor that name on a blockchain. Some do not. The chain
              is a way to publish a key so others can check it. It is not what makes the
              claim true. The issuer&apos;s signature does that.
            </p>
            <LessonAside>
              &ldquo;No one can revoke you&rdquo; is the sales line. An employer can still
              revoke the &ldquo;works here&rdquo; credential. The identifier may remain.
              The claim does not have to.
            </LessonAside>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <KeyRound className="h-5 w-5 text-blue-700" />
                  <CardTitle className="text-lg">You hold the key</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-slate-700">
                The private key proves control. Lose it, and there may be no help desk.
                A screenshot named keys-final is a copy. So is a seed phrase in email.
              </CardContent>
            </Card>
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <FileKey className="h-5 w-5 text-green-700" />
                  <CardTitle className="text-lg">They sign the claim</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-slate-700">
                The issuer decides what is true and can expire or revoke it. You choose
                when to present it. That split is the actual privacy win.
              </CardContent>
            </Card>
            <Card className="bg-amber-50 border-amber-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-700" />
                  <CardTitle className="text-lg">The chain remembers</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-slate-700">
                Publish a secret onto a public ledger and it stays published. Put the
                identifier there. Do not put the tax file number there.
              </CardContent>
            </Card>
          </div>

          <HumorBreak tag="identity" />

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What a small team should do with this</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Use the boring cousin that already shipped</CardTitle>
                  <CardDescription>Passkeys are the same shape: a key on the device, a public key on the account.</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  If the goal is &ldquo;stop shared passwords,&rdquo; turn on passkeys or
                  a hardware key for email and the identity provider. You do not need a
                  new chain for that. Zero Trust and Password Security cover the rollout.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">If a vendor pitches DID, ask four things</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
                    <li>Who is the issuer, and how do they revoke a claim?</li>
                    <li>Where is the private key stored, and what is the recovery story?</li>
                    <li>What exactly is written to a chain, if anything?</li>
                    <li>Which wallet or app does a non-specialist have to keep working?</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <p className="text-slate-600 mt-4">
              The idea is sound: show a signed claim, keep the rest. The failure mode is
              also sound: a key nobody can reset, and a ledger that never forgets a mistake.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
