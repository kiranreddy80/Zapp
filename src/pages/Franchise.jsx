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
import Icon from '@/components/ui/Icon'
import { FRANCHISE_TIERS } from '@/data/content'
import { IMG } from '@/data/media'
import cn from '@/lib/cn'

const SUPPORT = [
  {
    icon: 'Bike',
    title: 'Vehicles on lease, not purchase',
    body: 'You do not buy the fleet. Vehicles are leased to your hub, which is what keeps the entry cost within reach of a first-time operator.',
  },
  {
    icon: 'Users',
    title: 'Riders sourced for you',
    body: 'Rider demand is generated centrally through our app and platform partnerships. You manage the hub; we fill it.',
  },
  {
    icon: 'Cpu',
    title: 'ZappOS licence included',
    body: 'Fleet tracking, battery health, rider attendance, billing and payout reconciliation — the same software our own hubs run on.',
  },
  {
    icon: 'GraduationCap',
    title: 'Two weeks of training',
    body: 'For you and two staff, at an operating hub in your region. Covers operations, safety, service and the software.',
  },
  {
    icon: 'BatteryCharging',
    title: 'Charging infrastructure',
    body: 'Load assessment, charger installation, swap-cabinet fitment and the annual maintenance contract, all set up by us.',
  },
  {
    icon: 'Megaphone',
    title: 'Marketing support',
    body: 'Co-funded local rider acquisition campaigns, signage, launch collateral and the national brand behind you.',
  },
]

const PROCESS = [
  {
    step: '01',
    title: 'Express interest',
    body: 'Tell us your city, the space you have access to and the capital you are prepared to commit.',
  },
  {
    step: '02',
    title: 'Territory assessment',
    body: 'We model rider demand, platform density and competition in your pin-code cluster and share the numbers with you.',
  },
  {
    step: '03',
    title: 'Site and agreement',
    body: 'We approve the site, sign the franchise agreement and set up the charging and swap infrastructure.',
  },
  {
    step: '04',
    title: 'Train and launch',
    body: 'Two weeks of training, vehicles delivered, riders assigned. Most hubs reach 70% utilisation within eight weeks.',
  },
]

const FAQ_FRANCHISE = [
  {
    q: 'How is the franchise fee structured?',
    a: 'A one-time territory fee that is part of the investment figures shown above, then a revenue share on hub earnings. There is no fixed monthly royalty, so a slow month does not create a bill you cannot pay.',
  },
  {
    q: 'Do I need experience in logistics or EVs?',
    a: 'No. Roughly 60% of our partners came from unrelated businesses — retail, real estate, auto dealerships. The two-week training and the ongoing ops support are designed for that.',
  },
  {
    q: 'What space do I actually need?',
    a: 'Ground-floor commercial space with a shutter, three-phase power availability, and parking access. It does not need to be on a main road — rider hubs are destinations, not walk-in retail.',
  },
  {
    q: 'How is the payback period calculated?',
    a: 'Against hub-level EBITDA at the utilisation rates our existing hubs of that size achieve. We share the full model with every serious applicant, including the assumptions we could be wrong about.',
  },
  {
    q: 'What happens if the hub underperforms?',
    a: 'We review quarterly. If utilisation stays below target, we adjust vehicle allocation, run additional rider acquisition at our cost, or reassign vehicles to a nearby hub so you are not paying to keep idle stock.',
  },
  {
    q: 'Can I own more than one hub?',
    a: 'Yes, and most partners do. City Hub and Master Franchise partners typically add their second location within twelve months.',
  },
]

