/** Site-wide humor default. Visitors can still hide inserts via HumorToggle. */
export const HUMOR_ENABLED = true

export function getHumorEnabled(): boolean {
  return HUMOR_ENABLED
}

export function humorEnabled(): boolean {
  return getHumorEnabled()
}

export interface HumorItem {
  setup: string
  punchline?: string
}

export interface HumorTheme {
  container?: string
  border?: string[]
  borderOpacity?: string
  borderSize?: string
  borderLine?: string
  dark?: boolean
  cardBorder: string
  cardBg: string
  eyebrowColor: string
  label?: string
  punchColor: string
  buttonBg: string
  footerNote?: string
  shuffleLabel?: string
}

export const humorTheme: HumorTheme = {
  container: "my-10",
  border: ["🔒", "🛡️", "🔒", "⚡", "🔒"],
  borderOpacity: "opacity-30",
  borderSize: "text-xl",
  borderLine: "bg-blue-200",
  cardBorder: "border-blue-200",
  cardBg: "bg-blue-50",
  eyebrowColor: "text-blue-700",
  label: "Patch break",
  punchColor: "text-blue-800",
  buttonBg: "bg-blue-600",
  footerNote: "Even firewalls need a laugh",
  shuffleLabel: "Another one",
}

export const humorBank: Record<string, HumorItem[]> = {
  general: [
    {
      setup: "My password is 'password'.",
      punchline: "The hacker was so disappointed they left a note suggesting I change it. It was a very polite breach.",
    },
    {
      setup: "I got a phishing email and I ALMOST clicked it.",
      punchline: "Then I saw it was offering a free iPad. That's when I knew it was fake. Nobody gives away iPads. Except scammers. And that one marketing thing.",
    },
    {
      setup: "Security is just paranoia with a budget.",
    },
    {
      setup: "My firewall blocks everything, including my own video calls.",
      punchline: "Security that works is security you don't notice. Mine is very noticeable.",
    },
  ],
  phishing: [
    {
      setup: "The email said 'URGENT: verify your account.'",
      punchline: "The urgency was real. The account was not. It was from a prince, apparently.",
    },
    {
      setup: "I got a text from my 'bank.'",
      punchline: "My bank does not text. My bank barely emails. Scammers, however, text constantly.",
    },
    {
      setup: "Phishing training tip: if the grammar is perfect, it's a scam.",
      punchline: "Real emails from your boss have typos. That's how you know they're real.",
    },
    {
      setup: "The scammer asked for my password.",
      punchline: "I asked for theirs. We're now both locked out of everything. Awkward.",
    },
  ],
  "zero trust": [
    {
      setup: "Zero trust means never trust, always verify.",
      punchline: "My dog is now suspicious of me. He's implementing zero trust on the couch.",
    },
    {
      setup: "Zero trust architecture: assume breach.",
      punchline: "I assumed breach once. My coffeemaker hasn't been the same since.",
    },
    {
      setup: "We moved to zero trust.",
      punchline: "Now everyone needs approval to open a PDF. The PDFs feel very important now.",
    },
    {
      setup: "Zero trust is great until you have to approve your own password reset.",
    },
  ],
  "incident response": [
    {
      setup: "Our incident response plan is a binder.",
      punchline: "The binder is current as of 2019. The incident was in 2024. The binder was very calm about it.",
    },
    {
      setup: "Incident response: the art of turning panic into a checklist.",
    },
    {
      setup: "My incident response drill went well.",
      punchline: "We contained the fake incident. Then we realized the real incident was the drill notification going to the whole company. Meta.",
    },
    {
      setup: "The first step of any incident is 'don't panic.'",
      punchline: "The second step is 'everyone panic quietly so the CEO doesn't see.'",
    },
  ],
}
