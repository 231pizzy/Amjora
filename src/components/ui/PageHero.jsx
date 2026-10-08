import { Reveal } from '@/components/ui/Reveal'
import { getHeroImage } from '@/data/heroImages'

export function PageHero({ eyebrow, title, description, children, image = 'about' }) {
  return (
    <section className="bg-grain relative overflow-hidden bg-midnight pb-20 pt-36 text-white lg:pb-28 lg:pt-44">
      <div
        className="bg-mesh pointer-events-none absolute inset-0"
        style={{ backgroundImage: `url(${getHeroImage(image)})` }}
        aria-hidden
      />
      <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="container-page relative">
        <Reveal>
          {eyebrow && (
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan">{eyebrow}</p>
          )}
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">{description}</p>
          )}
        </Reveal>
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  )
}

export default PageHero
