import Seo from '@/components/ui/Seo'
import Button from '@/components/ui/Button'
import PageHero from '@/components/sections/PageHero'
import StepList from '@/components/sections/StepList'
import FeatureGrid from '@/components/sections/FeatureGrid'
import SplitFeature from '@/components/sections/SplitFeature'
import CTABand from '@/components/sections/CTABand'
import FaqSection from '@/components/home/FaqSection'
import Section, { SectionHeading, Glow } from '@/components/ui/Section'
import Reveal, { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import Icon from '@/components/ui/Icon'
import Img from '@/components/ui/Img'
import AppBadges from '@/components/ui/AppBadges'
import { EARN_TIERS, HOW_IT_WORKS, TESTIMONIALS, FAQS } from '@/data/content'
import { IMG } from '@/data/media'
import cn from '@/lib/cn'

const SUPPORT = [
  {
    icon: 'Users',
    title: 'We place you with a platform',
    body: 'SGD is an onboarding partner for every major delivery platform in India. Tell us your city and preferred shift and we route your application to the ones hiring.',
  },
  {
    icon: 'GraduationCap',
    title: 'Free training at the hub',
    body: 'A half-day session covering the app, safe riding, customer handling and how order batching actually works. No charge, and you are paid a stipend for the day.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Insurance from day one',
    body: '₹5 lakh personal accident cover plus comprehensive vehicle insurance, active before your first shift.',
  },
  {
    icon: 'IndianRupee',
    title: 'Transparent deductions',
    body: 'Every rupee taken from your payout is itemised in the app on the day it happens. No unexplained line items, ever.',
  },
  {
    icon: 'Headphones',
    title: 'Support in your language',
    body: 'Hindi, English, Tamil, Telugu, Kannada, Bengali, Marathi and Gujarati — 24 hours a day.',
  },
  {
    icon: 'Scale',
    title: 'A grievance process that works',
    body: 'An ombudsperson independent of operations reviews every escalated dispute. 97.2% are closed within our published SLA.',
  },
]

export default function DeliverAndEarn() {
  return (
    <>
      <Seo
        title="Become a Delivery Rider — Earn with SGD"
        description="Join 24,000+ riders earning ₹28,000–₹42,000 a month with SGD Electric. Free training, insurance from day one, no licence needed on low-speed models."
        image={IMG.riderBike}
        path="/deliver-and-earn"
      />

      <PageHero
        eyebrow="For riders"
        title="Earn more by spending less to ride"
        lead="Join 24,000 riders who cut their biggest cost. Free training, insurance from your first shift, and placement with the delivery platforms hiring in your city."
        image={IMG.riderBike}
        crumbs={[{ label: 'Rent' }, { label: 'Deliver & Earn' }]}
        stats={[
          { label: 'Typical take-home', value: '₹28k–₹42k' },
          { label: 'Onboarding time', value: '24 hours' },
          { label: 'Training cost', value: 'Free' },
          { label: 'Accident cover', value: '₹5 lakh' },
        ]}
      >
        <Button to="/contact" variant="volt" size="lg">
          Apply to ride
        </Button>
        <Button href="#earnings" variant="outline-light" size="lg" icon="ArrowDown">
          See earnings
        </Button>
      </PageHero>

      {/* ---- earnings tiers ---- */}
      <Section id="earnings" tone="light">
        <SectionHeading
          eyebrow="Earnings"
          title="What riders actually take home"
          lead="Gross earnings from delivery platforms, minus your SGD monthly rental. Figures are medians from our Delhi NCR and Bengaluru fleets over the last quarter."
        />

        <RevealGroup className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {EARN_TIERS.map((t) => (
            <RevealItem key={t.label}>
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
                  <span
                    className={cn(
                      'w-fit rounded-full px-3 py-1 text-[10.5px] font-bold uppercase tracking-wider',
                      t.featured ? 'bg-volt-500 text-ink-900' : 'bg-brand-50 text-brand-700',
                    )}
                  >
                    {t.label}
                  </span>

                  <p className={cn('mt-6 text-sm', t.featured ? 'text-white/65' : 'text-neutral-500')}>
                    {t.orders}
                  </p>

                  <p
                    className={cn(
                      'mt-2 font-display text-4xl font-extrabold',
                      t.featured ? 'text-volt-400' : 'text-ink-900',
                    )}
                  >
                    {t.net}
                  </p>
                  <p className={cn('mt-1 text-sm', t.featured ? 'text-white/65' : 'text-neutral-500')}>
                    take-home per month
                  </p>

                  <div
                    className={cn(
                      'mt-7 space-y-2.5 border-t pt-6 text-[14.5px]',
                      t.featured ? 'border-white/10' : 'border-neutral-100',
                    )}
                  >
                    <div className="flex justify-between">
                      <span className={t.featured ? 'text-white/65' : 'text-neutral-500'}>
                        Platform earnings
                      </span>
                      <span className={cn('font-semibold', t.featured ? 'text-white' : 'text-ink-900')}>
                        {t.gross}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className={t.featured ? 'text-white/65' : 'text-neutral-500'}>
                        SGD rental
                      </span>
                      <span className={cn('font-semibold', t.featured ? 'text-white' : 'text-ink-900')}>
                        −₹3,299
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className={t.featured ? 'text-white/65' : 'text-neutral-500'}>
                        Fuel, servicing, insurance
                      </span>
                      <span className="font-semibold text-brand-500">₹0</span>
                    </div>
                  </div>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-9 max-w-2xl text-center text-xs leading-relaxed text-neutral-500">
            Earnings depend on your city, the platform you ride for, the hours you work and demand on
            the day. These are medians from real rider payouts, not guarantees — your own results
            will vary.
          </p>
        </Reveal>
      </Section>

      <StepList
        eyebrow="Getting started"
        title="Four steps, one day"
        lead="Everything below happens in the SGD Rider app. There is no office to visit and no agent to pay."
        steps={HOW_IT_WORKS}
        tone="muted"
      />

      <FeatureGrid
        eyebrow="What we do for you"
        title="More than a vehicle on rent"
        lead="Getting you earning is the job. The scooter is only part of it."
        items={SUPPORT}
        tone="light"
      />

      {/* ---- rider stories ---- */}
      <Section tone="dark" className="overflow-hidden">
        <Glow className="-left-24 top-1/4 h-96 w-96" />

        <SectionHeading
          dark
          eyebrow="Rider stories"
          title="People who made the switch"
          lead="Three riders, three cities, three sets of numbers they were willing to share."
        />

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.filter((t) => t.role.startsWith('Rider')).slice(0, 3).map((t) => (
            <RevealItem key={t.name}>
              <figure className="card-dark card-dark-hover flex h-full flex-col p-7">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} name="Star" className="h-3.5 w-3.5 fill-volt-500 text-volt-500" />
                  ))}
                </div>

                <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-white/70">
                  “{t.quote}”
                </blockquote>

                <figcaption className="mt-7 flex items-center gap-3.5 border-t border-white/10 pt-6">
                  <Img src={t.avatar} alt="" wrapperClassName="h-12 w-12 shrink-0 rounded-full" />
                  <span className="min-w-0 flex-1">
                    <span className="block font-display font-bold text-white">{t.name}</span>
                    <span className="block text-[13px] text-white/65">{t.role}</span>
                  </span>
                  <span className="text-right">
                    <span className="block font-display text-lg font-extrabold text-volt-400">
                      {t.metric}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <SplitFeature
        eyebrow="The app"
        title="Everything you need in one place"
        body="Find your nearest swap point, see exactly what you earned today, book a service slot and raise a ticket — without calling anyone or visiting a hub."
        points={[
          'Live earnings and itemised deductions',
          'Swap-point availability in real time',
          'Service booking and ticket tracking',
          'Weekly bonus and campaign progress',
        ]}
        image={IMG.urbanScooterRider}
        imageAlt="Rider using the SGD app"
        stat={{ value: '4.6★', label: '84,000+ reviews' }}
        tone="muted"
        flip
      >
        <AppBadges light />
      </SplitFeature>

      <FaqSection items={FAQS.slice(0, 6)} tone="light" />

      <CTABand
        eyebrow="For riders"
        title="Your first shift could be tomorrow"
        lead="Apply in the app, clear KYC today, collect your scooter at the hub and start earning. No licence needed on our low-speed models."
        primary={{ label: 'Apply to ride', to: '/contact' }}
        secondary={{ label: 'See rental plans', to: '/scooter-rental' }}
        points={['Free training', '₹5L accident cover', 'Daily payouts']}
      />
    </>
  )
}
