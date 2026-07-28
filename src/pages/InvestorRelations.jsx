import Seo from '@/components/ui/Seo'
import Button from '@/components/ui/Button'
import PageHero from '@/components/sections/PageHero'
import FeatureGrid from '@/components/sections/FeatureGrid'
import StepList from '@/components/sections/StepList'
import SplitFeature from '@/components/sections/SplitFeature'
import StatBand from '@/components/sections/StatBand'
import CTABand from '@/components/sections/CTABand'
import Section, { SectionHeading } from '@/components/ui/Section'
import Reveal, { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import Accordion from '@/components/ui/Accordion'
import Marquee from '@/components/ui/Marquee'
import Icon from '@/components/ui/Icon'
import { INVESTORS, TIMELINE } from '@/data/content'
import { IMG } from '@/data/media'

const LEASE_FEATURES = [
  {
    icon: 'TrendingUp',
    title: 'Yield from a working asset',
    body: 'You fund vehicles, we deploy them with verified riders and pay you a monthly lease rental. Returns come from the fleet working, not from a promise about growth.',
  },
  {
    icon: 'ShieldCheck',
    title: 'The asset stays yours',
    body: 'Vehicles are registered against your lease. If the arrangement ends, the asset is recoverable and re-deployable — this is not an unsecured note.',
  },
  {
    icon: 'Gauge',
    title: 'See your own fleet',
    body: 'A dashboard showing every vehicle you funded: where it is, who is riding it, utilisation, and the rental it generated this month.',
  },
  {
    icon: 'FileBarChart',
    title: 'Monthly statements',
    body: 'Payout schedules, utilisation reports and downloadable documents for your accountant, issued on a fixed date each month.',
  },
  {
    icon: 'Wrench',
    title: 'Maintenance is ours',
    body: 'Servicing, insurance, battery replacement and rider management are Zapp obligations. Your exposure is the asset, not the operation.',
  },
  {
    icon: 'Recycle',
    title: 'A defined end',
    body: 'At the end of the term, take the residual value, roll into a fresh fleet, or have us buy the assets back at a pre-agreed formula.',
  },
]

const PROCESS = [
  {
    step: '01',
    title: 'Introductory call',
    body: 'We walk through the structure, the risks and the actual utilisation numbers from comparable fleets.',
  },
  {
    step: '02',
    title: 'Diligence pack',
    body: 'Audited financials, fleet performance data, the lease agreement and the residual-value formula, all before you commit anything.',
  },
  {
    step: '03',
    title: 'Select and fund',
    body: 'Choose the fleet size and city. Vehicles are allocated to your lease and registered against it.',
  },
  {
    step: '04',
    title: 'Deployment and payouts',
    body: 'Vehicles are assigned to verified riders, usually within three weeks. Lease rentals begin the following month.',
  },
]

const FAQ_IR = [
  {
    q: 'What return should I expect?',
    a: 'Lease rentals are set against fleet utilisation and vehicle cost at the time of funding. We publish the actual realised yield of every prior cohort in the diligence pack rather than quoting a headline number here — historic performance is the honest basis for a projection, and it is not a guarantee.',
  },
  {
    q: 'What happens if a vehicle is damaged or stolen?',
    a: 'Every vehicle carries comprehensive insurance and a GPS immobiliser. Insured losses are replaced from the pool at no cost to you, and your lease continues uninterrupted against the replacement asset.',
  },
  {
    q: 'What is the minimum ticket size?',
    a: 'Twenty-five vehicles for individual investors, or a single-city fleet allocation for institutions. We deliberately do not accept very small tickets — the reporting overhead makes the economics poor for both sides.',
  },
  {
    q: 'Can I exit before the end of the term?',
    a: 'Yes, from month 18, either through buy-back at the pre-agreed residual formula or by transferring the lease to another investor from our register. Exits before month 18 are considered case by case.',
  },
  {
    q: 'How is utilisation risk shared?',
    a: 'Lease rentals are contracted, not variable, so day-to-day utilisation risk sits with Zapp rather than with you. Our exposure is that a poorly utilised fleet still owes you rent — which is precisely the incentive alignment we want.',
  },
  {
    q: 'Is this a regulated financial product?',
    a: 'It is an asset lease, not a security or a deposit. It is not covered by deposit insurance, and returns are not guaranteed by any regulator. Please take independent financial advice before committing capital.',
  },
]

export default function InvestorRelations() {
  return (
    <>
      <Seo
        title="Investor Relations — Lease a Fleet"
        description="Fund electric delivery vehicles and earn monthly lease rentals from a working fleet. Asset-backed, fully managed, with a live dashboard and monthly statements."
        image={IMG.teamMeeting}
        path="/investor-relations"
      />

      <PageHero
        eyebrow="Investor relations"
        title="Own the fleet. We will run it."
        lead="Fund electric delivery vehicles and earn a contracted monthly lease rental from assets that are working every day. Maintenance, insurance and rider management stay with us."
        image={IMG.teamMeeting}
        crumbs={[{ label: 'Partner' }, { label: 'Investor Relations' }]}
        stats={[
          { label: 'Minimum ticket', value: '25 vehicles' },
          { label: 'Fleet utilisation', value: '78% avg' },
          { label: 'Earliest exit', value: 'Month 18' },
          { label: 'Reporting', value: 'Monthly' },
        ]}
      >
        <Button to="/contact" variant="volt" size="lg">
          Request the diligence pack
        </Button>
        <Button href="#how" variant="outline-light" size="lg" icon="ArrowDown">
          How it works
        </Button>
      </PageHero>

      {/* ---- backers ---- */}
      <section className="border-b border-neutral-200 bg-white py-12">
        <Reveal from="none">
          <p className="mb-8 text-center text-[11px] font-semibold uppercase tracking-[.2em] text-neutral-500">
            Backed by
          </p>
        </Reveal>
        <Marquee speed="slow">
          {INVESTORS.map((inv) => (
            <span
              key={inv.name}
              className="mx-9 select-none whitespace-nowrap font-display text-xl font-bold text-neutral-300 transition-colors hover:text-brand-700 sm:text-2xl"
            >
              {inv.name}
            </span>
          ))}
        </Marquee>
      </section>

      <StatBand
        tone="brand"
        stats={[
          { value: 95, suffix: 'M', label: 'Series C raised', sub: 'in US dollars, 2025' },
          { value: 24000, suffix: '+', label: 'Vehicles deployed', sub: 'across 12 cities' },
          { value: 78, suffix: '%', label: 'Average utilisation', sub: 'trailing 12 months' },
          { value: 94, suffix: '%', label: 'Investor renewal', sub: 'at end of first term' },
        ]}
      />

      <FeatureGrid
        eyebrow="The structure"
        title="An asset lease, not a promise"
        lead="You are funding vehicles that exist, are registered against your lease, and can be recovered. That is the whole proposition."
        items={LEASE_FEATURES}
        tone="light"
      />

      <StepList
        id="how"
        eyebrow="The process"
        title="From first call to first payout"
        lead="Roughly six weeks end to end, most of which is diligence you control the pace of."
        steps={PROCESS}
        tone="dark"
      />

      <SplitFeature
        eyebrow="Transparency"
        title="Your dashboard shows the vehicles, not a summary"
        body="Every vehicle you funded, individually. Registration number, current city, assigned rider, kilometres this month, utilisation, and the rental it generated. If a vehicle sits idle, you will see it before we tell you."
        points={[
          'Per-vehicle utilisation and location',
          'Monthly payout statements and TDS documents',
          'Lease agreements and RC copies on demand',
          'Ticketing straight to your relationship manager',
        ]}
        image={IMG.analyticsScreen}
        imageAlt="Investor dashboard"
        stat={{ value: 'Monthly', label: 'statements, fixed date' }}
        tone="light"
        flip
      />

      {/* ---- milestones ---- */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Track record"
          title="Seven years of building the fleet"
          lead="The milestones that matter to someone assessing whether this business will still be here at the end of your lease term."
        />

        <RevealGroup className="mx-auto mt-14 max-w-3xl">
          {TIMELINE.slice(-5).map((t) => (
            <RevealItem key={t.year} className="relative flex gap-6 pb-10 last:pb-0">
              <div className="flex flex-col items-center">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-500 font-display text-[13px] font-bold text-white">
                  {t.year}
                </span>
                <span className="mt-2 w-px flex-1 bg-neutral-200 last:hidden" />
              </div>
              <div className="pt-2">
                <h3 className="text-lg">{t.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-neutral-600">{t.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section tone="light">
        <SectionHeading
          eyebrow="Questions"
          title="What investors ask us"
          lead="Including the ones we would rather you asked before committing than after."
        />
        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 max-w-3xl">
            <Accordion items={FAQ_IR} defaultOpen={0} />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mx-auto mt-12 flex max-w-3xl gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
            <Icon name="ShieldCheck" className="mt-0.5 h-5 w-5 shrink-0 text-neutral-500" />
            <p className="text-[13.5px] leading-relaxed text-neutral-500">
              <strong className="text-neutral-700">Important.</strong> Fleet leasing is an asset
              lease, not a deposit or a security. Returns are contracted but not guaranteed by any
              regulator, capital is at risk, and past fleet performance does not predict future
              results. Nothing on this page is investment advice — please take independent financial
              advice before committing capital.
            </p>
          </div>
        </Reveal>
      </Section>

      <CTABand
        eyebrow="Investor relations"
        title="Start with the diligence pack"
        lead="Audited financials, realised yields from prior cohorts, the lease agreement and the residual-value formula. No commitment required to read it."
        primary={{ label: 'Request the pack', to: '/contact' }}
        secondary={{ label: 'See the franchise route', to: '/franchise' }}
        points={['Asset-backed', 'Monthly statements', 'Exit from month 18']}
      />
    </>
  )
}
