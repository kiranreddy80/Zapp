import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import Icon from '@/components/ui/Icon'
import { Glow } from '@/components/ui/Section'

/**
 * Closing call-to-action. Appears at the foot of every page so there is always
 * a next step in view.
 */
export default function CTABand({
  eyebrow = 'Get started',
  title = 'Ready to ride electric?',
  lead = 'Join 24,000 riders who stopped paying for petrol. Onboarding takes a day, and there is no lock-in.',
  primary = { label: 'Start renting', to: '/scooter-rental' },
  secondary = { label: 'Talk to our team', to: '/contact' },
  points = ['No licence needed', 'Insurance included', 'Cancel anytime'],
}) {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-24 sm:py-28">
      {/* animated brand wash */}
      <div className="absolute inset-0 animate-gradient-pan bg-[linear-gradient(120deg,#032D1D_0%,#05603A_35%,#039855_55%,#032D1D_100%)] opacity-90" />
      <div className="noise absolute inset-0" />
      <Glow className="-bottom-32 left-1/4 h-96 w-96" color="volt" />
      <Glow className="-top-24 right-1/4 h-80 w-80" color="white" />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow-dark">
              <Icon name="Sparkles" className="h-3.5 w-3.5" />
              {eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-6 text-3xl leading-[1.08] text-white sm:text-4xl lg:text-5xl">
              {title}
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70">{lead}</p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button to={primary.to} variant="volt" size="lg">
                {primary.label}
              </Button>
              {secondary && (
                <Button to={secondary.to} variant="outline-light" size="lg" icon="MoveRight">
                  {secondary.label}
                </Button>
              )}
            </div>
          </Reveal>

          {points?.length > 0 && (
            <Reveal delay={0.26}>
              <ul className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm text-white/55">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <Icon name="CheckCircle2" className="h-4 w-4 text-volt-400" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}
