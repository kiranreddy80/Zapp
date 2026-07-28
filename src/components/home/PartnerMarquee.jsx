import Marquee from '@/components/ui/Marquee'
import Reveal from '@/components/ui/Reveal'
import PartnerLogo from '@/components/ui/PartnerLogo'
import { PARTNERS } from '@/data/content'

/**
 * Client wordmarks, tinted with each brand's own colour.
 */
export default function PartnerMarquee() {
  return (
    <section className="border-y border-neutral-200 bg-white py-12">
      <Reveal from="none">
        <p className="mb-8 text-center text-[11px] font-semibold uppercase tracking-[.2em] text-neutral-500">
          Powering deliveries for India&rsquo;s largest platforms
        </p>
      </Reveal>

      <Marquee speed="slow">
        {PARTNERS.map((p) => (
          <PartnerLogo key={p.name} partner={p} />
        ))}
      </Marquee>
    </section>
  )
}
