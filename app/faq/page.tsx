import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const faqs = [
  {
    category: 'Implementation',
    questions: [
      {
        q: 'How long does implementation typically take?',
        a: 'Most customers are fully operational within 2–4 weeks. Our onboarding team provides a dedicated implementation specialist who guides you through configuration, data migration, and team training. For enterprise deployments with complex integrations, timelines may extend to 6–8 weeks.'
      },
      {
        q: 'Do I need technical expertise to get started?',
        a: 'No deep technical expertise is required. Our platform is designed for compliance and security professionals, not developers. We provide a guided setup wizard, pre-built templates, and a library of best-practice configurations so your team can be productive from day one.'
      },
      {
        q: 'What does the onboarding process look like?',
        a: 'Onboarding includes four phases: (1) Discovery call to map your current environment and goals, (2) Configuration and data import, (3) Team training sessions tailored to each role, and (4) a 30-day hypercare period with priority support to ensure a smooth transition.'
      },
      {
        q: 'Can we run a pilot before full deployment?',
        a: 'Absolutely. We offer a structured 30-day pilot program that lets you test the platform with a subset of your environment. Pilot customers receive full access to all features and dedicated support, with no obligation to continue.'
      }
    ]
  },
  {
    category: 'Compliance Mapping',
    questions: [
      {
        q: 'Which compliance frameworks are supported?',
        a: 'We support over 40 frameworks out of the box, including SOC 2, ISO 27001, NIST CSF, NIST 800-53, PCI DSS, HIPAA, GDPR, CCPA, FedRAMP, CIS Controls, and more. Our cross-walk engine automatically maps controls across frameworks so you can satisfy multiple requirements from a single piece of evidence.'
      },
      {
        q: 'How does cross-framework control mapping work?',
        a: 'Our intelligent mapping engine identifies overlapping controls across frameworks and links them to a single unified control library. When you collect evidence for one framework, it is automatically credited toward all mapped frameworks — eliminating duplicate work and reducing audit preparation time by up to 70%.'
      },
      {
        q: 'Can I create custom frameworks or add internal policies?',
        a: 'Yes. You can build custom frameworks from scratch or extend existing ones to reflect your internal policies, industry-specific requirements, or contractual obligations. Custom controls integrate seamlessly with the evidence collection and reporting workflows.'
      },
      {
        q: 'How current are the framework mappings?',
        a: 'Our compliance team monitors regulatory changes continuously. Framework updates are pushed to all customers automatically, and you receive in-app notifications when a framework you use has been revised so you can review and address any gaps promptly.'
      }
    ]
  },
  {
    category: 'Integrations',
    questions: [
      {
        q: 'What tools and platforms does the product integrate with?',
        a: 'We offer 150+ native integrations across cloud providers (AWS, Azure, GCP), identity providers (Okta, Azure AD, Google Workspace), ticketing systems (Jira, ServiceNow, Linear), HR platforms (Workday, BambooHR), and security tools (CrowdStrike, Wiz, Snyk, Qualys). A full integration catalog is available in our documentation.'
      },
      {
        q: 'What if my tool is not on the integration list?',
        a: 'We provide a robust REST API and webhook support so your engineering team can build custom integrations. We also offer a partner integration program and regularly add new native connectors based on customer demand. Submit a request and our team will evaluate prioritization.'
      },
      {
        q: 'How is data synced from integrated tools?',
        a: 'Integrations use read-only API connections to pull evidence and configuration data on a scheduled basis (as frequently as every 15 minutes for critical sources). All data in transit is encrypted with TLS 1.2+ and credentials are stored using industry-standard secrets management.'
      },
      {
        q: 'Can the platform integrate with our existing GRC or ticketing workflow?',
        a: 'Yes. Bi-directional integrations with Jira and ServiceNow allow you to create, assign, and track remediation tasks directly from within the platform. Findings automatically generate tickets, and status updates sync back in real time so nothing falls through the cracks.'
      }
    ]
  },
  {
    category: 'ROI & Pricing',
    questions: [
      {
        q: 'What kind of ROI can we expect?',
        a: 'Customers typically report a 60–80% reduction in audit preparation time, a 50% decrease in time-to-certify for new frameworks, and significant savings on external auditor fees due to better-organized evidence packages. On average, teams recoup their investment within the first audit cycle.'
      },
      {
        q: 'How is pricing structured?',
        a: 'Pricing is based on the number of employees and the frameworks you need to manage. We offer Starter, Growth, and Enterprise tiers. All plans include unlimited users, core integrations, and dedicated support. Visit our pricing page for a detailed breakdown or contact us for a custom quote.'
      },
      {
        q: 'Are there hidden fees for additional frameworks or integrations?',
        a: 'No. All supported frameworks and native integrations are included in your plan at no additional cost. The only add-ons are optional professional services such as custom implementation support or bespoke framework development.'
      },
      {
        q: 'Do you offer a money-back guarantee?',
        a: 'We offer a 30-day satisfaction guarantee for new customers on annual plans. If you are not satisfied within the first 30 days, we will provide a full refund — no questions asked. We are confident in the value we deliver and want you to feel the same.'
      },
      {
        q: 'Can we start with one framework and expand later?',
        a: 'Yes. Many customers start with a single framework such as SOC 2 and expand to ISO 27001 or HIPAA as their compliance program matures. Upgrading your plan is seamless and all existing evidence and configurations carry over automatically.'
      }
    ]
  }
];

export const metadata = {
  title: 'FAQ — Frequently Asked Questions',
  description: 'Get answers to common questions about implementation, compliance framework mapping, integrations, and ROI.'
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="border-b bg-muted/40 py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <Badge variant="secondary" className="mb-4">FAQ</Badge>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know about implementation, compliance mapping, integrations, and ROI.
            Can&apos;t find your answer?{' '}
            <Link href="/contact" className="underline underline-offset-4 hover:text-foreground">
              Talk to our team.
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 space-y-16">
          {faqs.map((section) => (
            <div key={section.category}>
              <h2 className="mb-6 text-2xl font-semibold tracking-tight">
                {section.category}
              </h2>
              <Accordion type="single" collapsible className="w-full space-y-2">
                {section.questions.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`${section.category}-${index}`}
                    className="rounded-lg border bg-card px-4"
                  >
                    <AccordionTrigger className="text-left font-medium hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-muted/40 py-16">
        <div className="container mx-auto max-w-2xl px-4 text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Still have questions?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Our compliance experts are happy to walk you through any aspect of the platform and help you evaluate fit for your specific needs.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Talk to an Expert</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
