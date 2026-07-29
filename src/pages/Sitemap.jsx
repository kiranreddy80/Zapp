import { Link } from 'react-router-dom'
import Seo from '@/components/ui/Seo'
import PageHero from '@/components/sections/PageHero'
import CTABand from '@/components/sections/CTABand'
import Section from '@/components/ui/Section'
import { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import Icon from '@/components/ui/Icon'
import { FOOTER_NAV, LEGAL_NAV } from '@/data/site'
import { IMG } from '@/data/media'

const GROUPS = [
  {
    title: 'Main',
    links: [
      { label: 'Home', to: '/', desc: 'Fleet overview, savings calculator and rider stories' },
    ],
  },
  ...FOOTER_NAV,
  { title: 'Legal', links: LEGAL_NAV },
]

export default function Sitemap() {
  return (
    <>
      <Seo
        title="Sitemap"
        description="Every page on the SGD Electric website, grouped by section."
        path="/sitemap"
      />

      <PageHero
        eyebrow="Sitemap"
        title="Everything on this site"
        lead="Twenty-two pages, grouped the way the navigation is."
        image={IMG.citySpring}
        crumbs={[{ label: 'Sitemap' }]}
        height="sm"
      />

      <Section tone="light">
        <RevealGroup className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((g) => (
            <RevealItem key={g.title}>
              <div className="card h-full p-7">
                <h2 className="text-lg">{g.title}</h2>
                <ul className="mt-5 space-y-1">
                  {g.links.map((l) => (
                    <li key={l.to}>
                      <Link
                        to={l.to}
                        className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-brand-50"
                      >
                        <span className="text-[15px] font-medium text-neutral-700 transition-colors group-hover:text-brand-700">
                          {l.label}
                        </span>
                        <Icon
                          name="ArrowUpRight"
                          className="h-4 w-4 shrink-0 text-neutral-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-brand-700"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <CTABand
        title="Cannot find what you need?"
        lead="Tell us what you were looking for and we will point you to it — or build the page."
        primary={{ label: 'Contact us', to: '/contact' }}
        secondary={{ label: 'Back to home', to: '/' }}
        points={['22 pages', '12 cities', '24,000 riders']}
      />
    </>
  )
}
