import Seo from '@/components/ui/Seo'
import Button from '@/components/ui/Button'
import PageHero from '@/components/sections/PageHero'
import StepList from '@/components/sections/StepList'
import FeatureGrid from '@/components/sections/FeatureGrid'
import SplitFeature from '@/components/sections/SplitFeature'
import CTABand from '@/components/sections/CTABand'
import Section, { SectionHeading } from '@/components/ui/Section'
import Reveal, { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import Accordion from '@/components/ui/Accordion'
import Icon from '@/components/ui/Icon'
import { RTO_STEPS } from '@/data/content'
import { IMG } from '@/data/media'

const INCLUDED = [
  {
    icon: 'KeyRound',
    title: 'The RC in your name',
    body: 'At month 24 the registration certificate transfers to you, free of any lien or hypothecation. The vehicle is yours to keep, sell or pass on.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Insurance for the full term',
    body: 'Comprehensive cover plus ₹5 lakh personal accident cover, renewed by us every year of the plan at no extra cost.',
  },
  {
    icon: 'Wrench',
    title: 'Servicing for 24 months',
    body: 'All scheduled servicing and wear parts through the term. You inherit a vehicle that has been maintained on record, not neglected.',
  },
  {
    icon: 'BatteryCharging',
    title: 'Swaps stay unlimited',
    body: 'Full access to the swap network for the whole term. After you own the vehicle, swaps continue on a low monthly subscription.',
  },
  {
    icon: 'FileCheck',
    title: 'No credit bureau check',
    body: 'No CIBIL enquiry, no guarantor, no bank. Missing a payment reverts you to a standard rental and is never reported to a bureau.',
  },
  {
    icon: 'CalendarClock',
    title: 'An exit that is not a trap',
    body: 'Switch back to a normal rental at any point. You forfeit the ownership credit accrued, but you owe nothing further.',
  },
]

const ELIGIBILITY = [
  'Aadhaar and PAN, verified in the app',
  'Six months of delivery experience on any platform, or completion of Zapp rider training',
  'An active account on at least one delivery platform',
  'A bank account in your own name for auto-debit',
  'Age between 18 and 58 years',
  'A valid driving licence for high-speed models only',
]

const FAQ_RTO = [
  {
    q: 'What happens if I miss a monthly payment?',
    a: 'The plan pauses and reverts to a standard rental for that month. Your accrued ownership credit is held, not lost, and you can resume the next month. Nothing is reported to a credit bureau and no penalty interest is charged.',
  },
  {
    q: 'Can I choose which scooter I end up owning?',
    a: 'Yes. You select the specific model at the start and that vehicle is assigned to you for the full term. You can test-ride every model at the hub before committing.',
  },
  {
    q: 'What is the total amount I will pay?',
    a: '₹9,999 upfront plus ₹4,150 a month for 24 months — ₹1,09,599 in total, including insurance, servicing and unlimited battery swaps for the entire period. There is no balloon payment at the end.',
  },
  {
    q: 'What condition will the vehicle be in at month 24?',
    a: 'It will have covered roughly 45,000–60,000 km with a full service history on record. Battery packs are swapped continuously, so you receive a vehicle with a healthy pack rather than a degraded one.',
  },
  {
    q: 'Can I exit early and still own the vehicle?',
    a: 'Yes. From month 12 you can settle the remaining balance in one payment at a 6% discount and take ownership immediately.',
  },
  {
    q: 'Does the swap network still work after I own it?',
    a: 'Yes. Owners move to a ₹999 monthly swap subscription with the same unlimited access, or charge at home with the supplied charger.',
  },
]

export default function RentToOwn() {
  return (
    <>
      <Seo
        title="Rent to Own an Electric Scooter"
        description="Own your electric delivery scooter in 24 months. ₹4,150 a month with insurance, servicing and unlimited battery swaps included. No CIBIL check, no bank, no balloon payment."
        image={IMG.evCharging}
        path="/rent-to-own"
      />

      <PageHero
        eyebrow="Rent to own"
        title="Pay what you already pay. Own it at the end."
        lead="Twenty-four fixed monthly payments and the registration certificate comes to you — no bank, no CIBIL check, no guarantor and no balloon payment waiting at the finish."
        image={IMG.riderRoad}
        crumbs={[{ label: 'Rent' }, { label: 'Rent to Own' }]}
        stats={[
          { label: 'Monthly', value: '₹4,150' },
          { label: 'Upfront', value: '₹9,999' },
          { label: 'Term', value: '24 months' },
          { label: 'Credit check', value: 'None' },
        ]}
      >
        <Button to="/contact" variant="volt" size="lg">
          Check my eligibility
        </Button>
        <Button href="#how" variant="outline-light" size="lg" icon="ArrowDown">
          How it works
        </Button>
      </PageHero>

      <StepList
        id="how"
        eyebrow="How it works"
        title="Four steps to owning your vehicle"
        lead="The same money you would spend on a rental, pointed at ownership instead."
        steps={RTO_STEPS}
        tone="light"
      />

      {/* ---- cost breakdown ---- */}
      <Section tone="dark">
        <SectionHeading
          dark
          eyebrow="The full cost"
          title="Every rupee, stated upfront"
          lead="This is the entire cost of the plan. There is no processing fee, no documentation charge and no final payment."
        />

        <RevealGroup className="mx-auto mt-14 max-w-3xl space-y-px overflow-hidden rounded-3xl border border-white/10">
          {[
            { label: 'Booking amount, paid once', value: '₹9,999', note: 'splittable across 3 months' },
            { label: 'Monthly payment × 24', value: '₹4,150', note: 'auto-debited on a date you choose' },
            { label: 'Insurance for 24 months', value: 'Included', note: 'comprehensive + ₹5L accident cover' },
            { label: 'Servicing and spares', value: 'Included', note: 'for the entire term' },
            { label: 'Unlimited battery swaps', value: 'Included', note: 'at all 900+ points' },
            { label: 'RC transfer and paperwork', value: 'Included', note: 'handled by Zapp at month 24' },
          ].map((row) => (
            <RevealItem
              key={row.label}
              className="flex items-center justify-between gap-6 bg-ink-800 px-6 py-5 sm:px-8"
            >
              <span>
                <span className="block text-[15px] font-medium text-white">{row.label}</span>
                <span className="mt-0.5 block text-[13px] text-white/60">{row.note}</span>
              </span>
              <span className="shrink-0 font-display text-lg font-bold text-volt-400">
                {row.value}
              </span>
            </RevealItem>
          ))}

          <RevealItem className="flex items-center justify-between gap-6 bg-brand-600 px-6 py-6 sm:px-8">
            <span className="font-display text-lg font-bold text-white">Total over 24 months</span>
            <span className="font-display text-2xl font-extrabold text-white">₹1,09,599</span>
          </RevealItem>
        </RevealGroup>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-white/55">
            Figures are for the Zapp City 25 in Delhi NCR. Other models and cities vary; your exact
            schedule is shown in the app before you confirm anything. GST included.
          </p>
        </Reveal>
      </Section>

      <FeatureGrid
        eyebrow="What is included"
        title="Ownership without the ownership headaches"
        lead="Everything a rental covers stays covered for the full term — you simply keep the vehicle at the end."
        items={INCLUDED}
        tone="light"
      />

      {/* ---- eligibility ---- */}
      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Eligibility"
              title="Who can apply"
              lead="Deliberately simple. We assess you on your riding record, not your credit history."
            />

            <Reveal delay={0.15}>
              <ul className="mt-9 space-y-4">
                {ELIGIBILITY.map((e) => (
                  <li key={e} className="flex gap-3.5">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-500 text-white">
                      <Icon name="Check" className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-[15px] leading-relaxed text-neutral-700">{e}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-10">
                <Button to="/contact">Check my eligibility</Button>
              </div>
            </Reveal>
          </div>

          <Reveal from="left" delay={0.1}>
            <div className="card p-7 sm:p-8">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-700">
                <Icon name="IndianRupee" className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-xl">Rent to Own vs a bank loan</h3>

              <div className="mt-6 space-y-4">
                {[
                  { label: 'Credit score requirement', bank: 'CIBIL 700+', zapp: 'None' },
                  { label: 'Guarantor', bank: 'Usually required', zapp: 'Not required' },
                  { label: 'Down payment', bank: '15–25%', zapp: '₹9,999' },
                  { label: 'Insurance and servicing', bank: 'Your cost', zapp: 'Included' },
                  { label: 'Missed payment consequence', bank: 'Reported to bureau', zapp: 'Reverts to rental' },
                ].map((r) => (
                  <div key={r.label} className="border-t border-neutral-100 pt-4">
                    <p className="text-[13px] font-medium text-neutral-500">{r.label}</p>
                    <div className="mt-1.5 flex items-center justify-between gap-4">
                      <span className="text-[14.5px] text-neutral-500 line-through">{r.bank}</span>
                      <span className="font-display text-[15px] font-bold text-brand-700">
                        {r.zapp}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <SplitFeature
        tone="deep"
        eyebrow="Why it exists"
        title="Riders asked for a way out of renting forever"
        body="A rider spending ₹3,299 a month for four years has paid for the scooter twice and owns nothing. Rent to Own points the same money at an asset, without asking anyone to walk into a bank that would have turned them away."
        points={[
          { title: '6,400 riders enrolled', body: 'Since the programme opened in 2022.' },
          { title: '2,100 vehicles transferred', body: 'RCs already in riders’ own names.' },
          { title: '91% completion rate', body: 'Of plans that reached their scheduled end date.' },
        ]}
        image={IMG.portraitMan1}
        imageAlt="Zapp rider"
        stat={{ value: '2,100', label: 'vehicles now rider-owned' }}
        flip
      />

      {/* ---- FAQ ---- */}
      <Section tone="light">
        <SectionHeading
          eyebrow="Questions"
          title="Rent to Own, answered"
          lead="The questions riders ask before they sign."
        />
        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 max-w-3xl">
            <Accordion items={FAQ_RTO} defaultOpen={0} />
          </div>
        </Reveal>
      </Section>

      <CTABand
        eyebrow="Rent to own"
        title="Start the 24-month clock"
        lead="Check your eligibility in the app. If you qualify, you can pick your vehicle at the hub this week."
        primary={{ label: 'Check eligibility', to: '/contact' }}
        secondary={{ label: 'Compare with renting', to: '/scooter-rental' }}
        points={['No CIBIL check', '₹9,999 to start', 'Exit anytime']}
      />
    </>
  )
}
