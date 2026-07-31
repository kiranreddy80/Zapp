import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import Section from '@/components/ui/Section'
import Img from '@/components/ui/Img'
import Icon from '@/components/ui/Icon'
import SplitText from '@/components/ui/SplitText'
import { CEO_MESSAGE } from '@/data/content'

const EASE = [0.22, 1, 0.36, 1]

/*
 * A stylised signature rather than a font. Real letterforms drawn as a single
 * stroke and revealed with pathLength read as a hand signing, which a typeface
 * cannot fake — and it gives the letter a proper close.
 */
const SIGNATURE = [
  // one connected stroke for the forename — separate letter shapes came out
  // looking like printed capitals rather than handwriting
  'M4 58 C16 20 26 12 32 24 C37 34 31 48 24 49 C16 50 19 34 35 30 C47 27 55 34 57 45 C59 53 65 55 71 49 C77 43 75 30 69 30 C63 30 61 41 67 47 C74 53 84 48 86 37',
  'M98 56 C104 26 109 19 115 19 C123 19 121 31 111 35 C103 38 101 37 101 37 C111 37 119 43 121 56',
  'M139 35 C129 35 125 47 132 53 C139 59 147 51 145 38',
  'M161 37 C153 37 149 49 157 53 C165 57 171 47 165 39 C161 34 155 35 153 39',
]

