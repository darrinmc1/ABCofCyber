/** Education-only disclaimer used on the walkthrough UI, API, and AEO files. */
export const WALKTHROUGH_DISCLAIMER =
  "Education only. This is not a verdict, not a threat assessment for hire, and not legal, insurance, or incident-response advice. ABC of Cyber will not tell you that a message is a crime, that you must call the police, or that you are 'compromised.' If you already clicked, typed a password, or sent money, tell the person who actually owns that process at your organization and follow their plan. Do not paste secrets, full account numbers, one-time codes, or live credentials into this tool."

export const ABC_METHOD = {
  name: "ABC method",
  steps: [
    {
      letter: "A",
      title: "Assess the ask",
      summary:
        "Who contacted you, on what channel, and what do they want you to do before you have time to think?",
    },
    {
      letter: "B",
      title: "Break down the play",
      summary:
        "Name the tactic in plain English: impersonation, urgency, payload, or pretext. No soundtrack required.",
    },
    {
      letter: "C",
      title: "Choose the next move",
      summary:
        "Verify on a channel you already trust. Do not click, reply, or transfer. Report it. Then read the matching lesson.",
    },
  ],
} as const
