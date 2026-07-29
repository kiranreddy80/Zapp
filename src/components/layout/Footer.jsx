import { Link } from 'react-router-dom'
import { SITE, CONTACT, CITIES, SOCIALS, FOOTER_NAV, LEGAL_NAV } from '@/data/site'
import Logo from '@/components/ui/Logo'
import Icon from '@/components/ui/Icon'
import Reveal from '@/components/ui/Reveal'
import Marquee from '@/components/ui/Marquee'
import AppBadges from '@/components/ui/AppBadges'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-ink-950 text-white">
      {/* oversized wordmark bleeding off the bottom edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -bottom-6 select-none overflow-hidden opacity-[.035]"
      >
        <Marquee speed="slow" fade={false} pauseOnHover={false}>
          <span className="whitespace-nowrap px-8 font-display text-[13rem] font-extrabold leading-none tracking-tighter">
            SGD ELECTRIC · CHARGE LESS EARN MORE ·
          </span>
        </Marquee>
      </div>

      <div className="container relative">
        {/* top: brand + nav */}
        <div className="grid gap-14 py-20 lg:grid-cols-[1.15fr_2fr]">
          <Reveal>
            <Logo light />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/55">
              {SITE.description}
            </p>

            <div className="mt-8 space-y-3 text-sm">
              <a
                href={CONTACT.phoneHref}
                className="group flex items-center gap-3 text-white/70 transition-colors hover:text-volt-400"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 transition-colors group-hover:border-volt-400/40">
                  <Icon name="Phone" className="h-4 w-4" />
                </span>
                {CONTACT.phone}
              </a>
              <a
                href={`mailto:${CONTACT.supportEmail}`}
                className="group flex items-center gap-3 text-white/70 transition-colors hover:text-volt-400"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 transition-colors group-hover:border-volt-400/40">
                  <Icon name="Mail" className="h-4 w-4" />
                </span>
                {CONTACT.supportEmail}
              </a>
              <p className="flex items-start gap-3 text-white/55">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5">
                  <Icon name="MapPin" className="h-4 w-4" />
                </span>
                <span className="pt-1.5 leading-relaxed">
                  {CONTACT.hq.line2}
                  <br />
                  {CONTACT.hq.city}
                </span>
              </p>
            </div>

            <div className="mt-8">
              <AppBadges />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {FOOTER_NAV.map((col) => (
              <div key={col.title}>
                <p className="text-[11px] font-semibold uppercase tracking-[.16em] text-volt-400">
                  {col.title}
                </p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.to}>
                      <Link
                        to={l.to}
                        className="link-underline text-[14.5px] text-white/60 transition-colors hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
        </div>

        {/* cities strip */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="mr-2 text-[11px] font-semibold uppercase tracking-[.16em] text-white/60">
              Live in
            </span>
            {CITIES.map((c) => (
              <span
                key={c}
                className="rounded-full border border-white/10 bg-white/[.03] px-3 py-1.5 text-[13px] text-white/60 transition-colors hover:border-brand-400/40 hover:text-white"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* bottom bar */}
        <div className="flex flex-col gap-6 border-t border-white/10 py-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] text-white/60">
            <p>
              © {year} {SITE.legalName}
            </p>
            {LEGAL_NAV.map((l) => (
              <Link key={l.to} to={l.to} className="transition-colors hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/55 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400 hover:bg-brand-500 hover:text-white"
              >
                <Icon name={s.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
