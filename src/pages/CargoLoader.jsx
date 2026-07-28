import Seo from '@/components/ui/Seo'
import Button from '@/components/ui/Button'
import PageHero from '@/components/sections/PageHero'
import FeatureGrid from '@/components/sections/FeatureGrid'
import SpecGrid from '@/components/sections/SpecGrid'
import SplitFeature from '@/components/sections/SplitFeature'
import StatBand from '@/components/sections/StatBand'
import CTABand from '@/components/sections/CTABand'
import Section, { SectionHeading } from '@/components/ui/Section'
import { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import Icon from '@/components/ui/Icon'
import { CARGO_USE_CASES, SPECS_3W } from '@/data/content'
import { IMG } from '@/data/media'

const COMPARISON = [
  { metric: 'Energy cost per km', diesel: '₹4.90', zapp: '₹0.31', better: true },
  { metric: 'Monthly maintenance', diesel: '₹4,200', zapp: 'Included', better: true },
  { metric: 'Permit and fitness', diesel: '₹18,000 / yr', zapp: 'Included', better: true },
  { metric: 'Driver required', diesel: 'Yes', zapp: 'Yes', better: false },
  { metric: 'CO₂ per 100 km', diesel: '24.6 kg', zapp: '0 kg tailpipe', better: true },
  { metric: 'City entry restrictions', diesel: 'Increasing', zapp: 'Exempt', better: true },
]

const OPS = [
  {
    icon: 'Gauge',
    title: 'Live telematics',
    body: 'Location, state of charge, load sensor and driver behaviour streamed every four seconds into your dashboard or over our API.',
  },
  {
    icon: 'Route',
    title: 'Route planning',
    body: 'Multi-drop sequencing that accounts for payload, gradient and remaining range — not just distance.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Cargo security',
    body: 'Tamper-evident container locks, geofence alerts and an immobiliser that can be triggered remotely.',
  },
  {
    icon: 'FileBarChart',
    title: 'Emissions reporting',
    body: 'Per-shipment CO₂e avoided, exported monthly in a format your Scope 3 auditor will accept.',
  },
]

export default function CargoLoader() {
  return (
    <>
      <Seo
        title="Electric 3-Wheeler Cargo Loader Rental"
        description="Rent electric 3-wheeler cargo loaders with 550 kg payload and 140 km range. Middle-mile, dark-store replenishment and cold chain, at a third of diesel running cost."
        image={IMG.threeWheelerStreet}
        path="/cargo-loader"
      />

      <PageHero
        eyebrow="3-Wheeler cargo"
        title="Move 550 kg for the price of a scooter"
        lead="Electric cargo loaders for middle-mile logistics, dark-store replenishment and cold chain — with servicing, insurance and charging infrastructure handled by us."
        image={IMG.threeWheelerStreet}
        crumbs={[{ label: 'Rent' }, { label: '3-Wheeler Cargo' }]}
        stats={[
          { label: 'Certified payload', value: '550 kg' },
          { label: 'Range, loaded', value: '140 km' },
          { label: 'Cargo volume', value: '180 cu ft' },
          { label: 'Energy cost', value: '₹0.31 / km' },
        ]}
      >
        <Button to="/contact" variant="volt" size="lg">
          Request a fleet quote
        </Button>
        <Button href="#comparison" variant="outline-light" size="lg" icon="ArrowDown">
          Compare with diesel
        </Button>
      </PageHero>

      <SpecGrid
        eyebrow="The vehicle"
        title="A working truck, in a city-legal footprint"
        lead="Liquid-cooled LFP pack, closed container deck and a chassis certified for continuous commercial duty."
        specs={SPECS_3W}
        image={IMG.threeWheelerRural}
        imageAlt="Electric three-wheeler cargo loader"
        note="Payload and range are certified values at 25 °C ambient. Refrigerated variants reduce usable range by approximately 18%."
      />

      <FeatureGrid
        eyebrow="Use cases"
        title="Where the loader earns its keep"
        lead="Four workloads where an electric three-wheeler beats both a two-wheeler and a diesel tempo."
        items={CARGO_USE_CASES}
        tone="muted"
        cols={4}
      />

      {/* ---- diesel comparison table ---- */}
      <Section id="comparison" tone="dark">
        <SectionHeading
          dark
          eyebrow="The numbers"
          title="Against a diesel tempo, line by line"
          lead="Based on a 90 km daily dark-store replenishment loop, averaged across our Mumbai and Bengaluru fleets."
        />

        <RevealGroup className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-3xl border border-white/10">
          <RevealItem className="grid grid-cols-[1.4fr_1fr_1fr] gap-4 bg-white/[.06] px-6 py-4 text-[11px] font-semibold uppercase tracking-[.14em] text-white/65">
            <span>Metric</span>
            <span className="text-center">Diesel tempo</span>
            <span className="text-center text-volt-400">Zapp loader</span>
          </RevealItem>

          {COMPARISON.map((row) => (
            <RevealItem
              key={row.metric}
              className="grid grid-cols-[1.4fr_1fr_1fr] items-center gap-4 border-t border-white/[.07] px-6 py-5"
            >
              <span className="text-[14.5px] text-white/70">{row.metric}</span>
              <span className="text-center text-[14.5px] text-white/60">{row.diesel}</span>
              <span className="flex items-center justify-center gap-1.5 text-center font-display text-[15px] font-bold text-volt-400">
                {row.better && <Icon name="CheckCircle2" className="h-4 w-4" />}
                {row.zapp}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-white/55">
          Diesel figures assume ₹92/litre at 13 km/l, annual fitness and permit renewal, and
          quarterly servicing. Zapp figures assume ₹8.40/kWh commercial tariff. Driver cost is
          identical in both cases and excluded.
        </p>
      </Section>

      <SplitFeature
        eyebrow="Operations"
        title="Charging infrastructure you do not have to build"
        body="Depot charging is the hidden cost of electrifying a cargo fleet. We install, own and maintain the chargers at your warehouse — or your vehicles use our public network at no extra cost."
        points={[
          {
            title: 'Depot installation included',
            body: 'Load assessment, wiring, chargers and AMC, at no capital cost to you.',
          },
          {
            title: 'Overnight scheduling',
            body: 'Charging is sequenced to your tariff windows so you draw power when it is cheapest.',
          },
          {
            title: 'Fallback on the public network',
            body: 'If a depot charger fails, drivers use any of our 900+ points without a service interruption.',
          },
        ]}
        image={IMG.warehouseVan}
        imageAlt="Loading a delivery vehicle at a warehouse"
        stat={{ value: '4 hrs', label: 'full charge, 90 min to 80%' }}
        tone="light"
      />

      <FeatureGrid
        eyebrow="Fleet software"
        title="Every vehicle, visible"
        lead="ZappOS ships with the fleet. No separate licence, no per-seat fee."
        items={OPS}
        tone="muted"
        cols={4}
      />

      <StatBand
        tone="brand"
        stats={[
          { value: 3400, suffix: '+', label: 'Cargo loaders deployed', sub: 'across six metros' },
          { value: 31, suffix: '%', label: 'Lower cost per drop', sub: 'versus diesel tempo' },
          { value: 280, suffix: '', label: 'Dark stores served', sub: 'daily replenishment' },
          { value: 99.1, suffix: '%', label: 'On-time dispatch', sub: 'trailing 90 days' },
        ]}
      />

      <CTABand
        eyebrow="For business"
        title="Get a fleet plan sized to your routes"
        lead="Send us your daily volumes and drop density. We will come back with vehicle count, charging plan and a cost-per-drop figure within two working days."
        primary={{ label: 'Request a quote', to: '/contact' }}
        secondary={{ label: 'See managed fleets', to: '/ev-for-delivery' }}
        points={['No capital outlay', 'Weekly commitments', 'Scope 3 data included']}
      />
    </>
  )
}
