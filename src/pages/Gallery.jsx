import { useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Seo from '@/components/ui/Seo'
import Section from '@/components/ui/Section'
import Img from '@/components/ui/Img'
import Icon from '@/components/ui/Icon'
import Lightbox from '@/components/gallery/Lightbox'
import { GALLERY_TAGS } from '@/data/content'
import { useGallery } from '@/context/Content'
import cn from '@/lib/cn'

const EASE = [0.22, 1, 0.36, 1]
const ALL = 'All'

/**
 * The full gallery, reached from "View all" on the homepage rail.
 *
 * Masonry rather than a fixed grid so every photo keeps its own aspect ratio —
 * `ratio` is the measured natural size, set on the frame so the space is
 * reserved before the image lands and the column never jumps.
 */
export default function GalleryPage() {
  const GALLERY = useGallery()
  const [tag, setTag] = useState(ALL)
  const [open, setOpen] = useState(null)
  const reduced = useReducedMotion()

  const tags = useMemo(() => [ALL, ...GALLERY_TAGS], [])
  const shown = useMemo(
    () => (tag === ALL ? GALLERY : GALLERY.filter((g) => g.tag === tag)),
    [tag, GALLERY],
  )

  const pick = (next) => {
    setOpen(null) // an index into the old filter would point at the wrong photo
    setTag(next)
  }

  return (
    <>
      <Seo
        title="Gallery"
        description="Life at SGD Electric — launches, festivals, the inter-hub league and the floor where every handover happens."
        image={GALLERY[0]?.src}
        path="/gallery"
      />

      <Section tone="brand" pad="lg">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-3xl"
        >
          <p className="font-display text-[13px] font-bold uppercase tracking-[.22em] text-brand-700">
            Life at SGD
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.4rem,6vw,4rem)] font-extrabold leading-[1.02] tracking-tight text-ink-900">
            The part that isn’t on the road
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-ink-900/70">
            Launches worth cheering about, an inter-hub cricket league nobody takes lightly, and
            every festival kept properly — across all twelve cities.
          </p>
        </motion.div>

        {/* ---- filters ----
             An index line between two hairlines rather than a row of outlined
             pills, which read as generic UI chrome against an editorial layout.
             The rule slides between entries and each carries its own count. */}
        <div className="mt-10 border-y border-ink-900/12">
          <div className="flex flex-wrap items-center gap-x-7 gap-y-1 py-1">
            {tags.map((t) => {
              const on = t === tag
              const n = t === ALL ? GALLERY.length : GALLERY.filter((g) => g.tag === t).length
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => pick(t)}
                  aria-pressed={on}
                  className={cn(
                    'relative py-3.5 font-display text-[12.5px] font-bold uppercase tracking-[.16em] outline-none transition-colors duration-300',
                    'focus-visible:text-brand-700',
                    on ? 'text-brand-700' : 'text-ink-900/45 hover:text-ink-900',
                  )}
                >
                  {t}
                  <sup className="ml-1 align-super text-[9px] font-semibold tabular-nums opacity-60">
                    {n}
                  </sup>
                  {on && (
                    <motion.span
                      layoutId="gallery-underline"
                      className="absolute inset-x-0 -bottom-px h-[2px] rounded-full bg-brand-600"
                      transition={{ duration: 0.4, ease: EASE }}
                    />
                  )}
                </button>
              )
            })}

            <span className="ml-auto hidden font-display text-[11px] font-bold uppercase tracking-[.18em] text-ink-900/35 sm:block">
              {shown.length} shown
            </span>
          </div>
        </div>

        {/* ---- masonry ----
             CSS multi-column, not a grid: photos keep their own proportions and
             the columns pack to varied heights. Framer's `layout` is deliberately
             not used — it cannot track elements CSS reflows between columns — so
             the set is keyed on the filter and fades instead. */}
        <motion.div
          key={tag}
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-10 gap-4 [column-count:2] lg:[column-count:3] xl:[column-count:4]"
        >
          {shown.map((item, i) => (
            <motion.button
              key={item.caption}
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`Open ${item.caption}`}
              className="group mb-4 block w-full break-inside-avoid text-left outline-none focus-visible:ring-4 focus-visible:ring-brand-500/40"
              initial={reduced ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: Math.min(i, 7) * 0.05, ease: EASE }}
            >
              <span
                className="relative block overflow-hidden rounded-2xl bg-brand-100"
                style={{ aspectRatio: item.ratio }}
              >
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

              {/* caption under the photo, magazine-style, so no scrim covers it */}
              <span className="mt-2.5 block px-0.5">
                <span className="block font-display text-[10.5px] font-bold uppercase tracking-[.16em] text-brand-700">
                  {item.tag}
                </span>
                <span className="mt-1 block text-[14px] font-semibold leading-snug text-ink-900 transition-colors duration-300 group-hover:text-brand-700">
                  {item.caption}
                </span>
              </span>
            </motion.button>
          ))}
        </motion.div>
      </Section>

      <Lightbox items={shown} index={open} onClose={() => setOpen(null)} onIndexChange={setOpen} />
    </>
  )
}
