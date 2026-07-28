import Section, { SectionHeading } from '@/components/ui/Section'
import { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import Icon from '@/components/ui/Icon'
import cn from '@/lib/cn'

/**
 * Icon + copy cards. Used on most inner pages, so tone and column count are
 * props rather than a new component each time.
 */
export default function FeatureGrid({
  eyebrow,
  title,
  lead,
  items,
  tone = 'light',
  cols = 3,
  align = 'center',
  id,
}) {
  const dark = tone === 'dark' || tone === 'deep'

  return (
    <Section tone={tone} id={id}>
      {(eyebrow || title) && (
        <SectionHeading
          dark={dark}
          eyebrow={eyebrow}
          title={title}
          lead={lead}
          align={align}
          className={align === 'left' ? 'max-w-2xl' : undefined}
        />
      )}

      <RevealGroup
        className={cn(
          'mt-14 grid gap-5',
          cols === 2 && 'sm:grid-cols-2',
          cols === 3 && 'sm:grid-cols-2 lg:grid-cols-3',
          cols === 4 && 'sm:grid-cols-2 lg:grid-cols-4',
        )}
      >
        {items.map((item) => (
          <RevealItem key={item.title}>
            <article
              className={cn(
                'group h-full p-7',
                dark ? 'card-dark card-dark-hover' : 'card card-hover',
              )}
            >
              <span
                className={cn(
                  'grid h-12 w-12 place-items-center rounded-2xl transition-all duration-500',
                  dark
                    ? 'border border-white/10 bg-white/5 text-brand-400 group-hover:border-volt-400/40 group-hover:text-volt-400'
                    : 'bg-brand-50 text-brand-700 group-hover:bg-brand-500 group-hover:text-white',
                )}
              >
                <Icon name={item.icon} className="h-5 w-5" />
              </span>

              <h3 className={cn('mt-6 text-xl', dark && 'text-white')}>{item.title}</h3>
              <p
                className={cn(
                  'mt-3 text-[15px] leading-relaxed',
                  dark ? 'text-white/55' : 'text-neutral-600',
                )}
              >
                {item.body}
              </p>

              {item.points && (
                <ul
                  className={cn(
                    'mt-5 space-y-2 border-t pt-5',
                    dark ? 'border-white/10' : 'border-neutral-100',
                  )}
                >
                  {item.points.map((p) => (
                    <li
                      key={p}
                      className={cn(
                        'flex items-start gap-2.5 text-[14px]',
                        dark ? 'text-white/60' : 'text-neutral-600',
                      )}
                    >
                      <Icon
                        name="CheckCircle2"
                        className={cn(
                          'mt-0.5 h-4 w-4 shrink-0',
                          dark ? 'text-volt-400' : 'text-brand-500',
                        )}
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              )}

              {item.metric && (
                <p
                  className={cn(
                    'mt-6 flex items-baseline gap-2 border-t pt-5',
                    dark ? 'border-white/10' : 'border-neutral-100',
                  )}
                >
                  <span
                    className={cn(
                      'font-display text-2xl font-extrabold',
                      dark ? 'text-volt-400' : 'text-brand-700',
                    )}
                  >
                    {item.metric}
                  </span>
                  <span className={cn('text-[13px]', dark ? 'text-white/60' : 'text-neutral-500')}>
                    {item.metricLabel}
                  </span>
                </p>
              )}
            </article>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  )
}
