import Section, { SectionHeading } from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import Accordion from '@/components/ui/Accordion'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import { FAQS } from '@/data/content'
import { CONTACT } from '@/data/site'

export default function FaqSection({ items = FAQS, tone = 'light' }) {
  return (
    <Section tone={tone}>
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow="Questions"
            title="Answers, before you ask"
            lead="The things riders and fleet managers ask us most often."
          />

          <Reveal delay={0.15}>
            <div className="card mt-9 p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
                <Icon name="Headphones" className="h-5 w-5" />
              </span>
              <p className="mt-4 font-display font-bold">Still not sure?</p>
              <p className="mt-1.5 text-[14.5px] leading-relaxed text-neutral-600">
                Our team answers in Hindi, English and six regional languages, seven days a week.
              </p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                <Button href={CONTACT.phoneHref} size="sm" icon="Phone" iconPosition="left">
                  Call us
                </Button>
                <Button to="/contact" size="sm" variant="outline">
                  Send a message
                </Button>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal from="left" delay={0.1}>
          <Accordion items={items} defaultOpen={0} />
        </Reveal>
      </div>
    </Section>
  )
}
