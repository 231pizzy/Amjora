import { Search, Code2, Compass, ShieldCheck, GraduationCap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Reveal, StaggerGroup, StaggerItem } from '@/components/ui/Reveal'
import { values } from '@/data/brand'
import { ArrowRight } from 'lucide-react'

const icons = [Search, Code2, Compass, ShieldCheck, GraduationCap]

export function EngineeringExcellence() {
  return (
    <section className="bg-mist py-24 lg:py-32">
      <div className="container-page">
        <Reveal className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-dim">
              Engineering excellence
            </p>
            <h2 className="mt-5 max-w-xl text-3xl font-extrabold tracking-tight text-midnight sm:text-4xl">
              Our values, applied to every system we build.
            </h2>
          </div>
          <Link
            to="/engineering"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-midnight hover:text-cyan-dim"
          >
            How we build
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((value, i) => {
            const Icon = icons[i]
            return (
              <StaggerItem key={value.title}>
                <div className="h-full rounded-2xl border border-midnight/10 bg-white p-6">
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
  )
}

export default EngineeringExcellence
