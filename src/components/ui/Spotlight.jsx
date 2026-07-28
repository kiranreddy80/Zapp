import { useEffect, useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import cn from '@/lib/cn'

const OFFSCREEN = -9999

/**
 * A soft brand-coloured glow that follows the pointer across its parent.
 *
 * Mount inside a `relative` container. The listener is attached to that parent
 * so the glow tracks the whole area, while the overlay itself stays
 * pointer-events-none and never intercepts a click.
 */
export default function Spotlight({ className, size = 460, opacity = 0.14 }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()

  const x = useMotionValue(OFFSCREEN)
  const y = useMotionValue(OFFSCREEN)
  const spring = { stiffness: 130, damping: 24, mass: 0.5 }
  const sx = useSpring(x, spring)
  const sy = useSpring(y, spring)

  const background = useMotionTemplate`radial-gradient(${size}px circle at ${sx}px ${sy}px, rgba(18,183,106,${opacity}), transparent 70%)`

  useEffect(() => {
    if (reduced) return
    const host = ref.current?.parentElement
    if (!host) return

    const onMove = (e) => {
      const rect = host.getBoundingClientRect()
      x.set(e.clientX - rect.left)
      y.set(e.clientY - rect.top)
    }
    const onLeave = () => {
      x.set(OFFSCREEN)
      y.set(OFFSCREEN)
    }

    host.addEventListener('pointermove', onMove)
    host.addEventListener('pointerleave', onLeave)
    return () => {
      host.removeEventListener('pointermove', onMove)
      host.removeEventListener('pointerleave', onLeave)
    }
  }, [reduced, x, y])

  if (reduced) return null

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      style={{ background }}
      className={cn('pointer-events-none absolute inset-0', className)}
    />
  )
}
