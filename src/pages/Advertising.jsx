import Seo from '@/components/ui/Seo'
import Button from '@/components/ui/Button'
import PageHero from '@/components/sections/PageHero'
import FeatureGrid from '@/components/sections/FeatureGrid'
import SplitFeature from '@/components/sections/SplitFeature'
import StepList from '@/components/sections/StepList'
import CTABand from '@/components/sections/CTABand'
import Section, { SectionHeading, Glow } from '@/components/ui/Section'
import Reveal, { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import Icon from '@/components/ui/Icon'
import Counter from '@/components/ui/Counter'
import { AD_FORMATS } from '@/data/content'
import { CITIES } from '@/data/site'
import { IMG } from '@/data/media'

const REACH = [
  { value: 24000, suffix: '+', label: 'Branded vehicles available', sub: 'across 12 cities' },
  { value: 41, suffix: 'M', label: 'Daily impressions', sub: 'estimated, at full deployment' },
  { value: 10, suffix: ' hrs', label: 'Average daily exposure', sub: 'per vehicle, on the road' },
  { value: 0.09, suffix: '', label: 'Cost per thousand', sub: 'in rupees, vehicle wraps' },
]

const WHY = [
  {
    icon: 'Route',
    title: 'It moves where your buyers are',
    body: 'A billboard waits for an audience. A Zapp rider covers 95 km a day through the residential and commercial corridors where your customers actually live and shop.',
  },
  {
    icon: 'Target',
    title: 'Targeting a hoarding cannot do',
    body: 'Restrict a wrap fleet to specific pin codes, or run in-app placements only when riders enter a catchment you care about.',
  },
  {
    icon: 'FileBarChart',
    title: 'Measurement, not estimation',
    body: 'Every vehicle is GPS-metered. You get actual routes covered, dwell time by zone and impression modelling built on real movement data.',
  },
  {
    icon: 'IndianRupee',
    title: 'A fraction of static OOH',
    body: 'At ₹0.09 per thousand impressions, moving media reaches the same catchment for roughly a fifth of what a comparable hoarding costs.',
  },
]

const PROCESS = [
  {
    step: '01',
    title: 'Define the catchment',
    body: 'Tell us the cities, pin codes and audience you are trying to reach, and the window you want to run in.',
  },
  {
    step: '02',
    title: 'We size the fleet',
    body: 'A media plan with vehicle counts by zone, projected impressions and a cost breakdown — usually inside three working days.',
  },
  {
    step: '03',
    title: 'Production and fitment',
    body: 'We handle artwork adaptation, printing and fitment across hubs. A 500-vehicle campaign goes live in about ten days.',
  },
  {
    step: '04',
    title: 'Live reporting',
    body: 'A dashboard showing routes covered, zones penetrated and modelled impressions, updated daily through the campaign.',
  },
]

export default function Advertising() {
  return (
    <>
      <Seo
        title="Advertise on India's Largest EV Delivery Fleet"
        description="Reach 41 million daily impressions with vehicle wraps, delivery box branding and in-app placements across 24,000 Zapp riders in 12 Indian cities. From ₹0.09 CPM."
        image={IMG.roadsideBanner}
        path="/advertising"
      />

      <PageHero
        eyebrow="Advertising"
        title="Media that goes where the audience already is"
        lead="Twenty-four thousand vehicles covering 95 km a day through India's densest residential corridors. Geo-targetable, GPS-metered and a fraction of the cost of static outdoor."
        image={IMG.roadsideBanner}
        crumbs={[{ label: 'Partner' }, { label: 'Advertising' }]}
        stats={[
          { label: 'Daily impressions', value: '41M' },
          { label: 'Cost per thousand', value: '₹0.09' },
          { label: 'Cities', value: '12' },
          { label: 'Go-live', value: '~10 days' },
        ]}
      >
        <Button to="/contact" variant="volt" size="lg">
          Request a media plan
        </Button>
        <Button href="#formats" variant="outline-light" size="lg" icon="ArrowDown">
          See formats
        </Button>
      </PageHero>

      {/* ---- reach ---- */}
      <Section tone="dark" className="overflow-hidden">
        <Glow className="-left-24 top-0 h-96 w-96" />
        <Glow className="-right-20 bottom-0 h-80 w-80" color="volt" />

        <SectionHeading
          dark
          eyebrow="The reach"
          title="A fleet the size of a broadcast network"
          lead="Every figure below is derived from real GPS movement across our live fleet, not from a rate-card estimate."
        />

        <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {REACH.map((r) => (
            <RevealItem key={r.label} className="bg-ink-900 p-8">
              <p className="font-display text-4xl font-extrabold text-white">
                {r.label.includes('thousand') && '₹'}
                <Counter value={r.value} decimals={r.value < 1 ? 2 : 0} />
                <span className="ml-1 text-volt-400">{r.suffix}</span>
              </p>
              <p className="mt-3 font-semibold text-white/85">{r.label}</p>
              <p className="mt-1 text-[13px] text-white/60">{r.sub}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <FeatureGrid
        id="formats"
        eyebrow="Formats"
        title="Four surfaces, one fleet"
        lead="Mix and match. Most campaigns pair vehicle wraps for reach with in-app placements for conversion."
        items={AD_FORMATS}
        tone="light"
        cols={4}
      />

      <FeatureGrid
        eyebrow="Why it works"
        title="Moving media beats standing media"
        lead="The economics of outdoor advertising change when the surface covers 95 km a day instead of standing still."
        items={WHY}
        tone="muted"
        cols={4}
      />

      <SplitFeature
        tone="deep"
        eyebrow="In-app inventory"
        title="A hard audience to reach, in one place"
        body="Twenty-four thousand gig-economy riders open the Zapp app several times a day. For finance, insurance, telecom and FMCG brands, that is an audience conventional digital targeting struggles to isolate."
        points={[
          { title: '61% daily active', body: 'Riders open the app to swap, check earnings and book services.' },
          { title: 'Verified identities', body: 'Every user is KYC-verified, so the audience is real and de-duplicated.' },
          { title: 'Native placements', body: 'Home cards, offer sheets and push campaigns — not banner ads pasted on top.' },
        ]}
        image={IMG.analyticsScreen}
        imageAlt="Campaign analytics dashboard"
        stat={{ value: '61%', label: 'daily active riders' }}
      />

      <StepList
        eyebrow="How a campaign runs"
        title="From brief to on the road in ten days"
        lead="Production, fitment and reporting are all handled in-house — you approve artwork and receive a dashboard."
        steps={PROCESS}
        tone="light"
      />

      {/* ---- cities ---- */}
      <Section tone="muted" pad="md">
        <SectionHeading
          eyebrow="Coverage"
          title="Where you can run"
          lead="Campaigns can run nationally or in a single pin-code cluster."
        />
        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2.5">
            {CITIES.map((c) => (
              <span
                key={c}
                className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2.5 text-[14.5px] font-medium text-ink-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-700"
              >
                <Icon name="MapPin" className="h-3.5 w-3.5 text-brand-500" />
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </Section>

      <CTABand
        eyebrow="Advertising"
        title="Tell us who you are trying to reach"
        lead="Send us your catchment and budget. We will come back with a media plan, projected impressions and a cost per thousand within three working days."
        primary={{ label: 'Request a media plan', to: '/contact' }}
        secondary={{ label: 'See our fleet', to: '/ev-for-delivery' }}
        points={['No minimum spend for pilots', 'GPS-verified reporting', 'Go live in ~10 days']}
      />
    </>
  )
}
