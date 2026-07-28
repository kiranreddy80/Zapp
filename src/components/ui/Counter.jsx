import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

/**
 * Counts from 0 to `value` the first time it scrolls into view.
 * Decimals are preserved when `value` is fractional (e.g. 3.1M kg).
 */
export default function Counter({ value, duration = 1900, decimals, className }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const reduced = useReducedMotion()
  const [display, setDisplay] = useState(0)

  const places = decimals ?? (Number.isInteger(value) ? 0 : 1)

  useEffect(() => {
    if (!inView) return
    if (reduced) {
      setDisplay(value)
      return
    }

    let frame
    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      // easeOutExpo — fast start, long settle, reads as "counting up"
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setDisplay(value * eased)
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value, duration, reduced])

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString('en-IN', {
        minimumFractionDigits: places,
        maximumFractionDigits: places,
      })}
    </span>
  )
}
