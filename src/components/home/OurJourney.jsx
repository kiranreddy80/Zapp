import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import Icon from '@/components/ui/Icon'
import Button from '@/components/ui/Button'
import { TIMELINE } from '@/data/content'
import cn from '@/lib/cn'

const EASE = [0.22, 1, 0.36, 1]

/* Geometry, shared by the wave and the milestones so the two cannot drift. */
const COL = 320 // column width
const BASE_Y = 74 // wave centre line — kept high so the curve sits close
const AMP = 26 // wave amplitude    under the heading, with no dead band
const PERIOD = COL * 2 // one full rise-and-fall every two columns
const H = 350 // plot height

/** The curve the milestones sit on. */
const waveY = (x) => BASE_Y - AMP * Math.sin((Math.PI * x) / PERIOD)

const nodeX = (i) => i * COL + COL / 2

/**
 * Company timeline drawn along a flowing wave.
 *
 * Milestones sit directly on the curve with their text beneath — no cards, so
 * the eye follows the line rather than hopping between boxes. Oversized index
 * numerals sit behind the text as a watermark. Scrolls horizontally by drag,
 * wheel, arrow buttons or keyboard.
 */
export default function OurJourney() {
  const scrollerRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const n = TIMELINE.length
  const width = COL * n

  // Sample the sine densely — a fine polyline reads as a smooth curve and
  // avoids hand-tuning bezier control points.
  const wavePath = (() => {
    const pts = []
    for (let x = 0; x <= width; x += 4) pts.push(`${x},${waveY(x).toFixed(2)}`)
    return `M ${pts.join(' L ')}`
  })()

  const sync = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setProgress(max > 0 ? el.scrollLeft / max : 1)
    setAtStart(el.scrollLeft <= 4)
    setAtEnd(el.scrollLeft >= max - 4)
  }, [])

  useEffect(() => {
    sync()
    window.addEventListener('resize', sync)
    return () => window.removeEventListener('resize', sync)
  }, [sync])

  const nudge = (dir) => scrollerRef.current?.scrollBy({ left: dir * COL, behavior: 'smooth' })

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      nudge(1)
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      nudge(-1)
    }
  }

  return (
    <Section id="journey" tone="brand">
      {/* ---- heading ---- */}
      <div className="flex flex-wrap items-end justify-between gap-8">
        <div className="max-w-xl">
          <Reveal>
            <span className="text-[11px] font-semibold uppercase tracking-[.2em] text-brand-700">
              Journey of SGD Electric
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="mt-5 text-3xl leading-[1.12] sm:text-4xl lg:text-[2.6rem]">
              We are not just a team,
              <br />
              we are a tribe
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-5 text-[16.5px] leading-relaxed text-neutral-600">
              Seven years building India&rsquo;s electric delivery infrastructure — told with the
              funding rounds and fleet numbers attached, including the year we threw the original
              business model away.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-8">
              <Button to="/careers">Join our team</Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="flex shrink-0 items-center gap-2.5">
          <button
            type="button"
            onClick={() => nudge(-1)}
            disabled={atStart}
            aria-label="Earlier milestones"
            className="grid h-12 w-12 place-items-center rounded-full border border-brand-200 bg-white text-ink-900 transition-all duration-300 hover:-translate-x-0.5 hover:border-brand-400 hover:text-brand-700 disabled:pointer-events-none disabled:opacity-30"
          >
            <Icon name="ArrowLeft" className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => nudge(1)}
            disabled={atEnd}
            aria-label="Later milestones"
            className="grid h-12 w-12 place-items-center rounded-full border border-brand-200 bg-white text-ink-900 transition-all duration-300 hover:translate-x-0.5 hover:border-brand-400 hover:text-brand-700 disabled:pointer-events-none disabled:opacity-30"
          >
            <Icon name="ArrowRight" className="h-5 w-5" />
          </button>
        </Reveal>
      </div>

      {/* ---- wave timeline ---- */}
      <div className="relative mt-10">
        <div
          ref={scrollerRef}
          onScroll={sync}
          onKeyDown={onKeyDown}
          tabIndex={0}
          role="group"
          aria-label="Company milestones, scroll horizontally"
          className="no-scrollbar -mx-5 overflow-x-auto px-5 outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40 lg:mx-0 lg:px-0"
        >
          <div className="relative" style={{ width, height: H }}>
            {/* the wave */}
            <svg
              aria-hidden="true"
              width={width}
              height={H}
              viewBox={`0 0 ${width} ${H}`}
              fill="none"
              className="absolute inset-0"
            >
              {/* soft shadow track beneath the line */}
              <path d={wavePath} stroke="rgb(6 18 12 / .07)" strokeWidth="6" strokeLinecap="round" />
              <motion.path
                d={wavePath}
                stroke="#12B76A"
                strokeWidth="3.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              />
            </svg>

            {/* milestones */}
            <ol className="absolute inset-0">
              {TIMELINE.map((item, i) => {
                const x = nodeX(i)
                const y = waveY(x)
                const delay = 0.25 + i * 0.28

                return (
                  <li key={item.year} className="absolute top-0 h-full" style={{ left: i * COL, width: COL }}>
                    {/* oversized index watermark */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute select-none font-display text-[9rem] font-extrabold leading-none tracking-tighter text-brand-700/[.06]"
                      style={{ left: 8, top: y + 96 }}
                    >
                      {i + 1}
                    </span>

                    {/* node sitting on the curve */}
                    <motion.span
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ delay, type: 'spring', stiffness: 260, damping: 17 }}
                      className="absolute grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl bg-white shadow-lift"
                      style={{ left: x - i * COL, top: y }}
                    >
                      <span
                        className={cn(
                          'relative grid h-5 w-5 place-items-center rounded-full',
                          item.future ? 'bg-volt-500' : 'bg-brand-500',
                        )}
                      >
                        {item.future && (
                          <span className="absolute inset-0 animate-pulse-ring rounded-full bg-volt-500/60" />
                        )}
                      </span>
                    </motion.span>

                    {/* text beneath the node */}
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.6, delay: delay + 0.12, ease: EASE }}
                      className="absolute pr-10"
                      style={{ left: 4, top: y + 40, width: COL - 24 }}
                    >
                      <p className="text-[13px] font-medium text-neutral-500">
                        {item.future ? 'Aiming for' : `Year ${item.year}`}
                      </p>

                      <h3 className="mt-1.5 text-[17px] font-bold leading-snug text-ink-900">
                        {item.title}
                      </h3>

                      <ul className="mt-2.5 space-y-1">
                        {item.metrics.map((m) => (
                          <li key={m} className="text-[13.5px] font-semibold leading-snug text-brand-700">
                            {m}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>

        {/* edge fades */}
        <span
          aria-hidden="true"
          className={cn(
            'pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-brand-50 to-transparent transition-opacity duration-300',
            atStart && 'opacity-0',
          )}
        />
        <span
          aria-hidden="true"
          className={cn(
            'pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-brand-50 to-transparent transition-opacity duration-300',
            atEnd && 'opacity-0',
          )}
        />
      </div>

      {/* progress */}
      <div className="mt-8 flex items-center gap-4">
        <div className="h-1 flex-1 overflow-hidden rounded-full bg-brand-200/70">
          <div
            className="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-600 transition-[width] duration-200"
            style={{ width: `${Math.max(8, progress * 100)}%` }}
          />
        </div>
        <p className="shrink-0 text-[12px] uppercase tracking-[.16em] text-neutral-500">
          2018 — Today
        </p>
      </div>
    </Section>
  )
}
