import { Reveal } from '@/components/ui/Reveal'

export function PhilosophyBanner() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-page">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-dim">
            Our philosophy
          </p>
          <h2 className="mt-5 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-midnight sm:text-5xl">
            Every problem has a <span className="text-gradient-cyan">way</span> through.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-midnight/60">
            We are Finders. We don&rsquo;t accept &ldquo;can&rsquo;t be done.&rdquo; We ask better
            questions, explore deeply and build solutions that create real impact.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export default PhilosophyBanner
