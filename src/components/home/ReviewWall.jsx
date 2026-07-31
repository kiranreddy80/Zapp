import { useMemo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Icon from '@/components/ui/Icon'
import Counter from '@/components/ui/Counter'
import { REVIEWS, REVIEW_SUMMARY } from '@/data/content'
import cn from '@/lib/cn'

const EASE = [0.22, 1, 0.36, 1]

/* Each column gets its own speed and direction. Slower on the outside, so the
   eye settles on the middle of the wall rather than chasing the edges. */
const COLUMNS = [
  { dur: '52s', down: false },
  { dur: '41s', down: true },
  { dur: '58s', down: false },
]

/** Initials rather than a photo — the rider stories section above already uses
 *  faces, and repeating them here would read as the same six people twice. */
function Initials({ name }) {
  const letters = name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
  return (
    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-500/15 font-display text-[12.5px] font-extrabold text-brand-300 ring-1 ring-inset ring-brand-400/25">
      {letters}
    </span>
  )
}

function Stars({ n }) {
  return (
    <span className="flex gap-0.5" aria-label={`${n} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon
          key={i}
          name="Star"
          className={cn('h-3.5 w-3.5', i < n ? 'fill-volt-400 text-volt-400' : 'text-white/20')}
        />
      ))}
    </span>
  )
}

function Card({ review }) {
  return (
    <figure className="group/card rounded-2xl border border-white/10 bg-white/[.04] p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 hover:border-brand-400/40 hover:bg-white/[.07]">
      <Stars n={review.stars} />
      <blockquote className="mt-3 text-[14.5px] leading-relaxed text-white/85">
        “{review.text}”
      </blockquote>
      <figcaption className="mt-4 flex items-center gap-3 border-t border-white/10 pt-4">
        <Initials name={review.name} />
        <span className="min-w-0">
          <span className="block truncate font-display text-[13.5px] font-bold text-white">
            {review.name}
          </span>
          <span className="block truncate text-[12px] text-white/50">{review.city}</span>
        </span>
      </figcaption>
    </figure>
  )
}

export default function ReviewWall() {
  const reduced = useReducedMotion()

  // deal the reviews across the columns so each holds a different set
  const columns = useMemo(() => {
    const out = COLUMNS.map(() => [])
    REVIEWS.forEach((r, i) => out[i % COLUMNS.length].push(r))
    return out
  }, [])

  return (
    <Section id="reviews" tone="deep" className="relative isolate overflow-hidden">
      {/* brand glow behind the wall */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[38rem] w-[38rem] rounded-full bg-brand-600/20 blur-[120px]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-52 bottom-0 h-[32rem] w-[32rem] rounded-full bg-volt-500/10 blur-[120px]"
      />

      <div className="relative grid gap-12 lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)] lg:gap-16">
        {/* ---- the score ---- */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-volt-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-volt-400" />
              </span>
              <p className="font-display text-[13px] font-bold uppercase tracking-[.22em] text-white/55">
                Rider reviews
              </p>
            </div>

            <h2 className="mt-5 font-display text-[clamp(2.1rem,4.4vw,3.1rem)] font-extrabold leading-[1.06] tracking-tight text-white">
              Twenty-four thousand riders.
              <span className="block text-brand-400">Not a marketing line.</span>
            </h2>

            <div className="mt-9 flex items-end gap-5">
              <span className="font-display text-[4.2rem] font-extrabold leading-none tracking-tight text-white">
                <Counter value={REVIEW_SUMMARY.score} decimals={1} />
              </span>
              <span className="pb-2">
                <Stars n={5} />
                <span className="mt-2 block text-[13px] text-white/55">
                  out of {REVIEW_SUMMARY.outOf} · <Counter value={REVIEW_SUMMARY.count} />
                  {' reviews'}
                </span>
              </span>
            </div>

            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/60">
              {REVIEW_SUMMARY.note}. Hover the wall to stop it and read one properly.
            </p>
          </motion.div>
        </div>

        {/* ---- the wall ---- */}
        <div className="review-wall review-mask relative h-[30rem] overflow-hidden sm:h-[34rem]">
          <div className="grid h-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {columns.map((col, i) => (
              <div
                key={i}
                className={cn(
                  // the third column only appears once there is room for it
                  i === 1 && 'hidden sm:block',
                  i === 2 && 'hidden lg:block',
                )}
              >
                <div
                  className={cn('review-track space-y-4', COLUMNS[i].down && 'review-track--down')}
                  style={{ '--review-dur': COLUMNS[i].dur }}
                >
                  {/* rendered twice: the track travels exactly -50%, so the
                      second copy is what makes the loop seamless */}
                  {[...col, ...col].map((r, j) => (
                    <Card key={`${r.name}-${j}`} review={r} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
