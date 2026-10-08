import { Code2, Landmark, BrainCircuit, Cloud, Check } from 'lucide-react'
import { SEO } from '@/components/ui/SEO'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { breadcrumbSchema } from '@/lib/schema'

const solutions = [
  {
    icon: Code2,
    title: 'Software Engineering',
    description:
      'World-class engineering is the foundation everything else at Amjora is built on. We approach every system with deliberate architecture, rigorous standards and a bias toward building things that last.',
    points: [
      'Deliberate, well-documented architecture',
      'Engineering standards drawn from the Finder Principles',
      'A long-term view of maintainability over shortcuts',
    ],
  },
  {
    icon: Landmark,
    title: 'Financial Technology',
    description:
      'Financial infrastructure demands a different level of care. We design for trust first — building toward payment rails, wallets and APIs held to the discipline that money requires.',
    points: [
      'Trust-first design, from architecture to interface',
      'Built toward Amjora Payments — our financial infrastructure roadmap',
      'Clarity and control at every step of a transaction',
    ],
  },
  {
    icon: BrainCircuit,
    title: 'AI & Intelligent Systems',
    description:
      'Intelligent systems should augment human judgment, not replace accountability. Our approach to AI is grounded in solving meaningful problems, not chasing novelty.',
    points: [
      'Automation aimed at removing friction, not agency',
      'A long-term ambition spanning healthcare, education, finance and productivity',
      'Held to the same trust standards as everything else we build',
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud & Infrastructure',
    description:
      'Developer infrastructure built for reliability at scale — the building blocks teams need to ship dependable software, built on the same foundation as everything in the Amjora ecosystem.',
    points: [
      'Infrastructure built on Amjora Platform standards',
      'Designed for reliability, not just velocity',
      'A foundation for the products Amjora builds next',
    ],
  },
]

export function Solutions() {
  return (
    <>
      <SEO
        title="Solutions"
        description="Amjora builds across software engineering, financial technology, AI & intelligent systems and cloud infrastructure — engineered to find better ways to solve meaningful problems."
        path="/solutions"
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Solutions', path: '/solutions' },
        ])}
      />

      <PageHero
        image="solutions"
        eyebrow="Solutions"
        title="Four disciplines. One way of thinking."
        description="Amjora approaches every meaningful problem the same way — with curiosity, craftsmanship and a refusal to stop at the first easy answer. Here is how that plays out across the areas we build in."
      />

      <section className="bg-white py-24 lg:py-32">
        <div className="container-page flex flex-col gap-20">
          {solutions.map((solution, i) => {
            const Icon = solution.icon
            return (
              <Reveal key={solution.title}>
                <div
                  className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-12 ${
                    i % 2 === 1 ? 'lg:[direction:rtl]' : ''
                  }`}
                >
                  <div className={`lg:col-span-5 ${i % 2 === 1 ? '[direction:ltr]' : ''}`}>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-midnight">
                      <Icon className="h-6 w-6 text-cyan" strokeWidth={1.75} />
                    </div>
                    <h2 className="mt-6 text-2xl font-bold tracking-tight text-midnight sm:text-3xl">
                      {solution.title}
                    </h2>
                    <p className="mt-4 text-[15.5px] leading-relaxed text-midnight/60">
                      {solution.description}
                    </p>
                  </div>
                  <div className={`lg:col-span-7 ${i % 2 === 1 ? '[direction:ltr]' : ''}`}>
                    <ul className="grid grid-cols-1 gap-3 rounded-2xl border border-midnight/10 bg-mist p-7 sm:grid-cols-1">
                      {solution.points.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-[14.5px] text-midnight/70">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-dim" strokeWidth={2.5} />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="bg-midnight py-24 text-white lg:py-28">
        <div className="container-page flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <Reveal>
            <h2 className="max-w-lg text-3xl font-extrabold tracking-tight sm:text-4xl">
              Have a problem worth solving together?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Button to="/contact" variant="cyan" size="lg">
              Let&rsquo;s talk
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default Solutions
