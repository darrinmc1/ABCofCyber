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
    {
      setup: "The email gave me 24 hours or the ATO would be very disappointed.",
      punchline: "The ATO does not run countdown timers in your inbox. The countdown is the tell.",
    },
  ],
  bec: [
    {
      setup: "They were already in the email thread, so the new bank details were fine.",
      punchline: "Hijacked threads are the product. The phone number on last month's invoice is the control.",
    },
    {
      setup: "The boss said there was no time to call.",
      punchline: "There is no time is the whole trick. Call the number you already had. Write down who answered.",
    },
  ],
  dmarc: [
    {
      setup: "We published p=none years ago. We are compliant.",
      punchline: "You are taking notes at the door. The bouncer has not turned anyone away. RFC 9989 still wants a policy.",
    },
    {
      setup: "Our SPF record includes every tool we have ever paid for.",
      punchline: "Ten DNS lookups is the limit. The eleventh is how payroll finds out on a Friday.",
    },
  ],
  laptop: [
    {
      setup: "I'll restart after the long weekend.",
      punchline: "Remind me tomorrow is not a patching strategy. The café in Fortitude Valley is also not a private office.",
    },
    {
      setup: "The backup is the drive that sits plugged in next to the laptop.",
      punchline: "Ransomware can see that drive too. A copy you have actually restored is the one that counts.",
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
  headers: [
    {
      setup: "SPF passed, so the email is real.",
      punchline: "SPF passed for the domain that sent it. The display name can still say 'Payroll' while the domain is a cousin you have never employed.",
    },
    {
      setup: "I don't read headers. I read the vibe.",
      punchline: "The vibe is a font. The header is the postmark. Read the postmark.",
    },
  ],
  encryption: [
    {
      setup: "We encrypted it, so we are done.",
      punchline: "You also emailed the password in the next message, subject line 'password for the zip'. The zip feels very protected.",
    },
    {
      setup: "A hash is just encryption you can reverse if you try hard.",
      punchline: "No. A hash is a fingerprint. You do not un-fingerprint a person by staring at the ink.",
    },
  ],
  ethics: [
    {
      setup: "I have a certification, so the test is legal.",
      punchline: "A certificate is not a permission slip. The permission slip is the signed scope, and it names the systems.",
    },
    {
      setup: "We were only looking.",
      punchline: "Looking inside someone else's system without a yes is still looking inside someone else's system.",
    },
  ],
  "ai access": [
    {
      setup: "The model said the login was fine.",
      punchline: "Good. MFA still runs. A confident model is not a second factor.",
    },
    {
      setup: "Our access policy is an AI now.",
      punchline: "Then someone needs to know how to let a locked-out finance lead in on payday. The model will not take that call.",
    },
  ],
  identity: [
    {
      setup: "Decentralised identity means I don't need a password reset.",
      punchline: "It means there may be nobody to call when the private key is in a screenshot named final-keys.",
    },
    {
      setup: "Put it on a blockchain and it is secure.",
      punchline: "The chain remembers what you published. It does not stop you publishing your tax file number.",
    },
  ],
  iot: [
    {
      setup: "The lightbulb needs the Wi-Fi password.",
      punchline: "Fine. The lightbulb does not need the laptop that does payroll on the same flat network.",
    },
    {
      setup: "The camera still has the password 'admin'.",
      punchline: "So does every other camera that shipped that year. They form clubs. The clubs are called botnets.",
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
    {
      setup: "Our incident plan is in a folder called Important, on the laptop.",
      punchline: "If ransomware can read it, so can you — until you can't. Print the page. 1300 CYBER1 is not your nephew.",
    },
  ],
}
