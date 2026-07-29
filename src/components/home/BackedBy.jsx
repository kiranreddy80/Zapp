import Marquee from '@/components/ui/Marquee'
import Reveal from '@/components/ui/Reveal'
import { INVESTORS } from '@/data/content'

/**
 * Investor wall as a single floating strip.
 *
 * Backers are set as monochrome typographic lockups rather than logo files — we
 * hold no licence to reproduce investor marks — and desaturated so the band
 * reads as a credits strip instead of competing with the sections either side.
 * Pausing on hover lets anyone actually read a name.
 */
export default function BackedBy() {
  return (
    <section id="investors" className="border-y border-neutral-200 bg-[#F1FAF4] py-16 sm:py-20">
      <Reveal from="none">
        <div className="container">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[.2em] text-neutral-500">
            Backed by global leaders
          </p>
          <p className="mx-auto mt-4 max-w-xl text-center text-[16.5px] leading-relaxed text-neutral-500">
            <span className="font-display font-bold text-ink-900">$134 million</span> raised across
            four rounds, from funds that underwrite fleets, energy networks and climate
            infrastructure for a living.
          </p>
        </div>
      </Reveal>

      <div className="mt-12">
        <Marquee speed="slow">
          {INVESTORS.map((inv) => (
            <span
              key={inv.name}
              className="group mx-10 flex shrink-0 select-none flex-col items-center sm:mx-14"
            >
              {/* neutral-400 rather than -300: these are real names, not
                  decoration, and -300 on this surface is below AA. */}
              <span className="whitespace-nowrap font-display text-2xl font-bold tracking-tight text-neutral-500 transition-colors duration-300 group-hover:text-brand-700 sm:text-[1.75rem]">
                {inv.name}
              </span>
              {/* No alpha — `/80` drops this back under AA. */}
              <span className="mt-1.5 whitespace-nowrap text-[11px] uppercase tracking-[.18em] text-neutral-500 transition-colors duration-300 group-hover:text-brand-700">
                {inv.role}
              </span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
