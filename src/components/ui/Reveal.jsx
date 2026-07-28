import { motion, useReducedMotion } from 'framer-motion'
import cn from '@/lib/cn'

const OFFSETS = {
  up: { y: 34, x: 0 },
  down: { y: -34, x: 0 },
  left: { x: 44, y: 0 },
  right: { x: -44, y: 0 },
  none: { x: 0, y: 0 },
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
  const offset = OFFSETS[from] ?? OFFSETS.up

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
  if (reduced) return <div className={className}>{children}</div>

  const offset = OFFSETS[from] ?? OFFSETS.up
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
