import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

const FILL_MS = 1250
const HOLD_MS = 220

/**
 * Play the intro on every page load, including refreshes.
 *
 * Set to false to show it once per browser instead (see REPLAY_AFTER_MS). It
 * only ever runs on a full document load — client-side route changes do not
 * remount this, so moving between pages never triggers it.
 */
const SHOW_ON_EVERY_LOAD = true

const SEEN_KEY = 'sgd:intro-seen'
const REPLAY_AFTER_MS = 12 * 60 * 60 * 1000 // 12 hours, when gating is on

function shouldPlay() {
  if (typeof window === 'undefined') return false
  // A deep link expects to land at its anchor, not watch a curtain first.
  if (window.location.hash) return false

  // Checked here rather than via the hook so the overlay never renders at all
  // for these users — deciding in an effect let it flash for a frame first.
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return false

  if (SHOW_ON_EVERY_LOAD) return true

  try {
    const last = Number(localStorage.getItem(SEEN_KEY))
    if (!last) return true
    return Date.now() - last > REPLAY_AFTER_MS
  } catch {
    // Private mode / storage blocked — skip rather than replay endlessly.
    return false
  }
}

/**
 * First-visit brand intro.
 *
 * Shown once per browser session, not on every navigation — an intro that
 * replays each time stops being an intro and becomes an obstacle. It is also
 * skipped entirely under reduced-motion, and for anyone arriving with a hash
 * (a deep link expects to land at its anchor, not watch a curtain).
 *
 * The overlay never blocks: it is removed from the tree once the exit
 * animation finishes, and it is aria-hidden throughout so it does not
 * interrupt a screen reader mid-announcement.
 */
export default function PageLoader() {
  const reduced = useReducedMotion()

  // Decide synchronously on first render, so the overlay never flashes for
  // visitors who should not see it.
  const [visible, setVisible] = useState(shouldPlay)

  useEffect(() => {
    if (!visible) return

    if (reduced) {
      setVisible(false)
      return
    }

    // Hold the page still while the curtain is up.
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'

    const t = setTimeout(() => setVisible(false), FILL_MS + HOLD_MS)

    return () => {
      clearTimeout(t)
      document.body.style.overflow = overflow
    }
  }, [visible, reduced])

  useEffect(() => {
    if (visible || SHOW_ON_EVERY_LOAD) return
    try {
      localStorage.setItem(SEEN_KEY, String(Date.now()))
    } catch {
      /* storage unavailable — nothing to remember */
    }
  }, [visible])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          aria-hidden="true"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.75, ease: EASE }}
          className="fixed inset-0 z-[100] grid place-items-center bg-ink-950"
        >
          <div className="noise absolute inset-0" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/12 blur-[130px]"
          />

          <div className="relative flex flex-col items-center">
            {/* badge */}
            <motion.svg
              viewBox="0 0 48 48"
              className="h-20 w-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <circle cx="24" cy="24" r="22.5" fill="#06120C" />
              <circle cx="24" cy="24" r="22.5" fill="none" stroke="#12B76A" strokeWidth="3" />
              <motion.path
                d="M27 9 15.5 26.5h7.2L21 39 33.5 21.5h-7.7L27 9Z"
                fill="#BFF700"
                stroke="#06120C"
                strokeWidth="1.4"
                strokeLinejoin="round"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.18 }}
              />
              <g fill="#12B76A">
                <circle cx="16" cy="36.5" r="3.1" />
                <circle cx="32" cy="36.5" r="3.1" />
                <path d="M13.5 34.2h5.2l3.6-4.1h6.6l2.4 4.1h2.4v1.9h-3.6l-1.9-3.2h-4.9l-3.4 3.9h-6.4v-2.6Z" />
              </g>
            </motion.svg>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-5 font-display text-2xl font-extrabold uppercase leading-none tracking-tight"
            >
              {/* the curtain is always dark, so this is the light treatment:
                  white SGD, bright green Electric — matching <Logo light /> */}
              <span className="text-white">SGD</span>{' '}
              <span className="text-brand-500">Electric</span>
            </motion.p>

            {/* charge bar */}
            <div className="mt-7 h-1 w-52 overflow-hidden rounded-full bg-white/12">
              <motion.div
                className="current-flow relative h-full rounded-full bg-gradient-to-r from-brand-400 to-volt-500"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: FILL_MS / 1000, ease: [0.65, 0, 0.35, 1] }}
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-4 text-[11px] uppercase tracking-[.24em] text-white/40"
            >
              Charging up
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
