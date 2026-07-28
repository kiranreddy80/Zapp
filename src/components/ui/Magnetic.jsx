import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import cn from '@/lib/cn'

/**
 * Pulls its child a few pixels toward the pointer.
 *
 * Deliberately small (±10px by default) — enough that a primary CTA feels
 * alive under the cursor, not so much that the hit target moves away from the
 * click. Disabled under reduced-motion, and inert on touch since no pointer
 * hovers there.
 */
export default function Magnetic({ children, strength = 10, className }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const spring = { stiffness: 260, damping: 18, mass: 0.4 }
  const sx = useSpring(x, spring)
  const sy = useSpring(y, spring)

  if (reduced) return <span className={cn('inline-block', className)}>{children}</span>

  const onMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)
    const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)
    x.set(Math.max(-1, Math.min(1, dx)) * strength)
    y.set(Math.max(-1, Math.min(1, dy)) * strength)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.span
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={{ x: sx, y: sy }}
      className={cn('inline-block', className)}
    >
      {children}
    </motion.span>
  )
}
