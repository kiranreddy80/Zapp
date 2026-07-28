import { Link } from 'react-router-dom'
import cn from '@/lib/cn'

/**
 * Wordmark. The bolt is drawn inline so it inherits currentColor and needs no
 * network request — important for the first paint in the fixed header.
 */
export default function Logo({ className, light = false, to = '/' }) {
  return (
    <Link
      to={to}
      aria-label="Zapp Electric — home"
      className={cn('group inline-flex items-center gap-2.5', className)}
    >
      <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-brand-500 shadow-glow transition-transform duration-500 group-hover:scale-105">
        <span className="absolute inset-0 bg-gradient-to-br from-volt-400/70 via-transparent to-brand-700/60" />
        <svg viewBox="0 0 24 24" className="relative h-5 w-5" fill="none" aria-hidden="true">
          <path
            d="M13.5 2 4 13.2h6.1L9.6 22 20 10.6h-6.4L13.5 2Z"
            fill="white"
            stroke="white"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-display text-[1.35rem] font-extrabold tracking-tight',
            light ? 'text-white' : 'text-ink-900',
          )}
        >
          zapp
        </span>
        <span
          className={cn(
            'mt-0.5 text-[9.5px] font-semibold uppercase tracking-[.28em]',
            light ? 'text-white/65' : 'text-neutral-500',
          )}
        >
          Electric
        </span>
      </span>
    </Link>
  )
}
