import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { pageMeta } from "@/lib/seo"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Eye, KeyRound, Lock, Fingerprint, PenLine } from "lucide-react"
import HumorBreak from "@/components/humor-break"
import { LessonAside } from "@/components/lesson-aside"

export const metadata: Metadata = pageMeta({
  title: "Encryption without the fog",
  description: "Shared keys, public keys, hashes, and signatures, in plain language. A hash is not encryption.",
  path: "/learn/the-cryptographic-canvas-visualizing-encryption-for-everyday-understanding",
})

export default function CryptographicCanvasLesson() {
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
              <Badge className="bg-green-100 text-green-700">Beginner</Badge>
              <Badge variant="outline">14 min</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
              The Cryptographic Canvas: Visualizing Encryption for Everyday Understanding
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Four ideas cover most of what people mean by &ldquo;it&apos;s encrypted.&rdquo;
              Shared keys, public keys, hashes, and signatures. They are not the same tool.
            </p>
            <div className="flex flex-wrap gap-2">
              {["encryption", "cryptography", "hashing", "signatures", "beginner"].map((t) => (
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4">A locked box, and the part people skip</h2>
            <p className="text-slate-600 mb-4">
              Plaintext is the readable message. Encryption scrambles it into ciphertext.
              Decryption turns it back, with the right key. Without the key, the scramble
              is the point.
            </p>
            <p className="text-slate-600">
              The hard part is rarely the maths in the product you bought. The hard part
              is who has the key, where it lives, and whether you just emailed it.
            </p>
            <LessonAside>
              A zip file with a password in the following email is a locked diary mailed
              with the combination taped to the envelope. The lock worked. The plan did not.
            </LessonAside>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <KeyRound className="h-5 w-5 text-blue-700" />
                  <CardTitle className="text-lg">Symmetric: one shared key</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-slate-700 space-y-2">
                <p>
                  Same key locks and unlocks. AES is the usual one. It is fast, which is
                  why it protects big files and the actual bytes of a web session.
                </p>
                <p>
                  Both sides must already share the key, and a leaked key opens everything
                  that key protects. Rotating it means telling every holder, safely.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lock className="h-5 w-5 text-green-700" />
                  <CardTitle className="text-lg">Asymmetric: a public and a private key</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-slate-700 space-y-2">
                <p>
                  The public key can be shared. The private key stays with one party.
                  Someone encrypts to your public key. Only your private key reads it.
                </p>
                <p>
                  This is slow for large files. Real systems use it to agree a symmetric
                  key, then switch. That pairing is how HTTPS (TLS) carries a page.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-amber-50 border-amber-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Fingerprint className="h-5 w-5 text-amber-700" />
                  <CardTitle className="text-lg">A hash is not encryption</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-slate-700 space-y-2">
                <p>
                  A hash (SHA-256 is the common one) turns input into a short fingerprint.
                  Change one character and the fingerprint changes. You do not reverse a
                  hash to get the file back. There is no key for that, because it is not
                  a lock.
                </p>
                <p>
                  Password stores keep hashes, not the password. A leaked hash is still
                  dangerous if the password was weak, because attackers can guess.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <PenLine className="h-5 w-5 text-slate-700" />
                  <CardTitle className="text-lg">Signatures: a hash you can check</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-slate-700 space-y-2">
                <p>
                  A signature is a hash of the message, locked with the signer&apos;s private
                  key. Anyone with the public key can check two things: it matches this
                  message, and the private key produced it.
                </p>
                <p>
                  That is integrity plus origin. It is not secrecy. A signed email can
                  still be read by anyone who received it.
                </p>
              </CardContent>
            </Card>
          </div>

          <HumorBreak tag="encryption" />

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What to say when a vendor says &ldquo;encrypted&rdquo;</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Encrypted where: on the disk, on the wire, or both?</li>
              <li>Who holds the key: you, the vendor, or both?</li>
              <li>Can the vendor read it if they are asked, or if they are breached?</li>
              <li>Is the password travelling in a second channel that is not protected?</li>
            </ul>
            <p className="text-slate-600 mt-4">
              You do not need to implement AES. You need to notice when the word
              &ldquo;encrypted&rdquo; is doing the work of a key-management plan that
              nobody wrote down.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
