import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Section, { SectionHeading } from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import Icon from '@/components/ui/Icon'
import AppBadges from '@/components/ui/AppBadges'
import Spotlight from '@/components/ui/Spotlight'
import { APP_STEPS, APP_VEHICLES } from '@/data/content'
import cn from '@/lib/cn'

const EASE = [0.22, 1, 0.36, 1]

/* ------------------------------------------------------------------ */
/* Mock app screens                                                    */
/* ------------------------------------------------------------------ */

function Row({ children, className }) {
  return (
    <div className={cn('rounded-xl border border-neutral-200 bg-white p-3', className)}>
      {children}
    </div>
  )
}

function Screen({ kind }) {
  if (kind === 'vehicles') {
    return (
      <div className="space-y-2.5">
        {APP_VEHICLES.map((v) => (
          <Row key={v.name} className="flex items-center gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-700">
              <Icon name="Bike" className="h-4 w-4" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[11px] font-bold text-ink-900">{v.name}</span>
              <span className="block text-[9.5px] text-neutral-500">
                {v.range} · {v.note}
              </span>
            </span>
            <span className="text-right">
              <span className="block text-[11px] font-extrabold text-brand-700">{v.price}</span>
              <span className="block text-[9px] text-neutral-500">/ day</span>
            </span>
          </Row>
        ))}
      </div>
    )
  }

  if (kind === 'kyc') {
    return (
      <div className="space-y-2.5">
        {[
          { label: 'Aadhaar verified', done: true },
          { label: 'PAN verified', done: true },
          { label: 'Selfie liveness check', done: true },
          { label: 'Bank account', done: false },
        ].map((f) => (
          <Row key={f.label} className="flex items-center gap-3">
            <span
              className={cn(
                'grid h-7 w-7 shrink-0 place-items-center rounded-full',
                f.done ? 'bg-brand-500 text-white' : 'border-2 border-dashed border-neutral-300',
              )}
            >
              {f.done && <Icon name="Check" className="h-3.5 w-3.5" />}
            </span>
            <span className="flex-1 text-[11px] font-medium text-ink-900">{f.label}</span>
          </Row>
        ))}
        <p className="pt-1 text-center text-[9.5px] text-neutral-500">Usually done in 6 minutes</p>
      </div>
    )
  }

  if (kind === 'plans') {
    return (
      <div className="space-y-2.5">
        {[
          { name: 'Daily', price: '₹129', active: false },
          { name: 'Monthly', price: '₹3,299', active: true },
          { name: 'Rent to own', price: '₹4,150', active: false },
        ].map((p) => (
          <Row
            key={p.name}
            className={cn(
              'flex items-center justify-between',
              p.active && 'border-brand-500 bg-brand-50',
            )}
          >
            <span>
              <span className="block text-[11px] font-bold text-ink-900">{p.name}</span>
              <span className="block text-[9.5px] text-neutral-500">all-inclusive</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[12px] font-extrabold text-brand-700">{p.price}</span>
              {p.active && <Icon name="CheckCircle2" className="h-4 w-4 text-brand-500" />}
            </span>
          </Row>
        ))}
      </div>
    )
  }

  if (kind === 'payment') {
    return (
      <div className="space-y-3">
        <Row className="text-center">
          <p className="text-[9.5px] uppercase tracking-wider text-neutral-500">Refundable deposit</p>
          <p className="mt-1 font-display text-2xl font-extrabold text-ink-900">₹3,000</p>
        </Row>
        {['UPI', 'Debit card', 'Net banking'].map((m, i) => (
          <Row key={m} className={cn('flex items-center gap-3', i === 0 && 'border-brand-500 bg-brand-50')}>
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-white text-brand-700">
              <Icon name="IndianRupee" className="h-3.5 w-3.5" />
            </span>
            <span className="flex-1 text-[11px] font-medium text-ink-900">{m}</span>
            {i === 0 && <Icon name="CheckCircle2" className="h-4 w-4 text-brand-500" />}
          </Row>
        ))}
      </div>
    )
  }

  if (kind === 'collect') {
    return (
      <div className="space-y-3">
        <Row className="space-y-2">
          <div className="flex items-center gap-2">
            <Icon name="MapPin" className="h-3.5 w-3.5 text-brand-700" />
            <span className="text-[11px] font-bold text-ink-900">Sector 44 Hub</span>
          </div>
          <p className="text-[9.5px] text-neutral-500">Gurugram · 2.1 km away · open till 9 PM</p>
          <div className="h-16 rounded-lg bg-grid bg-grid-light bg-brand-50" />
        </Row>
        <Row className="flex items-center gap-3">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-500 text-white">
            <Icon name="Clock" className="h-3.5 w-3.5" />
          </span>
          <span className="flex-1 text-[11px] font-medium text-ink-900">Slot: today, 4:00 PM</span>
        </Row>
      </div>
    )
  }

  if (kind === 'earnings') {
    return (
      <div className="space-y-3">
        <Row className="text-center">
          <p className="text-[9.5px] uppercase tracking-wider text-neutral-500">Paid last night</p>
          <p className="mt-1 font-display text-2xl font-extrabold text-brand-700">₹1,340</p>
          <p className="text-[9.5px] text-neutral-500">38 orders · 92 km</p>
        </Row>
        <Row>
          <div className="flex items-end justify-between gap-1.5">
            {[42, 58, 35, 71, 64, 88, 76].map((h, i) => (
              <span key={i} className="flex-1 rounded-sm bg-brand-100" style={{ height: 44 }}>
                <span
                  className="block w-full rounded-sm bg-brand-500"
                  style={{ height: `${h}%`, marginTop: `${100 - h}%` }}
                />
              </span>
            ))}
          </div>
          <p className="mt-2 text-center text-[9px] text-neutral-500">Last 7 days</p>
        </Row>
      </div>
    )
  }

  // welcome
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 py-10 text-center">
      <span className="grid h-16 w-16 place-items-center rounded-2xl bg-brand-500 shadow-glow">
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="white" aria-hidden="true">
          <path d="M13.5 2 4 13.2h6.1L9.6 22 20 10.6h-6.4L13.5 2Z" />
        </svg>
      </span>
      <div>
        <p className="font-display text-sm font-extrabold text-ink-900">Zapp Rider</p>
        <p className="mt-1 text-[10px] text-neutral-500">Charge less. Earn more.</p>
      </div>
      <span className="rounded-full bg-brand-500 px-5 py-2 text-[11px] font-bold text-white">
        Get started
      </span>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

export default function GetStarted() {
  const [active, setActive] = useState(1)
  const step = APP_STEPS[active]
  const pct = Math.round(((active + 1) / APP_STEPS.length) * 100)

  return (
    <Section id="get-started" tone="mint">
      <SectionHeading
        eyebrow="Getting started"
        title="Seven steps from download to your first payout"
        lead="The whole thing happens in the app — no branch visit, no agent, no paperwork. Tap any step to see what it looks like."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-10">
        {/* ------------------------------------------------- phone ---- */}
        <Reveal from="right">
          <div className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-[2rem] bg-ink-900 p-6 sm:p-10">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-900/50 via-ink-900 to-ink-950" />
            <Spotlight size={380} opacity={0.2} />
            <div className="noise absolute inset-0" />

            {/* the device is a fixed width by design — stepped down one notch so
                it plus the panel padding still fits a 320px viewport */}
            <div className="relative w-[14rem] sm:w-[15rem]">
              {/* device */}
              <div className="rounded-[2.2rem] border-[9px] border-ink-700 bg-ink-700 shadow-lift">
                <div className="relative overflow-hidden rounded-[1.6rem] bg-neutral-50">
                  {/* app header */}
                  <div className="relative bg-brand-700 px-4 pb-3 pt-5">
                    <span className="absolute left-1/2 top-1.5 h-4 w-16 -translate-x-1/2 rounded-full bg-ink-700" />
                    <div className="mt-2 flex items-center gap-2">
                      <Icon name="ArrowLeft" className="h-3.5 w-3.5 text-white/80" />
                      <p className="text-[11px] font-bold text-white">{step.title}</p>
                    </div>
                  </div>

                  {/* screen body */}
                  <div className="min-h-[17rem] p-3.5">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={step.screen}
                        initial={{ opacity: 0, x: 14 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -14 }}
                        transition={{ duration: 0.3, ease: EASE }}
                      >
                        <Screen kind={step.screen} />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>

            <p className="relative mt-7 text-center font-display text-lg font-bold text-white">
              {step.title}
            </p>
            <p className="relative mt-1 text-center text-[13px] text-white/65">{step.sub}</p>
          </div>
        </Reveal>

        {/* -------------------------------------------------- steps ---- */}
        <Reveal from="left" delay={0.1}>
          <div className="flex h-full flex-col">
            {/* progress header */}
            <div className="flex items-center justify-between gap-4">
              <p className="font-display text-xl font-extrabold text-brand-700">
                Step {active + 1}/{APP_STEPS.length}
              </p>
              <span className="rounded-full bg-neutral-200/70 px-3.5 py-1.5 text-[12px] font-semibold text-neutral-600">
                {pct}% completed
              </span>
            </div>

            <div className="mt-3.5 h-2 overflow-hidden rounded-full bg-neutral-200">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-600"
                initial={false}
                animate={{ width: `${pct}%` }}
                transition={{ duration: 0.45, ease: EASE }}
              />
            </div>

            {/* step tiles */}
            <ul className="mt-6 grid flex-1 gap-3 sm:grid-cols-2">
              {APP_STEPS.map((s, i) => {
                const isActive = i === active
                const isDone = i < active

                // min-w-0 on the <li>: the sub-label below is `truncate`, and its
                // white-space:nowrap gives this grid item a min-content floor wider
                // than a 320px viewport. Clearing the automatic minimum lets the
                // track shrink so the label actually truncates.
                return (
                  <li key={s.title} className="min-w-0">
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-pressed={isActive}
                      className={cn(
                        'group flex w-full items-center gap-3.5 rounded-2xl border p-4 text-left transition-all duration-300',
                        isActive
                          ? 'border-brand-700 bg-brand-700 shadow-glow'
                          : 'border-neutral-200 bg-white hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-card',
                      )}
                    >
                      <span
                        className={cn(
                          'grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-colors',
                          isActive
                            ? 'bg-white/20 text-white'
                            : isDone
                              ? 'bg-brand-500 text-white'
                              : 'bg-brand-50 text-brand-700',
                        )}
                      >
                        <Icon
                          name={isDone && !isActive ? 'Check' : s.icon}
                          className="h-[18px] w-[18px]"
                        />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span
                          className={cn(
                            'block text-[14.5px] font-bold leading-tight',
                            isActive ? 'text-white' : 'text-ink-900',
                          )}
                        >
                          {s.title}
                        </span>
                        <span
                          className={cn(
                            'mt-0.5 block truncate text-[12px]',
                            isActive ? 'text-white/85' : 'text-neutral-500',
                          )}
                        >
                          {s.sub}
                        </span>
                      </span>

                      <span
                        className={cn(
                          'grid h-6 w-6 shrink-0 place-items-center rounded-md text-[11px] font-bold',
                          isActive ? 'bg-white/20 text-white' : 'bg-neutral-100 text-neutral-500',
                        )}
                      >
                        {i + 1}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>

            <div className="mt-6">
              <AppBadges light />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
