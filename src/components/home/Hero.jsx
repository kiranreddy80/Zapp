import { useEffect, useRef, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { VIDEO } from '@/data/media'
import { HERO_ROTATING } from '@/data/content'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import Counter from '@/components/ui/Counter'
import Magnetic from '@/components/ui/Magnetic'

const EASE = [0.22, 1, 0.36, 1]

const TRUST = [
  { icon: 'FileCheck', label: 'No licence required' },
  { icon: 'ShieldCheck', label: '₹5L accident cover' },
  { icon: 'CalendarClock', label: 'Zero lock-in' },
]

const STATS = [
  { value: 24000, suffix: '+', label: 'Riders on the road' },
  { value: 132, suffix: 'M+', label: 'Deliveries completed' },
  { value: 900, suffix: '+', label: 'Battery swap points' },
  { value: 12, suffix: '', label: 'Cities live' },
]

/** Cycles a phrase every 2.6s with a vertical wipe. */
function RotatingWord() {
  const [i, setI] = useState(0)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return
    const t = setInterval(() => setI((n) => (n + 1) % HERO_ROTATING.length), 2600)
    return () => clearInterval(t)
  }, [reduced])

  return (
    <span className="relative inline-flex h-[1.3em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={HERO_ROTATING[i]}
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-110%', opacity: 0 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="inline-block whitespace-nowrap text-brand-700"
        >
          {HERO_ROTATING[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default function Hero() {
  const reduced = useReducedMotion()
  const sectionRef = useRef(null)

  // The navbar theme is owned by MissionBanner, which now sits above this and
  // is the section the fixed bar actually overlays.

  // Card and copy drift apart as the hero scrolls away, which gives the section
  // depth without moving anything the reader is still reading.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 30, restDelta: 0.001 })
  const cardY = useTransform(smooth, [0, 1], [0, -70])
  const copyY = useTransform(smooth, [0, 1], [0, 40])

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#F6F8F7] pb-16 pt-32 sm:pt-36 lg:pb-20 lg:pt-40"
    >
      {/* backdrop: faint grid + a brand glow bleeding in from the right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-grid bg-grid-light opacity-70 mask-b"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-32 -z-10 h-[38rem] w-[38rem] rounded-full bg-brand-300/35 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 -z-10 h-[26rem] w-[26rem] rounded-full bg-volt-400/25 blur-[120px]"
      />

      {/* a delivery route drawing itself across the section */}
      {!reduced && (
        <svg
          aria-hidden="true"
          viewBox="0 0 1400 600"
          fill="none"
          className="pointer-events-none absolute inset-x-0 top-24 -z-10 h-[34rem] w-full"
        >
          <motion.path
            d="M-40 430 C 220 430, 260 250, 470 250 S 760 400, 980 330 S 1290 120, 1460 150"
            stroke="rgb(18 183 106 / .28)"
            strokeWidth="2"
            strokeDasharray="10 12"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.6, ease: 'easeInOut', delay: 0.5 }}
          />
        </svg>
      )}

      <div className="container relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_.98fr] lg:gap-16">
          {/* ------------------------------------------------ copy ---- */}
          <motion.div style={reduced ? undefined : { y: copyY }}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <span className="inline-flex items-center gap-2.5 rounded-full border border-brand-200 bg-white py-1.5 pl-1.5 pr-4 shadow-sm">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-700 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-70" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
                  </span>
                  Live
                </span>
                <span className="text-[13px] font-medium text-neutral-600">
                  Now operating in 12 Indian cities
                </span>
              </span>
            </motion.div>

            <h1 className="mt-8 font-display text-[2.75rem] font-extrabold leading-[1] tracking-[-0.03em] text-ink-900 sm:text-6xl lg:text-[4.4rem]">
              {['India’s ', 'delivery ', 'fleet, '].map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 26 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.1 + i * 0.08, ease: EASE }}
                  className="inline-block whitespace-pre"
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.34, ease: EASE }}
                className="relative inline-block"
              >
                <span className="relative z-10">fully electric.</span>
                {/* hand-drawn style underline sweeping in under the key phrase */}
                <motion.svg
                  aria-hidden="true"
                  viewBox="0 0 400 18"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1 left-0 z-0 h-3 w-full text-volt-400"
                >
                  <motion.path
                    d="M2 12 C 90 4, 180 16, 398 6"
                    stroke="currentColor"
                    strokeWidth="7"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.9, delay: 0.95, ease: 'easeOut' }}
                  />
                </motion.svg>
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-7 font-display text-2xl font-bold text-ink-900 sm:text-[1.75rem]"
            >
              <RotatingWord />
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-4 max-w-lg text-[17px] leading-relaxed text-neutral-600"
            >
              Rent an electric scooter or cargo loader with insurance, servicing and unlimited
              battery swaps included. One monthly amount, no fuel bills, no surprises.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Magnetic>
                <Button to="/deliver-and-earn" size="lg">
                  Become a rider
                </Button>
              </Magnetic>
              <Magnetic strength={7}>
                <Button
                  to="/ev-for-delivery"
                  variant="outline"
                  size="lg"
                  icon="Truck"
                  iconPosition="left"
                >
                  Fleet for business
                </Button>
              </Magnetic>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3"
            >
              {TRUST.map((t) => (
                <li key={t.label} className="flex items-center gap-2 text-sm text-neutral-600">
                  <Icon name={t.icon} className="h-4 w-4 text-brand-700" />
                  {t.label}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* ------------------------------------------- video card ---- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: EASE }}
            style={reduced ? undefined : { y: cardY }}
            className="relative"
          >
            {/* soft coloured shadow under the card */}
            <div
              aria-hidden="true"
              className="absolute inset-x-6 bottom-0 top-10 -z-10 rounded-[2.5rem] bg-brand-500/25 blur-3xl"
            />

            <div className="relative aspect-[4/4.4] overflow-hidden rounded-[2.5rem] border border-white/60 bg-ink-900 shadow-lift sm:aspect-[4/3.6] lg:aspect-[4/4.6]">
              {reduced ? (
                <img src={VIDEO.heroPoster} alt="" className="h-full w-full object-cover" />
              ) : (
                <video
                  className="h-full w-full object-cover"
                  poster={VIDEO.heroPoster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                >
                  {/* Phones get the 1.7 MB cut instead of the 10.7 MB one. */}
                  <source src={VIDEO.heroSd} type="video/mp4" media="(max-width: 640px)" />
                  <source src={VIDEO.hero} type="video/mp4" />
                </video>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent" />

              {/* live chip */}
              <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-ink-950/55 px-3.5 py-2 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-volt-400 opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-volt-400" />
                </span>
                <span className="text-[12px] font-semibold text-white">Delhi NCR · live now</span>
              </div>

              {/* in-card earnings readout */}
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-ink-950/60 p-5 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <p className="text-[10.5px] font-bold uppercase tracking-[.16em] text-volt-400">
                    Rider earnings today
                  </p>
                  <Icon name="TrendingUp" className="h-4 w-4 text-volt-400" />
                </div>
                <p className="mt-2 font-display text-3xl font-extrabold text-white">₹1,340</p>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/15">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '76%' }}
                    transition={{ duration: 1.4, delay: 1.2, ease: EASE }}
                    className="h-full rounded-full bg-gradient-to-r from-brand-400 to-volt-500"
                  />
                </div>
                <p className="mt-2 text-[11px] text-white/65">38 orders · 92 km · zero fuel spent</p>
              </div>
            </div>

            {/* savings badge overlapping the card edge */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
              className="absolute -left-3 top-16 hidden rounded-2xl border border-neutral-200 bg-white p-5 shadow-lift sm:block lg:-left-8"
            >
              <p className="text-[10.5px] font-bold uppercase tracking-[.14em] text-neutral-500">
                Saved per month
              </p>
              <p className="mt-1.5 font-display text-3xl font-extrabold text-brand-700">
                ₹<Counter value={9400} />
              </p>
              <p className="mt-1 text-[12px] text-neutral-600">vs a petrol two-wheeler</p>
              <a
                href="#savings"
                className="mt-3 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-brand-700"
              >
                Run your numbers
                <Icon name="ArrowDown" className="h-3.5 w-3.5" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* ------------------------------------------- stat panel ---- */}
        <motion.dl
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1, ease: EASE }}
          className="relative mt-16 grid gap-px overflow-hidden rounded-[2rem] bg-white/60 shadow-card sm:grid-cols-2 lg:grid-cols-4"
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="group bg-white px-7 py-7 transition-colors hover:bg-brand-50"
            >
              <dd className="font-display text-3xl font-extrabold text-ink-900 sm:text-[2rem]">
                <Counter value={s.value} />
                <span className="text-brand-700">{s.suffix}</span>
              </dd>
              <dt className="mt-1.5 text-[13.5px] text-neutral-600">{s.label}</dt>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
