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
  insider: [
    {
      setup: "We trust our people.",
      punchline: "Good. Also revoke the shared admin password when they leave. Trust is a management style. Access is a list.",
    },
    {
      setup: "The insider threat briefing used the word 'disgruntled' twelve times.",
      punchline: "Meanwhile the actual incident was a spreadsheet emailed to a spouse 'so I can finish it on the laptop that works.'",
    },
    {
      setup: "Least privilege sounds unfriendly.",
      punchline: "So does explaining to a customer why their data left in a ZIP called final-final-USE-THIS.",
    },
  ],
  footprints: [
    {
      setup: "I Googled myself. It was fine.",
      punchline: "Page one is manners. Page three is your old forum posts and a PDF your intern uploaded in 2019.",
    },
    {
      setup: "Our staff directory is 'good for culture.'",
      punchline: "It is also a mail-merge for whoever is pretending to be Finance this week.",
    },
  ],
  anonymity: [
    {
      setup: "I have a VPN, so I am anonymous.",
      punchline: "You logged into the same accounts. The VPN hid you from the coffee shop. It introduced you to a company that now sees all your traffic.",
    },
    {
      setup: "Job posting: must know Salesforce, AWS, Okta, Slack, and the alarm code.",
      punchline: "We are hiring. We are also publishing a shopping list.",
    },
  ],
  "social engineering": [
    {
      setup: "They knew my manager's name, so it had to be real.",
      punchline: "Your manager's name is on the website. That is not a background check. That is reading.",
    },
    {
      setup: "I didn't want to be rude.",
      punchline: "Rudeness is optional. Callbacks are not. Hang up. The real help desk will still be there.",
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
