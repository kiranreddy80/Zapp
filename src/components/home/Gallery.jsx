import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import Section, { SectionHeading } from '@/components/ui/Section'
import Img from '@/components/ui/Img'
import Icon from '@/components/ui/Icon'
import Lightbox from '@/components/gallery/Lightbox'
import { useGallery } from '@/context/Content'
import cn from '@/lib/cn'

const EASE = [0.22, 1, 0.36, 1]

/**
 * Homepage gallery — a single horizontal rail, with the full set living on its
 * own page behind "View all".
 *
 * The rail is a real scroll container with snap points rather than a carousel:
 * it works with a trackpad, a touch swipe, the scrollbar and the keyboard for
 * free, and degrades to a plain scrollable row if JavaScript never runs.
 */
export default function Gallery() {
  const GALLERY = useGallery()
  const railRef = useRef(null)
  const [open, setOpen] = useState(null)
  const [edge, setEdge] = useState({ start: true, end: false })
  const reduced = useReducedMotion()

  // track which end we are against, so a dead arrow is never offered
  const measure = useCallback(() => {
    const el = railRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setEdge({ start: el.scrollLeft <= 8, end: el.scrollLeft >= max - 8 })
  }, [])

  useEffect(() => {
    const el = railRef.current
    if (!el) return
    measure()
    el.addEventListener('scroll', measure, { passive: true })
    window.addEventListener('resize', measure)
    return () => {
      el.removeEventListener('scroll', measure)
      window.removeEventListener('resize', measure)
    }
  }, [measure])

  const scrollBy = (dir) => {
    const el = railRef.current
    if (!el) return
    // a card and a half, so the next card is never left half-cut
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: reduced ? 'auto' : 'smooth' })
  }

  return (
    <Section id="gallery" tone="brand" className="overflow-hidden">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          align="left"
          eyebrow="Life at SGD"
          title="The part that isn’t on the road"
          lead="Launches, festivals and an inter-hub league nobody takes lightly."
          className="sm:max-w-xl"
        />

        <div className="flex shrink-0 items-center gap-2">
          {/* arrows sit beside the link rather than over the photos, where they
              would cover the very thing they are helping you look at */}
          {[
            { d: -1, icon: 'ArrowLeft', label: 'Scroll left', off: edge.start },
            { d: 1, icon: 'ArrowRight', label: 'Scroll right', off: edge.end },
          ].map((b) => (
            <button
              key={b.label}
              type="button"
              onClick={() => scrollBy(b.d)}
              aria-label={b.label}
              disabled={b.off}
              className={cn(
                'hidden h-11 w-11 place-items-center rounded-full border transition-all duration-300 sm:grid',
                b.off
                  ? 'cursor-default border-ink-900/10 text-ink-900/20'
                  : 'border-ink-900/15 text-ink-900 hover:border-brand-500 hover:text-brand-700',
              )}
            >
              <Icon name={b.icon} className="h-4.5 w-4.5" />
            </button>
          ))}

          <Link
            to="/gallery"
            className="group inline-flex items-center gap-2 rounded-full bg-brand-700 px-5 py-3 font-display text-[13px] font-bold text-white shadow-glow transition-colors duration-300 hover:bg-brand-800"
          >
            View all
            <span className="tabular-nums opacity-70">{GALLERY.length}</span>
            <Icon
              name="ArrowRight"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>

      {/* ---- rail ---- */}
      <div className="relative mt-10">
        <div
          ref={railRef}
          className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-5 pb-2 lg:-mx-8 lg:px-8"
        >
          {GALLERY.map((item, i) => (
            <motion.button
              key={item.caption}
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`Open ${item.caption}`}
              className="group w-[72vw] shrink-0 snap-start text-left outline-none focus-visible:ring-4 focus-visible:ring-brand-500/40 sm:w-[42vw] lg:w-[26rem]"
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: Math.min(i, 5) * 0.06, ease: EASE }}
            >
              <span className="relative block aspect-[4/3] overflow-hidden rounded-2xl bg-brand-100">
                <Img
                  src={item.src}
                  alt={item.alt}
                  wrapperClassName="absolute inset-0"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                  skeletonClassName="bg-brand-100"
                />
                <span className="pointer-events-none absolute right-2.5 top-2.5 grid h-8 w-8 place-items-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
                  <Icon name="Maximize2" className="h-3.5 w-3.5" />
                </span>
              </span>

              <span className="mt-3 block">
                <span className="block font-display text-[10.5px] font-bold uppercase tracking-[.16em] text-brand-700">
                  {item.tag}
                </span>
                <span className="mt-1 block text-[15px] font-semibold leading-snug text-ink-900 transition-colors duration-300 group-hover:text-brand-700">
                  {item.caption}
                </span>
              </span>
            </motion.button>
          ))}

          {/* tail card into the full set, so the rail ends somewhere */}
          <Link
            to="/gallery"
            className="group flex w-[72vw] shrink-0 snap-start flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-brand-700/30 text-center transition-colors duration-300 hover:border-brand-700/60 sm:w-[42vw] lg:w-[20rem]"
          >
            <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-700 text-white transition-transform duration-300 group-hover:scale-105">
              <Icon name="ArrowRight" className="h-5 w-5" />
            </span>
            <span className="font-display text-[15px] font-extrabold text-ink-900">
              See all {GALLERY.length} photos
            </span>
            <span className="text-[13px] text-ink-900/55">Celebrations, festivals, games</span>
          </Link>
        </div>
      </div>

      <Lightbox items={GALLERY} index={open} onClose={() => setOpen(null)} onIndexChange={setOpen} />
    </Section>
  )
}
