import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'

const posts = [
    { t: 'Phishing Trends Every Team Should Know in 2026', s: 'phishing-trends-2026', e: 'The latest phishing tactics and how to train your team to spot them.', d: '2026-07-26', r: '7 min' }
    { t: 'Zero Trust Security Basics', s: 'zero-trust-basics', e: 'Trust nothing, verify everything — a practical guide to zero trust.', d: '2026-07-26', r: '9 min' }
    { t: 'Building an Incident Response Plan', s: 'incident-response-plan', e: 'Stop scrambling when things go wrong. Step-by-step IR plan.', d: '2026-07-26', r: '8 min' }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="border-b bg-white"><div className="mx-auto max-w-6xl px-4 md:px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">Blog</p>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">ABC of Cyber</h1>
        <p className="text-lg text-slate-600">Cybersecurity insights and best practices</p>
      </div></div>
      <div className="mx-auto max-w-4xl px-4 md:px-6 py-12">
        <div className="space-y-8">{posts.map((p) => (
          <article key={p.s} className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition-all">
            <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
              <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {p.d}</span>
              <span>{p.r}</span>
            </div>
            <h2 className="text-xl font-bold mb-2"><Link href={'/blog/' + p.s} className="hover:text-slate-700">{p.t}</Link></h2>
            <p className="text-sm text-slate-600 mb-3">{p.e}</p>
            <Link href={'/blog/' + p.s} className="text-sm font-semibold text-slate-600 hover:text-slate-900 inline-flex items-center gap-1">Read More <ArrowRight className="h-3 w-3" /></Link>
          </article>
        ))}</div>
      </div>
    </div>
  )
}
