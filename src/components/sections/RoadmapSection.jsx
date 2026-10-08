import { Reveal, StaggerGroup, StaggerItem } from '@/components/ui/Reveal'
import { roadmapPhases } from '@/data/brand'

export function RoadmapSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-dim">
            Long-term vision
          </p>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-midnight sm:text-4xl">
            A 20-year roadmap, not a quarterly one.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-midnight/60">
            Amjora is built in phases — each one earning the next. This is our ambition, laid
            out honestly: what we&rsquo;re building now, and what we&rsquo;re building toward.
          </p>
        </Reveal>

        <StaggerGroup className="relative mt-16">
          <div className="absolute left-[27px] top-2 hidden h-[calc(100%-1rem)] w-px bg-midnight/10 sm:block" />
          <div className="flex flex-col gap-2">
            {roadmapPhases.map((phase) => (
              <StaggerItem key={phase.phase}>
                <div className="group relative flex flex-col gap-4 rounded-2xl px-1 py-6 transition-colors hover:bg-mist sm:flex-row sm:items-start sm:gap-8 sm:px-6">
                  <div className="flex items-center gap-4 sm:w-56 sm:shrink-0">
                    <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-midnight/15 bg-white font-mono text-xs font-semibold text-midnight group-hover:border-cyan group-hover:text-cyan-dim">
                      {phase.phase}
                    </span>
                    <span className="font-mono text-sm text-midnight/45">{phase.years}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-midnight">{phase.title}</h3>
                    <p className="mt-1.5 max-w-xl text-[14.5px] leading-relaxed text-midnight/60">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerGroup>
      </div>
    </section>
  )
}

export default RoadmapSection
