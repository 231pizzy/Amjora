import { Reveal, StaggerGroup, StaggerItem } from '@/components/ui/Reveal'
import { amjoraWay } from '@/data/brand'

export function AmjoraWaySection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-page">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-dim">The Amjora way</p>
          <h2 className="mt-5 max-w-xl text-3xl font-extrabold tracking-tight text-midnight sm:text-4xl">
            How we respond, by design.
          </h2>
        </Reveal>

        <StaggerGroup className="mt-14 grid grid-cols-1 divide-y divide-midnight/10 border-y border-midnight/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          {amjoraWay.map((item) => (
            <StaggerItem key={item.trigger}>
              <div className="flex flex-col gap-1.5 px-1 py-8 sm:px-8">
                <span className="text-sm text-midnight/50">{item.trigger}</span>
                <span className="text-2xl font-bold tracking-tight text-midnight">
                  {item.response}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1} className="mt-10">
          <p className="max-w-2xl text-lg leading-relaxed text-midnight/60">
            We always keep <span className="font-semibold text-midnight">Finding Ways.</span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export default AmjoraWaySection
