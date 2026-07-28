import Section, { SectionHeading } from '@/components/ui/Section'
import { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import Icon from '@/components/ui/Icon'
import Img from '@/components/ui/Img'
import Tilt from '@/components/ui/Tilt'
import { WHY_ZAPP } from '@/data/content'
import { IMG } from '@/data/media'

/**
 * Bento layout — the first card spans two columns and carries an image, so the
 * grid reads as an editorial spread rather than six identical boxes.
 */
export default function WhyGrid() {
  const [lead, ...rest] = WHY_ZAPP

  return (
    <Section id="why" tone="muted">
      <SectionHeading
        align="left"
        eyebrow="Why riders switch"
        title="Everything included. Nothing hidden."
        lead="One rental covers the vehicle, the energy, the servicing and the insurance. What is left over is yours."
        className="max-w-2xl"
      />

      <RevealGroup className="mt-14 grid gap-5 lg:grid-cols-3">
        {/* lead card */}
        <RevealItem className="lg:col-span-2 lg:row-span-1">
          <Tilt max={4} className="h-full">
            <article className="group relative flex h-full min-h-[22rem] flex-col justify-end overflow-hidden rounded-3xl bg-ink-900 p-8 text-white sm:p-10">
              <Img
                src={IMG.riderCityDay}
                alt="Delivery rider on an electric scooter in city traffic"
                wrapperClassName="absolute inset-0"
                className="transition-transform duration-[1.6s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-950/10" />

              <div className="relative">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-volt-500 text-ink-900">
                  <Icon name={lead.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-6 text-2xl sm:text-3xl">{lead.title}</h3>
                <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-white/65">
                  {lead.body}
                </p>
                <p className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-3xl font-extrabold text-volt-400">
                    {lead.stat}
                  </span>
                  <span className="text-sm text-white/65">{lead.statLabel}</span>
                </p>
              </div>
            </article>
          </Tilt>
        </RevealItem>

        {/* remaining cards */}
        {rest.map((item) => (
          <RevealItem key={item.title}>
            <article className="card card-hover group h-full p-7">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-700 transition-all duration-500 group-hover:bg-brand-500 group-hover:text-white">
                <Icon name={item.icon} className="h-5 w-5" />
              </span>

              <h3 className="mt-6 text-xl">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">{item.body}</p>

              <p className="mt-6 flex items-baseline gap-2 border-t border-neutral-100 pt-5">
                <span className="font-display text-2xl font-extrabold text-brand-700">
                  {item.stat}
                </span>
                <span className="text-[13px] text-neutral-500">{item.statLabel}</span>
              </p>
            </article>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  )
}
