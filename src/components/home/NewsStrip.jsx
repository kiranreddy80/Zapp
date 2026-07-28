import { Link } from 'react-router-dom'
import Section, { SectionHeading } from '@/components/ui/Section'
import { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import Img from '@/components/ui/Img'
import Icon from '@/components/ui/Icon'
import Button from '@/components/ui/Button'
import { NEWS } from '@/data/content'
import { formatDate } from '@/lib/format'

export default function NewsStrip() {
  const items = NEWS.slice(0, 3)

  return (
    <Section tone="light">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          align="left"
          eyebrow="Newsroom"
          title="What we have been up to"
          className="max-w-xl"
        />
        <Button to="/news" variant="outline" className="shrink-0">
          All news
        </Button>
      </div>

      <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
        {items.map((n) => (
          <RevealItem key={n.title}>
            <Link to="/news" className="group block h-full">
              <article className="card card-hover flex h-full flex-col overflow-hidden">
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
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  )
}
