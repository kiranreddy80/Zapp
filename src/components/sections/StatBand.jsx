import Section from '@/components/ui/Section'
import { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import Counter from '@/components/ui/Counter'
import cn from '@/lib/cn'

/** Horizontal band of counted-up metrics. */
export default function StatBand({ stats, tone = 'brand', pad = 'md' }) {
  const dark = tone === 'dark' || tone === 'deep'

  return (
    <Section tone={tone} pad={pad}>
      <RevealGroup className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <RevealItem key={s.label} className="text-center">
            <p
              className={cn(
                'font-display text-4xl font-extrabold sm:text-5xl',
                dark ? 'text-white' : 'text-brand-700',
              )}
            >
              <Counter value={s.value} />
              <span className={dark ? 'text-volt-400' : 'text-brand-500'}>{s.suffix}</span>
            </p>
            <p className={cn('mt-3 font-semibold', dark ? 'text-white/85' : 'text-ink-900')}>
              {s.label}
            </p>
            {s.sub && (
              <p className={cn('mt-1 text-sm', dark ? 'text-white/60' : 'text-neutral-500')}>
                {s.sub}
              </p>
            )}
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  )
}
