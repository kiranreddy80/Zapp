import { useReducedMotion } from 'framer-motion'
import Reveal, { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import Counter from '@/components/ui/Counter'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import { ENV_METRICS } from '@/data/content'
import { VIDEO } from '@/data/media'

/**
 * Environmental impact, over a looping canopy shot. Numbers count up on first
 * view — the section is the emotional beat between the product sections and
 * the social proof.
 */
export default function ImpactSection() {
  const reduced = useReducedMotion()

  return (
    <section id="impact" className="relative isolate overflow-hidden bg-ink-950 py-24 sm:py-32">
      <div className="absolute inset-0 -z-20">
        {reduced ? (
          <img src={VIDEO.forestPoster} alt="" className="h-full w-full object-cover" />
        ) : (
          <video
            className="h-full w-full object-cover"
            src={VIDEO.forest}
            poster={VIDEO.forestPoster}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
          />
        )}
      </div>

      <div className="absolute inset-0 -z-10 bg-ink-950/80" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950 via-brand-950/40 to-ink-950" />
      <div className="noise absolute inset-0 -z-10" />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow-dark">
              <Icon name="Leaf" className="h-3.5 w-3.5" />
              Measured impact
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-6 text-3xl leading-[1.08] text-white sm:text-4xl lg:text-5xl">
              Every kilometre we ride is a kilometre
              <span className="text-gradient-volt"> nobody had to burn petrol for.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              We log distance against a petrol baseline that an independent assessor audits. These
              are avoided emissions, not offsets bought after the fact.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {ENV_METRICS.map((m) => (
            <RevealItem key={m.label} className="bg-ink-950/70 p-8 backdrop-blur-sm">
              <p className="font-display text-4xl font-extrabold text-white sm:text-[2.75rem]">
                <Counter value={m.value} />
                <span className="ml-1 text-2xl text-volt-400">{m.suffix}</span>
              </p>
              <p className="mt-3 font-semibold text-white/85">{m.label}</p>
              <p className="mt-1 text-[13.5px] text-white/70">{m.sub}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <Button to="/environment" variant="volt">
              See our environmental report
            </Button>
            <Button to="/esg" variant="outline-light" icon="ShieldCheck" iconPosition="left">
              ESG commitments
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