export default function CeoMessage() {
  const reduced = useReducedMotion()
  const m = CEO_MESSAGE
  const sectionRef = useRef(null)

  // gentle counter-scroll on the portrait, so the two columns do not move as one
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 26 })
  const portraitY = useTransform(smooth, [0, 1], [34, -34])

  const rise = (delay = 0) => ({
    initial: reduced ? false : { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.7, delay, ease: EASE },
  })

  return (
    <Section id="ceo" tone="light" className="relative isolate overflow-hidden">
      {/* ---- backdrop ---- */}
      {/* an oversized quotation glyph, cropped by the section edge so it reads as
          texture rather than a floating character */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-6 -top-16 select-none font-display text-[22rem] font-extrabold leading-none text-brand-50 sm:-left-4 sm:text-[30rem]"
      >
        &ldquo;
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-[34rem] w-[34rem] rounded-full bg-brand-100/35 blur-3xl"
      />
      <span aria-hidden="true" className="noise pointer-events-none absolute inset-0 opacity-[.5]" />

      <div
        ref={sectionRef}
        className="relative mx-auto grid max-w-5xl gap-x-16 gap-y-8 lg:grid-cols-[minmax(0,.82fr)_minmax(0,1.18fr)]"
      >
        {/* Explicit grid placement rather than source order: on mobile the eyebrow
            must come first — otherwise you meet the man before being told what the
            section is — while on desktop it belongs atop the text column. */}
        <motion.div
          {...rise(0.05)}
          className="flex items-center gap-3 lg:col-start-2 lg:row-start-1"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-600" />
          </span>
          <span className="h-px w-7 bg-brand-700/60" />
          <p className="font-display text-[13px] font-bold uppercase tracking-[.22em] text-ink-900/60">
            {m.eyebrow}
          </p>
        </motion.div>

        {/* ---- portrait ---- */}
        <motion.figure
          {...rise()}
          // sticky on desktop: the letter column is far taller, so the portrait
          // travels with the reader instead of leaving a hole below itself
          className="relative mx-auto w-full max-w-[21rem] lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:sticky lg:top-28 lg:self-start"
        >
          <motion.div style={reduced ? undefined : { y: portraitY }} className="relative">
            {/* A continuous gradient border, not the page's `current-ring`: that
                one is a rotating conic sweep with transparent gaps, which around
                a photo reads as a half-drawn frame rather than a deliberate one. */}
            <div className="rounded-[1.9rem] bg-gradient-to-br from-brand-400 via-brand-600 to-volt-500 p-[3px] shadow-lift">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.72rem] bg-neutral-100">
                <Img
                  src={m.photo}
                  alt={`${m.name}, ${m.role}`}
                  wrapperClassName="absolute inset-0"
                  className="object-cover"
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/10 to-transparent" />

                {/* sits inside the frame — as an outside chip it was wider than
                    the photo and hung off the edge */}
                <motion.p
                  {...rise(0.32)}
                  className="absolute inset-x-3 bottom-3 rounded-xl bg-white/12 px-3 py-2 text-center font-display text-[11px] font-bold uppercase tracking-[.14em] text-white backdrop-blur-md"
                >
                  {m.since}
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Company vitals. The column was a photo and then nothing; these give
              it a reason to be as tall as the letter, and they cross-link into
              the leadership page rather than dead-ending. */}
          <figcaption className="mt-7">
            <dl className="divide-y divide-ink-900/[.07] overflow-hidden rounded-2xl bg-brand-50/70 px-4">
              {m.vitals.map((v, i) => (
                <motion.div
                  key={v.label}
                  {...rise(0.35 + i * 0.09)}
                  className="flex items-baseline justify-between gap-4 py-3"
                >
                  <dt className="text-[13px] text-ink-900/60">{v.label}</dt>
                  <dd className="font-display text-[17px] font-extrabold tracking-tight text-brand-800">
                    {v.value}
                  </dd>
                </motion.div>
              ))}
            </dl>

            <motion.div {...rise(0.35 + m.vitals.length * 0.09)}>
              <Link
                to="/about"
                className="group mt-4 inline-flex items-center gap-2 font-display text-[13.5px] font-bold text-ink-900 transition-colors hover:text-brand-700"
              >
                Meet the leadership team
                <Icon
                  name="ArrowRight"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </figcaption>
        </motion.figure>

        {/* ---- letter ---- */}
        <div className="lg:col-start-2 lg:row-start-2">
          <h3 className="font-display text-[clamp(1.45rem,2.6vw,2.05rem)] font-extrabold leading-[1.28] tracking-tight">
            <SplitText text={m.lead[0]} className="text-ink-900" delay={0.12} />{' '}
            <SplitText text={m.lead[1]} className="text-brand-600" delay={0.45} />
          </h3>

          <div className="mt-7 space-y-5">
            {m.body.map((para, i) => (
              <motion.p
                key={i}
                {...rise(0.9 + i * 0.1)}
                className={
                  i === 0
                    ? 'dropcap text-[16.5px] leading-[1.75] text-ink-900/80 [&::first-letter]:text-brand-700'
                    : 'text-[16.5px] leading-[1.75] text-ink-900/75'
                }
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* ---- signature ---- */}
          <motion.div
            {...rise(0.9 + m.body.length * 0.1)}
            className="mt-9 border-t border-ink-900/10 pt-7"
          >
            <svg
              viewBox="0 0 190 74"
              className="h-[4.2rem] w-auto overflow-visible"
              role="img"
              aria-label={`Signed, ${m.name}`}
            >
              <g fill="none" stroke="#027A48" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
                {SIGNATURE.map((d, i) => (
                  <motion.path
                    key={i}
                    d={d}
                    initial={reduced ? false : { pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{
                      pathLength: { duration: 0.55, delay: 1.35 + i * 0.16, ease: 'easeInOut' },
                      opacity: { duration: 0.01, delay: 1.35 + i * 0.16 },
                    }}
                  />
                ))}
                {/* closing flourish */}
                <motion.path
                  d="M2 68 C50 80 128 76 186 61"
                  strokeWidth="3"
                  initial={reduced ? false : { pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.55 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.7, delay: 1.35 + SIGNATURE.length * 0.16, ease: EASE }}
                />
              </g>
            </svg>

            <p className="mt-3 font-display text-[15px] font-extrabold tracking-tight text-ink-900">
              {m.name}
            </p>
            <p className="mt-0.5 text-[13.5px] text-neutral-600">{m.role}</p>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
