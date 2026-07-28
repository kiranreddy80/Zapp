import cn from '@/lib/cn'
import Reveal from './Reveal'
import SplitText from './SplitText'

const TONES = {
  light: 'bg-white text-ink-900',
  muted: 'bg-neutral-50 text-ink-900',
  brand: 'bg-brand-50 text-ink-900',
  // A warm neutral "desk" surface — deep enough that white paper lifts off it.
  paper: 'bg-[#ECEFEC] text-ink-900',
  dark: 'bg-ink-900 text-white',
  deep: 'bg-gradient-to-b from-ink-900 via-ink-800 to-ink-900 text-white',
}

const PADS = {
  sm: 'py-14 sm:py-16',
  md: 'py-20 sm:py-24',
  lg: 'py-24 sm:py-32',
  xl: 'py-28 sm:py-40',
}

export default function Section({
  children,
  tone = 'light',
  pad = 'lg',
  className,
  containerClassName,
  id,
  ...rest
}) {
  return (
    <section
      id={id}
      className={cn('relative', TONES[tone] ?? TONES.light, PADS[pad] ?? PADS.lg, className)}
      {...rest}
    >
      <div className={cn('container relative', containerClassName)}>{children}</div>
    </section>
  )
}

/**
 * Standard heading block. `align="left"` for dense pages, `center` for
 * marketing beats.
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'center',
  dark = false,
  className,
  children,
}) {
  return (
    <Reveal
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        align === 'right' && 'ml-auto text-right',
        className,
      )}
    >
      {eyebrow && <span className={dark ? 'eyebrow-dark' : 'eyebrow'}>{eyebrow}</span>}
      {title && (
        <h2
          className={cn(
            'mt-5 text-3xl leading-[1.1] sm:text-4xl lg:text-[2.9rem]',
            dark ? 'text-white' : 'text-ink-900',
          )}
        >
          {/* Plain strings get the word-by-word reveal; headings built from JSX
              (gradient spans and the like) render as-is. */}
          {typeof title === 'string' ? <SplitText text={title} /> : title}
        </h2>
      )}
      {lead && (
        <p
          className={cn(
            'mt-5 text-lg leading-relaxed',
            dark ? 'text-white/65' : 'text-neutral-600',
          )}
        >
          {lead}
        </p>
      )}
      {children}
    </Reveal>
  )
}

/** Soft radial glow used to lift dark sections. */
export function Glow({ className, color = 'brand' }) {
  const palette = {
    brand: 'bg-brand-500/25',
    volt: 'bg-volt-500/20',
    white: 'bg-white/10',
  }
  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute rounded-full blur-[120px]',
        palette[color] ?? palette.brand,
        className,
      )}
    />
  )
}

/** Faint grid backdrop. */
export function GridBackdrop({ dark = false, className }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 bg-grid mask-b',
        dark ? 'bg-grid-dark' : 'bg-grid-light',
        className,
      )}
    />
  )
}
