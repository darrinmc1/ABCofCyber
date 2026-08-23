/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import { ArrowLeft, Shield, CheckCircle } from 'lucide-react'

export default function DigitalGhostLesson() {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-8">
          <Link href="/learn" className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-900 mb-4">
            <ArrowLeft className="h-4 w-4" /> Back to Lessons
          </Link>
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
              <Shield className="h-3 w-3" /> Privacy Basics
            </span>
            <span className="text-xs text-slate-500">8 min read</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl mb-3">
            Controlling Your Business's Digital Footprint
          </h1>
          <p className="text-lg text-slate-600">
            Practical steps small businesses can take to reduce unnecessary online exposure — without becoming invisible.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 md:px-6 py-10">
        <div className="prose prose-slate max-w-none">
          <p className="lead text-lg text-slate-600 mb-8">
            Every business leaves a digital footprint — domain registrations, employee LinkedIn profiles, public-facing servers, and more. Attackers routinely map this information before launching phishing campaigns or targeted attacks. The good news: a few straightforward habits dramatically reduce what they can find and use against you.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Why Your Digital Footprint Matters for SMBs</h2>
          <p>
            You don't need to be a Fortune 500 company to be a target. Attackers often prefer smaller businesses precisely because they assume security is lighter. Publicly available information — job postings, email formats, software versions in page headers — gives attackers a head start. Reducing that exposure is one of the cheapest risk-reduction moves available.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">What Attackers Typically Look For</h2>
          <ul className="space-y-2 my-4">
            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" /><span>Employee names and email addresses scraped from your website or LinkedIn</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" /><span>Software and platform versions exposed in page source or HTTP headers</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" /><span>Open ports and services visible via basic scanning tools</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" /><span>Domain registration details and historical DNS records</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" /><span>Job postings that reveal internal tools and technology stack</span></li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">Five Practical Steps to Reduce Exposure</h2>

          <h3 className="text-xl font-semibold mt-8 mb-3">1. Enable WHOIS Privacy on Your Domains</h3>
          <p>
            Most domain registrars offer free or low-cost privacy protection that replaces your personal or business contact details in public WHOIS records with generic registrar information. If you haven't enabled this, do it today — it takes about two minutes.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3">2. Audit What Your Website Reveals</h3>
          <p>
            View your site's page source and HTTP response headers. Look for version numbers in CMS tags, plugin references, or server software identifiers. Ask your developer or hosting provider to suppress these. They're not useful to visitors, but they are useful to attackers scanning for known vulnerabilities.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3">3. Standardise How You List Employee Contact Information</h3>
          <p>
            Publishing a predictable email format (firstname.lastname@yourdomain.com) alongside a full staff directory makes it trivial to construct a target list for phishing. Consider using a contact form instead of direct email addresses on public pages, and be thoughtful about how much organisational detail you expose.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3">4. Review Job Postings Before Publishing</h3>
          <p>
            Job ads are a goldmine for attackers. Listing every tool in your stack — "experience with Salesforce, AWS, Okta, and Slack required" — tells an attacker exactly what platforms to target. Include enough detail to attract good candidates, but avoid a complete inventory of your infrastructure.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3">5. Run a Free Exposure Check Periodically</h3>
          <p>
            Tools like Shodan (for internet-facing services) and Have I Been Pwned (for compromised credentials) let you see what's publicly visible about your business. Set a calendar reminder to check quarterly. It takes 15 minutes and occasionally surfaces something worth fixing before an attacker finds it first.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">The Right Mindset: Reduce, Don't Disappear</h2>
          <p>
            The goal isn't to make your business invisible — it's to remove the low-hanging fruit that makes you an easy target. Most attackers are opportunistic. When your business requires more effort to profile than the next one, they move on. These steps don't require a security team or a big budget. They require about an afternoon and a checklist.
          </p>

          <div className="rounded-xl border border-blue-100 bg-blue-50 p-6 mt-10">
            <h3 className="text-lg font-bold text-blue-900 mb-2">Quick-Start Checklist</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 shrink-0" /> Enable WHOIS privacy on all business domains</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 shrink-0" /> Remove or suppress version numbers from website headers and source</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 shrink-0" /> Replace public email addresses with a contact form where possible</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 shrink-0" /> Review current job postings for unnecessary technology detail</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 shrink-0" /> Run a Shodan and Have I Been Pwned check on your domain</li>
            </ul>
          </div>

          <div className="mt-10 flex gap-4">
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              <ArrowLeft className="h-4 w-4" /> All Lessons
            </Link>
            <Link
              href="/learn/phishing-awareness"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
            >
              Next: Phishing Awareness
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
