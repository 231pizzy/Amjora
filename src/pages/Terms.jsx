import { SEO } from '@/components/ui/SEO'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { breadcrumbSchema } from '@/lib/schema'

const sections = [
  {
    title: '1. Acceptance of terms',
    body: `By accessing or using amjora.com (the "Site"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Site. The Site is operated by Amjora Forge Limited, doing business as Amjora.`,
  },
  {
    title: '2. Use of the site',
    body: `You agree to use the Site only for lawful purposes and in a way that does not infringe the rights of, or restrict or inhibit the use and enjoyment of, the Site by any third party.`,
  },
  {
    title: '3. Intellectual property',
    body: `The Amjora name, logo, "Finding Ways." tagline and all related content, trademarks and materials on this Site are the property of Amjora Forge Limited unless otherwise stated, and may not be used without our prior written permission.`,
  },
  {
    title: '4. No warranties',
    body: `This Site and its content are provided "as is" without warranties of any kind, whether express or implied. Amjora does not warrant that the Site will be uninterrupted, error-free or free of harmful components.`,
  },
  {
    title: '5. Limitation of liability',
    body: `To the fullest extent permitted by law, Amjora shall not be liable for any indirect, incidental, special or consequential damages arising out of or in connection with your use of the Site.`,
  },
  {
    title: '6. Forward-looking statements',
    body: `Some content on this Site — including references to future products, roadmap phases and long-term ambitions — describes plans and intentions rather than current offerings. Such statements are not guarantees of future availability, features or timing.`,
  },
  {
    title: '7. Changes to these terms',
    body: `We may revise these Terms of Service from time to time. The most current version will always be posted on this page.`,
  },
  {
    title: '8. Governing law',
    body: `These terms shall be governed by and construed in accordance with applicable law, without regard to its conflict of law principles.`,
  },
  {
    title: '9. Contact us',
    body: `Questions about these Terms of Service can be sent to hello@amjora.com.`,
  },
]

export function Terms() {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="The terms governing your use of amjora.com and Amjora's services."
        path="/terms"
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Terms of Service', path: '/terms' },
        ])}
      />

      <PageHero image="legal" eyebrow="Legal" title="Terms of Service" description="Effective date: January 1, 2026" />

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

export default Terms
