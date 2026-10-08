import { Search, Code2, Compass, ShieldCheck, GraduationCap } from 'lucide-react'
import { SEO } from '@/components/ui/SEO'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal, StaggerGroup, StaggerItem } from '@/components/ui/Reveal'
import { breadcrumbSchema } from '@/lib/schema'
import { values, finderPrinciples } from '@/data/brand'

const icons = [Search, Code2, Compass, ShieldCheck, GraduationCap]

export function Engineering() {
  return (
    <>
      <SEO
        title="Engineering at Amjora"
        description="How Amjora builds: engineering standards, values and principles behind our software, financial infrastructure and AI systems."
        path="/engineering"
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Engineering', path: '/engineering' },
        ])}
      />

      <PageHero
        image="engineering"
        eyebrow="Engineering"
        title="Craftsmanship is not optional."
        description="Engineering standards shape everything at Amjora — from how we design a system on day one to how we review a pull request years later. This is how we build."
      />

      <section className="bg-white py-24 lg:py-32">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-midnight sm:text-4xl">
              Our engineering values
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-midnight/60">
              These aren&rsquo;t abstractions. They&rsquo;re the standards we hold every system,
              every review and every decision to.
            </p>
          </Reveal>

          <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((value, i) => {
              const Icon = icons[i]
              return (
                <StaggerItem key={value.title}>
                  <div className="h-full rounded-2xl border border-midnight/10 bg-mist p-6">
                    <Icon className="h-5 w-5 text-cyan-dim" strokeWidth={1.75} />
                    <h3 className="mt-4 font-bold text-midnight">{value.title}</h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-midnight/55">
                      {value.description}
                    </p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerGroup>
        </div>
      </section>

      <section className="bg-midnight py-24 text-white lg:py-32">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan">
              How we approach a problem
            </p>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Simplify complexity. Ship thoughtfully.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/60">
              We ask better questions before we write a single line of code. Where others manage
              complexity, we try to remove it — and we&rsquo;d rather ship something smaller and
              trustworthy than something large and fragile.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {[
              {
                title: 'Design before code',
                text: 'We spend real time understanding the problem and its constraints before implementation begins — the questions we ask early save the rewrites later.',
              },
              {
                title: 'Root causes over symptoms',
                text: 'A quick patch that hides a problem is not a fix. We look for the source of an issue, even when the source fix takes longer.',
              },
              {
                title: 'Built to be maintained',
                text: 'Code is read far more often than it is written. We optimise for the engineer who inherits a system years from now.',
              },
            ].map((item) => (
              <Reveal key={item.title}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-white/60">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-24 lg:py-32">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-dim">
              The Finder Principles
            </p>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-midnight sm:text-4xl">
              The standards every Finder builds against.
            </h2>
          </Reveal>

          <StaggerGroup className="mt-12 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {finderPrinciples.map((principle, i) => (
              <StaggerItem key={principle}>
                <div className="flex items-baseline gap-4 rounded-xl bg-white px-5 py-4 shadow-sm shadow-midnight/5">
                  <span className="font-mono text-sm text-cyan-dim">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-[15px] font-medium text-midnight">{principle}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  )
}

export default Engineering
