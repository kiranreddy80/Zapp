import { Link } from 'react-router-dom'
import cn from '@/lib/cn'
import Icon from './Icon'

const VARIANTS = {
  // brand-700, not brand-500: white on #12B76A is only 2.62:1, which fails AA
  // for button labels. #027A48 gives 5.4:1 and still reads unmistakably brand.
  primary:
    'bg-brand-700 text-white shadow-glow hover:bg-brand-800 focus-visible:outline-brand-700',
  volt: 'bg-volt-500 text-ink-900 shadow-volt hover:bg-volt-400 focus-visible:outline-volt-600',
  dark: 'bg-ink-900 text-white hover:bg-ink-800 focus-visible:outline-ink-900',
  outline:
    'border border-neutral-300 bg-white text-ink-900 hover:border-brand-400 hover:text-brand-700 focus-visible:outline-brand-600',
  ghost: 'text-ink-900 hover:bg-neutral-100 focus-visible:outline-brand-600',
  glass: 'glass text-white hover:bg-white/20 focus-visible:outline-white',
  'outline-light':
    'border border-white/30 text-white hover:border-white hover:bg-white/10 focus-visible:outline-white',
}

const SIZES = {
  sm: 'h-10 px-4 text-sm gap-1.5',
  md: 'h-12 px-6 text-[15px] gap-2',
  lg: 'h-14 px-8 text-base gap-2.5',
}

/** Trailing icon sizes, when rendered inside a chip. */
const CHIP = {
  sm: 'h-6 w-6',
  md: 'h-7 w-7',
  lg: 'h-8 w-8',
}

/**
 * One button, three renderers: react-router <Link>, plain <a>, or <button>.
 *
 * Optional treatments:
 *  - `chip`  puts the trailing icon in a circular well that brightens and
 *            nudges on hover — more deliberate than a bare arrow for a
 *            headline CTA.
 *  - `beam`  wraps the button in a slowly rotating conic border, for the one
 *            call to action on a page that should feel energised. Used
 *            sparingly; on every button it would be noise.
 */
export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  icon = 'ArrowRight',
  iconPosition = 'right',
  chip = false,
  beam = false,
  className,
  full,
  ...rest
}) {
  const onDark = variant === 'glass' || variant === 'outline-light' || variant === 'volt'

  const classes = cn(
    'group/btn relative inline-flex items-center justify-center overflow-hidden rounded-full font-semibold',
    // Tactile press: settles down a pixel rather than only shrinking.
    'transition-all duration-300 active:translate-y-[1px] active:scale-[.98]',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
    VARIANTS[variant] ?? VARIANTS.primary,
    SIZES[size] ?? SIZES.md,
    full && 'w-full',
    className,
  )

  const trailing =
    icon && iconPosition === 'right' ? (
      chip ? (
        <span
          className={cn(
            'relative grid shrink-0 place-items-center rounded-full transition-all duration-300',
            CHIP[size] ?? CHIP.md,
            onDark ? 'bg-ink-900/15' : 'bg-white/20',
            'group-hover/btn:translate-x-0.5',
            onDark ? 'group-hover/btn:bg-ink-900/25' : 'group-hover/btn:bg-white/30',
          )}
        >
          <Icon name={icon} className="h-[0.95em] w-[0.95em]" />
        </span>
      ) : (
        <Icon
          name={icon}
          className="relative h-[1.05em] w-[1.05em] transition-transform duration-300 group-hover/btn:translate-x-1"
        />
      )
    ) : null

  const inner = (
    <>
      {/* hover sheen */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-brand-sheen opacity-0 transition-opacity duration-300 group-hover/btn:animate-sheen group-hover/btn:opacity-100" />

      {icon && iconPosition === 'left' && (
        <Icon
          name={icon}
          className="relative h-[1.05em] w-[1.05em] transition-transform duration-300 group-hover/btn:-translate-x-0.5"
        />
      )}

      <span className="relative">{children}</span>
      {trailing}
    </>
  )

  let element

  if (to) {
    element = (
      <Link to={to} className={classes} {...rest}>
        {inner}
      </Link>
    )
  } else if (href) {
    element = (
      <a
        href={href}
        className={classes}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noreferrer noopener' : undefined}
        {...rest}
      >
        {inner}
      </a>
    )
  } else {
    element = (
      <button type="button" className={classes} {...rest}>
        {inner}
      </button>
    )
  }

  // The beam lives on a wrapper: the button itself clips its contents for the
  // sheen, which would cut off a ring drawn inside it.
  return beam ? (
    <span className={cn('current-ring inline-flex rounded-full', full && 'w-full')}>{element}</span>
  ) : (
    element
  )
}
