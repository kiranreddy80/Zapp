import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section, { SectionHeading, Glow } from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import Icon from '@/components/ui/Icon'
import Img from '@/components/ui/Img'
import Button from '@/components/ui/Button'
import { HOW_IT_WORKS } from '@/data/content'
import cn from '@/lib/cn'

/**
 * Four-step onboarding, driven by a clickable rail. Selecting a step swaps the
 * paired image, so the section works as a small guided tour rather than a
 * static list.
 */
export default function Journey() {
  const [active, setActive] = useState(0)
  const step = HOW_IT_WORKS[active]

  return (
    <Section tone="deep" className="overflow-hidden">
      <Glow className="-right-32 top-10 h-96 w-96" />
      <Glow className="-left-20 bottom-10 h-80 w-80" color="volt" />

      <SectionHeading
        dark
        align="left"
        eyebrow="Getting started"
        title="From download to first delivery in 24 hours"
        lead="No branch visits, no agents, no paperwork. Four steps, all inside the app."
        className="max-w-2xl"
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        {/* ---- step rail ---- */}
        <Reveal from="right">
          <ol className="relative space-y-2">
            {/* connecting line */}
            <span
              aria-hidden="true"
              className="absolute left-[27px] top-4 h-[calc(100%-2rem)] w-px bg-white/10"
            />
            <motion.span
              aria-hidden="true"
              className="absolute left-[27px] top-4 w-px bg-gradient-to-b from-volt-500 to-brand-500"
              initial={false}
              animate={{ height: `${((active + 1) / HOW_IT_WORKS.length) * 100}%` }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />

            {HOW_IT_WORKS.map((s, i) => {
              const isActive = i === active
              return (
                <li key={s.step}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-current={isActive}
                    className={cn(
                      'relative flex w-full gap-5 rounded-2xl p-4 text-left transition-colors duration-300',
                      isActive ? 'bg-white/[.06]' : 'hover:bg-white/[.03]',
                    )}
                  >
                    <span
                      className={cn(
                        'relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl border transition-all duration-500',
                        isActive
                          ? 'border-volt-500 bg-volt-500 text-ink-900'
                          : 'border-white/15 bg-ink-900 text-white/65',
                      )}
                    >
                      <Icon name={s.icon} className="h-5 w-5" />
                    </span>

                    <span className="min-w-0 pt-1">
                      <span
                        className={cn(
                          'text-[11px] font-bold uppercase tracking-[.18em] transition-colors',
                          isActive ? 'text-volt-400' : 'text-white/55',
                        )}
                      >
                        Step {s.step}
                      </span>
                      <span
                        className={cn(
                          'mt-1 block font-display text-lg font-semibold transition-colors sm:text-xl',
                          isActive ? 'text-white' : 'text-white/60',
                        )}
                      >
                        {s.title}
                      </span>

                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.span
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="block overflow-hidden"
                          >
                            <span className="mt-2.5 block text-[15px] leading-relaxed text-white/55">
                              {s.body}
                            </span>
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </span>
                  </button>
                </li>
              )
            })}
          </ol>

          <div className="mt-9 pl-4">
            <Button to="/deliver-and-earn" variant="volt">
              Start onboarding
            </Button>
          </div>
        </Reveal>

        {/* ---- paired visual ---- */}
        <Reveal from="left" delay={0.1} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 sm:aspect-[5/5] lg:aspect-auto lg:h-full lg:min-h-[34rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={step.step}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.99 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Img
                  src={step.image}
                  alt={step.title}
                  wrapperClassName="h-full w-full"
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent" />

            {/* step counter chip */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-4">
              <div className="glass rounded-2xl px-5 py-3.5">
                <p className="font-display text-3xl font-extrabold leading-none text-white">
                  {step.step}
                </p>
                <p className="mt-1 text-[12px] text-white/65">
                  of {String(HOW_IT_WORKS.length).padStart(2, '0')}
                </p>
              </div>

              <div className="flex gap-1.5">
                {HOW_IT_WORKS.map((s, i) => (
                  <button
                    key={s.step}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Go to step ${s.step}`}
                    className={cn(
                      'h-1.5 rounded-full transition-all duration-500',
                      i === active ? 'w-8 bg-volt-500' : 'w-1.5 bg-white/30 hover:bg-white/60',
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
