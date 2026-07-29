import Seo from '@/components/ui/Seo'
import Button from '@/components/ui/Button'
import PageHero from '@/components/sections/PageHero'
import SplitFeature from '@/components/sections/SplitFeature'
import StatBand from '@/components/sections/StatBand'
import CTABand from '@/components/sections/CTABand'
import Section, { SectionHeading, Glow } from '@/components/ui/Section'
import Reveal, { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import Counter from '@/components/ui/Counter'
import Icon from '@/components/ui/Icon'
import { ENV_METRICS } from '@/data/content'
import { IMG, VIDEO } from '@/data/media'

const AIR = [
  { pollutant: 'CO₂e', avoided: '68,000,000 kg', note: 'Primary greenhouse gas from combustion' },
  { pollutant: 'NOx', avoided: '412,000 kg', note: 'Drives ground-level ozone and respiratory illness' },
  { pollutant: 'PM2.5', avoided: '38,600 kg', note: 'Fine particulates linked to cardiovascular disease' },
  { pollutant: 'CO', avoided: '2,640,000 kg', note: 'Carbon monoxide from incomplete combustion' },
  { pollutant: 'Hydrocarbons', avoided: '318,000 kg', note: 'Unburned fuel released at idle and low speed' },
]

const CIRCULARITY = [
  {
    icon: 'BatteryCharging',
    title: 'First life — on the vehicle',
    body: 'An LFP pack runs roughly 2,000 full cycles on a delivery vehicle before falling below 80% of rated capacity, which is about four years in our duty cycle.',
  },
  {
    icon: 'Plug',
    title: 'Second life — stationary storage',
    body: 'Packs below 80% are re-purposed into hub storage, buffering our own charging load away from peak grid hours. 71% of retired packs take this route.',
  },
  {
    icon: 'Recycle',
    title: 'Third — material recovery',
    body: 'Packs unfit for storage go to certified recyclers who recover lithium, iron, phosphate, copper and aluminium. 94% of pack mass is recovered.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Chain of custody',
    body: 'Every pack has a serial number tracked from fitment to recycling certificate. None of our packs enter the informal recycling market.',
  },
]

export default function Environment() {
  return (
    <>
      <Seo
        title="Environmental Impact"
        description="68 million kg of CO₂ avoided, 28 million litres of petrol not burned, 94% battery circularity. SGD Electric's measured environmental impact and methodology."
        image={IMG.forestTop}
        path="/environment"
      />

      <PageHero
        eyebrow="Environment"
        title="Emissions avoided, not offsets purchased"
        lead="Every figure here comes from metered distance on a real vehicle, multiplied by a petrol baseline that an independent assessor reviews each year. Nothing here was bought after the fact."
        image={IMG.forestTop}
        crumbs={[{ label: 'Company' }, { label: 'Environment' }]}
        height="lg"
      >
        <Button to="/contact" variant="volt" size="lg">
          Request the data
        </Button>
        <Button to="/esg" variant="outline-light" size="lg">
          ESG commitments
        </Button>
      </PageHero>

      <StatBand tone="brand" stats={ENV_METRICS} />

      {/* ---- headline over video ---- */}
      <section className="relative isolate overflow-hidden bg-ink-950 py-24 sm:py-32">
        <div className="absolute inset-0 -z-20">
          <video
            className="h-full w-full object-cover"
            src={VIDEO.forest}
            poster={VIDEO.forestPoster}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-ink-950/80" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950 via-brand-950/40 to-ink-950" />
        <div className="noise absolute inset-0 -z-10" />

        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="eyebrow-dark">
                <Icon name="Leaf" className="h-3.5 w-3.5" />
                Since 2019
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-8 font-display text-6xl font-extrabold leading-none text-white sm:text-7.5xl">
                <Counter value={68} />
                <span className="text-gradient-volt"> M kg</span>
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 text-xl text-white/70">of CO₂ that was never released</p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mx-auto mt-6 max-w-2xl text-[16.5px] leading-relaxed text-white/65">
                That is the equivalent of taking about 14,800 petrol two-wheelers off Indian roads
                permanently — or the annual carbon sequestration of roughly 2.8 million mature trees.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---- air quality table ---- */}
      <Section tone="light">
        <SectionHeading
          eyebrow="Air quality"
          title="Carbon is not the only thing riders breathe"
          lead="In Indian cities the immediate public-health argument for electric two-wheelers is local air pollution, not global warming. Both matter; one is felt today."
        />

        <RevealGroup className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-3xl border border-neutral-200">
          <RevealItem className="grid grid-cols-[1fr_1fr] gap-4 bg-neutral-50 px-6 py-4 text-[11px] font-semibold uppercase tracking-[.14em] text-neutral-500 sm:grid-cols-[1fr_1fr_1.6fr]">
            <span>Pollutant</span>
            <span>Avoided to date</span>
            <span className="hidden sm:block">Why it matters</span>
          </RevealItem>

          {AIR.map((a) => (
            <RevealItem
              key={a.pollutant}
              className="grid grid-cols-[1fr_1fr] items-center gap-4 border-t border-neutral-100 px-6 py-5 sm:grid-cols-[1fr_1fr_1.6fr]"
            >
              <span className="font-display font-bold text-ink-900">{a.pollutant}</span>
              <span className="font-display text-[15px] font-bold text-brand-700">{a.avoided}</span>
              <span className="col-span-2 text-[13.5px] leading-relaxed text-neutral-500 sm:col-span-1">
                {a.note}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-neutral-500">
            Tailpipe emissions avoided, calculated from metered SGD distance against Bharat Stage VI
            petrol two-wheeler emission factors. Upstream electricity generation emissions are
            reported separately in our annual impact report and are not netted off these figures.
          </p>
        </Reveal>
      </Section>

      <SplitFeature
        tone="deep"
        eyebrow="Energy"
        title="An electric fleet on a coal grid is still a compromise"
        body="India's grid is roughly half thermal, so a SGD scooter is not zero-emission end to end — it is about 71% cleaner than petrol on current grid mix. The honest answer is to fix the electricity, not to stop counting it."
        points={[
          { title: '61% renewable-powered hubs', body: 'Through contracted supply and rooftop solar, up from 34% in 2024.' },
          { title: 'Off-peak charging', body: 'Swap cabinets charge in windows with the cleanest available grid mix.' },
          { title: 'FY 2026-27 target', body: 'Every SGD-operated hub on contracted renewable supply.' },
        ]}
        image={IMG.forestRiver}
        imageAlt="Aerial view of forest and river"
        stat={{ value: '61%', label: 'hubs on renewable supply' }}
      />

      {/* ---- battery circularity ---- */}
      <Section tone="light">
        <SectionHeading
          eyebrow="Battery circularity"
          title="What happens to a pack when it stops holding charge"
          lead="The environmental case for electric collapses if the batteries end up in a landfill or an informal scrapyard. Ours do not."
        />

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CIRCULARITY.map((c, i) => (
            <RevealItem key={c.title}>
              <article className="card card-hover group relative h-full p-7">
                <span className="absolute right-6 top-6 font-display text-4xl font-extrabold text-neutral-100">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-700 transition-all duration-500 group-hover:bg-brand-500 group-hover:text-white">
                  <Icon name={c.icon} className="h-5 w-5" />
                </span>
                <h3 className="relative mt-6 text-lg leading-snug">{c.title}</h3>
                <p className="relative mt-3 text-[14.5px] leading-relaxed text-neutral-600">
                  {c.body}
                </p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <SplitFeature
        eyebrow="Beyond the fleet"
        title="Restoration work we fund directly"
        body="Avoided emissions are the core of our impact, but they do not restore anything. We fund native-species plantation and urban green cover in the cities where our riders breathe the worst air."
        points={[
          { title: '184,000 native trees', body: 'Planted across Haryana, Karnataka and Maharashtra since 2022.' },
          { title: 'Urban corridors first', body: 'Prioritising roadside plantation on the routes our riders use daily.' },
          { title: 'Survival audited', body: 'Third-party survival audits at 12, 24 and 36 months — currently 78%.' },
        ]}
        image={IMG.forestAerial}
        imageAlt="Aerial view of dense green forest"
        stat={{ value: '184,000', label: 'native trees planted' }}
        tone="muted"
        flip
      />

      <CTABand
        eyebrow="Environment"
        title="Want the underlying data?"
        lead="We share the full methodology, the assessor's statement and the raw per-city figures with clients, researchers and journalists on request."
        primary={{ label: 'Request the data', to: '/contact' }}
        secondary={{ label: 'Read our ESG report', to: '/esg' }}
        points={['Independently assessed', 'Published annually', 'Raw figures available']}
      />
    </>
  )
}
