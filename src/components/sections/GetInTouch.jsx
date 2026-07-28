import { useState } from 'react'
import Section from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import Icon from '@/components/ui/Icon'
import Button from '@/components/ui/Button'
import { CITY_HUBS, CONTACT } from '@/data/site'

/**
 * Contact block with a live hub map.
 *
 * Uses Google Maps' keyless embed endpoint, so there is no API key, no billing
 * account and nothing to leak in the bundle. The address is also printed below
 * the map, so the information survives the iframe being blocked by a corporate
 * proxy or a strict tracking blocker.
 */
export default function GetInTouch() {
  const [index, setIndex] = useState(0)
  const hub = CITY_HUBS[index]

  const embed = `https://www.google.com/maps?q=${encodeURIComponent(hub.query)}&z=13&output=embed`
  const external = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hub.query)}`

  return (
    <Section id="get-in-touch" tone="brand">
      <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start lg:gap-14">
        {/* ------------------------------------------------- copy ---- */}
        <Reveal>
          <h2 className="text-4xl leading-[1.05] sm:text-5xl">
            Get In <span className="text-brand-700">Touch</span>
            <span className="text-brand-500"> !</span>
          </h2>

          <p className="mt-5 max-w-md text-[16.5px] leading-relaxed text-neutral-600">
            Riders, fleet managers, franchise applicants and journalists all come through here. Pick
            your city on the map, or write to us directly.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`mailto:${CONTACT.supportEmail}`}
              className="group flex items-center gap-3 text-[15.5px] font-semibold text-brand-700 transition-colors hover:text-brand-800"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white shadow-card">
                <Icon name="Mail" className="h-4 w-4" />
              </span>
              {CONTACT.supportEmail}
            </a>

            <a
              href={CONTACT.phoneHref}
              className="group flex items-center gap-3 text-[15.5px] font-semibold text-ink-900 transition-colors hover:text-brand-700"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white shadow-card">
                <Icon name="Phone" className="h-4 w-4 text-brand-700" />
              </span>
              {CONTACT.phone}
            </a>

            <p className="flex items-start gap-3 text-[15px] leading-relaxed text-neutral-600">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white shadow-card">
                <Icon name="MapPin" className="h-4 w-4 text-brand-700" />
              </span>
              <span className="pt-2">{hub.address}</span>
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button to="/contact">Send us a message</Button>
            <Button to="/deliver-and-earn" variant="outline">
              Become a rider
            </Button>
          </div>
        </Reveal>

        {/* -------------------------------------------------- map ---- */}
        <Reveal from="left" delay={0.1}>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-brand-200 bg-white shadow-card">
            {/*
              Only the city picker overlays the map, pinned right. Google's
              embed renders its own place card top-left, so anything placed
              there collides with it.
            */}
            <div className="absolute right-4 top-4 z-10">
              <div className="relative">
                <label htmlFor="hub-city" className="sr-only">
                  Choose a city
                </label>
                <select
                  id="hub-city"
                  value={index}
                  onChange={(e) => setIndex(Number(e.target.value))}
                  className="cursor-pointer appearance-none rounded-lg bg-white py-2.5 pl-4 pr-10 text-[13px] font-semibold text-ink-900 shadow-lift outline-none transition-colors hover:text-brand-700 focus-visible:ring-2 focus-visible:ring-brand-500/40"
                >
                  {CITY_HUBS.map((h, i) => (
                    <option key={h.city} value={i}>
                      {h.label}
                    </option>
                  ))}
                </select>
                <Icon
                  name="ChevronDown"
                  className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500"
                />
              </div>
            </div>

            <iframe
              key={hub.city}
              title={`Zapp Electric hub in ${hub.city}`}
              src={embed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[24rem] w-full border-0 sm:h-[28rem]"
            />

            {/* hub caption */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-brand-100 bg-white px-5 py-4">
              <div>
                <p className="flex items-center gap-2 text-[14px] font-semibold text-ink-900">
                  <Icon name="MapPin" className="h-4 w-4 text-brand-700" />
                  Zapp Electric hub · {hub.city}
                </p>
                <p className="mt-0.5 pl-6 text-[13px] text-neutral-500">
                  Mon–Sat, 8:00 AM – 9:00 PM
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
        </Reveal>
      </div>
    </Section>
  )
}
