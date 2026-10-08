import { motion, useReducedMotion } from 'framer-motion'

// Several scattered points converging on one — a visual echo of "Finding
// Ways": many possible routes, one deliberate path through. Pure inline
// SVG so it stays crisp at any size and costs near-nothing over the wire.
const paths = [
  'M40,60 C120,40 200,140 260,180',
  'M380,50 C300,90 300,150 260,180',
  'M30,260 C110,240 190,210 260,180',
  'M360,300 C290,260 300,210 260,180',
  'M210,20 C230,90 250,140 260,180',
]

const nodes = [
  { x: 40, y: 60, delay: 0 },
  { x: 380, y: 50, delay: 0.15 },
  { x: 30, y: 260, delay: 0.3 },
  { x: 360, y: 300, delay: 0.45 },
  { x: 210, y: 20, delay: 0.6 },
]

export function PathwayGraphic({ className = '' }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <svg viewBox="0 0 400 340" className={className} fill="none" aria-hidden xmlns="http://www.w3.org/2000/svg">
      {paths.map((d, i) => (
        <motion.path
          key={d}
          d={d}
          stroke="#2DD4FF"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={shouldReduceMotion ? { opacity: 0.35 } : { pathLength: 0, opacity: 0 }}
          animate={
            shouldReduceMotion
              ? { opacity: 0.35 }
              : { pathLength: 1, opacity: 0.35 }
          }
          transition={{ duration: 1.4, delay: 0.3 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}

      {nodes.map((n) => (
        <motion.circle
          key={`${n.x}-${n.y}`}
          cx={n.x}
          cy={n.y}
          r="4"
          fill="#2DD4FF"
          initial={shouldReduceMotion ? { opacity: 0.7 } : { opacity: 0, scale: 0 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 0.5, delay: n.delay, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}

      <motion.circle
        cx="260"
        cy="180"
        r="7"
        fill="#ffffff"
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.circle
        cx="260"
        cy="180"
        r="16"
        stroke="#ffffff"
        strokeWidth="1"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={shouldReduceMotion ? { opacity: 0.25, scale: 1 } : { opacity: [0.5, 0], scale: [0.8, 1.8] }}
        transition={
          shouldReduceMotion
            ? { duration: 0.6, delay: 1.1 }
            : { duration: 2.2, delay: 1.2, repeat: Infinity, ease: 'easeOut' }
        }
      />
    </svg>
  )
}

export default PathwayGraphic
