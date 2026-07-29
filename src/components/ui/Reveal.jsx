import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import cn from '@/lib/cn'

const OFFSETS = {
  up: { y: 34, x: 0 },
  down: { y: -34, x: 0 },
  left: { x: 44, y: 0 },
  right: { x: -44, y: 0 },
  none: { x: 0, y: 0 },
}

/*
 * The container caps at 1320px with 32px of padding, so content sits 32px from
 * its edge. Only once the viewport exceeds the container does outer margin
 * appear to absorb a 44px slide plus a few px of bleed from rotated icons:
 * 1400px leaves 40px of margin, which clears it. Anything narrower — including
 * 1280px laptops, where the container fills the screen — reveals vertically.
 */
const WIDE = '(min-width: 1400px)'

/**
 * Whether a horizontal entrance is safe at this viewport width.
 *
 * A `left` reveal parks its content 44px to the right until it scrolls into
 * view. On a phone the gutter is far narrower than that, so anything already
 * flush with the container edge is pushed past the viewport — and because every
 * not-yet-revealed section holds that offset, the document stays wider than the
 * screen and the whole page scrolls sideways. Below `sm` the slide is barely
 * perceptible anyway, so horizontal entrances fall back to a vertical one.
 */
function useWideEnoughForSlide() {
  const [wide, setWide] = useState(() => window.matchMedia?.(WIDE).matches ?? true)

  useEffect(() => {
    const mq = window.matchMedia(WIDE)
    const onChange = (e) => setWide(e.matches)
    mq.addEventListener('change', onChange)
    setWide(mq.matches)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return wide
}

/** Resolves a direction to an offset, swapping sideways travel for vertical
 *  travel when the viewport is too narrow to absorb it. */
function useOffset(from) {
  const wide = useWideEnoughForSlide()
  const base = OFFSETS[from] ?? OFFSETS.up
  return wide || !base.x ? base : OFFSETS.up
}

/**
 * Scroll-triggered entrance. Wraps children rather than requiring every
 * component to know about motion.
 */
export default function Reveal({
  children,
  as = 'div',
  from = 'up',
  delay = 0,
  duration = 0.7,
  amount = 0.25,
  once = true,
  className,
  ...rest
}) {
  const reduced = useReducedMotion()
  const Cmp = motion[as] ?? motion.div
  const offset = useOffset(from)

  if (reduced) {
    const Plain = as
    return (
      <Plain className={className} {...rest}>
        {children}
      </Plain>
    )
  }

  return (
    <Cmp
      className={cn(className)}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Cmp>
  )
}

/**
 * Staggers direct children. Pair with <Reveal.Item> for list entrances.
 */
export function RevealGroup({ children, className, stagger = 0.09, delay = 0, amount = 0.2 }) {
  const reduced = useReducedMotion()
  if (reduced) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({ children, className, from = 'up', ...rest }) {
  const reduced = useReducedMotion()
  const offset = useOffset(from)
  if (reduced) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, ...offset },
        show: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
