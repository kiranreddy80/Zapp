import Section, { Glow } from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import Icon from '@/components/ui/Icon'
import Img from '@/components/ui/Img'
import AppBadges from '@/components/ui/AppBadges'
import { IMG } from '@/data/media'

const FEATURES = [
  { icon: 'MapPin', title: 'Find the nearest swap', body: 'Live pack availability at all 900+ points.' },
  { icon: 'Gauge', title: 'Track your earnings', body: 'Daily payouts, deductions itemised to the rupee.' },
  { icon: 'Wrench', title: 'Book a service', body: 'Pick a slot at your hub without calling anyone.' },
  { icon: 'Headphones', title: 'Get help fast', body: '24×7 support in Hindi, English and 6 regional languages.' },
]

/**
 * App promo. The phone is composed from a CSS bezel wrapping a real photo —
 * no device mockup image to load, and it stays crisp on any display.
 */
export default function AppSection() {
  return (
    <Section tone="dark" className="overflow-hidden">
      <Glow className="left-1/4 top-0 h-96 w-96" />
      <Glow className="-right-24 bottom-0 h-80 w-80" color="volt" />

      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* ---- phone ---- */}
        <Reveal from="right" className="relative order-2 lg:order-1">
          <div className="relative mx-auto w-[16rem] sm:w-[19rem]">
            {/* glow behind the device */}
            <div className="absolute -inset-10 rounded-full bg-brand-500/25 blur-[80px]" />

            <div className="relative animate-float rounded-[2.6rem] border-[10px] border-ink-700 bg-ink-700 shadow-lift">
              <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2rem] bg-ink-900">
                <Img
                  src={IMG.urbanScooterRider}
                  alt="SGD Rider app"
                  wrapperClassName="absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-ink-950/40 via-transparent to-ink-950" />

                {/* notch */}
                <div className="absolute left-1/2 top-3 h-5 w-24 -translate-x-1/2 rounded-full bg-ink-700" />

                {/* in-app card */}
                <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/15 bg-ink-950/85 p-4 backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-volt-400">
                      Today
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-white/60">
                      <span className="h-1.5 w-1.5 rounded-full bg-volt-500" />
                      Online
                    </span>
                  </div>
                  <p className="mt-2 font-display text-3xl font-extrabold text-white">₹1,340</p>
                  <p className="text-[11px] text-white/60">38 orders · 92 km</p>

                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[76%] rounded-full bg-gradient-to-r from-brand-400 to-volt-500" />
                  </div>
                  <p className="mt-2 text-[10px] text-white/60">76% to your weekly bonus</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ---- copy ---- */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="eyebrow-dark">
              <Icon name="Smartphone" className="h-3.5 w-3.5" />
              SGD Rider app
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-6 text-3xl leading-[1.1] text-white sm:text-4xl lg:text-[2.75rem]">
              Your hub, your earnings and your battery —
              <span className="text-gradient-volt"> all in one app.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
              Onboard, swap, book a service, raise a ticket and track every rupee you earn without
              ever visiting an office.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {FEATURES.map((f, idx) => (
              <Reveal key={f.title} delay={0.18 + idx * 0.06}>
                <div className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-brand-400">
                    <Icon name={f.icon} className="h-[18px] w-[18px]" />
                  </span>
                  <span>
                    <span className="block font-semibold text-white">{f.title}</span>
                    <span className="mt-1 block text-[14px] leading-relaxed text-white/65">
                      {f.body}
                    </span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.45}>
            <div className="mt-10">
              <AppBadges />
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <p className="mt-6 flex items-center gap-2 text-sm text-white/60">
              <Icon name="Star" className="h-4 w-4 fill-volt-500 text-volt-500" />
              4.6 average rating · 84,000+ reviews
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
