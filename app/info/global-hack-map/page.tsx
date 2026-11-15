import type { Metadata } from "next"
import Link from "next/link"
import { pageMeta } from "@/lib/seo"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"

export const metadata: Metadata = pageMeta({
  title: "Global Hack Map",
  description:
    "A short note on the open-source Global Hack Map: what the globe shows, where its data comes from, and how to read it if you are new to cyber news.",
  path: "/info/global-hack-map",
})

const REPO_URL = "https://github.com/yorkeccak/globalhackmap"
const DEMO_URL = "https://globalhackmap.vercel.app"

const shows = [
  {
    title: "Incidents on a globe",
    text: "A point is placed at the city named in the reporting, at the organisation’s headquarters, or at the country. The project says it does not place a point more precisely than the sources allow.",
  },
  {
    title: "New vulnerabilities",
    text: "A ticker, and an index at /cve, of critical CVEs published in the last 72 hours, plus flaws CISA has confirmed as exploited this week. The README says this is meant to appear within minutes of publication. The same README says the cache timings below are not a promise that the screen updates that fast.",
  },
  {
    title: "Patch notes in plain language",
    text: "A “Patch now” section gives one card per product: what can happen, who is affected, and what fixes it.",
  },
  {
    title: "A check against products you use",
    text: "“Am I affected?” lets you pick apps, products and companies. The README says you do not upload anything. A developer can point their own coding agent at a repository instead.",
  },
  {
    title: "Links that only fill in a prompt",
    text: "Some buttons open Claude Code, Codex or Cursor with a runbook for a CVE, or attach sources for Claude or ChatGPT. The README says every one of those links only pre-fills a prompt. They do not change your computer.",
  },
  {
    title: "Notes for coding agents",
    text: "The project also publishes a read-only MCP server, an llms.txt file, and plain-text fix notes at /fix/.",
  },
]

const statuses = [
  ["Confirmed", "Acknowledged by the organisation, a regulator, or a filing."],
  ["Reported", "Covered by the press. The organisation has not confirmed it."],
  ["Claimed", "Asserted by attackers on a leak site. Not verified."],
  ["Precautionary", "Systems taken offline as a precaution. No compromise is stated."],
  ["Disputed", "Reported, and denied by the organisation."],
]

const sources = [
  ["CISA Known Exploited Vulnerabilities", "Flaws CISA has confirmed are being exploited, including whether ransomware use is known."],
  ["CVE.org, and CIRCL’s copy of the CVE list", "CVE records, affected products, and the newest critical CVEs. The code asks CVE.org first and uses NVD if CVE.org is down."],
  ["NVD", "Recent critical CVEs and CVSS scores."],
  ["FIRST EPSS", "A probability score for whether a CVE is likely to be exploited. If the lookup fails, the score is left blank."],
  ["GitHub Advisory Database", "Critical advisories and malicious packages."],
  ["OSV", "Checks of package vulnerabilities. The README says each OSV source keeps its own terms."],
  ["RansomLook", "Recent posts from ransomware leak sites. The code marks these as claims, not confirmed attacks."],
  ["SEC EDGAR", "US Form 8-K filings from the last 30 days that mention a cybersecurity incident. The map links to the filing."],
  ["IODA (Georgia Tech)", "Country-level internet connectivity drops from the last day. The code comment says the cause is unknown unless someone has reported it."],
  ["Wikidata, GeoNames and Natural Earth", "Headquarters and place names, used to put a point on the map."],
  ["NASA, via GIBS", "The globe’s relief and night-lights imagery. This is the picture of the Earth, not a list of incidents."],
  ["Valyu", "News search and article extraction, CVE mentions in the news, generated answers, and a daily brief. Optional. Without a Valyu key, the README says the map still runs on the public feeds."],
]