export default function Franchise() {
  return (
    <>
      <Seo
        title="Franchise Opportunity — Run a Zapp Hub"
        description="Own and operate a Zapp Electric hub. Vehicles leased, riders sourced, software and training included. Investment from ₹6 lakh with 14–20 month payback."
        image={IMG.garageBikes}
        path="/franchise"
      />

      <PageHero
        eyebrow="Franchise"
        title="Run the hub. We will run the hard parts."
        lead="Vehicles on lease, riders sourced centrally, software and charging infrastructure included. You bring local operating discipline and a site — we bring everything else."
        image={IMG.garageBikes}
        crumbs={[{ label: 'Partner' }, { label: 'Franchise' }]}
        stats={[
          { label: 'Investment from', value: '₹6 lakh' },
          { label: 'Payback', value: '14–20 months' },
          { label: 'Active partners', value: '140+' },
          { label: 'Cities open', value: '12 + tier-2' },
        ]}
      >
        <Button to="/contact" variant="volt" size="lg">
          Apply for a territory
        </Button>
        <Button href="#tiers" variant="outline-light" size="lg" icon="ArrowDown">
          Compare tiers
        </Button>
      </PageHero>

      <StatBand
        tone="brand"
        stats={[
          { value: 140, suffix: '+', label: 'Franchise partners', sub: 'across 12 cities' },
          { value: 16, suffix: ' mo', label: 'Median payback', sub: 'across all hub sizes' },
          { value: 78, suffix: '%', label: 'Average utilisation', sub: 'after month six' },
          { value: 94, suffix: '%', label: 'Partner renewal rate', sub: 'at end of first term' },
        ]}
      />

      {/* ---- tiers ---- */}
      <Section id="tiers" tone="light">
        <SectionHeading
          eyebrow="Investment tiers"
          title="Three ways in, depending on your appetite"
          lead="Every tier includes the vehicles, the software, the training and the charging setup. The difference is territory size and fleet allocation."
        />

        <RevealGroup className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {FRANCHISE_TIERS.map((t) => (
            <RevealItem key={t.name}>
              <article
                className={cn(
                  'relative flex h-full flex-col overflow-hidden rounded-3xl p-8 transition-all duration-500',
                  t.featured
                    ? 'border border-brand-400/30 bg-ink-900 text-white shadow-lift lg:-mt-4 lg:pb-12'
                    : 'card card-hover',
                )}
              >
                {t.featured && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-900/60 via-ink-900 to-ink-950" />
                    <div className="noise absolute inset-0" />
                  </>
                )}

                <div className="relative flex flex-1 flex-col">
                  {t.badge && (
                    <span
                      className={cn(
                        'mb-5 w-fit rounded-full px-3 py-1 text-[10.5px] font-bold uppercase tracking-wider',
                        t.featured ? 'bg-volt-500 text-ink-900' : 'bg-brand-50 text-brand-700',
                      )}
                    >
                      {t.badge}
                    </span>
                  )}

                  <h3 className={cn('text-xl', t.featured && 'text-white')}>{t.name}</h3>

                  <p
                    className={cn(
                      'mt-5 font-display text-3xl font-extrabold',
                      t.featured ? 'text-volt-400' : 'text-ink-900',
                    )}
                  >
                    {t.investment}
                  </p>
                  <p className={cn('mt-1 text-sm', t.featured ? 'text-white/65' : 'text-neutral-500')}>
                    total investment
                  </p>

                  <dl
                    className={cn(
                      'mt-7 grid grid-cols-3 gap-3 border-y py-5 text-center',
                      t.featured ? 'border-white/10' : 'border-neutral-100',
                    )}
                  >
                    {[
                      { k: 'Fleet', v: t.fleet },
                      { k: 'Space', v: t.space },
                      { k: 'Payback', v: t.payback },
                    ].map((d) => (
                      <div key={d.k}>
                        <dt
                          className={cn(
                            'text-[10.5px] font-semibold uppercase tracking-wider',
                            t.featured ? 'text-white/60' : 'text-neutral-500',
                          )}
                        >
                          {d.k}
                        </dt>
                        <dd
                          className={cn(
                            'mt-1.5 text-[13px] font-semibold leading-tight',
                            t.featured ? 'text-white' : 'text-ink-900',
                          )}
                        >
                          {d.v}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <ul className="mt-6 flex-1 space-y-3">
                    {t.features.map((f) => (
                      <li
                        key={f}
                        className={cn(
                          'flex items-start gap-2.5 text-[14.5px]',
                          t.featured ? 'text-white/70' : 'text-neutral-600',
                        )}
                      >
                        <Icon
                          name="CheckCircle2"
                          className={cn(
                            'mt-0.5 h-4 w-4 shrink-0',
                            t.featured ? 'text-volt-400' : 'text-brand-500',
                          )}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-9">
                    <Button to="/contact" full variant={t.featured ? 'volt' : 'outline'}>
                      Enquire about {t.name}
                    </Button>
                  </div>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-9 max-w-2xl text-center text-xs leading-relaxed text-neutral-500">
            Investment ranges include the territory fee, site fit-out and working capital, and vary
            by city and site condition. Payback periods are based on the performance of existing hubs
            of comparable size — they are an expectation, not a guarantee.
          </p>
        </Reveal>
      </Section>

      <FeatureGrid
        eyebrow="What we provide"
        title="You are buying an operating system, not a logo"
        lead="The franchise fee buys the machinery that makes a hub work, and the demand that keeps it busy."
        items={SUPPORT}
        tone="muted"
      />

      <StepList
        eyebrow="The process"
        title="From enquiry to open in about ten weeks"
        lead="We turn down more applications than we accept, because a hub that fails costs the partner more than it costs us."
        steps={PROCESS}
        tone="dark"
      />

      <SplitFeature
        eyebrow="Partner story"
        title="“Sixty vehicles out of one hub in Andheri”"
        body="Imran Sheikh joined as a Starter Hub partner in 2023 and moved to a City Hub within nine months. He now runs 60 vehicles with four staff and a second site under fit-out."
        points={[
          { title: 'Month 1–3', body: 'Reached 62% utilisation with 28 vehicles and two staff.' },
          { title: 'Month 9', body: 'Upgraded to City Hub, fleet expanded to 60 vehicles.' },
          { title: 'Month 17', body: 'Recovered the full investment; second site approved.' },
        ]}
        image={IMG.mechanicsChecking}
        imageAlt="Franchise partner at a Zapp hub"
        stat={{ value: '17 mo', label: 'to full payback' }}
        tone="light"
        flip
      />

      <Section tone="muted">
        <SectionHeading
          eyebrow="Questions"
          title="What partners ask before they commit"
          lead="If your question is not here, ask it on a call — we would rather answer it now than after you have signed."
        />
        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 max-w-3xl">
            <Accordion items={FAQ_FRANCHISE} defaultOpen={0} />
          </div>
        </Reveal>
      </Section>

      <CTABand
        eyebrow="Franchise"
        title="Find out if your city is open"
        lead="Territories are exclusive, so most cities have a limited number of slots. Tell us where you are and we will send the model for that territory."
        primary={{ label: 'Apply for a territory', to: '/contact' }}
        secondary={{ label: 'Investor leasing instead', to: '/investor-relations' }}
        points={['Exclusive territory', 'Vehicles on lease', 'No monthly royalty']}
      />
    </>
  )
}
