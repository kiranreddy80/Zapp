import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'
import cn from '@/lib/cn'

/**
 * Pointer-tracking 3D tilt. Deliberately subtle — max ~7deg — so it reads as
 * responsiveness rather than a gimmick. Disabled under reduced-motion and on
 * touch (no pointer events fire).
 */
export default function Tilt({ children, className, max = 7, scale = 1.015 }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()

  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)

  const spring = { stiffness: 220, damping: 24, mass: 0.4 }
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), spring)
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), spring)

  if (reduced) return <div className={className}>{children}</div>

  const handleMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    px.set((e.clientX - rect.left) / rect.width)
    py.set((e.clientY - rect.top) / rect.height)
  }

  const reset = () => {
    px.set(0.5)
    py.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 1100 }}
      whileHover={{ scale }}
      transition={{ duration: 0.3 }}
      className={cn('preserve-3d', className)}
    >
      {children}
    </motion.div>
  )
}
