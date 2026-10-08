import { Code2, Landmark, BrainCircuit, Cloud } from 'lucide-react'
import { Reveal, StaggerGroup, StaggerItem } from '@/components/ui/Reveal'
import { whatWeBuild } from '@/data/brand'

const icons = [Code2, Landmark, BrainCircuit, Cloud]

export function WhatWeBuild() {
  return (
    <section className="bg-mist py-24 lg:py-32">
      <div className="container-page">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-dim">What we build</p>
          <h2 className="mt-5 max-w-2xl text-3xl font-extrabold tracking-tight text-midnight sm:text-4xl">
            Four disciplines. One way of thinking.
          </h2>
        </Reveal>

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whatWeBuild.map((item, i) => {
            const Icon = icons[i]
            return (
              <StaggerItem key={item.title}>
                <div className="group h-full rounded-2xl border border-midnight/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:shadow-xl hover:shadow-midnight/5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-midnight transition-colors duration-300 group-hover:bg-cyan">
                    <Icon className="h-5 w-5 text-white transition-colors duration-300 group-hover:text-midnight" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-midnight">{item.title}</h3>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-midnight/60">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}

export default WhatWeBuild
