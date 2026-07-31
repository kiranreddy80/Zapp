import cn from '@/lib/cn'
import Reveal from './Reveal'
import SplitText from './SplitText'

/**
 * Surfaces, light to dark. `mint` and `paper` are the green-tinted neutrals the
 * homepage runs on — barely-there tints that keep the page feeling green
 * without turning every section into a block of colour. Alternating `mint`
 * against `light` is what stops a green page reading as flat.
 */
const TONES = {
  light: 'bg-white text-ink-900',
  muted: 'bg-neutral-50 text-ink-900',
  // Softest green wash — the default light surface on the homepage.
  mint: 'bg-[#F1FAF4] text-ink-900',
  brand: 'bg-brand-50 text-ink-900',
  // A green "desk" surface — deep enough that white paper lifts off it.
  paper: 'bg-[#E7F3EC] text-ink-900',
  dark: 'bg-ink-900 text-white',
  // Deep forest, for dark sections on a green page.
  deep: 'bg-gradient-to-b from-ink-950 via-brand-950 to-ink-950 text-white',
}

const PADS = {
  sm: 'py-10 sm:py-12',
  md: 'py-14 sm:py-16',
  lg: 'py-16 sm:py-20',
  xl: 'py-20 sm:py-24',
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
