import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Section, { SectionHeading } from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import Icon from '@/components/ui/Icon'
import Img from '@/components/ui/Img'
import { TESTIMONIALS } from '@/data/content'
import cn from '@/lib/cn'

const AUTOPLAY_MS = 2000
const EASE = [0.22, 1, 0.36, 1]

/*
 * Hand-placed rather than evenly spaced on a circle: six avatars at exact 60°
 * intervals look like a clock face. Varying the radius and diameter a little
 * gives the cluster the scattered feel of the reference. Values are percentages
 * of the (square) stage, and each entry is the avatar's centre.
 */
const SEATS = [
  { x: 50, y: 9, size: 17 },
  { x: 84, y: 23, size: 14 },
  { x: 90, y: 58, size: 16.5 },
  { x: 70, y: 88, size: 14.5 },
  { x: 30, y: 90, size: 15.5 },
  { x: 11, y: 44, size: 17 },
]

export default function Testimonials() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduced = useReducedMotion()
  const t = TESTIMONIALS[i]
  const [firstName, ...lastName] = t.name.split(' ')

  // Advance on a timer so the section is not inert for a passive reader. Any
  // hover or manual pick pauses it, and it never runs under reduced motion.
  const timer = useRef(null)
  useEffect(() => {
    if (paused || reduced) return
    timer.current = setTimeout(() => setI((c) => (c + 1) % TESTIMONIALS.length), AUTOPLAY_MS)
    return () => clearTimeout(timer.current)
  }, [i, paused, reduced])

  return (
    <Section
      id="stories"
      tone="mint"
      className="overflow-hidden"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
    >
      <SectionHeading
        align="left"
        eyebrow="Rider stories"
        title="Real riders. Real numbers."
        lead="Pick a face. We asked each of them what changed after they switched, and these are their words with the figures they shared."
      />

      <div className="mt-14 grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        {/* ---- the selected story ---- */}
        <div className="relative min-h-[27rem] sm:min-h-[25rem]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={t.name}
              initial={reduced ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              // AnimatePresence runs exit before enter, so both tweens come out
              // of the same 2s window — the exit is deliberately the quicker half
              exit={reduced ? undefined : { opacity: 0, y: -14, transition: { duration: 0.2 } }}
              transition={{ duration: 0.32, ease: EASE }}
            >
              <h3 className="font-display text-[clamp(2.4rem,5vw,3.6rem)] font-extrabold leading-[.95] tracking-tight text-brand-600">
                {firstName}
                <br />
                {lastName.join(' ')}
              </h3>

              <p className="mt-4 font-display text-[13px] font-bold uppercase tracking-[.18em] text-ink-900/70">
                {t.role}
              </p>
              <p className="mt-1 text-[13.5px] text-neutral-600">{t.since}</p>

              <div className="mt-6 flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Icon key={s} name="Star" className="h-4 w-4 fill-brand-500 text-brand-500" />
                ))}
              </div>

              <blockquote className="mt-5 max-w-xl text-[17px] leading-[1.7] text-ink-900/80">
                <Icon name="Quote" className="mb-2 h-7 w-7 text-brand-500/30" />“{t.quote}”
              </blockquote>

              <figcaption className="mt-7 flex items-baseline gap-3 border-t border-ink-900/10 pt-6">
                <span className="font-display text-3xl font-extrabold text-ink-900">{t.metric}</span>
                <span className="text-[13px] text-neutral-600">{t.metricLabel}</span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        {/* ---- the cluster ---- */}
        <Reveal delay={0.1}>
          <div className="relative mx-auto aspect-square w-full max-w-[32rem]">
            {/* Faint orbit path, so the scatter reads as deliberate. Kept very
                light — the seats sit at slightly different radii on purpose, and
                a crisp ring would advertise the mismatch. */}
            <span
              aria-hidden="true"
              className="absolute inset-[6%] rounded-full border border-dashed border-brand-600/10"
            />

            {/* centre — the person currently being read */}
            <div className="absolute left-1/2 top-1/2 h-[46%] w-[46%] -translate-x-1/2 -translate-y-1/2">
              <div className="absolute inset-0 rounded-full bg-white shadow-lift" />

              {/* The ring doubles as the autoplay countdown. Keyed on the pair so
                  it restarts on every change and unwinds the moment we pause. */}
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full -rotate-90">
                <circle cx="50" cy="50" r="46.5" fill="none" stroke="#D1FADF" strokeWidth="2.5" />
                {!reduced && (
                  <motion.circle
                    key={`${i}-${paused}`}
                    cx="50"
                    cy="50"
                    r="46.5"
                    fill="none"
                    stroke="#12B76A"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: paused ? 0 : 1 }}
                    transition={{ duration: paused ? 0.25 : AUTOPLAY_MS / 1000, ease: 'linear' }}
                  />
                )}
              </svg>

              <AnimatePresence mode="wait">
                <motion.div
                  key={t.name}
                  initial={reduced ? false : { opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduced ? undefined : { opacity: 0, scale: 1.05, transition: { duration: 0.18 } }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className="absolute inset-[7%] overflow-hidden rounded-full"
                >
                  <Img
                    src={t.avatar}
                    alt={t.name}
                    wrapperClassName="absolute inset-0"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* orbiting picks */}
            {TESTIMONIALS.map((person, idx) => {
              const seat = SEATS[idx % SEATS.length]
              const active = idx === i

              return (
                <motion.button
                  key={person.name}
                  type="button"
                  onClick={() => {
                    setPaused(true)
                    setI(idx)
                  }}
                  aria-label={`Read ${person.name}'s story`}
                  aria-pressed={active}
                  className={cn(
                    'group absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-[3px] shadow-lift outline-none transition-[box-shadow,transform] duration-300',
                    'hover:z-10 hover:scale-[1.09] focus-visible:ring-4 focus-visible:ring-brand-500/40',
                    active && 'z-10 ring-[3px] ring-brand-500',
                  )}
                  style={{
                    left: `${seat.x}%`,
                    top: `${seat.y}%`,
                    width: `${seat.size}%`,
                    height: `${seat.size}%`,
                  }}
                  initial={reduced ? false : { opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.55, delay: 0.12 + idx * 0.08, ease: EASE }}
                >
                  <span
                    className={cn(
                      'relative block h-full w-full overflow-hidden rounded-full transition-all duration-300',
                      active
                        ? 'opacity-100 grayscale-0'
                        : 'opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0',
                    )}
                  >
                    <Img
                      src={person.avatar}
                      alt=""
                      wrapperClassName="absolute inset-0"
                      className="object-cover"
                    />
                  </span>
                </motion.button>
              )
            })}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
