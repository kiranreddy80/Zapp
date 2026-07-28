import Section, { SectionHeading, Glow } from '@/components/ui/Section'
import { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import Reveal from '@/components/ui/Reveal'
import Img from '@/components/ui/Img'

/**
 * Vehicle specification block — a large product photo beside a numeric grid.
 */
export default function SpecGrid({ eyebrow, title, lead, specs, image, imageAlt, note }) {
  return (
    <Section tone="dark" className="overflow-hidden">
      <Glow className="-left-32 top-1/4 h-96 w-96" />

      <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
        <Reveal from="right">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
            <Img
              src={image}
              alt={imageAlt}
              wrapperClassName="aspect-[4/3] w-full"
              className="transition-transform duration-[2s] hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
          </div>
        </Reveal>

        <div>
          <SectionHeading dark align="left" eyebrow={eyebrow} title={title} lead={lead} />

          <RevealGroup className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
            {specs.map((s) => (
              <RevealItem key={s.label} className="bg-ink-900 p-5">
                <p className="font-display text-2xl font-extrabold text-white">
                  {s.value}
                  <span className="ml-1 text-sm font-semibold text-volt-400">{s.unit}</span>
                </p>
                <p className="mt-1.5 text-[13px] font-medium text-white/70">{s.label}</p>
                {s.note && <p className="mt-0.5 text-[11.5px] leading-snug text-white/60">{s.note}</p>}
              </RevealItem>
            ))}
          </RevealGroup>

          {note && (
            <Reveal delay={0.2}>
              <p className="mt-6 text-xs leading-relaxed text-white/55">{note}</p>
            </Reveal>
          )}
        </div>
      </div>
    </Section>
  )
}
