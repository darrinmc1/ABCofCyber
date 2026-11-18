import Link from "next/link"
import { INTRO_PRICE_NOTE } from "@/lib/pricing"
import { REFUND_POLICY } from "@/lib/refund-policy"
import { MERCHANT_OF_RECORD_DISCLOSURE } from "@/lib/merchant-of-record"

interface TermsPageProps {
  siteName: string
  domain: string
  companyName?: string
  supportEmail: string
}

export function TermsPage({
  siteName,
  domain,
  companyName = "TTPN Pty Ltd",
  supportEmail,
}: TermsPageProps) {
  const lastUpdated = "18 November 2026"

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 mb-3">Legal</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">Terms &amp; Conditions</h1>
          <p className="text-lg text-slate-600">
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 md:px-6 py-12">
        <div className="prose prose-slate max-w-none">
          <p className="lead text-lg text-slate-600">
            Please read these Terms &amp; Conditions (&ldquo;Terms&rdquo;) carefully before using the {siteName} website
            (the &ldquo;Service&rdquo;), operated by {companyName} (&ldquo;us,&rdquo; &ldquo;we,&rdquo; or &ldquo;our&rdquo;).
          </p>

          <p className="text-sm text-slate-500 mt-2">
            By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part,
            you may not access the Service. These Terms apply to all visitors, users, and others who access or use the Service.
          </p>

          <hr className="my-8" />

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">1. Accounts</h2>
            <p className="text-slate-700 mb-3">
              When you create an account with us, you guarantee that the information you provide is accurate, complete,
              and current at all times. Inaccurate, incomplete, or obsolete information may result in immediate termination
              of your account.
            </p>
            <p className="text-slate-700 mb-3">
              You are responsible for safeguarding the password and for any activities or actions under your account.
              You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
            </p>
            <p className="text-slate-700">
              We reserve the right to refuse service, terminate accounts, or remove or edit content at our sole discretion.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">2. What the site provides</h2>
            <p className="text-slate-700 mb-3">
              {siteName} publishes lessons, framework notes, downloadable templates, and tools. You may use them for
              your own personal or internal work. We may change or remove a free page at any time.
            </p>
            <p className="text-slate-700">
              The material is educational. It is not legal advice, an audit, a certification, or a monitoring service.
              There is no lifetime deal and no unlimited plan.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">3. Price</h2>
            <p className="text-slate-700 mb-3">
              The plan is A$9 per month, including GST. A limited-time intro price of A$5 applies to the first
              month only, for a person who creates a free account with their email. {INTRO_PRICE_NOTE}
            </p>
            <p className="text-slate-700 mb-3">
              Template collections are one-off purchases, about A$9 to A$19 each. A one-off purchase is not a
              subscription and does not renew.
            </p>
            <p className="text-slate-700">
              {MERCHANT_OF_RECORD_DISCLOSURE} This website does not take payment. Creating a free account does
              not charge a card.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">4. Refunds and cancellation</h2>
            <p className="text-slate-700 mb-3">{REFUND_POLICY}</p>
            <p className="text-slate-700">
              The refund wording is also on the{" "}
              <Link href="/refunds" className="text-blue-600 underline">refunds page</Link>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
            <p className="text-slate-700 mb-3">
              All content on {siteName} — including courses, lessons, templates, tools, articles, graphics, logos,
              and code — is the property of {companyName} or its content creators and is protected by applicable
              intellectual property laws.
            </p>
            <p className="text-slate-700 mb-3">
              <strong>What you may do:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-1">
              <li>Access and view content for your personal, non-commercial use</li>
              <li>Download templates for your own business use</li>
              <li>Share links to public pages on social media</li>
            </ul>
            <p className="text-slate-700 mb-3">
              <strong>What you may NOT do:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-1">
              <li>Re-sell, redistribute, or sublicense any content or templates</li>
              <li>Reproduce courses or materials for commercial training programs without written permission</li>
              <li>Copy, modify, or create derivative works of the platform itself</li>
              <li>Use our content to train AI models or for similar machine-learning purposes</li>
            </ul>
            <p className="text-slate-700">
              If you believe your intellectual property has been infringed,{" "}
              <Link href="/contact" className="text-blue-600 underline">use the contact form</Link>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">6. User Conduct</h2>
            <p className="text-slate-700 mb-3">
              You agree not to use the Service for any unlawful purpose or in violation of these Terms. Prohibited
              behavior includes:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-1">
              <li>Attempting to access accounts, systems, or data without authorization</li>
              <li>Uploading malicious code, viruses, or harmful content</li>
              <li>Interfering with the operation of the Service</li>
              <li>Harassing, abusing, or threatening other users or staff</li>
              <li>Using automated tools (scrapers, bots) to extract content without permission</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">7. Third-Party Services</h2>
            <p className="text-slate-700 mb-3">
              The Service may contain links to third-party websites or services that are not owned or controlled by us.
              We have no control over and assume no responsibility for the content, privacy policies, or practices of
              any third-party websites.
            </p>
            <p className="text-slate-700">
              Sign-in is provided by Clerk. The site is hosted on Vercel. Those services have their own terms and
              privacy policies.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
            <p className="text-slate-700 mb-3">
              To the fullest extent permitted by applicable law, {companyName} shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages arising out of or related to your use of the
              Service, whether based on warranty, contract, tort (including negligence), or any other legal theory.
            </p>
            <p className="text-slate-700">
              The educational content provided is for informational purposes only and does not constitute professional
              advice. Always consult qualified professionals for advice specific to your situation.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">9. Termination</h2>
            <p className="text-slate-700 mb-3">
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason,
              including breach of these Terms. Upon termination, your right to use the Service ceases immediately.
            </p>
            <p className="text-slate-700">
              If you wish to terminate your account, you may simply discontinue using the Service or delete your account
              from your account settings. Sections 5 (Intellectual Property), 8 (Limitation of Liability), and 11
              (Governing Law) survive termination.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">10. Changes to Terms</h2>
            <p className="text-slate-700 mb-3">
              We reserve the right to modify or replace these Terms at any time. Material changes will be posted on
              this page. Your continued use of the Service after any changes constitutes acceptance of the new Terms.
            </p>
            <p className="text-slate-700">
              It is your responsibility to review these Terms periodically. The &ldquo;Last updated&rdquo; date at the
              top of this page indicates when changes were last made.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">11. Governing Law</h2>
            <p className="text-slate-700">
              The Service is operated by TTPN Pty Ltd. These Terms are governed by the laws of Queensland and the
              Commonwealth of Australia, and the courts of Queensland have exclusive jurisdiction. Nothing in these
              Terms limits rights that cannot be limited under the Australian Consumer Law. Our failure to enforce
              any right or provision of these Terms will not be considered a waiver of those rights.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">12. Contact</h2>
            <p className="text-slate-700">
              If you have any questions about these Terms, email{" "}
              <a href={`mailto:${supportEmail}`} className="text-blue-600 underline">{supportEmail}</a>{" "}
              or use the <Link href="/contact" className="text-blue-600 underline">contact form</Link> at {domain}/contact.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
