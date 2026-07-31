import { useCallback, useEffect } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Img from '@/components/ui/Img'
import Icon from '@/components/ui/Icon'
import cn from '@/lib/cn'

const EASE = [0.22, 1, 0.36, 1]

/**
 * Full-screen photo viewer, shared by the homepage rail and the gallery page.
 *
 * `index` is an index into `items`, so a caller that filters its list passes the
 * filtered array and the arrows stay inside it. `null` closes.
 */
export default function Lightbox({ items, index, onClose, onIndexChange }) {
  const reduced = useReducedMotion()
  const open = index !== null && index !== undefined
  const active = open ? items[index] : null

  const step = useCallback(
    (d) => onIndexChange((index + d + items.length) % items.length),
    [index, items.length, onIndexChange],
  )

  // keyboard control, and hold the page still behind the overlay
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') step(1)
      else if (e.key === 'ArrowLeft') step(-1)
    }
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = overflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose, step])

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-ink-950/92 p-4 backdrop-blur-sm sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${active.tag} — ${active.caption}`}
        >
          <motion.figure
            className="relative max-h-full w-full max-w-4xl"
            initial={reduced ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduced ? undefined : { opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.3, ease: EASE }}
            // clicks inside must not fall through to the backdrop's close
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="relative overflow-hidden rounded-2xl bg-ink-900"
              style={{ aspectRatio: active.ratio }}
            >
              <Img
                src={active.src}
                alt={active.alt}
                wrapperClassName="absolute inset-0"
                className="object-cover"
                skeletonClassName="bg-ink-800"
              />
            </div>

            <figcaption className="mt-4 flex items-center justify-between gap-4">
              <span>
                <span className="block font-display text-[11px] font-bold uppercase tracking-[.16em] text-volt-400">
                  {active.tag}
                </span>
                <span className="mt-1 block font-display text-lg font-extrabold text-white">
                  {active.caption}
                </span>
              </span>
              <span className="shrink-0 font-display text-[13px] font-semibold tabular-nums text-white/50">
                {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
              </span>
            </figcaption>

            {items.length > 1 &&
              [
                { d: -1, icon: 'ArrowLeft', label: 'Previous image', pos: 'left-2 sm:-left-16' },
                { d: 1, icon: 'ArrowRight', label: 'Next image', pos: 'right-2 sm:-right-16' },
              ].map((b) => (
                <button
                  key={b.label}
                  type="button"
                  onClick={() => step(b.d)}
                  aria-label={b.label}
                  className={cn(
                    'absolute top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/12 text-white backdrop-blur-md transition-colors hover:bg-white/25',
                    b.pos,
                  )}
                >
                  <Icon name={b.icon} className="h-5 w-5" />
                </button>
              ))}
          </motion.figure>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close gallery"
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/12 text-white backdrop-blur-md transition-colors hover:bg-white/25 sm:right-8 sm:top-8"
          >
            <Icon name="X" className="h-5 w-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
