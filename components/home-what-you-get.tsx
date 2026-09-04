import { ABC_METHOD } from "@/lib/disclaimer"
import { getHumorEnabled } from "@/lib/humor"
import HomeReveal from "@/components/home-reveal"

const items = [
  {
    n: "01",
    title: "Written lessons you can finish at a desk",
    body: "Start with Phishing Awareness. Fifteen minutes. Free to read. This page does not watch anyone's inbox.",
  },
  {
    n: "02",
    title: "The ABC method",
    body: `${ABC_METHOD.steps[0].letter} is for Attachment. ${ABC_METHOD.steps[1].letter} is for BEC. ${ABC_METHOD.steps[2].letter} is for Click. Same three letters as the strip on the fold.`,
  },
  {
    n: "03",
    title: "What's the play",
    body: "Paste a suspicious scenario. Get a walkthrough cited from the lessons already on this site. Education only — not a verdict and not a chatbot.",
  },
  {
    n: "04",
    title: "What this is not",
    body: "Checkout is not live. There are no fake testimonials on this page. Nothing auto-opens a modal while you read.",
  },
] as const

export default function HomeWhatYouGet() {
  return (
    <section className="border-t border-white/10">
      <div className="container mx-auto grid gap-12 px-4 py-20 md:px-6 md:py-28 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-sm font-semibold text-sky-400">What you get</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
            A written course, not a scare campaign.
          </h2>
          <p className="mt-4 max-w-md text-base leading-7 text-slate-400">
            Lessons plus a paste-the-scenario walkthrough. That is the product. The rest of the site is still
            below if you want frameworks or the waitlist.
          </p>
          {getHumorEnabled() ? (
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-500">
              If the invoice is for toner you did not order, the lesson is the click you skip.
            </p>
          ) : null}
        </div>

        <div className="space-y-16 lg:space-y-28">
          {items.map((item, index) => (
            <HomeReveal key={item.n} delayMs={index * 40}>
              <article className="max-w-xl lg:min-h-[38vh]">
                <p className="text-sm font-semibold tracking-[0.2em] text-sky-400">{item.n}</p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight text-white md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-400">{item.body}</p>
              </article>
            </HomeReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
