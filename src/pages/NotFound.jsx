import { SEO } from '@/components/ui/SEO'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { Mark } from '@/components/ui/Logo'
import { getHeroImage } from '@/data/heroImages'

export function NotFound() {
  return (
    <>
      <SEO
        title="Page not found"
        description="The page you're looking for doesn't exist. Let's find a way back."
        path="/404"
        noindex
      />

      <section className="bg-grain relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden bg-midnight text-white">
        <div
          className="bg-mesh pointer-events-none absolute inset-0"
          style={{ backgroundImage: `url(${getHeroImage('notfound')})` }}
          aria-hidden
        />
        <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute -right-16 bottom-0 opacity-[0.1]">
          <Mark className="h-[320px] w-[320px]" tone="light" />
        </div>
        <div className="container-page relative py-28 text-center sm:text-left">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan">404</p>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Even Finders don&rsquo;t find everything.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/60 sm:mx-0">
              The page you&rsquo;re looking for doesn&rsquo;t exist, or has moved. Let&rsquo;s get
              you back on a way that works.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4 sm:justify-start">
              <Button to="/" variant="cyan" size="lg">
                Back to homepage
              </Button>
              <Button to="/contact" variant="ghost" size="lg" icon={false}>
                Contact us
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default NotFound
