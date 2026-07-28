import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Seo from '@/components/ui/Seo'
import Button from '@/components/ui/Button'
import PageHero from '@/components/sections/PageHero'
import CTABand from '@/components/sections/CTABand'
import Section from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import Img from '@/components/ui/Img'
import Icon from '@/components/ui/Icon'
import { BLOG, BLOG_CATEGORIES } from '@/data/content'
import { formatDate } from '@/lib/format'
import { IMG } from '@/data/media'
import cn from '@/lib/cn'

function NewsletterCard() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  return (
    <div className="relative overflow-hidden rounded-3xl bg-ink-900 p-8">
      <div className="absolute inset-0 animate-gradient-pan bg-[linear-gradient(135deg,#05603A,#039855,#032D1D)] opacity-90" />
      <div className="noise absolute inset-0" />

      <div className="relative">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-volt-500 text-ink-900">
          <Icon name="Mail" className="h-5 w-5" />
        </span>
        <h3 className="mt-5 text-xl text-white">Get new posts by email</h3>
        <p className="mt-2.5 text-[14.5px] leading-relaxed text-white/65">
          One email a fortnight. Rider guides, fleet economics and the occasional thing we got wrong.
        </p>

        {sent ? (
          <p className="mt-6 flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-sm text-volt-400">
            <Icon name="CheckCircle2" className="h-4 w-4" />
            Thanks — check your inbox to confirm.
          </p>
        ) : (
          <form
            className="mt-6 flex flex-col gap-2.5 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault()
              setSent(true)
            }}
          >
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="h-12 flex-1 rounded-full border border-white/20 bg-white/10 px-5 text-[15px] text-white placeholder:text-white/60 focus:border-volt-400 focus:outline-none"
            />
            <button
              type="submit"
              className="h-12 shrink-0 rounded-full bg-volt-500 px-6 font-semibold text-ink-900 transition-colors hover:bg-volt-400"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default function Blog() {
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')

  const posts = useMemo(() => {
    const q = query.trim().toLowerCase()
    return BLOG.filter((p) => {
      const matchesCategory = category === 'All' || p.category === category
      const matchesQuery =
        !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q)
      return matchesCategory && matchesQuery
    })
  }, [category, query])

  const [featured, ...rest] = posts

  return (
    <>
      <Seo
        title="Blog"
        description="Rider guides, fleet economics, battery technology and sustainability writing from the Zapp Electric team."
        image={IMG.riderRoad}
        path="/blog"
      />

      <PageHero
        eyebrow="Blog"
        title="Guides, economics and things we learned the hard way"
        lead="Written by the people running the fleet — with the numbers shown, including when they are unflattering."
        image={IMG.riderRoad}
        crumbs={[{ label: 'Company' }, { label: 'Blog' }]}
        height="sm"
      />

      <Section tone="light">
        {/* controls */}
        <Reveal from="none">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2.5">
              {BLOG_CATEGORIES.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  className={cn(
                    'rounded-full border px-4 py-2 text-[14px] font-medium transition-all duration-300',
                    category === c
                      ? 'border-brand-500 bg-brand-500 text-white shadow-glow'
                      : 'border-neutral-200 bg-white text-neutral-600 hover:border-brand-300 hover:text-brand-700',
                  )}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="relative lg:w-72">
              <Icon
                name="Search"
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500"
              />
              <label className="sr-only" htmlFor="blog-search">
                Search posts
              </label>
              <input
                id="blog-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search posts"
                className="h-12 w-full rounded-full border border-neutral-200 bg-white pl-11 pr-4 text-[15px] transition-colors placeholder:text-neutral-500 focus:border-brand-400 focus:outline-none"
              />
            </div>
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${category}-${query}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {featured && (
              <article className="group mt-10 grid gap-8 overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-card lg:grid-cols-[1.15fr_1fr]">
                <Img
                  src={featured.image}
                  alt=""
                  wrapperClassName="aspect-[16/10] w-full lg:aspect-auto lg:h-full"
                  className="transition-transform duration-[1.6s] group-hover:scale-105"
                />

                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <div className="flex flex-wrap items-center gap-3 text-[12.5px]">
                    <span className="rounded-full bg-brand-50 px-2.5 py-1 font-semibold text-brand-700">
                      {featured.category}
                    </span>
                    <time className="text-neutral-500">{formatDate(featured.date)}</time>
                    <span className="text-neutral-300">·</span>
                    <span className="text-neutral-500">{featured.readTime}</span>
                  </div>

                  <h2 className="mt-5 text-2xl leading-snug sm:text-3xl">{featured.title}</h2>
                  <p className="mt-4 text-[16px] leading-relaxed text-neutral-600">
                    {featured.excerpt}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-neutral-100 pt-6">
                    <span className="text-sm text-neutral-500">By {featured.author}</span>
                    <span className="link-underline flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                      Read post
                      <Icon name="ArrowRight" className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </article>
            )}

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((p, i) => (
                <div key={p.slug} className="contents">
                  <article className="card card-hover group flex h-full flex-col overflow-hidden">
                    <Img
                      src={p.image}
                      alt=""
                      wrapperClassName="aspect-[16/10] w-full"
                      className="transition-transform duration-[1.4s] group-hover:scale-105"
                    />
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex flex-wrap items-center gap-2.5 text-[12px]">
                        <span className="rounded-full bg-brand-50 px-2.5 py-1 font-semibold text-brand-700">
                          {p.category}
                        </span>
                        <span className="text-neutral-500">{p.readTime}</span>
                      </div>

                      <h3 className="mt-4 text-lg leading-snug transition-colors group-hover:text-brand-700">
                        {p.title}
                      </h3>
                      <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-neutral-600">
                        {p.excerpt}
                      </p>

                      <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-4 text-[13px]">
                        <span className="text-neutral-500">{p.author}</span>
                        <time className="text-neutral-500">{formatDate(p.date)}</time>
                      </div>
                    </div>
                  </article>

                  {/* slot the newsletter card into the flow */}
                  {i === 1 && (
                    <div className="md:col-span-2 lg:col-span-1">
                      <NewsletterCard />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {posts.length === 0 && (
              <div className="mt-16 text-center">
                <p className="text-neutral-500">No posts match that search.</p>
                <button
                  type="button"
                  onClick={() => {
                    setQuery('')
                    setCategory('All')
                  }}
                  className="mt-4 text-sm font-semibold text-brand-700 underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </Section>

      <CTABand
        eyebrow="Blog"
        title="Want us to write about something?"
        lead="If there is a question about fleet economics, battery technology or rider earnings you cannot find a straight answer to, tell us and we will dig into it."
        primary={{ label: 'Suggest a topic', to: '/contact' }}
        secondary={{ label: 'Read the newsroom', to: '/news' }}
        points={['Fortnightly newsletter', 'Written by the ops team', 'Numbers always shown']}
      />
    </>
  )
}
