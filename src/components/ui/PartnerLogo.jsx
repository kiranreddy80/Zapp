import cn from '@/lib/cn'

/**
 * A client wordmark, set in the display face and tinted with that company's
 * brand colour.
 *
 * Rendered as type rather than as a logo file on purpose: we have no licence to
 * reproduce these companies' trademarks, and a consistent typographic treatment
 * keeps the strip looking deliberate.
 */
export default function PartnerLogo({ partner, dark = false }) {
  return (
    <span
      className={cn(
        'mx-9 select-none whitespace-nowrap font-display text-2xl font-bold tracking-tight sm:text-3xl',
        'opacity-85 transition-opacity duration-300 hover:opacity-100',
      )}
      style={{ color: dark ? partner.onDark : partner.color }}
    >
      {partner.name}
    </span>
  )
}
