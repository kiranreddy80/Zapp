import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import Icon from '@/components/ui/Icon'
import Button from '@/components/ui/Button'
import Field from '@/components/ui/Field'
import { CITY_HUBS, CONTACT } from '@/data/site'
import cn from '@/lib/cn'

/**
 * Contact block: a form to write with, and a map of where we are.
 *
 * The two answer different questions — "how do I reach a person" and "where
 * are you" — and a visitor arrives with one or the other, not both. Side by
 * side neither has to be found through the other.
 */

/** Where the form is in its lifecycle: idle → sending → sent. */
function ContactForm() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    // No backend yet — this is where the Node API call will go. Matches the
    // placeholder on /contact; both need wiring at the same time.
    setTimeout(() => setStatus('sent'), 900)
  }

  return (
    <div className="card flex min-h-full flex-col p-7 sm:p-8">
      <AnimatePresence mode="wait">
        {status === 'sent' ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-1 flex-col items-center justify-center py-10 text-center"
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
                Four fields. We route it to the right team from there.
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
              className="sm:col-span-2"
            />
            <Field
              label="Message"
              id="message"
              as="textarea"
              required
              placeholder="Tell us a little about what you need…"
            />

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="group/btn inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-8 font-semibold text-white shadow-glow transition-all duration-300 hover:bg-brand-600 active:scale-[.98] disabled:opacity-70"
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

              <p className="mt-3.5 text-center text-[12.5px] leading-relaxed text-neutral-500">
                By sending this you agree we may contact you about your enquiry. See our{' '}
                <a href="/privacy-policy" className="font-medium text-brand-700 underline">
                  privacy policy
                </a>
                .
              </p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

/**
 * The hub map.
 *
 * Uses Google Maps' keyless embed endpoint, so there is no API key, no billing
 * account and nothing to leak in the bundle. The address is also printed below
 * the map, so the information survives the iframe being blocked by a corporate
 * proxy or a strict tracking blocker.
 */
function HubMap() {
  const [index, setIndex] = useState(0)
  const hub = CITY_HUBS[index]

  const embed = `https://www.google.com/maps?q=${encodeURIComponent(hub.query)}&z=13&output=embed`
  const external = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hub.query)}`

  return (
    <div className="relative flex min-h-full flex-col overflow-hidden rounded-[1.75rem] border border-brand-200 bg-white shadow-card">
      {/*
        City tabs sit above the map rather than floating over it. As an overlay
        the picker fought Google's own place card, and every hub was hidden
        behind a click; laid out here they are all visible at once and read as
        part of the card.

        The row scrolls sideways on narrow screens instead of wrapping to two
        lines, so the map keeps its position on a phone.
      */}
      <div
        role="tablist"
        aria-label="Choose a city"
        className="no-scrollbar flex gap-1 overflow-x-auto border-b border-brand-100 bg-brand-50/60 p-1.5"
      >
        {CITY_HUBS.map((h, i) => {
          const on = i === index
          return (
            <button
              key={h.city}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => setIndex(i)}
              className={cn(
                'relative shrink-0 rounded-xl px-4 py-2.5 font-display text-[13px] font-bold outline-none transition-colors duration-300',
                'focus-visible:ring-2 focus-visible:ring-brand-500/40',
                on ? 'text-white' : 'text-ink-900/60 hover:text-ink-900',
              )}
            >
              {on && (
                <motion.span
                  layoutId="hub-tab"
                  className="absolute inset-0 rounded-xl bg-brand-700 shadow-glow"
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
              <span className="relative flex items-center gap-1.5">
                <Icon
                  name="MapPin"
                  className={cn('h-3.5 w-3.5', on ? 'text-volt-400' : 'text-brand-600/70')}
                />
                {h.label}
              </span>
            </button>
          )
        })}
      </div>

      {/* the map takes whatever height the form column ends up needing, with a
          floor so it never collapses to a strip on a short form */}
      <iframe
        key={hub.city}
        title={`SGD Electric hub in ${hub.city}`}
        src={embed}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="min-h-[22rem] w-full flex-1 border-0"
      />

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-brand-100 bg-white px-5 py-4">
        <div>
          <p className="flex items-center gap-2 text-[14px] font-semibold text-ink-900">
            <Icon name="MapPin" className="h-4 w-4 text-brand-700" />
            SGD Electric hub · {hub.city}
          </p>
          {/* read from CONTACT so the hours are stated in one place */}
          <p className="mt-0.5 pl-6 text-[13px] text-neutral-500">
            {CONTACT.hours.map((h) => `${h.days} ${h.time}`).join(' · ')}
          </p>
        </div>

        <a
          href={external}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-[13px] font-semibold text-brand-700 transition-colors hover:border-brand-400 hover:text-brand-800"
        >
          Open in Maps
          <Icon name="ExternalLink" className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  )
}

export default function GetInTouch() {
  return (
    <Section id="get-in-touch" tone="brand">
      {/* the copy runs across the top now — as a third column it squeezed both
          the form and the map into halves of a half */}
      <Reveal>
        <div className="max-w-2xl">
          <h2 className="text-4xl leading-[1.05] sm:text-5xl">
            Get In <span className="text-brand-700">Touch</span>
            <span className="text-brand-500"> !</span>
          </h2>

          <p className="mt-5 text-[16.5px] leading-relaxed text-neutral-600">
            Riders, fleet managers, franchise applicants and journalists all come through here.
            Write to us on the left, or find your nearest hub on the right.
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
        <Reveal from="right" className="min-w-0">
          <ContactForm />
        </Reveal>

        <Reveal from="left" delay={0.1} className="min-w-0">
          <HubMap />
        </Reveal>
      </div>

      {/* the direct routes, for anyone who would rather not use a form */}
      <Reveal delay={0.15}>
        <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href={`mailto:${CONTACT.supportEmail}`}
            className="flex items-center gap-3 text-[15.5px] font-semibold text-brand-700 transition-colors hover:text-brand-800"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white shadow-card">
              <Icon name="Mail" className="h-4 w-4" />
            </span>
            {CONTACT.supportEmail}
          </a>

          <a
            href={CONTACT.phoneHref}
            className="flex items-center gap-3 text-[15.5px] font-semibold text-ink-900 transition-colors hover:text-brand-700"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white shadow-card">
              <Icon name="Phone" className="h-4 w-4 text-brand-700" />
            </span>
            {CONTACT.phone}
          </a>

          <Button to="/deliver-and-earn" variant="outline">
            Become a rider
          </Button>
        </div>
      </Reveal>
    </Section>
  )
}
