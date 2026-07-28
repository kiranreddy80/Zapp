import Section, { SectionHeading, Glow } from '@/components/ui/Section'
import { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import Icon from '@/components/ui/Icon'
import cn from '@/lib/cn'

/**
 * Numbered process steps laid out horizontally with a connecting rule.
 */
export default function StepList({ eyebrow, title, lead, steps, tone = 'light', id }) {
  const dark = tone === 'dark' || tone === 'deep'

  return (
    <Section tone={tone} id={id} className="overflow-hidden">
      {dark && <Glow className="right-0 top-0 h-80 w-80" color="volt" />}

      <SectionHeading dark={dark} eyebrow={eyebrow} title={title} lead={lead} />

      <RevealGroup className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* connecting rule behind the numbers */}
        <span
          aria-hidden="true"
          className={cn(
            'absolute left-0 right-0 top-7 hidden h-px lg:block',
            dark ? 'bg-white/10' : 'bg-neutral-200',
          )}
        />

        {steps.map((s, i) => (
          <RevealItem key={s.step ?? s.title} className="relative">
            <span
              className={cn(
                'relative z-10 grid h-14 w-14 place-items-center rounded-2xl font-display text-lg font-extrabold',
                dark
                  ? 'border border-white/15 bg-ink-900 text-volt-400'
                  : 'bg-brand-500 text-white shadow-glow',
              )}
            >
              {s.step ?? String(i + 1).padStart(2, '0')}
            </span>

            <h3 className={cn('mt-6 text-lg', dark && 'text-white')}>{s.title}</h3>
            <p
              className={cn(
                'mt-3 text-[15px] leading-relaxed',
                dark ? 'text-white/55' : 'text-neutral-600',
              )}
            >
              {s.body}
            </p>

            {i < steps.length - 1 && (
              <Icon
                name="ChevronRight"
                aria-hidden="true"
                className={cn(
                  'absolute -right-4 top-4 hidden h-6 w-6 lg:block',
                  dark ? 'text-white/20' : 'text-neutral-300',
                )}
              />
            )}
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  )
}
