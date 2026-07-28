import { motion, useReducedMotion } from 'framer-motion'
import cn from '@/lib/cn'

/**
 * Word-by-word heading reveal.
 *
 * Each word sits in an overflow-hidden wrapper and rises into place, so the
 * line appears to be typeset as you reach it. Used by every section heading,
 * which is what makes the motion read as one system rather than a pile of
 * one-off animations.
 *
 * Only accepts a plain string — headings that need inline markup render their
 * children directly instead (see SectionHeading).
 */
export default function SplitText({ text, className, delay = 0, stagger = 0.045 }) {
  const reduced = useReducedMotion()

  if (reduced || typeof text !== 'string') {
    return <span className={className}>{text}</span>
  }

  const words = text.split(' ')

  return (
    <motion.span
      className={cn('inline', className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          aria-hidden="true"
          // `pb`/`-mb` give descenders room so the mask doesn't clip a 'g' or 'y'.
          className="inline-block overflow-hidden pb-[0.12em] align-bottom -mb-[0.12em]"
        >
          <motion.span
            className="inline-block whitespace-pre"
            variants={{
              hidden: { y: '108%' },
              show: {
                y: '0%',
                transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}