export default function GlobalHackMapPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b bg-white">
        <div className="container mx-auto max-w-3xl px-4 py-16 md:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">For information</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">Global Hack Map</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Global Hack Map is an open-source Next.js site. It draws a globe of newly reported breaches, ransomware
            claims, exploited vulnerabilities, malicious packages and connectivity drops, and links each one to the
            source it came from.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            This page is a reading note. ABC of Cyber does not run the map, and the map is not embedded here. The
            description below follows the project’s README and source code.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <a href={DEMO_URL}>
                Open the live demo
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={REPO_URL}>
                View the repository
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">What it shows</h2>
          <p className="mt-4 text-slate-600 leading-7">
            The live site is a globe plus a few lists. These are the parts the README describes.
          </p>
          <ul className="mt-8 space-y-6">
            {shows.map((item) => (
              <li key={item.title}>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-1 leading-7 text-slate-600">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Read the status before the headline</h2>
          <p className="mt-4 leading-7 text-slate-600">
            Every incident is labelled. The README defines the labels like this.
          </p>
          <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Incident status labels used by Global Hack Map</caption>
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">Status</th>
                  <th scope="col" className="px-4 py-3 font-semibold">What the project means</th>
                </tr>
              </thead>
              <tbody>
                {statuses.map(([status, meaning]) => (
                  <tr key={status} className="border-t border-slate-200">
                    <th scope="row" className="px-4 py-3 font-medium text-slate-800">{status}</th>
                    <td className="px-4 py-3 text-slate-600">{meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 leading-7 text-slate-600">
            The README also says an absent result is never proof that you are safe. If your organisation is not on the
            globe, that is not a clearance.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Where the data comes from</h2>
          <p className="mt-4 leading-7 text-slate-600">
            Code in <code className="text-sm">src/lib/sources</code> fetches each feed.{" "}
            <code className="text-sm">src/lib/pipeline.ts</code> places, deduplicates and scores incidents.{" "}
            <code className="text-sm">src/lib/snapshot.ts</code> builds the cached picture that the pages and the MCP
            server read. The globe itself is drawn with Mapbox, using a Mapbox token and NASA imagery. Mapbox is the
            map renderer, not a source of incidents.
          </p>
          <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200 bg-white">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Feeds Global Hack Map reads</caption>
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">Source</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Used for</th>
                </tr>
              </thead>
              <tbody>
                {sources.map(([name, used]) => (
                  <tr key={name} className="border-t border-slate-200">
                    <th scope="row" className="px-4 py-3 align-top font-medium text-slate-800">{name}</th>
                    <td className="px-4 py-3 text-slate-600">{used}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 leading-7 text-slate-600">
            The kept list is not endless. The snapshot drops incidents older than 30 days and stops at 450. A bundled
            seed file can fill a gap when a live feed did not return an incident that is still inside that window.
            If a feed fails, the code keeps the last good copy of that feed and records the failure. If three or more
            feeds are down, that picture is kept for minutes rather than the normal refresh, so a bad moment upstream
            does not freeze a near-empty map in place.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">How often it updates</h2>
          <p className="mt-4 leading-7 text-slate-600">
            The picture is a cache. In <code className="text-sm">next.config.ts</code> the whole snapshot is set to
            revalidate after 10 minutes. A shorter <code className="text-sm">feed</code> profile, set to 15 minutes, is
            what RansomLook, IODA, CIRCL’s newest CVE list, and the GitHub advisory feeds use. The CISA catalogue,
            NVD’s recent critical CVEs, SEC filings and the news search use an hourly cache. The news-search comment
            says 30 minutes; a successful search is stored with the hourly setting.
          </p>
          <p className="mt-4 leading-7 text-slate-600">
            On Vercel, <code className="text-sm">vercel.json</code> schedules a news sweep at five minutes past every
            sixth hour, and a daily brief at 05:30 UTC. Those routes expect a secret so a stranger cannot trigger them.
            Another host needs its own scheduler if those jobs are wanted. The first production build also runs the
            data pipeline once, and pages are then served from that prerendered cache.
          </p>
          <p className="mt-4 leading-7 text-slate-600">
            The README says these timings are cache settings, not a guarantee of how fast a report reaches the screen.
            Upstream delays, timeouts, cached results and fallback data can make the view older or incomplete. Check
            the timestamp on the map, then open the original source.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">How to use it if you are new to this</h2>
          <p className="mt-4 leading-7 text-slate-600">
            It is useful for anyone who wants one place to see what has just been reported: a person learning to follow
            cyber news, a small-team admin scanning the week, or a developer checking a product name. It is a reading
            list with a map, not a verdict.
          </p>
          <ol className="mt-8 list-decimal space-y-4 pl-5 leading-7 text-slate-600">
            <li>Open the live demo. Leave this site to do that. We do not host the globe.</li>
            <li>
              Read the status before you repeat the headline. “Claimed” means a group posted it on a leak site.
              “Reported” means the press covered it. “Confirmed” means the organisation, a regulator, or a filing
              acknowledged it.
            </li>
            <li>Open the source link. The map is a pointer. The article, advisory or filing is the thing to read.</li>
            <li>
              If you recognise a product you use, write down the CVE identifier and check the vendor’s own advisory
              before you change any setting.
            </li>
            <li>
              Leave the coding-agent buttons until you can read an advisory on your own. Those links only fill in a
              prompt.
            </li>
            <li>
              A connectivity drop is a measurement, not a named attack. The project’s code says the cause is unknown
              unless it has been reported.
            </li>
          </ol>
          <p className="mt-6 leading-7 text-slate-600">
            If you want the habit behind this, the lessons on{" "}
            <Link href="/learn/incident-response-basics" className="font-medium text-blue-700 underline">
              incident response
            </Link>{" "}
            and{" "}
            <Link href="/learn/phishing-awareness" className="font-medium text-blue-700 underline">
              phishing
            </Link>{" "}
            are the next stop on this site. The map tells you what was reported. Those lessons are about what to do
            with a report.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Repository and live demo</h2>
          <ul className="mt-6 space-y-3 leading-7">
            <li>
              <a href={REPO_URL} className="font-medium text-blue-700 underline">
                github.com/yorkeccak/globalhackmap
              </a>
              <span className="text-slate-600"> — the source code and README.</span>
            </li>
            <li>
              <a href={DEMO_URL} className="font-medium text-blue-700 underline">
                globalhackmap.vercel.app
              </a>
              <span className="text-slate-600"> — the live demo named in the README.</span>
            </li>
          </ul>
          <p className="mt-10 border-t border-slate-200 pt-6 text-sm leading-6 text-slate-600">
            Global Hack Map is by Harvey Yorke (GitHub: yorkeccak). His GitHub profile describes him as a cofounder of
            Valyu. The copyright line in the repository licence names Valyu, 2026. The code is under the MIT Licence.
            Fonts shipped in <code>src/assets/fonts</code> are under the SIL Open Font Licence. The feeds are not
            covered by the MIT Licence. Each source keeps its own terms, which the project lists in its README.
          </p>
          <p className="mt-6">
            <Button asChild variant="outline">
              <Link href="/get-started">
                Back to Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </p>
        </div>
      </section>
    </main>
  )
}
