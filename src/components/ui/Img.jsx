import { useEffect, useRef, useState } from 'react'
import cn from '@/lib/cn'

/**
 * Image with a shimmer placeholder and graceful degradation.
 *
 * Two levels of fallback:
 *  1. `fallbackSrc` — try a second source if the first 404s. This lets a page
 *     point at brand photography that has not been added yet and quietly show
 *     a stock stand-in until the real file lands, with no code change.
 *  2. A brand-tinted gradient, if both fail. Remote media can always break —
 *     a rate limit, an offline laptop, a rotated URL — and a gradient still
 *     reads as intentional where a broken-image glyph does not.
 */
export default function Img({
  src,
  fallbackSrc,
  alt = '',
  className,
  wrapperClassName,
  // The default shimmer is light, which flashes badly on dark surfaces —
  // pass a dark one when the image sits on a dark section.
  skeletonClassName = 'bg-gradient-to-br from-neutral-100 via-neutral-200 to-neutral-100',
  loading = 'lazy',
  sizes,
  priority = false,
  ...rest
}) {
  const [state, setState] = useState('loading')
  const [current, setCurrent] = useState(src)
  const imgRef = useRef(null)

  // Reset when the caller swaps the source (e.g. a slideshow advancing).
  useEffect(() => {
    setCurrent(src)
    setState('loading')
  }, [src])

  /*
   * Catch images that were already cached.
   *
   * If the file is in cache it can finish loading before React attaches
   * `onLoad`, so that event never fires and the image would sit at opacity-0
   * forever. Checking `complete` after mount covers that case — it is what
   * kept preloaded slideshow frames invisible.
   */
  useEffect(() => {
    const el = imgRef.current
    if (el?.complete && el.naturalWidth > 0) setState('loaded')
  }, [current])

  const handleError = () => {
    if (fallbackSrc && current !== fallbackSrc) {
      setCurrent(fallbackSrc)
      setState('loading')
      return
    }
    setState('error')
  }

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
        <span className={cn('absolute inset-0 animate-pulse', skeletonClassName)} />
      )}

      {state === 'error' ? (
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-brand-100 via-brand-300 to-brand-700"
        />
      ) : (
        <img
          key={current}
          ref={imgRef}
          src={current}
          alt={alt}
          loading={priority ? 'eager' : loading}
          decoding="async"
          fetchpriority={priority ? 'high' : undefined}
          sizes={sizes}
          onLoad={() => setState('loaded')}
          onError={handleError}
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
