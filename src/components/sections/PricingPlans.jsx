import Section, { SectionHeading } from '@/components/ui/Section'
import { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import cn from '@/lib/cn'

export default function PricingPlans({
  eyebrow = 'Pricing',
  title = 'Simple, transparent pricing',
  lead,
  plans,
  note,
  ctaTo = '/contact',
  tone = 'muted',
  id,
}) {
  return (
    <Section tone={tone} id={id}>
      <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />

      <RevealGroup className="mt-14 grid items-start gap-6 lg:grid-cols-3">
        {plans.map((p) => (
          <RevealItem key={p.name}>
            <article
              className={cn(
                'relative flex h-full flex-col overflow-hidden rounded-3xl p-8 transition-all duration-500',
                p.featured
                  ? 'border border-brand-400/30 bg-ink-900 text-white shadow-lift lg:-mt-4 lg:pb-12'
                  : 'card card-hover',
              )}
            >
              {p.featured && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-900/60 via-ink-900 to-ink-950" />
                  <div className="noise absolute inset-0" />
                </>
              )}

              <div className="relative flex flex-1 flex-col">
                {p.badge && (
                  <span
                    className={cn(
                      'mb-5 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-[10.5px] font-bold uppercase tracking-wider',
                      p.featured ? 'bg-volt-500 text-ink-900' : 'bg-brand-50 text-brand-700',
                    )}
                  >
                    <Icon name="Sparkles" className="h-3 w-3" />
                    {p.badge}
                  </span>
                )}

                <h3 className={cn('text-xl', p.featured && 'text-white')}>{p.name}</h3>
                <p
                  className={cn(
                    'mt-2 text-[14.5px] leading-relaxed',
                    p.featured ? 'text-white/55' : 'text-neutral-600',
                  )}
                >
                  {p.blurb}
                </p>

                <p className="mt-7 flex items-baseline gap-1.5">
                  <span
                    className={cn(
                      'font-display text-4xl font-extrabold',
                      p.featured ? 'text-volt-400' : 'text-ink-900',
                    )}
                  >
                    {p.price}
                  </span>
                  <span className={cn('text-sm', p.featured ? 'text-white/65' : 'text-neutral-500')}>
                    {p.unit}
                  </span>
                </p>

                <ul className="mt-7 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className={cn(
                        'flex items-start gap-2.5 text-[14.5px]',
                        p.featured ? 'text-white/70' : 'text-neutral-600',
                      )}
                    >
                      <Icon
                        name="CheckCircle2"
                        className={cn(
                          'mt-0.5 h-4 w-4 shrink-0',
                          p.featured ? 'text-volt-400' : 'text-brand-500',
                        )}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-9">
                  <Button
                    to={ctaTo}
                    full
                    variant={p.featured ? 'volt' : 'outline'}
                    size="md"
                  >
                    {p.cta ?? 'Get started'}
                  </Button>
                </div>
              </div>
            </article>
          </RevealItem>
        ))}
      </RevealGroup>

      {note && (
        <Reveal delay={0.2}>
          <p className="mx-auto mt-9 max-w-2xl text-center text-xs leading-relaxed text-neutral-500">
            {note}
          </p>
        </Reveal>
      )}
    </Section>
  )
}
