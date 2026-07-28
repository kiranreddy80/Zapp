import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Seo from '@/components/ui/Seo'
import Button from '@/components/ui/Button'
import PageHero from '@/components/sections/PageHero'
import FeatureGrid from '@/components/sections/FeatureGrid'
import CTABand from '@/components/sections/CTABand'
import Section, { SectionHeading, Glow } from '@/components/ui/Section'
import Reveal, { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import Img from '@/components/ui/Img'
import Icon from '@/components/ui/Icon'
import Marquee from '@/components/ui/Marquee'
import Accordion from '@/components/ui/Accordion'
import {
  MISSION_VISION,
  IMPACT_LEDGER,
  SDG_GOALS,
  PARTNER_IMPACT,
  LIFE_GALLERY,
  TEAM_VOICES,
  ABOUT_FAQS,
  VALUES,
  TIMELINE,
  LEADERSHIP,
  INVESTORS,
  NEWS,
} from '@/data/content'
import { CONTACT } from '@/data/site'
import { IMG, VIDEO } from '@/data/media'
import { formatDate } from '@/lib/format'
import cn from '@/lib/cn'

/* ------------------------------------------------------------------ */
/* Life at Zapp — culture carousel                                     */
/* ------------------------------------------------------------------ */

function LifeCarousel() {
  const [i, setI] = useState(0)
  const go = (n) => setI((n + LIFE_GALLERY.length) % LIFE_GALLERY.length)
  const shot = LIFE_GALLERY[i]

  return (
    <div>
      <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] border border-white/10">
        <AnimatePresence mode="wait">
          <motion.div
            key={shot.src}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Img src={shot.src} alt={shot.caption} wrapperClassName="h-full w-full" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent" />

        <div className="absolute inset-x-6 bottom-6 flex flex-wrap items-end justify-between gap-4">
          <p className="glass rounded-2xl px-5 py-3 text-[14px] font-medium text-white">
            {shot.caption}
          </p>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => go(i - 1)}
              aria-label="Previous photo"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-ink-950/60 text-white backdrop-blur-md transition-colors hover:bg-volt-500 hover:text-ink-900"
            >
              <Icon name="ArrowLeft" className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => go(i + 1)}
              aria-label="Next photo"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-ink-950/60 text-white backdrop-blur-md transition-colors hover:bg-volt-500 hover:text-ink-900"
            >
              <Icon name="ArrowRight" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 flex gap-2.5 overflow-x-auto no-scrollbar">
        {LIFE_GALLERY.map((g, idx) => (
          <button
            key={g.src}
            type="button"
            onClick={() => setI(idx)}
            aria-label={g.caption}
            className={cn(
              'h-16 w-24 shrink-0 overflow-hidden rounded-xl transition-all duration-300',
              idx === i ? 'ring-2 ring-volt-400' : 'opacity-45 hover:opacity-100',
            )}
          >
            <Img src={g.src} alt="" wrapperClassName="h-full w-full" />
          </button>
        ))}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Get in touch — reason selector                                      */
/* ------------------------------------------------------------------ */

const REASONS = [
  { label: 'Become a franchise partner', to: '/franchise', icon: 'Store' },
  { label: 'Advertise your brand', to: '/advertising', icon: 'Megaphone' },
  { label: 'Join as a Zapp rider', to: '/deliver-and-earn', icon: 'Bike' },
  { label: 'Business partnership', to: '/ev-for-delivery', icon: 'Truck' },
  { label: 'Rent to own', to: '/rent-to-own', icon: 'KeyRound' },
  { label: 'Invest in a fleet', to: '/investor-relations', icon: 'TrendingUp' },
]

