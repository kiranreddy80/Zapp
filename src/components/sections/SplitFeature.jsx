import Section from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import Img from '@/components/ui/Img'
import Icon from '@/components/ui/Icon'
import Button from '@/components/ui/Button'
import cn from '@/lib/cn'

/**
 * Alternating image / copy block. `flip` swaps the sides so consecutive uses
 * create a zig-zag rhythm down the page.
 */
export default function SplitFeature({
  eyebrow,
  title,
  body,
  points,
  image,
  imageAlt = '',
  flip = false,
  tone = 'light',
  cta,
  secondaryCta,
  stat,
  children,
  id,
}) {
  const dark = tone === 'dark' || tone === 'deep'

  return (
    <Section tone={tone} id={id} className="overflow-hidden">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal
          from={flip ? 'left' : 'right'}
          className={cn('relative', flip && 'lg:order-2')}
        >
          <div className="relative overflow-hidden rounded-[2rem]">
            <Img
              src={image}
              alt={imageAlt}
              wrapperClassName="aspect-[4/3.2] w-full"
              className="transition-transform duration-[2s] hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/45 via-transparent to-transparent" />
          </div>

          {stat && (
            <div
              className={cn(
                'absolute -bottom-6 rounded-2xl p-6 shadow-lift',
                flip ? '-right-4 lg:-right-8' : '-left-4 lg:-left-8',
                dark ? 'border border-white/10 bg-ink-800' : 'bg-white',
              )}
            >
              <p
                className={cn(
                  'font-display text-3xl font-extrabold',
                  dark ? 'text-volt-400' : 'text-brand-700',
                )}
              >
                {stat.value}
              </p>
              <p className={cn('mt-1 text-[13px]', dark ? 'text-white/65' : 'text-neutral-500')}>
                {stat.label}
              </p>
            </div>
          )}
        </Reveal>

        <Reveal from={flip ? 'right' : 'left'} delay={0.1} className={cn(flip && 'lg:order-1')}>
          {eyebrow && <span className={dark ? 'eyebrow-dark' : 'eyebrow'}>{eyebrow}</span>}

          <h2 className={cn('mt-5 text-3xl leading-[1.12] sm:text-4xl', dark && 'text-white')}>
            {title}
          </h2>

          {body && (
            <p
              className={cn(
                'mt-5 text-lg leading-relaxed',
                dark ? 'text-white/60' : 'text-neutral-600',
              )}
            >
              {body}
            </p>
          )}

          {points && (
            <ul className="mt-8 space-y-4">
              {points.map((p) => {
                const label = typeof p === 'string' ? p : p.title
                const desc = typeof p === 'string' ? null : p.body
                return (
                  <li key={label} className="flex gap-3.5">
                    <span
                      className={cn(
                        'mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full',
                        dark ? 'bg-volt-500/15 text-volt-400' : 'bg-brand-50 text-brand-700',
                      )}
                    >
                      <Icon name="Check" className="h-3.5 w-3.5" />
                    </span>
                    <span>
                      <span className={cn('font-semibold', dark ? 'text-white' : 'text-ink-900')}>
                        {label}
                      </span>
                      {desc && (
                        <span
                          className={cn(
                            'mt-1 block text-[14.5px] leading-relaxed',
                            dark ? 'text-white/65' : 'text-neutral-600',
                          )}
                        >
                          {desc}
                        </span>
                      )}
                    </span>
                  </li>
                )
              })}
            </ul>
          )}

          {(cta || secondaryCta) && (
            <div className="mt-10 flex flex-wrap gap-3">
              {cta && (
                <Button to={cta.to} variant={dark ? 'volt' : 'primary'}>
                  {cta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button to={secondaryCta.to} variant={dark ? 'outline-light' : 'outline'}>
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}

          {children && <div className="mt-10">{children}</div>}
        </Reveal>
      </div>
    </Section>
  )
}
