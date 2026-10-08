import { SEO } from '@/components/ui/SEO'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal, StaggerGroup, StaggerItem } from '@/components/ui/Reveal'
import { breadcrumbSchema } from '@/lib/schema'
import { brandVoice } from '@/data/brand'

export function About() {
  return (
    <>
      <SEO
        title="About Amjora"
        description="Amjora exists because the world's biggest problems are rarely solved by technology alone. Learn our mission, philosophy and long-term ambition."
        path="/about"
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ])}
      />

      <PageHero
        image="about"
        eyebrow="About Amjora"
        title="We exist because someone has to keep looking for the better answer."
        description="Amjora is founded on the belief that engineering is an act of service. Every line of code, every payment processed and every intelligent system should remove friction, create opportunity and improve lives."
      />

      <section className="bg-white py-24 lg:py-32">
        <div className="container-page grid grid-cols-1 gap-16 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight text-midnight">The meaning of Amjora</h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-midnight/65">
              Amjora is not a dictionary word. Its meaning is defined by the company itself.
              Amjora represents the relentless pursuit of better solutions. Wherever people see
              complexity, Amjora looks for clarity. Wherever others stop, Amjora keeps finding ways.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-2xl font-bold tracking-tight text-midnight">Brand philosophy</h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-midnight/65">
              Finding Ways is more than a tagline. It is the operating system of the company. It
              shapes hiring, product decisions, engineering standards, customer support,
              leadership and innovation. If a decision does not help us find a better way for
              customers, developers or society, it is not the Amjora way.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist py-24 lg:py-32">
        <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-2">
          <Reveal className="rounded-2xl border border-midnight/10 bg-white p-9">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-dim">Mission</p>
            <p className="mt-4 text-2xl font-bold leading-snug tracking-tight text-midnight">
              To find better ways to solve meaningful problems through technology.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="rounded-2xl border border-midnight/10 bg-white p-9">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-dim">Vision</p>
            <p className="mt-4 text-2xl font-bold leading-snug tracking-tight text-midnight">
              To become one of the world&rsquo;s most trusted technology companies by building
              software, financial infrastructure and intelligent systems that empower people and
              businesses worldwide.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-dim">Brand voice</p>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-midnight sm:text-4xl">
              How we sound, everywhere we show up.
            </h2>
          </Reveal>
          <StaggerGroup className="mt-12 flex flex-wrap gap-4">
            {brandVoice.map(({ pair }) => (
              <StaggerItem key={pair[0]}>
                <div className="rounded-full border border-midnight/10 bg-mist px-6 py-3 text-[15px]">
                  <span className="font-bold text-midnight">{pair[0]}</span>{' '}
                  <span className="text-midnight/55">{pair[1]}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="relative overflow-hidden bg-midnight py-24 text-white lg:py-32">
        <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-40" />
        <div className="container-page relative grid grid-cols-1 gap-16 lg:grid-cols-2">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan">Founder reminder</p>
            <ul className="mt-5 space-y-3 text-[15.5px] leading-relaxed text-white/70">
              <li>Never sacrifice trust for speed.</li>
              <li>Never chase trends at the expense of purpose.</li>
              <li>Build products that still matter ten years from now.</li>
              <li>
                Amjora is not defined by software, fintech or AI alone — it is defined by its
                commitment to Finding Ways.
              </li>
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan">Closing manifesto</p>
            <p className="mt-5 text-[15.5px] leading-relaxed text-white/70">
              The future will belong to organisations that combine engineering excellence with
              human empathy. Amjora chooses to build patiently, think globally and solve problems
              that matter. Every generation deserves technology that makes life simpler, safer and
              more meaningful. That is why we exist.
            </p>
            <p className="mt-5 text-xl font-bold tracking-tight">
              We are Amjora. We are Finders. We keep Finding Ways.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default About
