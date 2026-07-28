import { motion, useReducedMotion } from 'framer-motion'
import Section from '@/components/ui/Section'
import { MISSION_VISION } from '@/data/content'

const EASE = [0.22, 1, 0.36, 1]

/**
 * Mission and vision, revealed in sequence rather than together.
 *
 * Mission lands first, the divider draws down between them, and only then does
 * Vision arrive — so the pair reads as two statements in order instead of one
 * block of text appearing at once. The gap is ~1.15s: long enough to register
 * as deliberate pacing, short enough that a reader who has already scrolled to
 * Vision is not left waiting on an empty column.
 */
const STEP_DELAY = 1.15

export default function MissionVision() {
  const reduced = useReducedMotion()

  return (
    <Section id="mission" tone="light">
      <div className="mx-auto max-w-5xl">
        <div className="relative grid gap-14 lg:grid-cols-2 lg:gap-16">
          {/* divider draws down between the two statements */}
          <motion.span
            aria-hidden="true"
            initial={reduced ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: STEP_DELAY - 0.45, ease: EASE }}
            className="pointer-events-none absolute inset-y-2 left-1/2 hidden w-px origin-top -translate-x-1/2 bg-gradient-to-b from-transparent via-brand-300 to-transparent lg:block"
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
              >
                <motion.header
                  className="flex items-center gap-3"
                  initial={reduced ? false : { opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.5, delay: delay + 0.1 }}
                >
                  <motion.span
                    className="h-px w-8 origin-left bg-brand-500"
                    initial={reduced ? false : { scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.6, delay: delay + 0.15, ease: EASE }}
                  />
                  <h3 className="font-display text-[13px] font-bold uppercase tracking-[.22em] text-neutral-500">
                    {first} <span className="capitalize text-brand-700">{rest.join(' ')}</span>
                  </h3>
                </motion.header>

                <motion.p
                  className="dropcap mt-6 text-[17px] leading-[1.7] text-neutral-600"
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
    </Section>
  )
}
