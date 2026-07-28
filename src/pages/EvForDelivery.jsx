import Seo from '@/components/ui/Seo'
import Button from '@/components/ui/Button'
import PageHero from '@/components/sections/PageHero'
import FeatureGrid from '@/components/sections/FeatureGrid'
import SplitFeature from '@/components/sections/SplitFeature'
import StepList from '@/components/sections/StepList'
import StatBand from '@/components/sections/StatBand'
import CTABand from '@/components/sections/CTABand'
import Section, { SectionHeading, Glow } from '@/components/ui/Section'
import Reveal, { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import Icon from '@/components/ui/Icon'
import Marquee from '@/components/ui/Marquee'
import PartnerLogo from '@/components/ui/PartnerLogo'
import { ENTERPRISE_FEATURES, PARTNERS } from '@/data/content'
import { IMG } from '@/data/media'

const SLA = [
  { metric: '99.2%', label: 'Shift fill rate', note: 'riders present against committed slots' },
  { metric: '30 min', label: 'Escalation response', note: 'during your operating hours' },
  { metric: '< 0.4%', label: 'Order failure rate', note: 'attributable to vehicle or rider' },
  { metric: '48 hrs', label: 'Capacity ramp', note: 'to add up to 20% more riders' },
]

const ONBOARD = [
  {
    step: '01',
    title: 'Share your route profile',
    body: 'Daily order volume, drop density, shift windows and the zones you need covered.',
  },
  {
    step: '02',
    title: 'We model the fleet',
    body: 'Vehicle mix, rider count, hub placement and a cost-per-drop figure — usually within two working days.',
  },
  {
    step: '03',
    title: 'Pilot in one zone',
    body: 'A four-week paid pilot in a single zone so both sides can check the model against reality.',
  },
  {
    step: '04',
    title: 'Scale on a weekly commit',
    body: 'Expand zone by zone. Capacity is committed weekly, so peaks and troughs cost you nothing extra.',
  },
]

export default function EvForDelivery() {
  return (
    <>
      <Seo
        title="Managed EV Delivery Fleets for Business"
        description="SLA-backed managed rider fleets for quick commerce, food delivery and e-commerce. Riders recruited, trained and managed by Zapp, with live telemetry and Scope 3 reporting."
        image={IMG.warehouseVan}
        path="/ev-for-delivery"
      />

      <PageHero
        eyebrow="Enterprise"
        title="Delivery capacity, not a parking lot of scooters"
        lead="We recruit, verify, train and manage the riders. You commit weekly and get filled shifts against an SLA — with clean emissions data attached to every drop."
        image={IMG.riderBagMotorcycle}
        crumbs={[{ label: 'Rent' }, { label: 'EV for Delivery' }]}
        stats={[
          { label: 'Shift fill rate', value: '99.2%' },
          { label: 'Riders available', value: '24,000+' },
          { label: 'Cities live', value: '12' },
          { label: 'Commitment', value: 'Weekly' },
        ]}
      >
        <Button to="/contact" variant="volt" size="lg">
          Talk to enterprise sales
        </Button>
        <Button href="#sla" variant="outline-light" size="lg" icon="ArrowDown">
          See our SLAs
        </Button>
      </PageHero>

      {/* client marquee */}
      <section className="border-b border-neutral-200 bg-white py-12">
        <Reveal from="none">
          <p className="mb-8 text-center text-[11px] font-semibold uppercase tracking-[.2em] text-neutral-500">
            Trusted by the platforms moving India
          </p>
        </Reveal>
        <Marquee speed="slow">
          {PARTNERS.map((p) => (
            <PartnerLogo key={p.name} partner={p} />
          ))}
        </Marquee>
      </section>

      <FeatureGrid
        eyebrow="What you get"
        title="A managed service, not a rental invoice"
        lead="The difference between renting vehicles and buying delivery capacity is everything that happens around the vehicle."
        items={ENTERPRISE_FEATURES}
        tone="light"
      />

      {/* ---- SLA block ---- */}
      <Section id="sla" tone="dark" className="overflow-hidden">
        <Glow className="-right-24 top-1/4 h-96 w-96" color="volt" />

        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              dark
              align="left"
              eyebrow="Service levels"
              title="Commitments we write into the contract"
              lead="Every number below is measured monthly and reported to you. Miss them and service credits apply automatically — you do not have to claim them."
            />

            <Reveal delay={0.2}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button to="/contact" variant="volt">
                  Request the full SLA
                </Button>
              </div>
            </Reveal>
          </div>

          <RevealGroup className="grid gap-5 sm:grid-cols-2">
            {SLA.map((s) => (
              <RevealItem key={s.label} className="card-dark card-dark-hover p-7">
                <p className="font-display text-4xl font-extrabold text-volt-400">{s.metric}</p>
                <p className="mt-3 font-semibold text-white">{s.label}</p>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-white/65">{s.note}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      <SplitFeature
        eyebrow="Rider quality"
        title="The rider is the product"
        body="A delivery is only as good as the person making it. Every Zapp rider is background-verified, trained on your platform's flow, and covered by insurance before their first shift."
        points={[
          {
            title: 'Police and address verification',
            body: 'Completed before onboarding, refreshed annually, records available for audit.',
          },
          {
            title: 'Platform-specific training',
            body: 'We train on your app, your handover protocol and your customer-interaction standard.',
          },
          {
            title: 'Retention that shows up in your data',
            body: '71% of riders are still active after twelve months, against a gig-sector average near 30%.',
          },
          {
            title: 'A grievance process that works',
            body: 'Independent ombudsperson, 97.2% of cases closed within SLA. Fewer disputes reach you.',
          },
        ]}
        image={IMG.teamDiscussion}
        imageAlt="Rider training session"
        stat={{ value: '71%', label: '12-month rider retention' }}
        tone="light"
        flip
      />

      <StepList
        eyebrow="How we start"
        title="From first call to live zone in four weeks"
        lead="We do not ask for an annual commitment before you have seen the numbers in your own operation."
        steps={ONBOARD}
        tone="muted"
      />

      <SplitFeature
        tone="deep"
        eyebrow="Sustainability"
        title="Scope 3 data your auditor will actually accept"
        body="Most last-mile carbon reporting is an estimate multiplied by an assumption. We measure real distance per shipment on a metered vehicle and apply an audited petrol baseline."
        points={[
          { title: 'Per-shipment CO₂e avoided', body: 'Attributable to an order ID, not averaged across a month.' },
          { title: 'Independently assessed baseline', body: 'The petrol comparison factor is reviewed annually by a third party.' },
          { title: 'Monthly export', body: 'CSV and API, in the schema your ESG platform expects.' },
        ]}
        image={IMG.forestAerial}
        imageAlt="Aerial view of green forest"
        stat={{ value: '68M kg', label: 'CO₂ avoided to date' }}
      />

      <StatBand
        tone="brand"
        stats={[
          { value: 132, suffix: 'M+', label: 'Deliveries completed', sub: 'across all clients' },
          { value: 99.2, suffix: '%', label: 'Shift fill rate', sub: 'trailing 12 months' },
          { value: 31, suffix: '%', label: 'Lower cost per drop', sub: 'versus petrol fleets' },
          { value: 12, suffix: '', label: 'Cities live', sub: 'with same-week expansion' },
        ]}
      />

      <CTABand
        eyebrow="Enterprise"
        title="Let us model your routes"
        lead="Send us a week of order data. We will return a fleet plan, a cost-per-drop figure and a pilot proposal — no commitment required to see it."
        primary={{ label: 'Talk to enterprise sales', to: '/contact' }}
        secondary={{ label: 'See cargo loaders', to: '/cargo-loader' }}
        points={['Four-week paid pilot', 'Weekly commitments', 'Service credits on SLA miss']}
      />
    </>
  )
}
