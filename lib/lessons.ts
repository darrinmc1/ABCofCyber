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
    title: "Decoding Digital Footprints: Navigating Your Online Presence",
    slug: "decoding-digital-footprints-navigating-online-presence",
    icon: "Eye",
    summary: "Learn to identify, understand, and manage the personal data you leave online, empowering you to protect your digital identity.",
    quip: "",
    difficulty: "Beginner",
    duration: "10 min",
    topics: ["digital footprint","online privacy","data management","cybersecurity","online identity","privacy settings"],
  },
  {
    title: "Zero Trust Architecture for Small Businesses: What It Is and How to Start",
    slug: "zero-trust-architecture-for-small-businesses",
    icon: "Shield",
    summary: "An introductory guide to Zero Trust Architecture (ZTA) specifically tailored for small businesses, explaining its core principles and providing actionable steps for implementation.",
    quip: "",
    difficulty: "Beginner",
    duration: "15 min",
    topics: ["zero trust","cybersecurity","small business","information security","access control","mfa"],
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
