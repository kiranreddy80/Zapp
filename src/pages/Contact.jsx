import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Seo from '@/components/ui/Seo'
import PageHero from '@/components/sections/PageHero'
import CTABand from '@/components/sections/CTABand'
import Section, { SectionHeading } from '@/components/ui/Section'
import Reveal, { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import Icon from '@/components/ui/Icon'
import Field from '@/components/ui/Field'
import Accordion from '@/components/ui/Accordion'
import { CONTACT, CITIES } from '@/data/site'
import { FAQS } from '@/data/content'
import { IMG } from '@/data/media'
import cn from '@/lib/cn'

const CHANNELS = [
  {
    icon: 'Bike',
    title: 'I want to ride',
    body: 'Rentals, onboarding, KYC and anything about earning on the platform.',
    action: CONTACT.phone,
    href: CONTACT.phoneHref,
    tone: 'brand',
  },
  {
    icon: 'Truck',
    title: 'I need a fleet',
    body: 'Enterprise delivery, cargo loaders, franchise and advertising enquiries.',
    action: CONTACT.salesEmail,
    href: `mailto:${CONTACT.salesEmail}`,
    tone: 'default',
  },
  {
    icon: 'Headphones',
    title: 'I am an existing rider',
    body: 'Support, servicing, billing and grievances — fastest through the app.',
    action: CONTACT.supportEmail,
    href: `mailto:${CONTACT.supportEmail}`,
    tone: 'default',
  },
  {
    icon: 'Newspaper',
    title: 'I am from the press',
    body: 'Interviews, data requests and the press kit. One working day response.',
    action: CONTACT.pressEmail,
    href: `mailto:${CONTACT.pressEmail}`,
    tone: 'default',
  },
]

const SUBJECTS = [
  'Renting a scooter',
  'Cargo loader / fleet',
  'Franchise enquiry',
  'Advertising',
  'Investor relations',
  'Press',
  'Something else',
]

function ContactForm() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    // No backend yet — this is where the Node API call will go.
    setTimeout(() => setStatus('sent'), 900)
  }

  return (
    <div className="card p-7 sm:p-9">
      <AnimatePresence mode="wait">
        {status === 'sent' ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex min-h-[26rem] flex-col items-center justify-center text-center"
          >
            <span className="grid h-16 w-16 place-items-center rounded-2xl bg-brand-500 text-white shadow-glow">
              <Icon name="CheckCircle2" className="h-7 w-7" />
            </span>
            <h3 className="mt-6 text-2xl">Message received</h3>
            <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-neutral-600">
              Thank you. Someone from the right team will reply within one working day — usually
              much sooner during business hours.
            </p>
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="mt-7 text-sm font-semibold text-brand-700 underline"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="grid gap-5 sm:grid-cols-2"
          >
            <div className="sm:col-span-2">
              <h3 className="text-xl">Send us a message</h3>
              <p className="mt-2 text-[14.5px] text-neutral-600">
                Tell us what you need and we will route it to the right team.
              </p>
            </div>

            <Field label="Full name" id="name" required placeholder="Your name" autoComplete="name" />
            <Field
              label="Mobile number"
              id="phone"
              type="tel"
              required
              placeholder="+91 00000 00000"
              autoComplete="tel"
            />
            <Field
              label="Email"
              id="email"
              type="email"
              required
              placeholder="you@example.com"
              autoComplete="email"
            />

            <div>
              <label htmlFor="city" className="block text-sm font-medium text-neutral-700">
                City
              </label>
              <select
                id="city"
                name="city"
                className="mt-2 h-12 w-full rounded-2xl border border-neutral-200 bg-white px-4 text-[15px] transition-colors focus:border-brand-400 focus:outline-none focus:ring-4 focus:ring-brand-500/10"
                defaultValue=""
              >
                <option value="" disabled>
                  Select your city
                </option>
                {CITIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
                <option value="other">Not listed</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="subject" className="block text-sm font-medium text-neutral-700">
                What is this about?<span className="ml-0.5 text-brand-700">*</span>
              </label>
              <div className="mt-3 flex flex-wrap gap-2">
                {SUBJECTS.map((s, i) => (
                  <label key={s} className="cursor-pointer">
                    <input
                      type="radio"
                      name="subject"
                      value={s}
                      defaultChecked={i === 0}
                      required
                      className="peer sr-only"
                    />
                    <span className="inline-block rounded-full border border-neutral-200 px-4 py-2 text-[14px] text-neutral-600 transition-all peer-checked:border-brand-500 peer-checked:bg-brand-500 peer-checked:text-white peer-focus-visible:ring-4 peer-focus-visible:ring-brand-500/20">
                      {s}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <Field
              label="Message"
              id="message"
              as="textarea"
              required
              placeholder="Tell us a little about what you need…"
            />

            <div className="sm:col-span-2">
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 rounded border-neutral-300 text-brand-700 focus:ring-brand-500"
                />
                <span className="text-[13.5px] leading-relaxed text-neutral-500">
                  I agree that SGD Electric may contact me about this enquiry, and I have read the{' '}
                  <a href="/privacy-policy" className="font-medium text-brand-700 underline">
                    privacy policy
                  </a>
                  .
                </span>
              </label>
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="group/btn relative inline-flex h-14 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-brand-500 px-8 font-semibold text-white shadow-glow transition-all duration-300 hover:bg-brand-600 active:scale-[.98] disabled:opacity-70"
              >
                {status === 'sending' ? (
                  <>
                    <Icon name="Loader2" className="h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send message
                    <Icon
                      name="Send"
                      className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                    />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Get in touch with SGD Electric. Rider support, enterprise fleet enquiries, franchise applications and press. Gurugram HQ, live in 12 Indian cities."
        image={IMG.teamDiscussion}
        path="/contact"
      />

      <PageHero
        eyebrow="Contact"
        title="Tell us what you need"
        lead="Riders, fleet managers, franchise applicants and journalists all come through here. Pick the route that fits and we will get you to the right person."
        image={IMG.teamDiscussion}
        crumbs={[{ label: 'Contact' }]}
        height="sm"
      />

      {/* ---- channels ---- */}
      <Section tone="light" pad="md">
        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CHANNELS.map((c) => (
            <RevealItem key={c.title}>
              <a
                href={c.href}
                className={cn(
                  'group flex h-full flex-col p-7 transition-all duration-500',
                  c.tone === 'brand'
                    ? 'relative overflow-hidden rounded-3xl bg-ink-900 text-white shadow-lift'
                    : 'card card-hover',
                )}
              >
                {c.tone === 'brand' && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-brand-700 to-ink-900" />
                    <div className="noise absolute inset-0" />
                  </>
                )}

                <div className="relative flex flex-1 flex-col">
                  <span
                    className={cn(
                      'grid h-12 w-12 place-items-center rounded-2xl transition-all duration-500',
                      c.tone === 'brand'
                        ? 'bg-volt-500 text-ink-900'
                        : 'bg-brand-50 text-brand-700 group-hover:bg-brand-500 group-hover:text-white',
                    )}
                  >
                    <Icon name={c.icon} className="h-5 w-5" />
                  </span>

                  <h3 className={cn('mt-6 text-lg', c.tone === 'brand' && 'text-white')}>
                    {c.title}
                  </h3>
                  <p
                    className={cn(
                      'mt-2.5 flex-1 text-[14.5px] leading-relaxed',
                      c.tone === 'brand' ? 'text-white/65' : 'text-neutral-600',
                    )}
                  >
                    {c.body}
                  </p>

                  <span
                    className={cn(
                      'mt-6 flex items-center gap-1.5 break-all text-[14px] font-semibold',
                      c.tone === 'brand' ? 'text-volt-400' : 'text-brand-700',
                    )}
                  >
                    {c.action}
                    <Icon
                      name="ArrowUpRight"
                      className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* ---- form + details ---- */}
      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
          <Reveal from="right">
            <ContactForm />
          </Reveal>

          <Reveal from="left" delay={0.1} className="space-y-6">
            {/* HQ */}
            <div className="card p-7">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
                <Icon name="Building2" className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg">Head office</h3>
              <address className="mt-3 not-italic leading-relaxed text-neutral-600">
                {CONTACT.hq.line1}
                <br />
                {CONTACT.hq.line2}
                <br />
                {CONTACT.hq.city}
                <br />
                {CONTACT.hq.country}
              </address>
              <a
                href="https://maps.google.com/?q=DLF+Phase+3+Gurugram"
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700"
              >
                Open in Maps
                <Icon name="ExternalLink" className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* hours */}
            <div className="card p-7">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
                <Icon name="Clock" className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg">Support hours</h3>
              <dl className="mt-4 space-y-3">
                {CONTACT.hours.map((h) => (
                  <div key={h.days} className="flex items-baseline justify-between gap-4">
                    <dt className="text-[14.5px] text-neutral-600">{h.days}</dt>
                    <dd className="shrink-0 text-[14.5px] font-semibold text-ink-900">{h.time}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 flex items-start gap-2 rounded-xl bg-brand-50 p-3.5 text-[13px] leading-relaxed text-brand-800">
                <Icon name="Zap" className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                In-app rider support runs 24×7 in eight languages, including outside these hours.
              </p>
            </div>

            {/* cities */}
            <div className="card p-7">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
                <Icon name="MapPin" className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg">Where we operate</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {CITIES.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-neutral-200 px-3 py-1.5 text-[13px] text-neutral-600"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-[13.5px] leading-relaxed text-neutral-500">
                Not in your city yet? Tell us where you are — we use these requests to decide where
                to open next.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---- FAQ ---- */}
      <Section tone="light">
        <SectionHeading
          eyebrow="Before you write"
          title="These come up most often"
          lead="You might find your answer faster here."
        />
        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 max-w-3xl">
            <Accordion items={FAQS.slice(0, 5)} />
          </div>
        </Reveal>
      </Section>

      <CTABand
        eyebrow="Contact"
        title="Prefer to talk to a person?"
        lead="Our team answers in Hindi, English and six regional languages, Monday to Saturday."
        primary={{ label: 'Call us now', to: '/contact' }}
        secondary={{ label: 'Become a rider', to: '/deliver-and-earn' }}
        points={[CONTACT.phone, CONTACT.supportEmail, 'Gurugram, Haryana']}
      />
    </>
  )
}
