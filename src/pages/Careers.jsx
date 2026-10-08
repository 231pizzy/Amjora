import { Compass, Wrench, GraduationCap, Target, Users, Sparkles } from 'lucide-react'
import { SEO } from '@/components/ui/SEO'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal, StaggerGroup, StaggerItem } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { breadcrumbSchema } from '@/lib/schema'

const traits = [
  { icon: Compass, title: 'Relentlessly curious', text: 'Finders ask one more question than is comfortable.' },
  { icon: Wrench, title: 'Craftsmanship-first', text: 'We care about how something is built, not just that it ships.' },
  { icon: Target, title: 'Root-cause thinkers', text: 'We solve the actual problem, not the symptom in front of us.' },
  { icon: GraduationCap, title: 'Always learning', text: 'Continuous learning isn’t a perk here — it’s an expectation.' },
  { icon: Users, title: 'Ownership over instruction', text: 'Finders take ownership instead of waiting to be told.' },
  { icon: Sparkles, title: 'Leave things better', text: 'Every system, every codebase, a little better than we found it.' },
]

export function Careers() {
  return (
    <>
      <SEO
        title="Careers"
        description="Amjora employees aren't just workers — they're Finders. Learn what it means to build with us and how to get in touch."
        path="/careers"
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Careers', path: '/careers' },
        ])}
      />

      <PageHero
        image="careers"
        eyebrow="Careers"
        title="Employees aren't just workers. They're Finders."
        description="A Finder is relentlessly curious, takes ownership, values craftsmanship, embraces continuous learning, solves root problems instead of symptoms and leaves every system better than they found it."
      />

      <section className="bg-white py-24 lg:py-32">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-midnight sm:text-4xl">
              What we look for in a Finder
            </h2>
          </Reveal>

          <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {traits.map((trait) => {
              const Icon = trait.icon
              return (
                <StaggerItem key={trait.title}>
                  <div className="h-full rounded-2xl border border-midnight/10 bg-mist p-7">
                    <Icon className="h-5 w-5 text-cyan-dim" strokeWidth={1.75} />
                    <h3 className="mt-4 font-bold text-midnight">{trait.title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-midnight/55">{trait.text}</p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerGroup>
        </div>
      </section>

      <section className="bg-midnight py-24 text-white lg:py-28">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan">
              Open positions
            </p>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
              We don&rsquo;t have open roles listed today.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/60">
              Amjora is early — we&rsquo;re building the engineering foundation before we build the
              team around it. If our philosophy resonates with you and you want to be first in line
              when that changes, we&rsquo;d genuinely like to hear from you.
            </p>
            <div className="mt-9 flex justify-center">
              <Button to="/contact" variant="cyan" size="lg">
                Introduce yourself
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default Careers
