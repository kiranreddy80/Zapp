import Seo from '@/components/ui/Seo'
import Button from '@/components/ui/Button'
import PageHero from '@/components/sections/PageHero'
import SplitFeature from '@/components/sections/SplitFeature'
import CTABand from '@/components/sections/CTABand'
import Section, { SectionHeading, Glow } from '@/components/ui/Section'
import Reveal, { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import Icon from '@/components/ui/Icon'
import { ESG_PILLARS } from '@/data/content'
import { IMG } from '@/data/media'

const COMMITMENTS = [
  {
    target: 'FY 2026-27',
    title: 'Net-zero operations',
    body: 'All SGD-operated hubs powered by contracted renewable supply, with residual emissions eliminated rather than offset.',
    progress: 61,
  },
  {
    target: '2027',
    title: '20% women riders',
    body: 'Women-only training batches, safety escorts for night shifts, and hub crèche facilities in every metro.',
    progress: 47,
  },
  {
    target: '2027',
    title: '100% battery circularity',
    body: 'Every pack either second-life deployed into stationary storage or materially recycled. Currently at 94%.',
    progress: 94,
  },
  {
    target: 'Ongoing',
    title: 'Zero unresolved grievances',
    body: 'Every rider grievance closed within the published SLA, reviewed by an ombudsperson independent of operations.',
    progress: 97,
  },
]

const GOVERNANCE = [
  { icon: 'Users', title: 'Board composition', body: 'Seven directors, three of them independent, including the chair of the audit committee.' },
  { icon: 'FileCheck', title: 'Plain-language contracts', body: 'Every rider contract is issued in Hindi and English at a reading level we test, not just translate.' },
  { icon: 'Scale', title: 'Independent ombudsperson', body: 'Reports to the board, not to operations. Reviews every escalated rider dispute.' },
  { icon: 'Lock', title: 'Data protection', body: 'ISO 27001 aligned controls, annual penetration testing, and DPDP Act compliance for rider data.' },
  { icon: 'FileBarChart', title: 'Annual impact report', body: 'Published in full, including the metrics that moved in the wrong direction.' },
  { icon: 'ShieldCheck', title: 'Supplier standards', body: 'Battery and vehicle suppliers audited annually against labour and environmental criteria.' },
]

export default function Esg() {
  return (
    <>
      <Seo
        title="ESG — Environment, Social and Governance"
        description="SGD Electric's ESG commitments: 68M kg CO₂ avoided, 24,000 livelihoods supported, 94% battery circularity, and independent governance over rider welfare."
        image={IMG.forestSun}
        path="/esg"
      />

      <PageHero
        eyebrow="ESG"
        title="Claims we are willing to be audited on"
        lead="Sustainability reporting is easy to write and hard to verify. Everything on this page is measured, assessed by a third party, and published including the parts that are going badly."
        image={IMG.forestSun}
        crumbs={[{ label: 'Company' }, { label: 'ESG' }]}
      >
        <Button to="/contact" variant="volt" size="lg">
          Request the full report
        </Button>
        <Button to="/environment" variant="outline-light" size="lg">
          Environmental data
        </Button>
      </PageHero>

      {/* ---- three pillars ---- */}
      <Section tone="light">
        <SectionHeading
          eyebrow="The three pillars"
          title="Environment, social, governance"
          lead="Not a framework we adopted for a report — the three places where a fleet business can most easily do harm."
        />

        <RevealGroup className="mt-14 grid gap-6 lg:grid-cols-3">
          {ESG_PILLARS.map((p) => (
            <RevealItem key={p.letter}>
              <article className="card card-hover flex h-full flex-col overflow-hidden">
                <div className={`bg-gradient-to-br ${p.color} p-8`}>
                  <span className="font-display text-6xl font-extrabold leading-none text-white/90">
                    {p.letter}
                  </span>
                  <h3 className="mt-4 text-2xl text-white">{p.title}</h3>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <p className="text-[15px] leading-relaxed text-neutral-600">{p.body}</p>

                  <dl className="mt-7 flex-1 space-y-3.5 border-t border-neutral-100 pt-6">
                    {p.points.map((pt) => (
                      <div key={pt.label} className="flex items-baseline justify-between gap-4">
                        <dt className="text-[14px] text-neutral-500">{pt.label}</dt>
                        <dd className="shrink-0 font-display text-[15px] font-bold text-brand-700">
                          {pt.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* ---- commitments with progress ---- */}
      <Section tone="dark" className="overflow-hidden">
        <Glow className="-left-24 top-1/4 h-96 w-96" />

        <SectionHeading
          dark
          eyebrow="Commitments"
          title="Four targets, with honest progress"
          lead="Two of these are ahead of schedule. One is behind. We would rather show you the bar than tell you about the ambition."
        />

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2">
          {COMMITMENTS.map((c) => (
            <RevealItem key={c.title}>
              <article className="card-dark card-dark-hover h-full p-7">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-volt-400/30 bg-volt-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-volt-400">
                    {c.target}
                  </span>
                  <span className="font-display text-2xl font-extrabold text-white">
                    {c.progress}%
                  </span>
                </div>

                <h3 className="mt-5 text-xl text-white">{c.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-white/55">{c.body}</p>

                <div className="mt-6">
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-brand-400 to-volt-500 transition-[width] duration-1000"
                      style={{ width: `${c.progress}%` }}
                    />
                  </div>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <SplitFeature
        eyebrow="Social"
        title="Gig work does not have to mean precarious work"
        body="The informal nature of delivery work is a policy problem we cannot solve alone. What we can do is make sure that every rider on our platform has a written contract, insurance, itemised deductions and somewhere to complain that is not us."
        points={[
          { title: 'Written contracts', body: 'In Hindi and English, at a reading level we test with riders.' },
          { title: '₹5 lakh accident cover', body: 'For 100% of riders, active before the first shift.' },
          { title: 'Itemised deductions', body: 'Every rupee withheld is explained in the app the day it happens.' },
          { title: 'Independent grievance route', body: 'An ombudsperson who reports to the board, not to operations.' },
        ]}
        image={IMG.portraitWoman1}
        imageAlt="SGD rider"
        stat={{ value: '97.2%', label: 'grievances closed in SLA' }}
        tone="light"
        flip
      />

      {/* ---- governance ---- */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Governance"
          title="Structures that outlast good intentions"
          lead="Every commitment above depends on someone being obliged to keep it after the people who made it have moved on."
        />

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GOVERNANCE.map((g) => (
            <RevealItem key={g.title}>
              <article className="card card-hover group h-full p-7">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-700 transition-all duration-500 group-hover:bg-brand-500 group-hover:text-white">
                  <Icon name={g.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-6 text-lg">{g.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">{g.body}</p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* ---- methodology note ---- */}
      <Section tone="light" pad="md">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-3xl border border-neutral-200 bg-neutral-50 p-8 sm:p-10">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-brand-700 shadow-card">
              <Icon name="FileBarChart" className="h-5 w-5" />
            </span>
            <h3 className="mt-6 text-xl">How we measure</h3>
            <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-neutral-600">
              <p className="dropcap">
                Avoided emissions are calculated per kilometre travelled on a metered SGD vehicle,
                against a petrol two-wheeler baseline of 0.0489 kg CO₂e per kilometre. That baseline
                is reviewed annually by an independent assessor and adjusted for the Indian fleet mix.
              </p>
              <p>
                We report avoided emissions and separately report our own operational emissions
                (grid electricity, hub energy, corporate travel). We do not net one against the
                other, and we do not purchase offsets to close the gap.
              </p>
              <p>
                Social metrics come from our own payroll and rider systems and are reconciled monthly.
                Grievance resolution figures are compiled by the ombudsperson's office, not by
                operations.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      <CTABand
        eyebrow="ESG"
        title="Read the full impact report"
        lead="Ninety pages, including methodology, third-party assurance statements and the targets we are behind on."
        primary={{ label: 'Request the report', to: '/contact' }}
        secondary={{ label: 'See environmental data', to: '/environment' }}
        points={['Third-party assured', 'Published annually', 'Methodology included']}
      />
    </>
  )
}
