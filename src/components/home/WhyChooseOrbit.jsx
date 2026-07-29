import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { WHY_CHOOSE } from '@/data/content'
import cn from '@/lib/cn'

const EASE = [0.22, 1, 0.36, 1]
const RADIUS = 41 // % of the container, from centre to node centre

/** Node positions on the ring, starting at 12 o'clock and going clockwise. */
const points = WHY_CHOOSE.map((item, i) => {
  const angle = (i / WHY_CHOOSE.length) * Math.PI * 2 - Math.PI / 2
  return {
    ...item,
    i,
    x: 50 + RADIUS * Math.cos(angle),
    y: 50 + RADIUS * Math.sin(angle),
  }
})

/**
 * Benefits arranged as a hub-and-spoke network around a central core — the
 * shape of the fleet itself.
 *
 * The ring turns very slowly (90s per revolution) and pauses whenever a node is
 * hovered, so targets never move away from the cursor. Energy pulses travel
 * outward along each spoke, and hovering a node takes over the core with that
 * benefit's detail, which gives the centre a job beyond decoration.
 *
 * Below `lg` the circle is impossible, so it degrades to a plain two-column
 * list carrying exactly the same content.
 */
export default function WhyChooseOrbit() {
  const [active, setActive] = useState(null)
  const reduced = useReducedMotion()
  const paused = active !== null

  const detail = active === null ? null : points[active]

  return (
    <>
      {/* ------------------------------------------------ desktop ---- */}
      <div className="relative mx-auto mt-16 hidden aspect-square w-full max-w-[46rem] lg:block">
        {/* faint guide ring */}
        <div
          aria-hidden="true"
          className="absolute rounded-full border border-dashed border-brand-200"
          style={{
            inset: `${50 - RADIUS}%`,
          }}
        />

        {/* rotating layer: spokes + nodes */}
        <div
          className={cn('absolute inset-0', !reduced && 'orbit-spin')}
          style={{ animationPlayState: paused ? 'paused' : 'running' }}
        >
          {/* spokes */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
            fill="none"
          >
            {points.map((p) => (
              <g key={p.title}>
                <motion.line
                  x1="50"
                  y1="50"
                  x2={p.x}
                  y2={p.y}
                  stroke={active === p.i ? '#12B76A' : 'rgb(18 183 106 / .22)'}
                  strokeWidth={active === p.i ? 0.6 : 0.3}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.2 + p.i * 0.07, ease: EASE }}
                />

                {/* energy pulse travelling out to the node */}
                {!reduced && (
                  <motion.circle
                    r="0.7"
                    fill="#BFF700"
                    initial={{ cx: 50, cy: 50, opacity: 0 }}
                    animate={{
                      cx: [50, p.x],
                      cy: [50, p.y],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 2.4,
                      delay: p.i * 0.45,
                      repeat: Infinity,
                      repeatDelay: 2.6,
                      ease: 'easeInOut',
                    }}
                  />
                )}
              </g>
            ))}
          </svg>

          {/* nodes */}
          {points.map((p) => (
            <div
              key={p.title}
              className="absolute"
              style={{ left: `${p.x}%`, top: `${p.y}%`, transform: 'translate(-50%, -50%)' }}
            >
              {/* counter-rotation keeps the label upright as the ring turns */}
              <div
                className={cn(!reduced && 'orbit-spin-rev')}
                style={{ animationPlayState: paused ? 'paused' : 'running' }}
              >
                <motion.button
                  type="button"
                  onMouseEnter={() => setActive(p.i)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(p.i)}
                  onBlur={() => setActive(null)}
                  initial={{ opacity: 0, scale: 0.4 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.35 + p.i * 0.07,
                    type: 'spring',
                    stiffness: 220,
                    damping: 16,
                  }}
                  className={cn(
                    'w-[9.5rem] rounded-2xl border px-4 py-3.5 text-center transition-colors duration-300',
                    active === p.i
                      ? 'border-brand-700 bg-brand-700 shadow-glow'
                      : 'border-neutral-200 bg-white shadow-card hover:border-brand-300',
                  )}
                >
                  <span
                    className={cn(
                      'block font-display text-[1.6rem] font-extrabold leading-none tracking-tight',
                      active === p.i ? 'text-white' : 'text-ink-900',
                    )}
                  >
                    {p.value}
                    {p.unit && (
                      <span
                        className={cn(
                          'ml-0.5 text-[13px] font-bold',
                          active === p.i ? 'text-volt-400' : 'text-brand-700',
                        )}
                      >
                        {p.unit}
                      </span>
                    )}
                  </span>
                  <span
                    className={cn(
                      'mt-1.5 block text-[11px] font-semibold uppercase leading-tight tracking-[.1em]',
                      active === p.i ? 'text-white/80' : 'text-neutral-500',
                    )}
                  >
                    {p.title}
                  </span>
                </motion.button>
              </div>
            </div>
          ))}
        </div>

        {/* ---- the core ---- */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* `current-ring` puts a slowly rotating conic gradient behind the
              core, so the hub reads as energised rather than a static disc. */}
          <div className="current-ring relative grid h-[15rem] w-[15rem] place-items-center rounded-full border border-brand-200 bg-white px-8 text-center shadow-lift">
            <span
              aria-hidden="true"
              className="absolute inset-0 animate-pulse-ring rounded-full bg-brand-500/15"
            />

            <AnimatePresence mode="wait">
              {detail ? (
                <motion.div
                  key={detail.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="relative"
                >
                  <p className="font-display text-[13px] font-bold uppercase tracking-[.14em] text-brand-700">
                    {detail.title}
                  </p>
                  <p className="mt-3 text-[14px] leading-relaxed text-neutral-600">{detail.note}</p>
                </motion.div>
              ) : (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="relative"
                >
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-500 shadow-glow">
                    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="white" aria-hidden="true">
                      <path d="M13.5 2 4 13.2h6.1L9.6 22 20 10.6h-6.4L13.5 2Z" />
                    </svg>
                  </span>
                  <p className="mt-4 font-display text-lg font-extrabold text-ink-900">
                    Everything included
                  </p>
                  <p className="mt-1.5 text-[12.5px] leading-snug text-neutral-500">
                    Hover any point to see what it covers
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------- mobile ---- */}
      <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:hidden">
        {WHY_CHOOSE.map((b) => (
          <li
            key={b.title}
            className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-5"
          >
            <span className="font-display text-2xl font-extrabold leading-none tracking-tight text-ink-900">
              {b.value}
              {b.unit && <span className="ml-0.5 text-[13px] text-brand-500">{b.unit}</span>}
            </span>
            <span className="min-w-0 flex-1 border-l border-neutral-100 pl-4">
              <span className="block text-[12px] font-semibold uppercase tracking-[.1em] text-neutral-500">
                {b.title}
              </span>
              <span className="mt-1 block text-[13px] leading-snug text-neutral-500">{b.note}</span>
            </span>
          </li>
        ))}
      </ul>
    </>
  )
}
