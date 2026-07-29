import { Link } from 'react-router-dom'
import cn from '@/lib/cn'
import { LOGO_SRC, SITE } from '@/data/site'

/**
 * SGD Electric logo: a circular badge carrying a bolt over a scooter, followed by
 * the wordmark — "SGD" in the surface's ink colour and "Electric" in brand green.
 *
 * "SGD" is white on dark surfaces, as specified. On the white header it takes the
 * ink colour instead, since white on white would be invisible; `light` is what
 * selects between the two. "Electric" is green on every surface.
 *
 * The mark is drawn inline rather than loaded as a file — it costs no network
 * request, stays crisp at any size, and can recolour itself for light and dark
 * headers. If a real brand asset is supplied, set `LOGO_SRC` in data/site.js to
 * its path and it is used instead, with no other change needed.
 */
function Mark({ className }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      {/* badge */}
      <circle cx="24" cy="24" r="22.5" fill="#06120C" />
      <circle cx="24" cy="24" r="22.5" fill="none" stroke="#12B76A" strokeWidth="3" />

      {/* inner glow ring */}
      <circle cx="24" cy="24" r="18" fill="none" stroke="#12B76A" strokeWidth="1" opacity=".35" />

      {/* bolt */}
      <path
        d="M27 9 15.5 26.5h7.2L21 39 33.5 21.5h-7.7L27 9Z"
        fill="#BFF700"
        stroke="#06120C"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />

      {/* scooter silhouette along the base */}
      <g fill="#12B76A">
        <circle cx="16" cy="36.5" r="3.1" />
        <circle cx="32" cy="36.5" r="3.1" />
        <path d="M13.5 34.2h5.2l3.6-4.1h6.6l2.4 4.1h2.4v1.9h-3.6l-1.9-3.2h-4.9l-3.4 3.9h-6.4v-2.6Z" />
      </g>
    </svg>
  )
}

export default function Logo({ className, light = false, to = '/' }) {
  return (
    <Link
      to={to}
      aria-label={`${SITE.name} — home`}
      className={cn('group inline-flex items-center gap-2.5', className)}
    >
      {LOGO_SRC ? (
        <img
          src={LOGO_SRC}
          alt=""
          className="h-11 w-11 shrink-0 object-contain transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <Mark className="h-11 w-11 shrink-0 transition-transform duration-500 group-hover:scale-105" />
      )}

      {/* steps down on the narrowest phones — "SGD ELECTRIC" is a good deal
          wider than the mark it replaced, and the header still has to hold a
          menu button beside it */}
      <span className="font-display text-[1.15rem] font-extrabold uppercase leading-none tracking-tight sm:text-[1.4rem]">
        <span className={light ? 'text-white' : 'text-ink-900'}>SGD</span>{' '}
        {/* the bright brand green reads at 2.6:1 on the white header — fine for
            four letters, thin over eight — so light surfaces get the deeper
            green instead. Still unmistakably green, and legible at 5:1. */}
        <span className={light ? 'text-brand-500' : 'text-brand-700'}>Electric</span>
      </span>
    </Link>
  )
}
