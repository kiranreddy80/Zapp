import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import cn from '@/lib/cn'
import Img from '@/components/ui/Img'
import Icon from '@/components/ui/Icon'
import Reveal from '@/components/ui/Reveal'
import { Glow } from '@/components/ui/Section'

/**
 * Shared hero for every inner page: full-bleed image, dark scrim, breadcrumb,
 * oversized title and an optional stat rail along the bottom edge.
 */
export default function PageHero({
  eyebrow,
  title,
  lead,
  image,
  crumbs = [],
  stats,
  align = 'left',
  children,
  height = 'md',
}) {
  const heights = {
    sm: 'min-h-[52vh] pt-40 pb-16',
    md: 'min-h-[64vh] pt-44 pb-20',
    lg: 'min-h-[78vh] pt-48 pb-24',
  }

  return (
    <header className={cn('relative isolate flex items-end overflow-hidden bg-ink-900', heights[height])}>
      {/* backdrop */}
      {image && (
        <div className="absolute inset-0 -z-10">
          <Img
            src={image}
            alt=""
            priority
            wrapperClassName="h-full w-full"
            className="animate-ken-burns"
          />
        </div>
      )}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ink-900/95 via-ink-900/80 to-brand-900/60" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-900 via-transparent to-ink-900/70" />
      <div className="noise absolute inset-0 -z-10" />
      <Glow className="-left-24 top-10 h-72 w-72" />
      <Glow className="right-0 top-1/3 h-96 w-96" color="volt" />

      <div className="container relative w-full">
        <div className={cn('max-w-4xl', align === 'center' && 'mx-auto text-center')}>
          {crumbs.length > 0 && (
            <Reveal from="none" duration={0.5}>
              <nav aria-label="Breadcrumb">
                <ol
                  className={cn(
                    'flex flex-wrap items-center gap-2 text-[13px] text-white/65',
                    align === 'center' && 'justify-center',
                  )}
                >
                  <li>
                    <Link to="/" className="transition-colors hover:text-volt-400">
                      Home
                    </Link>
                  </li>
                  {crumbs.map((c) => (
                    <li key={c.label} className="flex items-center gap-2">
                      <Icon name="ChevronRight" className="h-3.5 w-3.5 text-white/55" />
                      {c.to ? (
                        <Link to={c.to} className="transition-colors hover:text-volt-400">
                          {c.label}
                        </Link>
                      ) : (
                        <span className="text-white/80">{c.label}</span>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            </Reveal>
          )}

          {eyebrow && (
            <Reveal delay={0.06} className="mt-6">
              <span className="eyebrow-dark">{eyebrow}</span>
            </Reveal>
          )}

          <Reveal delay={0.12}>
            <h1 className="mt-5 text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>
          </Reveal>

          {lead && (
            <Reveal delay={0.2}>
              <p
                className={cn(
                  'mt-6 max-w-2xl text-lg leading-relaxed text-white/65',
                  align === 'center' && 'mx-auto',
                )}
              >
                {lead}
              </p>
            </Reveal>
          )}

          {children && (
            <Reveal delay={0.28} className={cn('mt-9 flex flex-wrap gap-3', align === 'center' && 'justify-center')}>
              {children}
            </Reveal>
          )}
        </div>

        {stats && (
          <motion.dl
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label} className="bg-ink-900/70 p-6 backdrop-blur-sm">
                <dt className="text-[11px] font-semibold uppercase tracking-[.14em] text-white/60">
                  {s.label}
                </dt>
                <dd className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                  {s.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        )}
      </div>
    </header>
  )
}
