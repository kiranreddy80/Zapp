import { useState } from 'react'
import cn from '@/lib/cn'

/**
 * Image with a shimmer placeholder and a graceful gradient fallback.
 *
 * Remote media can always fail — a rate limit, an offline laptop, a URL that
 * gets rotated. Rather than showing a broken-image glyph, we fade in a
 * brand-tinted gradient so the layout still reads as intentional.
 */
export default function Img({
  src,
  alt = '',
  className,
  wrapperClassName,
  loading = 'lazy',
  sizes,
  priority = false,
  ...rest
}) {
  const [state, setState] = useState('loading')

  // The wrapper needs a positioning context for the skeleton/fallback layers,
  // but callers often pass their own (`absolute inset-0`). Tailwind emits
  // `.relative` after `.absolute`, so hardcoding `relative` would silently win
  // and drop the element back into flow — only add it when none was supplied.
  const hasPosition = /(^|\s)(absolute|fixed|sticky|static|relative)(\s|$)/.test(
    wrapperClassName ?? '',
  )

  return (
    <span
      className={cn(
        'block overflow-hidden bg-neutral-100',
        !hasPosition && 'relative',
        wrapperClassName,
      )}
    >
      {state === 'loading' && (
        <span className="absolute inset-0 animate-pulse bg-gradient-to-br from-neutral-100 via-neutral-200 to-neutral-100" />
      )}

      {state === 'error' ? (
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-brand-100 via-brand-300 to-brand-700"
        />
      ) : (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : loading}
          decoding="async"
          fetchpriority={priority ? 'high' : undefined}
          sizes={sizes}
          onLoad={() => setState('loaded')}
          onError={() => setState('error')}
          className={cn(
            'h-full w-full object-cover transition-opacity duration-700',
            state === 'loaded' ? 'opacity-100' : 'opacity-0',
            className,
          )}
          {...rest}
        />
      )}
    </span>
  )
}
