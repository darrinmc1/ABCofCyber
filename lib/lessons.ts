// ABCofCyber lesson index — data-driven so the n8n publisher can append.
// icon is a STRING name resolved via iconMap in the learn page.

export interface LessonMeta {
  title: string
  slug: string
  icon: string
  summary: string
  quip: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  duration: string
  topics: string[]
}

export const lessons: LessonMeta[] = [
  {
    title: "The Silent Sabotage: Identifying and Mitigating Insider Threats in Your Organization",
    slug: "the-silent-sabotage-identifying-and-mitigating-insider-threats-in-your-organizat",
    icon: "Shield",
    summary: "Explore the various types of insider threats, from accidental data leaks to malicious intent, and learn practical strategies for detection, prevention, and response.",
    quip: "Most insider incidents are not movie villains. They are the person who mailed payroll to a personal Gmail because the VPN was 'being weird.'",
    difficulty: "Intermediate",
    duration: "18 min",
    topics: ["insider threats", "least privilege", "offboarding", "data handling", "security awareness"],
  },
  {
    title: "The Illusion of Control: Recognizing and Countering Social Engineering Tactics",
    slug: "the-illusion-of-control-recognizing-and-countering-social-engineering-tactics",
    icon: "MailWarning",
    summary: "The attacker does not need you helpless. They need you competent, helpful, and slightly late. Learn the pause-and-verify ritual that breaks the script.",
    quip: "If you feel unusually efficient while handing over access, you are not in charge of the conversation. You are in the conversation.",
    difficulty: "Intermediate",
    duration: "18 min",
    topics: ["social engineering", "pretexting", "BEC", "callback verification", "urgency"],
  },
  {
    title: "The Art of the Digital Ghost: Advanced Anonymity Techniques Beyond VPNs",
    slug: "the-art-of-the-digital-ghost-advanced-anonymity-techniques-beyond-vpns",
    icon: "Network",
    summary: "You do not need to vanish. You need to stop leaving a public trail that writes the phishing email for the attacker. What a VPN actually does, and the cheap exposure cuts that matter.",
    quip: "A VPN you bought because a YouTuber shouted is not an invisibility cloak. It is a different ISP with a better landing page.",
    difficulty: "Intermediate",
    duration: "16 min",
    topics: ["digital footprint", "WHOIS privacy", "job postings", "VPN limits", "email exposure"],
  },
  {
    title: "Decoding Digital Footprints: Navigating Your Online Presence",
    slug: "decoding-digital-footprints-navigating-online-presence",
    icon: "Eye",
    summary: "Your LinkedIn is not a diary. It is a free briefing book. Learn what you leak on purpose, what gets collected anyway, and what to clean up this weekend.",
    quip: "If a stranger can reconstruct your org chart, your travel week, and your email format from public posts, that is not research. That is a product page.",
    difficulty: "Beginner",
    duration: "16 min",
    topics: ["digital footprint", "privacy settings", "LinkedIn hygiene", "search yourself", "spear-phishing"],
  },
  {
    title: "Zero Trust Architecture for Small Businesses: What It Is and How to Start",
    slug: "zero-trust-architecture-for-small-businesses",
    icon: "Shield",
    summary: "Zero Trust is not a platform you buy in Q4. It is the habit of asking who this is, on what device, for what, right now — plus MFA, least privilege, and assume-breach.",
    quip: "If your Zero Trust plan starts with a vendor bake-off and no list of who can reset payroll, you bought a slogan.",
    difficulty: "Beginner",
    duration: "18 min",
    topics: ["zero trust", "MFA", "least privilege", "small business", "assume breach"],
  },
  {
    title: "Phishing Awareness",
    slug: "phishing-awareness",
    icon: "MailWarning",
    summary: "Learn how to spot phishing emails before they spot your credentials. Covers email red flags, link inspection, and what to do when you suspect a phish.",
    quip: "If the email says 'URGENT: Your password has been compromised' and asks you to click a link, it's not your IT team. It's a phishing expedition.",
    difficulty: "Beginner",
    duration: "15 min",
    topics: ["Email red flags", "Link inspection", "Reporting phishing"],
  },
  {
    title: "Password Security Basics",
    slug: "password-security",
    icon: "KeyRound",
    summary: "Why 'Password123!' is not a password strategy. Learn password managers, passphrases, MFA, and the dark art of not reusing credentials across 47 different sites.",
    quip: "Your password should not be guessable from your LinkedIn profile, your pet's name, or the word 'password' in leetspeak.",
    difficulty: "Beginner",
    duration: "12 min",
    topics: ["Password managers", "Passphrases", "MFA/2FA", "Credential hygiene"],
  },
  {
    title: "Network Security Fundamentals",
    slug: "network-security",
    icon: "Network",
    summary: "The basics of keeping your network from behaving like an open door. Firewalls, segmentation, patching, and why your office printer is probably a security risk.",
    quip: "A network without segmentation is one angry PDF attachment away from a bad day.",
    difficulty: "Intermediate",
    duration: "20 min",
    topics: ["Firewalls", "Network segmentation", "Patch management", "Wi-Fi security"],
  },
  {
    title: "Social Engineering Defense",
    slug: "social-engineering",
    icon: "Users",
    summary: "The human side of security. Learn how attackers manipulate people through pretexting, baiting, tailgating, and the fine art of sounding like they belong there.",
    quip: "The most advanced hacking tool is not a zero-day exploit — it's someone confidently asking for the door code.",
    difficulty: "Beginner",
    duration: "15 min",
    topics: ["Pretexting", "Baiting", "Tailgating", "Phone-based attacks"],
  },
  {
    title: "Incident Response Basics",
    slug: "incident-response-basics",
    icon: "LifeBuoy",
    summary: "What to do when things go sideways. A practical guide to detecting, containing, and recovering from security incidents without adding chaos to the crisis.",
    quip: "You cannot 'Ctrl+Z' a ransomware attack, but you can have a plan that makes the difference between a bad afternoon and a catastrophic quarter.",
    difficulty: "Intermediate",
    duration: "20 min",
    topics: ["Detection & triage", "Containment", "Recovery", "Post-incident review"],
  },
]
