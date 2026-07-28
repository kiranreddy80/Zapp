import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Section, { SectionHeading } from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import Icon from '@/components/ui/Icon'
import Img from '@/components/ui/Img'
import { TESTIMONIALS } from '@/data/content'
import cn from '@/lib/cn'

const AUTOPLAY_MS = 7000

export default function Testimonials() {
  const [i, setI] = useState(0)
  const [dir, setDir] = useState(1)
  const [paused, setPaused] = useState(false)
  const reduced = useReducedMotion()
  const t = TESTIMONIALS[i]

  const go = (next) => {
    const target = (next + TESTIMONIALS.length) % TESTIMONIALS.length
    // Slide forward when stepping to the next item (including the wrap from
    // last back to first), backwards otherwise.
    const forward = target === (i + 1) % TESTIMONIALS.length
    setDir(forward ? 1 : -1)
    setI(target)
  }

  // Advance on a timer so the section is not inert for a passive reader.
  // Any hover or manual interaction pauses it, and it never runs under
  // reduced-motion.
  const timer = useRef(null)
  useEffect(() => {
    if (paused || reduced) return
    timer.current = setTimeout(() => {
      setDir(1)
      setI((c) => (c + 1) % TESTIMONIALS.length)
    }, AUTOPLAY_MS)
    return () => clearTimeout(timer.current)
  }, [i, paused, reduced])

  const select = (next) => {
    setPaused(true)
    go(next)
  }

  return (
    <Section
      tone="muted"
      className="overflow-hidden"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
    >
      <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-16">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Rider stories"
            title="Real riders. Real numbers."
            lead="We asked riders what changed after they switched. These are their words, with the figures they shared."
          />

          <Reveal delay={0.15}>
            <div className="mt-9 flex items-center gap-3">
              <button
                type="button"
                onClick={() => select(i - 1)}
                aria-label="Previous story"
                className="grid h-12 w-12 place-items-center rounded-full border border-neutral-300 bg-white text-ink-900 transition-all duration-300 hover:-translate-x-0.5 hover:border-brand-400 hover:text-brand-700"
              >
                <Icon name="ArrowLeft" className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => select(i + 1)}
                aria-label="Next story"
                className="grid h-12 w-12 place-items-center rounded-full border border-neutral-300 bg-white text-ink-900 transition-all duration-300 hover:translate-x-0.5 hover:border-brand-400 hover:text-brand-700"
              >
                <Icon name="ArrowRight" className="h-5 w-5" />
              </button>

              <span className="ml-3 font-display text-sm font-semibold text-neutral-500">
                {String(i + 1).padStart(2, '0')}
                <span className="mx-1 text-neutral-300">/</span>
                {String(TESTIMONIALS.length).padStart(2, '0')}
              </span>

              {/* autoplay progress — keyed so it restarts on every change */}
              {!reduced && (
                <span className="ml-2 h-1 w-24 overflow-hidden rounded-full bg-neutral-200">
                  <motion.span
                    key={`${i}-${paused}`}
                    className="block h-full rounded-full bg-brand-500"
                    initial={{ width: '0%' }}
                    animate={{ width: paused ? '0%' : '100%' }}
                    transition={{
                      duration: paused ? 0.2 : AUTOPLAY_MS / 1000,
                      ease: 'linear',
                    }}
                  />
                </span>
              )}
            </div>
          </Reveal>

          {/* avatar picker */}
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {TESTIMONIALS.map((person, idx) => (
                <button
                  key={person.name}
                  type="button"
                  onClick={() => select(idx)}
                  aria-label={`Read ${person.name}'s story`}
                  className={cn(
                    'relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-offset-2 transition-all duration-300',
                    idx === i
                      ? 'ring-brand-500 ring-offset-neutral-50'
                      : 'opacity-45 ring-transparent hover:opacity-100',
                  )}
                >
                  <Img src={person.avatar} alt="" wrapperClassName="h-full w-full" />
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ---- card ---- */}
        <div className="relative min-h-[30rem]">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.figure
              key={t.name}
              custom={dir}
              initial={{ opacity: 0, x: dir * 44 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -44 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-[2rem] bg-ink-900 p-8 text-white sm:p-10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-900/70 via-ink-900 to-ink-950" />
              <div className="noise absolute inset-0" />

              <Icon
                name="Quote"
                className="absolute right-8 top-8 h-20 w-20 text-white/[.05]"
              />

              <div className="relative">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Icon key={s} name="Star" className="h-4 w-4 fill-volt-500 text-volt-500" />
                  ))}
                </div>

                <blockquote className="mt-7 font-display text-xl font-medium leading-relaxed text-white/90 sm:text-2xl">
                  “{t.quote}”
                </blockquote>

                <div className="mt-9 flex flex-wrap items-end justify-between gap-6 border-t border-white/10 pt-7">
                  <figcaption className="flex items-center gap-4">
                    <Img
                      src={t.avatar}
                      alt=""
                      wrapperClassName="h-14 w-14 shrink-0 rounded-full"
                    />
                    <span>
                      <span className="block font-display font-bold text-white">{t.name}</span>
                      <span className="block text-sm text-white/65">{t.role}</span>
                      <span className="mt-0.5 block text-[12px] text-white/55">{t.since}</span>
                    </span>
                  </figcaption>

                  <div className="text-right">
                    <p className="font-display text-3xl font-extrabold text-volt-400">{t.metric}</p>
                    <p className="text-[12.5px] text-white/65">{t.metricLabel}</p>
                  </div>
                </div>
              </div>
            </motion.figure>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  )
}
