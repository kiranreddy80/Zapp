import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Seo from '@/components/ui/Seo'
import Button from '@/components/ui/Button'
import PageHero from '@/components/sections/PageHero'
import CTABand from '@/components/sections/CTABand'
import Section, { SectionHeading } from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import Img from '@/components/ui/Img'
import Icon from '@/components/ui/Icon'
import { NEWS, AWARDS } from '@/data/content'
import { CONTACT } from '@/data/site'
import { formatDate } from '@/lib/format'
import { IMG } from '@/data/media'
import cn from '@/lib/cn'

export default function News() {
  const tags = useMemo(() => ['All', ...new Set(NEWS.map((n) => n.tag))], [])
  const [tag, setTag] = useState('All')

  const items = tag === 'All' ? NEWS : NEWS.filter((n) => n.tag === tag)
  const [featured, ...rest] = items

  return (
    <>
      <Seo
        title="Newsroom"
        description="Press coverage, funding announcements, milestones and awards from Zapp Electric — India's EV fleet for last-mile delivery."
        image={IMG.riderCityDay}
        path="/news"
      />

      <PageHero
        eyebrow="Newsroom"
        title="Milestones, coverage and announcements"
        lead="What we have shipped, what we have raised and what the press has made of it."
        image={IMG.riderCityDay}
        crumbs={[{ label: 'Company' }, { label: 'Newsroom' }]}
        height="sm"
      >
        <Button href={`mailto:${CONTACT.pressEmail}`} variant="volt" size="lg" icon="Mail" iconPosition="left">
          Press enquiries
        </Button>
      </PageHero>

      <Section tone="light">
        {/* filters */}
        <Reveal from="none">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="mr-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.16em] text-neutral-500">
              <Icon name="Filter" className="h-3.5 w-3.5" />
              Filter
            </span>
            {tags.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTag(t)}
                className={cn(
                  'rounded-full border px-4 py-2 text-[14px] font-medium transition-all duration-300',
                  tag === t
                    ? 'border-brand-500 bg-brand-500 text-white shadow-glow'
                    : 'border-neutral-200 bg-white text-neutral-600 hover:border-brand-300 hover:text-brand-700',
                )}
              >
                {t}
              </button>
            ))}
          </div>
        </Reveal>

        {/* featured */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tag}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {featured && (
              <article className="group mt-10 grid gap-8 overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-card lg:grid-cols-2">
                <Img
                  src={featured.image}
                  alt=""
                  wrapperClassName="aspect-[16/11] w-full lg:aspect-auto lg:h-full"
                  className="transition-transform duration-[1.6s] group-hover:scale-105"
                />

                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <div className="flex items-center gap-3 text-[12.5px]">
                    <span className="rounded-full bg-brand-50 px-2.5 py-1 font-semibold text-brand-700">
                      {featured.tag}
                    </span>
                    <time className="text-neutral-500">{formatDate(featured.date)}</time>
                  </div>

                  <h2 className="mt-5 text-2xl leading-snug sm:text-3xl">{featured.title}</h2>
                  <p className="mt-4 text-[16px] leading-relaxed text-neutral-600">
                    {featured.excerpt}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-neutral-100 pt-6">
                    <span className="font-display font-bold text-neutral-500">{featured.outlet}</span>
                    <span className="link-underline flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                      Read coverage
                      <Icon name="ArrowUpRight" className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </article>
            )}

            {/* grid */}
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((n) => (
                <article key={n.title} className="card card-hover group flex h-full flex-col overflow-hidden">
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

                    <h3 className="mt-4 text-lg leading-snug transition-colors group-hover:text-brand-700">
                      {n.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-neutral-600">
                      {n.excerpt}
                    </p>

                    <p className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-4 text-[13px]">
                      <span className="font-semibold text-neutral-500">{n.outlet}</span>
                      <Icon
                        name="ArrowUpRight"
                        className="h-4 w-4 text-neutral-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-brand-700"
                      />
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {items.length === 0 && (
              <p className="mt-16 text-center text-neutral-500">
                Nothing filed under that tag yet.
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </Section>

      {/* ---- awards ---- */}
      <Section tone="muted" pad="md">
        <SectionHeading eyebrow="Recognition" title="Awards and listings" />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {AWARDS.map((a) => (
            <Reveal key={a.title}>
              <div className="card card-hover h-full p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
                  <Icon name="Award" className="h-5 w-5" />
                </span>
                <p className="mt-5 text-[11px] font-bold uppercase tracking-[.16em] text-neutral-500">
                  {a.year}
                </p>
                <h3 className="mt-1.5 text-base leading-snug">{a.title}</h3>
                <p className="mt-2 text-[13.5px] text-neutral-500">{a.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---- press kit ---- */}
      <Section tone="light" pad="md">
        <Reveal>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl border border-neutral-200 bg-neutral-50 p-10 text-center">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-500 text-white shadow-glow">
              <Icon name="Newspaper" className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-xl">Press kit</h3>
              <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-neutral-600">
                Logos, brand guidelines, founder photographs, fleet imagery and our latest fact sheet.
                Journalists get a response within one working day.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Button href={`mailto:${CONTACT.pressEmail}`} icon="Mail" iconPosition="left">
                {CONTACT.pressEmail}
              </Button>
              <Button to="/about" variant="outline">
                Company background
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>

      <CTABand
        eyebrow="Newsroom"
        title="Working on a story?"
        lead="We are happy to provide data, rider introductions and executive interviews. Tell us your deadline and we will work to it."
        primary={{ label: 'Contact press team', to: '/contact' }}
        secondary={{ label: 'Read the blog', to: '/blog' }}
        points={['1 working day response', 'Data available on request', 'Rider introductions']}
      />
    </>
  )
}
