import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { Mark } from '@/components/ui/Logo'
import { getHeroImage } from '@/data/heroImages'

export function FinalCTA() {
  return (
    <section className="bg-grain relative overflow-hidden bg-midnight py-28 text-white lg:py-36">
      <div
        className="bg-mesh pointer-events-none absolute inset-0 opacity-80"
        style={{ backgroundImage: `url(${getHeroImage('contact')})` }}
        aria-hidden
      />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06]">
        <Mark className="h-105 w-105" tone="light" />
      </div>
      <div className="container-page relative flex flex-col items-center text-center">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan">
            Let&rsquo;s build something that matters
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Let&rsquo;s find a way forward.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/60">
            Whether you&rsquo;re exploring a partnership, a role, or a problem worth solving
            together — we&rsquo;d like to hear from you.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button to="/contact" variant="cyan" size="lg">
              Let&rsquo;s talk
            </Button>
            <Button to="/careers" variant="ghost" size="lg" icon={false}>
              View careers
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default FinalCTA
