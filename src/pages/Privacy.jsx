import { SEO } from '@/components/ui/SEO'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { breadcrumbSchema } from '@/lib/schema'

const sections = [
  {
    title: '1. Introduction',
    body: `This Privacy Policy explains how Amjora Forge Limited ("Amjora," "we," "us" or "our") collects, uses and protects information when you visit amjora.com or otherwise interact with us. We build technology on the belief that trust is earned through action — that includes how we handle information about the people who visit our site.`,
  },
  {
    title: '2. Information we collect',
    body: `We collect information you provide directly to us, such as your name, email address and message content when you use our contact form. We may also collect limited technical information automatically, such as browser type, device information and general usage data, to help us understand how our site is used and to keep it secure.`,
  },
  {
    title: '3. How we use information',
    body: `We use the information we collect to respond to inquiries, operate and improve our website, and communicate with you about Amjora where relevant. We do not sell personal information to third parties.`,
  },
  {
    title: '4. Cookies and similar technologies',
    body: `Our website may use minimal, essential cookies or local storage to support basic site functionality. We do not currently use third-party advertising trackers.`,
  },
  {
    title: '5. Data retention',
    body: `We retain information for as long as necessary to fulfil the purposes described in this policy, unless a longer retention period is required or permitted by law.`,
  },
  {
    title: '6. Your rights',
    body: `Depending on where you are located, you may have rights regarding your personal information, including the right to access, correct or delete it. To exercise these rights, please contact us using the details below.`,
  },
  {
    title: '7. Security',
    body: `We take reasonable technical and organisational measures designed to protect information from unauthorised access, alteration or loss. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.`,
  },
  {
    title: '8. Changes to this policy',
    body: `We may update this Privacy Policy from time to time. We will post any changes on this page, and material changes will be indicated by an updated effective date.`,
  },
  {
    title: '9. Contact us',
    body: `If you have questions about this Privacy Policy, please contact us at hello@amjora.com.`,
  },
]

export function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="How Amjora collects, uses and protects information for visitors to amjora.com."
        path="/privacy"
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Privacy Policy', path: '/privacy' },
        ])}
      />

      <PageHero image="legal" eyebrow="Legal" title="Privacy Policy" description="Effective date: January 1, 2026" />

      <section className="bg-white py-20 lg:py-28">
        <div className="container-page max-w-3xl">
          <Reveal className="flex flex-col gap-12">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold tracking-tight text-midnight">{section.title}</h2>
                <p className="mt-3 text-[15px] leading-[1.8] text-midnight/65">{section.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default Privacy
