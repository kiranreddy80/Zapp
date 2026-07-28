import { Link } from 'react-router-dom'
import Section, { SectionHeading } from '@/components/ui/Section'
import { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import Img from '@/components/ui/Img'
import Icon from '@/components/ui/Icon'
import { IMG } from '@/data/media'

const SERVICES = [
  {
    to: '/scooter-rental',
    kicker: 'For riders',
    title: '2-Wheeler Rental',
    body: 'Electric scooters from ₹129 a day with insurance, servicing and unlimited battery swaps included.',
    image: IMG.riderScooter,
    highlights: ['110 km range', 'No licence needed', 'Zero lock-in'],
    span: 'lg:col-span-3',
  },
  {
    to: '/cargo-loader',
    kicker: 'For business',
    title: '3-Wheeler Cargo Loader',
    body: '550 kg of payload and 140 km of range for middle-mile and dark-store replenishment runs.',
    image: IMG.threeWheelerStreet,
    highlights: ['550 kg payload', '180 cu ft deck', 'Cold chain option'],
    span: 'lg:col-span-3',
  },
  {
    to: '/rent-to-own',
    kicker: 'Ownership',
    title: 'Rent to Own',
    body: 'Pay as you earn for 24 months and the registration certificate comes to you.',
    image: IMG.evCharging,
    highlights: ['No CIBIL check'],
    span: 'lg:col-span-2',
  },
  {
    to: '/ev-for-delivery',
    kicker: 'Enterprise',
    title: 'EV for Delivery',
    body: 'Managed rider fleets against an SLA, with live telemetry piped into your systems.',
    image: IMG.warehouseVan,
    highlights: ['SLA-backed'],
    span: 'lg:col-span-2',
  },
  {
    to: '/franchise',
    kicker: 'Partnership',
    title: 'Franchise a Hub',
    body: 'Run a Zapp hub in your city with vehicles, software and rider supply provided.',
    image: IMG.garageBikes,
    highlights: ['14–20 mo payback'],
    span: 'lg:col-span-2',
  },
]

export default function ServicesShowcase() {
  return (
    <Section tone="light">
      <SectionHeading
        eyebrow="What we do"
        title="One fleet, five ways to use it"
        lead="Whether you ride for a living, move freight, or want to run the hub itself — there is a Zapp product shaped for it."
      />

      <RevealGroup className="mt-14 grid gap-5 lg:grid-cols-6">
        {SERVICES.map((s) => (
          <RevealItem key={s.to} className={s.span}>
            <Link
              to={s.to}
              className="group relative flex h-full min-h-[20rem] flex-col justify-end overflow-hidden rounded-3xl bg-ink-900 p-7 text-white transition-shadow duration-500 hover:shadow-lift"
            >
              <Img
                src={s.image}
                alt={s.title}
                wrapperClassName="absolute inset-0"
                className="transition-transform duration-[1.5s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/75 to-ink-950/15 transition-opacity duration-500 group-hover:from-brand-950" />

              <div className="relative">
                <span className="text-[11px] font-semibold uppercase tracking-[.16em] text-volt-400">
                  {s.kicker}
                </span>
                <h3 className="mt-2.5 text-2xl">{s.title}</h3>
                <p className="mt-2.5 max-w-md text-[14.5px] leading-relaxed text-white/60">
                  {s.body}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {s.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[12px] text-white/70"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
                  Explore
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-volt-500 group-hover:text-ink-900">
                    <Icon name="ArrowUpRight" className="h-4 w-4" />
                  </span>
                </span>
              </div>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  )
}
