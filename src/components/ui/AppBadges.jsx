import cn from '@/lib/cn'

/**
 * App-store badges drawn inline rather than loaded as images — no network
 * request, crisp at any size, and tinted to the surface they sit on.
 */
function Badge({ store, light }) {
  const isApple = store === 'apple'

  return (
    <a
      href={isApple ? 'https://apps.apple.com/' : 'https://play.google.com/'}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={isApple ? 'Download on the App Store' : 'Get it on Google Play'}
      className={cn(
        'group inline-flex items-center gap-3 rounded-2xl border px-4 py-2.5 transition-all duration-300 hover:-translate-y-0.5',
        light
          ? 'border-neutral-300 bg-white text-ink-900 hover:border-brand-400 hover:shadow-card'
          : 'border-white/15 bg-white/[.04] text-white hover:border-brand-400/50 hover:bg-white/[.08]',
      )}
    >
      {isApple ? (
        <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="currentColor" aria-hidden="true">
          <path d="M17.05 12.53c-.03-2.55 2.08-3.78 2.18-3.84-1.19-1.74-3.04-1.98-3.7-2.01-1.57-.16-3.07.93-3.87.93-.8 0-2.03-.91-3.34-.88-1.72.03-3.3 1-4.18 2.54-1.78 3.09-.45 7.66 1.28 10.16.85 1.23 1.86 2.6 3.19 2.55 1.28-.05 1.76-.83 3.31-.83 1.54 0 1.98.83 3.33.8 1.38-.02 2.25-1.25 3.09-2.48.97-1.42 1.37-2.8 1.39-2.87-.03-.01-2.67-1.02-2.7-4.07M14.6 4.6c.7-.86 1.18-2.04 1.05-3.22-1.01.04-2.24.68-2.97 1.53-.65.75-1.23 1.96-1.08 3.11 1.13.09 2.29-.57 3-1.42" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden="true">
          <path d="M3.6 2.3c-.3.3-.5.8-.5 1.4v16.6c0 .6.2 1.1.5 1.4l.1.1 9.3-9.3v-.2L3.6 2.3Z" fill="#12B76A" />
          <path d="m16.1 15.6-3.1-3.1v-.2l3.1-3.1.1.1 3.7 2.1c1 .6 1 1.6 0 2.2l-3.8 2Z" fill="#BFF700" />
          <path d="m16.2 15.5-3.2-3.2-9.4 9.4c.3.4.9.4 1.5.1l11.1-6.3" fill="#039855" />
          <path d="M16.2 9.1 5.1 2.8c-.6-.3-1.2-.3-1.5.1l9.4 9.4 3.2-3.2Z" fill="#6CE9A6" />
        </svg>
      )}

      <span className="flex flex-col leading-none">
        <span className={cn('text-[10px] uppercase tracking-wide', light ? 'text-neutral-500' : 'text-white/65')}>
          {isApple ? 'Download on the' : 'Get it on'}
        </span>
        <span className="mt-1 font-display text-[15px] font-semibold">
          {isApple ? 'App Store' : 'Google Play'}
        </span>
      </span>
    </a>
  )
}

export default function AppBadges({ light = false, className }) {
  return (
    <div className={cn('flex flex-wrap gap-3', className)}>
      <Badge store="apple" light={light} />
      <Badge store="google" light={light} />
    </div>
  )
}
