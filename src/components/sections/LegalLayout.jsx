import { useEffect, useState } from 'react'
import Seo from '@/components/ui/Seo'
import PageHero from '@/components/sections/PageHero'
import CTABand from '@/components/sections/CTABand'
import Section from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import Icon from '@/components/ui/Icon'
import { CONTACT } from '@/data/site'
import { LEGAL_UPDATED } from '@/data/content'
import cn from '@/lib/cn'

/**
 * Shared shell for policy pages: hero, sticky section index that tracks the
 * viewport, and consistently styled long-form body copy.
 */
export default function LegalLayout({ title, lead, description, path, image, sections, contactEmail }) {
  const [active, setActive] = useState(sections[0]?.id)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-120px 0px -65% 0px', threshold: 0 },
    )

    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sections])

  return (
    <>
      <Seo title={title} description={description} path={path} image={image} />

      <PageHero
        eyebrow="Legal"
        title={title}
        lead={lead}
        image={image}
        crumbs={[{ label: title }]}
        height="sm"
      />

      <Section tone="light">
        <div className="grid gap-12 lg:grid-cols-[15rem_1fr] lg:gap-16">
          {/* index */}
          <nav aria-label="On this page" className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-[11px] font-semibold uppercase tracking-[.16em] text-neutral-500">
              On this page
            </p>
            <ul className="mt-5 space-y-1 border-l border-neutral-200">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={cn(
                      '-ml-px block border-l-2 py-2 pl-4 text-[14px] transition-colors',
                      active === s.id
                        ? 'border-brand-500 font-semibold text-brand-700'
                        : 'border-transparent text-neutral-500 hover:border-neutral-300 hover:text-ink-900',
                    )}
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-8 flex items-center gap-2 text-[13px] text-neutral-500">
              <Icon name="Calendar" className="h-3.5 w-3.5" />
              Updated {LEGAL_UPDATED}
            </p>
          </nav>

          {/* body */}
          <div className="max-w-3xl">
            {sections.map((s, i) => (
              <Reveal key={s.id} id={s.id} as="section" className={cn(i > 0 && 'mt-14')}>
                <h2 className="text-2xl leading-snug">
                  <span className="mr-3 font-display text-brand-500">{i + 1}.</span>
                  {s.title}
                </h2>

                <div className="mt-5 space-y-4 text-[15.5px] leading-relaxed text-neutral-600">
                  {s.body.map((block, bi) =>
                    Array.isArray(block) ? (
                      <ul key={bi} className="space-y-2.5">
                        {block.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p key={bi}>{block}</p>
                    ),
                  )}
                </div>
              </Reveal>
            ))}

            <Reveal className="mt-14">
              <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-7">
                <h3 className="text-lg">Questions about this policy</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-neutral-600">
                  Write to us and a member of our legal team will respond within five working days.
                </p>
                <a
                  href={`mailto:${contactEmail ?? CONTACT.supportEmail}`}
                  className="link-underline mt-4 inline-flex items-center gap-2 font-semibold text-brand-700"
                >
                  <Icon name="Mail" className="h-4 w-4" />
                  {contactEmail ?? CONTACT.supportEmail}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <CTABand
        eyebrow="Zapp Electric"
        title="Ready when you are"
        lead="Rentals, cargo fleets and franchise partnerships — all start with a conversation."
        primary={{ label: 'Get in touch', to: '/contact' }}
        secondary={{ label: 'Explore rentals', to: '/scooter-rental' }}
        points={['No lock-in', 'Insurance included', '12 cities live']}
      />
    </>
  )
}
