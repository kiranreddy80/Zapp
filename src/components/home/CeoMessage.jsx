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
 * A stylised signature rather than a font: real letterforms drawn as strokes
 * and revealed with pathLength read as a hand signing, which a typeface cannot
 * fake.
 *
 * Redrawn when the name changed — the previous strokes read as "Rao", which
 * would have been a different person's signature under Barupati Srikanth's
 * letter. A capital B leading into a single running stroke, the way a signed
 * name usually goes: legible at the start, a flourish after.
 */
const SIGNATURE = [
  // B
  'M10 56 C13 38 16 22 18 14 C26 12 36 14 35 23 C34 31 25 33 19 33 C28 32 38 35 37 45 C36 54 24 57 15 55',
  // running stroke through the rest of the name
  'M48 50 C52 30 56 22 61 22 C67 22 64 34 55 38 C48 41 46 40 46 40 C56 40 63 45 65 55 C67 62 74 63 80 56 C86 49 83 36 77 37 C71 38 70 49 77 54 C85 59 95 53 97 41',
  'M108 52 C112 34 116 26 121 26',
  'M130 40 C122 40 118 50 125 55 C132 60 140 52 138 40',
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
                {/* a light scrim only, now the caption has gone — it keeps the
                    photo sitting into the frame rather than floating in it */}
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/35 via-transparent to-transparent" />
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
              viewBox="0 0 155 72"
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
                  d="M4 66 C44 76 106 73 150 60"
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