function GetInTouch() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-24 sm:py-28">
      <div className="absolute inset-0 animate-gradient-pan bg-[linear-gradient(120deg,#032D1D_0%,#05603A_35%,#039855_55%,#032D1D_100%)] opacity-90" />
      <div className="noise absolute inset-0" />
      <Glow className="-bottom-32 left-1/4 h-96 w-96" color="volt" />

      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-16">
          <Reveal>
            <span className="eyebrow-dark">
              <Icon name="Sparkles" className="h-3.5 w-3.5" />
              Get in touch
            </span>
            <h2 className="mt-6 text-3xl leading-[1.1] text-white sm:text-4xl">
              Join India&rsquo;s largest electric delivery fleet
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/65">
              Tell us which of these you are, and we will put you in front of the right team rather
              than a general inbox.
            </p>

            <div className="mt-8 space-y-3 text-[15px]">
              <a
                href={`mailto:${CONTACT.supportEmail}`}
                className="flex items-center gap-3 text-white/75 transition-colors hover:text-volt-400"
              >
                <Icon name="Mail" className="h-4 w-4" />
                {CONTACT.supportEmail}
              </a>
              <p className="flex items-center gap-3 text-white/55">
                <Icon name="MapPin" className="h-4 w-4" />
                Gurugram · Bengaluru · Mumbai
              </p>
            </div>
          </Reveal>

          <RevealGroup className="grid gap-3 sm:grid-cols-2">
            {REASONS.map((r) => (
              <RevealItem key={r.to}>
                <Link
                  to={r.to}
                  className="group flex h-full items-center gap-3.5 rounded-2xl border border-white/15 bg-white/[.06] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-volt-400/50 hover:bg-white/[.12]"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-volt-400 transition-colors group-hover:bg-volt-500 group-hover:text-ink-900">
                    <Icon name={r.icon} className="h-[18px] w-[18px]" />
                  </span>
                  <span className="flex-1 text-[14.5px] font-medium text-white">{r.label}</span>
                  <Icon
                    name="ArrowUpRight"
                    className="h-4 w-4 shrink-0 text-white/60 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-white"
                  />
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function About() {
  return (
    <>
      <Seo
        title="Who We Are"
        description="Zapp Electric is India's EV fleet for last-mile delivery. Founded 2019 in Gurugram, now 24,000 riders and 26,400 vehicles across 12 cities. Our mission, journey, team and measured impact."
        image={IMG.teamCollab}
        path="/about"
      />

      <PageHero
        eyebrow="Who we are"
        title="Join us in our mission for zero-emission delivery"
        lead="We are not asking India's delivery riders to sacrifice income for the environment. We built a model where going electric pays them more from the first month — and the emissions follow."
        image={IMG.teamCollab}
        crumbs={[{ label: 'Company' }, { label: 'Who We Are' }]}
        height="lg"
      >
        <Button to="/contact" variant="volt" size="lg">
          Contact us
        </Button>
        <Button to="/careers" variant="outline-light" size="lg">
          Join our team
        </Button>
      </PageHero>

      {/* ---- 1. Mission & vision ---- */}
      <Section tone="light">
        <div className="grid gap-6 lg:grid-cols-2">
          {MISSION_VISION.map((m, i) => (
            <Reveal key={m.kicker} from={i === 0 ? 'right' : 'left'} delay={i * 0.08}>
              <article className="group relative flex h-full flex-col justify-end overflow-hidden rounded-[2rem] bg-ink-900 p-8 text-white sm:p-10">
                <Img
                  src={m.image}
                  alt=""
                  wrapperClassName="absolute inset-0"
                  className="transition-transform duration-[1.8s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/85 to-ink-950/40" />

                <div className="relative min-h-[20rem] flex flex-col justify-end">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-volt-500 text-ink-900">
                    <Icon name={m.icon} className="h-5 w-5" />
                  </span>
                  <p className="mt-6 text-[11px] font-bold uppercase tracking-[.18em] text-volt-400">
                    {m.kicker}
                  </p>
                  <h2 className="mt-3 text-2xl leading-snug sm:text-[1.75rem]">{m.title}</h2>
                  <p className="mt-4 text-[15.5px] leading-relaxed text-white/65">{m.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---- 2. Journey ---- */}
      <Section id="journey" tone="dark" className="overflow-hidden">
        <Glow className="-right-24 top-1/4 h-96 w-96" />

        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            dark
            align="left"
            eyebrow="Journey of Zapp Electric"
            title="We are not just a team, we are a tribe"
            lead="Seven years of building India's sustainable delivery infrastructure — told with the funding rounds and the fleet numbers, including the year we threw the original model away."
            className="max-w-2xl"
          />
          <Reveal delay={0.15} className="shrink-0">
            <Button to="/careers" variant="volt">
              Join our team
            </Button>
          </Reveal>
        </div>

        <RevealGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TIMELINE.map((t, i) => (
            <RevealItem key={t.year}>
              <article
                className={cn(
                  'group relative flex h-full flex-col p-7 transition-all duration-500',
                  t.future
                    ? 'overflow-hidden rounded-3xl border border-volt-400/40 bg-gradient-to-br from-brand-700/40 to-ink-900'
                    : 'card-dark card-dark-hover',
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={cn(
                      'grid h-10 w-10 place-items-center rounded-xl font-display text-[13px] font-extrabold',
                      t.future
                        ? 'bg-volt-500 text-ink-900'
                        : 'border border-white/15 bg-white/5 text-volt-400',
                    )}
                  >
                    {t.future ? <Icon name="Rocket" className="h-4 w-4" /> : i + 1}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-[.16em] text-white/60">
                    {t.year}
                  </span>
                </div>

                <h3 className="mt-6 text-lg leading-snug text-white">{t.title}</h3>
                <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-white/55">{t.body}</p>

                <ul className="mt-6 space-y-2 border-t border-white/10 pt-5">
                  {t.metrics.map((m) => (
                    <li key={m} className="flex items-start gap-2 text-[13px] text-white/60">
                      <Icon name="CircleDot" className="mt-1 h-3 w-3 shrink-0 text-brand-400" />
                      {m}
                    </li>
                  ))}
                </ul>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* ---- 3. Impact ledger ---- */}
      <Section tone="light">
        <SectionHeading
          eyebrow="The ledger"
          title="Everything we have moved, and everything we have avoided"
          lead="These are the numbers we report to our board, our investors and our clients' sustainability auditors. They are the same numbers."
        />

        <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-4">
          {IMPACT_LEDGER.map((m) => (
            <RevealItem key={m.label} className="group bg-white p-7 transition-colors hover:bg-brand-50">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                <Icon name={m.icon} className="h-[18px] w-[18px]" />
              </span>
              <p className="mt-6 font-display text-3xl font-extrabold text-ink-900">
                {m.value}
                {m.unit && <span className="ml-1 text-lg text-brand-700">{m.unit}</span>}
              </p>
              <p className="mt-2 font-semibold text-ink-900">{m.label}</p>
              <p className="mt-1 text-[13px] leading-snug text-neutral-500">{m.sub}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* ---- 4. ESG / SDG ---- */}
      <Section tone="deep" className="overflow-hidden">
        <Glow className="-left-24 top-1/3 h-96 w-96" color="volt" />

        <SectionHeading
          dark
          eyebrow="ESG"
          title="Zapp is an ESG-compliant business"
          lead="Our work maps onto eight of the UN Sustainable Development Goals. We use the official SDG numbering, and we only claim a goal where we can show a measured contribution."
        />

        <RevealGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SDG_GOALS.map((g) => (
            <RevealItem key={g.n}>
              <article className="card-dark card-dark-hover group h-full p-6">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-700 font-display text-xl font-extrabold text-white transition-transform duration-500 group-hover:scale-105">
                  {g.n}
                </span>
                <h3 className="mt-5 text-[15.5px] font-bold leading-snug text-white">{g.title}</h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-white/65">{g.body}</p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <Button to="/esg" variant="volt">
              Read our ESG report
            </Button>
            <Button to="/environment" variant="outline-light">
              Environmental data
            </Button>
          </div>
        </Reveal>
      </Section>

      {/* ---- 5. Partner impact ---- */}
      <Section tone="light">
        <SectionHeading
          eyebrow="Powered by our partners"
          title="Every delivery counted, client by client"
          lead="Our sustainable journey is not ours alone. This is the carbon avoided and the volume moved for each platform we ride for."
        />

        <RevealGroup className="mx-auto mt-14 grid max-w-3xl gap-5 sm:grid-cols-2">
          <RevealItem>
            <div className="relative overflow-hidden rounded-3xl bg-ink-900 p-8 text-center text-white">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-600 to-ink-900" />
              <div className="noise absolute inset-0" />
              <div className="relative">
                <p className="font-display text-4xl font-extrabold sm:text-5xl">68,000 t</p>
                <p className="mt-2 text-white/65">CO₂ avoided in total</p>
              </div>
            </div>
          </RevealItem>
          <RevealItem>
            <div className="relative overflow-hidden rounded-3xl bg-ink-900 p-8 text-center text-white">
              <div className="absolute inset-0 bg-gradient-to-br from-volt-600 to-ink-900" />
              <div className="noise absolute inset-0" />
              <div className="relative">
                <p className="font-display text-4xl font-extrabold sm:text-5xl">132 M</p>
                <p className="mt-2 text-white/65">deliveries completed</p>
              </div>
            </div>
          </RevealItem>
        </RevealGroup>

        <Reveal delay={0.15} className="mt-10">
          <Marquee speed="slow">
            {PARTNER_IMPACT.map((p) => (
              <div
                key={p.name}
                className="mx-2.5 w-60 shrink-0 rounded-2xl border border-neutral-200 bg-white p-6 transition-colors hover:border-brand-300"
              >
                <p className="font-display text-xl font-bold text-ink-900">{p.name}</p>
                <dl className="mt-4 space-y-2 text-[13.5px]">
                  <div className="flex justify-between">
                    <dt className="text-neutral-500">CO₂ avoided</dt>
                    <dd className="font-semibold text-brand-700">{p.co2}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-neutral-500">Deliveries</dt>
                    <dd className="font-semibold text-ink-900">{p.deliveries}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </Marquee>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-neutral-500">
            Figures are cumulative since 2019 and reconcile to our reported totals of 68,000 tonnes
            of CO₂ avoided and 132 million deliveries. Client names are shown with permission.
          </p>
        </Reveal>
      </Section>

      {/* ---- 6. Investors ---- */}
      <Section tone="muted" pad="md">
        <SectionHeading
          eyebrow="Our investors"
          title="The people who believed in us early"
          lead="$134M raised across four rounds, from funds that back infrastructure rather than hype cycles."
        />
        <Reveal delay={0.12} className="mt-12">
          <Marquee speed="slow">
            {INVESTORS.map((inv) => (
              <span
                key={inv.name}
                className="mx-8 select-none whitespace-nowrap font-display text-xl font-bold text-neutral-300 transition-colors hover:text-brand-700 sm:text-2xl"
              >
                {inv.name}
              </span>
            ))}
          </Marquee>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-10 flex justify-center">
            <Button to="/investor-relations" variant="outline">
              Investor relations
            </Button>
          </div>
        </Reveal>
      </Section>

      {/* ---- 7. Leadership ---- */}
      <Section tone="light">
        <SectionHeading
          eyebrow="Leadership"
          title="The people accountable for it"
          lead="Six people who between them have spent most of their careers inside Indian logistics, payments and climate work."
        />

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LEADERSHIP.map((p) => (
            <RevealItem key={p.name}>
              <article className="card card-hover group h-full overflow-hidden">
                <Img
                  src={p.photo}
                  alt={p.name}
                  wrapperClassName="aspect-[4/3.4] w-full"
                  className="transition-transform duration-[1.4s] group-hover:scale-105"
                />
                <div className="p-6">
                  <h3 className="text-lg">{p.name}</h3>
                  <p className="mt-1 text-[13.5px] font-semibold text-brand-700">{p.role}</p>
                  <p className="mt-3.5 text-[14.5px] leading-relaxed text-neutral-600">{p.bio}</p>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <FeatureGrid
        eyebrow="What we believe"
        title="Four things we will not trade away"
        lead="These are the arguments we have internally when a decision is genuinely difficult."
        items={VALUES}
        tone="muted"
        cols={4}
      />

      {/* ---- 8. Life at Zapp ---- */}
      <Section id="life" tone="dark" className="overflow-hidden">
        <Glow className="-left-20 bottom-0 h-80 w-80" />

        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            dark
            align="left"
            eyebrow="Our culture"
            title="Life at Zapp"
            lead="Ninety per cent of us are at a hub, in a service bay or on the road with riders — not in an office. These are the ordinary weeks."
            className="max-w-2xl"
          />
          <Reveal delay={0.15} className="shrink-0">
            <Button to="/careers" variant="outline-light">
              See open roles
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-12">
          <LifeCarousel />
        </Reveal>
      </Section>

      {/* ---- 9. Team testimonials ---- */}
      <Section tone="light">
        <SectionHeading
          eyebrow="Testimonials"
          title="What our team say"
          lead="Our mission is carried out by the people who work here. We asked three of them to describe it in their own words."
        />

        <RevealGroup className="mt-14 grid gap-6 lg:grid-cols-3">
          {TEAM_VOICES.map((t) => (
            <RevealItem key={t.name}>
              <figure className="card card-hover flex h-full flex-col p-7">
                <Icon name="Quote" className="h-8 w-8 text-brand-100" />
                <blockquote className="mt-5 flex-1 text-[15.5px] leading-relaxed text-neutral-700">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-4 border-t border-neutral-100 pt-6">
                  <Img src={t.photo} alt="" wrapperClassName="h-12 w-12 shrink-0 rounded-full" />
                  <span>
                    <span className="block font-display font-bold text-ink-900">{t.name}</span>
                    <span className="block text-[13px] text-neutral-500">{t.role}</span>
                    <span className="mt-0.5 block text-[12px] text-neutral-500">{t.tenure}</span>
                  </span>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* ---- 10. FAQ ---- */}
      <Section id="faq" tone="muted">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="Questions"
              title="Frequently asked questions"
              lead="What the company does, who runs it, how it makes money and what happens to the batteries."
            />
          </div>
          <Reveal from="left" delay={0.1}>
            <Accordion items={ABOUT_FAQS} defaultOpen={0} />
          </Reveal>
        </div>
      </Section>

      {/* ---- 11. Corporate video ---- */}
      <section className="relative isolate overflow-hidden bg-ink-950 py-24 sm:py-32">
        <div className="absolute inset-0 -z-20">
          <video
            className="h-full w-full object-cover"
            src={VIDEO.rider}
            poster={VIDEO.riderPoster}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-ink-950/80" />
        <div className="noise absolute inset-0 -z-10" />

        <div className="container relative">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="relative mx-auto grid h-20 w-20 place-items-center">
                <span className="absolute inset-0 animate-pulse-ring rounded-full bg-volt-500/40" />
                <span className="relative grid h-20 w-20 place-items-center rounded-full bg-volt-500 text-ink-900 transition-transform duration-500 hover:scale-105">
                  <Icon name="Play" className="ml-1 h-7 w-7 fill-current" />
                </span>
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mt-9 text-3xl leading-tight text-white sm:text-4xl">
                The Zapp corporate film
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-white/60">
                Four minutes on how a fleet of 26,400 vehicles actually runs — from the swap cabinet
                to the rider's payout.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---- 12. Press ---- */}
      <Section tone="light">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            align="left"
            eyebrow="We are in the news"
            title="Zapp, everywhere"
            className="max-w-xl"
          />
          <Button to="/news" variant="outline" className="shrink-0">
            View all
          </Button>
        </div>

        <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
          {NEWS.slice(0, 3).map((n) => (
            <RevealItem key={n.title}>
              <Link to="/news" className="group block h-full">
                <article className="card card-hover flex h-full flex-col overflow-hidden">
                  <Img
                    src={n.image}
                    alt=""
                    wrapperClassName="aspect-[16/10] w-full"
                    className="transition-transform duration-[1.4s] group-hover:scale-105"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-[12px]">
                      <span className="rounded-full bg-brand-50 px-2.5 py-1 font-semibold text-brand-700">
                        {n.tag}
                      </span>
                      <time className="text-neutral-500">{formatDate(n.date)}</time>
                    </div>
                    <h3 className="mt-4 flex-1 text-lg leading-snug transition-colors group-hover:text-brand-700">
                      {n.title}
                    </h3>
                    <p className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-4 text-[13px]">
                      <span className="font-semibold text-neutral-500">{n.outlet}</span>
                      <Icon
                        name="ArrowUpRight"
                        className="h-4 w-4 text-neutral-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-brand-700"
                      />
                    </p>
                  </div>
                </article>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* ---- 13. Get in touch ---- */}
      <GetInTouch />

      <CTABand
        eyebrow="Join us"
        title="There is a lot left to build"
        lead="Twelve cities is not India. If you want to work on the unglamorous infrastructure that makes electric actually work at scale, we are hiring."
        primary={{ label: 'See open roles', to: '/careers' }}
        secondary={{ label: 'Read our ESG report', to: '/esg' }}
        points={['1,000+ employees', 'Remote-first engineering', 'ESOPs at every level']}
      />
    </>
  )
}
