import { Reveal, StaggerGroup, StaggerItem } from '@/components/ui/Reveal'
import { finderPrinciples } from '@/data/brand'
import { Button } from '@/components/ui/Button'
import { getHeroImage } from '@/data/heroImages'

export function FinderCulture() {
  return (
    <section className="bg-grain relative overflow-hidden bg-midnight py-24 text-white lg:py-32">
      <div
        className="bg-mesh pointer-events-none absolute inset-0 opacity-70"
        style={{ backgroundImage: `url(${getHeroImage('careers')})` }}
        aria-hidden
      />
      <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-40" />
      <div className="container-page relative">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan">Finder culture</p>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Employees aren&rsquo;t just workers.
            <br />
            They&rsquo;re <span className="text-gradient-cyan">Finders.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/60">
            A Finder is relentlessly curious, takes ownership, values craftsmanship, embraces
            continuous learning, solves root problems instead of symptoms — and leaves every
            system better than they found it.
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
          {finderPrinciples.map((principle, i) => (
            <StaggerItem key={principle}>
              <div className="flex items-baseline gap-4 border-b border-white/10 py-3.5">
                <span className="font-mono text-sm text-cyan/70">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-[15px] font-medium text-white/85">{principle}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1} className="mt-12">
          <Button to="/careers" variant="cyan" size="lg">
            Join the Finders
          </Button>
        </Reveal>
      </div>
    </section>
  )
}

export default FinderCulture
