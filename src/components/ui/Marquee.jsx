import { useRef, useState } from 'react'
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion'
import cn from '@/lib/cn'

/** Wraps a value into [min, max) — keeps the track looping seamlessly. */
function wrap(min, max, value) {
  const range = max - min
  return ((((value - min) % range) + range) % range) + min
}

const BASE = { slow: 5, normal: 11 } // percent of track width per second

/**
 * Infinite ticker whose speed responds to scroll.
 *
 * The track drifts on its own, and accelerates while the page is being
 * scrolled — so the strips feel connected to the reader rather than looping
 * obliviously in the background. Direction never flips, which would be
 * disorienting on a strip of names people are trying to read.
 *
 * Children are rendered twice and the track wraps at -50%, so the loop is
 * seamless regardless of content width.
 */
export default function Marquee({
  children,
  speed = 'normal',
  reverse = false,
  className,
  fade = true,
  pauseOnHover = true,
}) {
  const reduced = useReducedMotion()
  const [paused, setPaused] = useState(false)

  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 380 })

  // Map scroll speed to a multiplier. `clamp: false` lets fast flicks push
  // past the range, which is what makes the effect feel responsive.
  const boost = useTransform(smoothVelocity, [-1500, 0, 1500], [2.2, 0, 2.2], { clamp: false })

  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`)
  const direction = reverse ? -1 : 1

  useAnimationFrame((_, delta) => {
    if (paused || reduced) return
    const perSecond = BASE[speed] ?? BASE.normal
    let move = direction * perSecond * (delta / 1000)
    move += move * Math.abs(boost.get())
    baseX.set(baseX.get() + move)
  })

  // Under reduced-motion the track becomes a plain horizontally scrollable row.
  if (reduced) {
    return (
      <div className={cn('no-scrollbar w-full overflow-x-auto', className)}>
        <div className="flex w-max items-center">{children}</div>
      </div>
    )
  }

  return (
    <div
      className={cn('relative w-full overflow-hidden', fade && 'mask-x', className)}
      onPointerEnter={() => pauseOnHover && setPaused(true)}
      onPointerLeave={() => pauseOnHover && setPaused(false)}
    >
      <motion.div style={{ x }} className="flex w-max shrink-0 items-center">
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </motion.div>
    </div>
  )
}
