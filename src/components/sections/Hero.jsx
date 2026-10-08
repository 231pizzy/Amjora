import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { PathwayGraphic } from '@/components/ui/PathwayGraphic'
import { getHeroImage } from '@/data/heroImages'

export function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="bg-grain relative overflow-hidden bg-midnight text-white">
      <div
        className="bg-mesh pointer-events-none absolute inset-0"
        style={{ backgroundImage: `url(${getHeroImage('home')})` }}
        aria-hidden
      />
      <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-6 top-16 w-85 opacity-90 sm:top-24 sm:w-115 lg:-right-4 lg:top-20 lg:w-140"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={shouldReduceMotion ? undefined : { opacity: 0.9 }}
        transition={{ duration: 1 }}
      >
        <PathwayGraphic className="w-full" />
      </motion.div>

      <div className="container-page relative flex flex-col items-start pb-24 pt-40 lg:pb-36 lg:pt-52">
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-cyan"
        >
          Amjora — Finding Ways.
        </motion.p>

        <motion.h1
          initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-3xl text-[2.5rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          Finding better ways
          <br />
          through <span className="text-gradient-cyan">technology.</span>
        </motion.h1>

        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-xl text-lg leading-relaxed text-white/65 lg:text-xl"
        >
          Amjora is a technology company building trusted software, financial infrastructure and
          intelligent systems — engineered by people who don&rsquo;t stop at &ldquo;can&rsquo;t be done.&rdquo;
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button to="/about" variant="cyan" size="lg">
            Explore Amjora
          </Button>
          <Button to="/contact" variant="ghost" size="lg" icon={false}>
            Let&rsquo;s talk
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
