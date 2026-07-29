import { motion, useReducedMotion } from 'framer-motion'
import { MISSION_VISION } from '@/data/content'

const EASE = [0.22, 1, 0.36, 1]

/* Mission lands first, the divider draws, then Vision — deliberate pacing
   rather than both statements appearing at once. */
const STEP_DELAY = 1.15

/**
 * Mission and vision, painted onto a wall.
 *
 * The layout is the plain two-column one — a label, a rule and a paragraph with
 * a drop cap. What changes is the surface: a plaster wall, with the type set in
 * `multiply` so the paint takes on the wall's shading, and a single grain layer
 * over the whole section so lettering and plaster share one texture. Grain only
 * behind the text would make the type look pasted on.
 */
export default function MissionVision() {
  const reduced = useReducedMotion()

  return (
    // `isolate` keeps the multiply blending inside this section — without it the
    // painted type blends against whatever the root happens to paint.
    <section
      id="mission"
      className="wall wall-seams wall-grain relative isolate overflow-hidden py-24 sm:py-32"
    >
      {/* faint scuffs, so the surface is not perfectly uniform */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-ink-900/[.03] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-ink-900/[.04] blur-3xl"
      />

      <div className="container relative">
        <div className="mx-auto max-w-5xl">
          <div className="relative grid gap-14 lg:grid-cols-2 lg:gap-16">
            {/* Column divider, brand-tinted so it reads as a painted rule rather
                than another concrete joint — the wall supplies its own grey lines. */}
            <motion.span
              aria-hidden="true"
              initial={reduced ? false : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: STEP_DELAY - 0.45, ease: EASE }}
              className="painted pointer-events-none absolute inset-y-2 left-1/2 hidden w-px origin-top -translate-x-1/2 bg-gradient-to-b from-transparent via-brand-800/35 to-transparent lg:block"
            />

            {MISSION_VISION.map((item, i) => {
              const [first, ...rest] = item.kicker.split(' ')
              const delay = i * STEP_DELAY

              return (
                <motion.article
                  key={item.kicker}
                  initial={reduced ? false : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.8, delay, ease: EASE }}
                  className="painted"
                >
                  <motion.header
                    className="flex items-center gap-3"
                    initial={reduced ? false : { opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.5, delay: delay + 0.1 }}
                  >
                    <motion.span
                      className="h-px w-8 origin-left bg-brand-800"
                      initial={reduced ? false : { scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{ duration: 0.6, delay: delay + 0.15, ease: EASE }}
                    />
                    <h3 className="font-display text-[13px] font-bold uppercase tracking-[.22em] text-ink-900/60">
                      {first} <span className="capitalize text-brand-800">{rest.join(' ')}</span>
                    </h3>
                  </motion.header>

                  {/* the default drop cap is brand-500 — too light to hold
                      against plaster, so it goes a couple of steps darker */}
                  <motion.p
                    className="dropcap mt-6 text-[17px] leading-[1.7] text-ink-900/80 [&::first-letter]:text-brand-800"
                    initial={reduced ? false : { opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.7, delay: delay + 0.25, ease: EASE }}
                  >
                    {item.body}
                  </motion.p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
