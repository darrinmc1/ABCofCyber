import { BookOpen, FileText, Library, MailWarning, ScrollText, PenLine } from "lucide-react"

export default function FeatureSection() {
  const features = [
    {
      icon: <BookOpen className="h-10 w-10 text-blue-600" />,
      title: "Lessons",
      description: "Short pages on phishing, headers, encryption, identity, and the rest of the catalogue.",
    },
    {
      icon: <Library className="h-10 w-10 text-blue-600" />,
      title: "Framework notes",
      description: "NIST CSF, ISO 27001, and CIS written as notes you can read. Not a gap assessment.",
    },
    {
      icon: <ScrollText className="h-10 w-10 text-blue-600" />,
      title: "Templates",
      description: "PDF templates for a policy, a risk register, an incident plan, and seven other forms.",
    },
    {
      icon: <MailWarning className="h-10 w-10 text-blue-600" />,
      title: "What's the play",
      description: "Paste a suspicious email or request. Get a walkthrough cited from lessons already on the site.",
    },
    {
      icon: <PenLine className="h-10 w-10 text-blue-600" />,
      title: "Signed-in drafts",
      description: "After you sign in, draft a policy, a risk assessment, or an incident plan as markdown.",
    },
    {
      icon: <FileText className="h-10 w-10 text-blue-600" />,
      title: "A contact form",
      description: "Questions go through the form on the contact page. There is no public mailbox on the site.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What is actually on the site
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Lessons, notes, templates, a scenario walkthrough, and signed-in document drafts.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col items-center space-y-2 border p-6 rounded-lg hover:shadow-md transition-shadow"
              >
                {feature.icon}
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-500 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
