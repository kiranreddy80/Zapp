import Seo from '@/components/ui/Seo'
import Button from '@/components/ui/Button'
import PageHero from '@/components/sections/PageHero'
import FeatureGrid from '@/components/sections/FeatureGrid'
import SplitFeature from '@/components/sections/SplitFeature'
import StatBand from '@/components/sections/StatBand'
import CTABand from '@/components/sections/CTABand'
import Section, { SectionHeading, Glow } from '@/components/ui/Section'
import Reveal, { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import Icon from '@/components/ui/Icon'
import { TECH_PILLARS } from '@/data/content'
import { IMG, VIDEO } from '@/data/media'

const STACK = [
  {
    layer: 'Vehicle',
    title: 'Onboard telematics unit',
    body: 'Custom hardware on every vehicle reading battery voltage, cell temperature, motor load, GPS and accelerometer.',
    detail: '4-second interval · offline buffering · OTA firmware',
  },
  {
    layer: 'Network',
    title: 'Swap-station controllers',
    body: 'Each cabinet reports slot occupancy, charge state and thermal condition, and accepts pre-positioning instructions.',
    detail: '900+ stations · 96% pack availability',
  },
  {
    layer: 'Platform',
    title: 'SGD OS',
    body: 'The fleet system of record: vehicles, riders, hubs, leases, servicing, payouts and compliance in one model.',
    detail: '99.95% uptime · event-driven · REST + webhooks',
  },
  {
    layer: 'Intelligence',
    title: 'Prediction layer',
    body: 'Models for battery degradation, demand forecasting, range estimation and maintenance scheduling.',
    detail: '900M km of training data · retrained weekly',
  },
  {
    layer: 'Interface',
    title: 'Rider and client apps',
    body: 'The SGD Rider app, hub console and enterprise dashboard — all reading the same source of truth.',
    detail: '8 languages · offline-tolerant · 4.6★ rated',
  },
]

export default function Technology() {
  return (
    <>
      <Seo
        title="Technology — SGD OS, Telematics and the Swap Network"
        description="How SGD Electric runs 24,000 vehicles: 4-second telematics, predictive maintenance trained on 900M km, swap-network orchestration and open APIs for enterprise clients."
        image={IMG.analyticsScreen}
        path="/technology"
      />

      <PageHero
        eyebrow="Technology"
        title="The unglamorous systems that make a fleet work"
        lead="Twenty-four thousand vehicles, nine hundred swap stations and a million battery cells only stay reliable if something is watching all of them, all the time. That something is SGD OS."
        image={IMG.analyticsScreen}
        crumbs={[{ label: 'Company' }, { label: 'Technology' }]}
        stats={[
          { label: 'Telemetry interval', value: '4 seconds' },
          { label: 'Training data', value: '900M km' },
          { label: 'Platform uptime', value: '99.95%' },
          { label: 'Fewer roadside failures', value: '−73%' },
        ]}
      >
        <Button to="/contact" variant="volt" size="lg">
          Talk to our team
        </Button>
        <Button href="#stack" variant="outline-light" size="lg" icon="ArrowDown">
          See the stack
        </Button>
      </PageHero>

      <FeatureGrid
        eyebrow="Capabilities"
        title="Six systems doing the actual work"
        lead="Each one exists because something broke at scale and a manual process could not keep up."
        items={TECH_PILLARS}
        tone="light"
      />

      {/* ---- stack ---- */}
      <Section id="stack" tone="dark" className="overflow-hidden">
        <Glow className="-left-24 top-1/4 h-96 w-96" />
        <Glow className="-right-24 bottom-1/4 h-80 w-80" color="volt" />

        <SectionHeading
          dark
          eyebrow="The stack"
          title="From the cell to the dashboard"
          lead="Five layers, each of which has to be right for the one above it to be trustworthy."
        />

        <RevealGroup className="mx-auto mt-14 max-w-4xl space-y-4">
          {STACK.map((s, i) => (
            <RevealItem key={s.layer}>
              <article className="card-dark card-dark-hover group grid gap-5 p-7 sm:grid-cols-[9rem_1fr] sm:items-start">
                <div className="flex items-center gap-3 sm:flex-col sm:items-start">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 font-display text-[13px] font-bold text-volt-400">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-[.16em] text-white/60">
                    {s.layer}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl text-white">{s.title}</h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-white/55">{s.body}</p>
                  <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-3.5 py-1.5 font-mono text-[12px] text-white/65">
                    <Icon name="CircleDot" className="h-3 w-3 text-brand-400" />
                    {s.detail}
                  </p>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <SplitFeature
        eyebrow="Predictive maintenance"
        title="Catching a failure days before it strands a rider"
        body="A rider whose scooter dies mid-shift loses a day's income. That is the failure mode we optimise against — not fleet uptime in aggregate, but the individual bad day."
        points={[
          {
            title: 'Battery degradation forecasting',
            body: 'Cell-level voltage curves flag a pack heading for failure roughly nine days out.',
          },
          {
            title: 'Wear-based servicing',
            body: 'Service intervals are set by actual brake and tyre wear, not a fixed calendar.',
          },
          {
            title: '73% fewer roadside failures',
            body: 'Measured per 10,000 vehicle-days, against our own 2022 baseline.',
          },
        ]}
        image={IMG.mechanicBike}
        imageAlt="Technician servicing an electric scooter"
        stat={{ value: '−73%', label: 'roadside failures' }}
        tone="light"
        flip
      />

      {/* ---- swap orchestration, over video ---- */}
      <section className="relative isolate overflow-hidden bg-ink-950 py-24 sm:py-32">
        <div className="absolute inset-0 -z-20">
          <video
            className="h-full w-full object-cover"
            src={VIDEO.city}
            poster={VIDEO.cityPoster}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-ink-950/85" />
        <div className="noise absolute inset-0 -z-10" />

        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="eyebrow-dark">
                <Icon name="BatteryCharging" className="h-3.5 w-3.5" />
                Swap orchestration
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 text-3xl leading-[1.1] text-white sm:text-4xl lg:text-5xl">
                We forecast where the batteries need to be
                <span className="text-gradient-volt"> before the riders get there.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
                Demand at a swap station is not uniform — it spikes at lunch, again at dinner, and
                differently in every neighbourhood. We model it per station per hour and pre-position
                charged packs so a rider almost never finds an empty slot.
              </p>
            </Reveal>
          </div>

          <RevealGroup className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-3">
            {[
              { v: '96%', l: 'Pack availability', s: 'at time of rider arrival' },
              { v: '90 sec', l: 'Median swap time', s: 'arrival to departure' },
              { v: '900+', l: 'Stations orchestrated', s: 'across 12 cities' },
            ].map((m) => (
              <RevealItem key={m.l} className="bg-ink-950/70 p-8 text-center backdrop-blur-sm">
                <p className="font-display text-4xl font-extrabold text-volt-400">{m.v}</p>
                <p className="mt-3 font-semibold text-white/85">{m.l}</p>
                <p className="mt-1 text-[13px] text-white/60">{m.s}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <SplitFeature
        eyebrow="Integrations"
        title="Your systems, our data"
        body="Enterprise clients do not want another dashboard to log into. Fleet status, rider attendance, proof of delivery and emissions data all push straight into your WMS, TMS or ERP."
        points={[
          'REST API with a full sandbox environment',
          'Webhook events for shift, trip and exception states',
          'Emissions export in CSV and JSON',
          'SSO via SAML and OIDC',
        ]}
        image={IMG.teamProject}
        imageAlt="Engineering team reviewing integration work"
        stat={{ value: '99.95%', label: 'API uptime, 12 months' }}
        tone="muted"
      />

      <StatBand
        tone="brand"
        stats={[
          { value: 900, suffix: 'M km', label: 'Ride data collected', sub: 'used for model training' },
          { value: 4, suffix: ' sec', label: 'Telemetry interval', sub: 'per vehicle' },
          { value: 99.95, suffix: '%', label: 'Platform uptime', sub: 'trailing 12 months' },
          { value: 6, suffix: ' min', label: 'Median KYC time', sub: 'Aadhaar to approval' },
        ]}
      />

      <CTABand
        eyebrow="Technology"
        title="Want the technical documentation?"
        lead="API reference, integration guides and a sandbox environment are available to enterprise clients and prospective partners on request."
        primary={{ label: 'Request API access', to: '/contact' }}
        secondary={{ label: 'See enterprise fleets', to: '/ev-for-delivery' }}
        points={['Sandbox environment', 'SSO supported', 'Webhook events']}
      />
    </>
  )
}
