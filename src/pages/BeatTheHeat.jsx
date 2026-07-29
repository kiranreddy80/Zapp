import Seo from '@/components/ui/Seo'
import Button from '@/components/ui/Button'
import PageHero from '@/components/sections/PageHero'
import FeatureGrid from '@/components/sections/FeatureGrid'
import CTABand from '@/components/sections/CTABand'
import Section, { SectionHeading, Glow } from '@/components/ui/Section'
import Reveal, { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import Icon from '@/components/ui/Icon'
import { CAMPAIGN } from '@/data/content'
import { IMG } from '@/data/media'
import cn from '@/lib/cn'

const RANK_STYLES = [
  'from-volt-500 to-brand-400 text-ink-900',
  'from-brand-400 to-brand-600 text-white',
  'from-brand-600 to-brand-800 text-white',
  'from-ink-700 to-ink-800 text-white',
]

export default function BeatTheHeat() {
  return (
    <>
      <Seo
        title="Beat The Heat — Rider Rewards Campaign"
        description="Complete 100 orders a week between April and May and win up to ₹50,000 plus a three-month free lease. Over ₹40 lakh in total rewards for SGD riders."
        image={IMG.courierStreet}
        path="/beat-the-heat"
      />

      <PageHero
        eyebrow={`Campaign · ${CAMPAIGN.window}`}
        title="Beat The Heat"
        lead={CAMPAIGN.intro}
        image={IMG.courierStreet}
        crumbs={[{ label: 'Rent' }, { label: 'Beat The Heat' }]}
        height="lg"
        stats={[
          { label: 'Total prize pool', value: '₹40 lakh+' },
          { label: 'Grand prize', value: '₹50,000' },
          { label: 'Weekly winners', value: '400+' },
          { label: 'Runs', value: CAMPAIGN.window },
        ]}
      >
        <Button to="/contact" variant="volt" size="lg">
          Join the campaign
        </Button>
        <Button href="#prizes" variant="outline-light" size="lg" icon="ArrowDown">
          See the prize ladder
        </Button>
      </PageHero>

      {/* ---- how to participate ---- */}
      <Section tone="light">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="How to take part"
              title="Four rules, no fine print"
              lead="If you are already riding on a SGD plan, you are already halfway in."
            />
            <Reveal delay={0.2}>
              <div className="mt-9">
                <Button to="/deliver-and-earn">Not a rider yet?</Button>
              </div>
            </Reveal>
          </div>

          <RevealGroup className="space-y-4">
            {CAMPAIGN.steps.map((s, i) => (
              <RevealItem key={s}>
                <div className="card card-hover flex gap-5 p-6">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-500 font-display font-extrabold text-white">
                    {i + 1}
                  </span>
                  <p className="pt-2 text-[15.5px] leading-relaxed text-neutral-700">{s}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* ---- prize ladder ---- */}
      <Section id="prizes" tone="dark" className="overflow-hidden">
        <Glow className="-left-24 top-1/4 h-96 w-96" color="volt" />
        <Glow className="-right-24 bottom-0 h-80 w-80" />

        <SectionHeading
          dark
          eyebrow="The prize ladder"
          title="Over ₹40 lakh going back to riders"
          lead="Winners are drawn from the live leaderboard in the SGD Rider app. Rankings update every night."
        />

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CAMPAIGN.prizes.map((p, i) => (
            <RevealItem key={p.rank}>
              <article
                className={cn(
                  'relative flex h-full flex-col overflow-hidden rounded-3xl p-7',
                  i === 0
                    ? 'lg:-mt-4 lg:pb-11'
                    : 'card-dark card-dark-hover',
                )}
              >
                {i === 0 && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-volt-500 via-brand-400 to-brand-600" />
                    <div className="noise absolute inset-0" />
                  </>
                )}

                <div className="relative flex flex-1 flex-col">
                  <span
                    className={cn(
                      'grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br',
                      RANK_STYLES[i] ?? RANK_STYLES[3],
                    )}
                  >
                    <Icon name={i === 0 ? 'Award' : 'Star'} className="h-5 w-5" />
                  </span>

                  <p
                    className={cn(
                      'mt-6 text-[11px] font-bold uppercase tracking-[.16em]',
                      i === 0 ? 'text-ink-900/60' : 'text-volt-400',
                    )}
                  >
                    {p.rank}
                  </p>

                  <h3
                    className={cn(
                      'mt-2.5 flex-1 font-display text-xl font-bold leading-snug',
                      i === 0 ? 'text-ink-900' : 'text-white',
                    )}
                  >
                    {p.reward}
                  </h3>

                  <p
                    className={cn(
                      'mt-6 border-t pt-5 text-sm font-medium',
                      i === 0 ? 'border-ink-900/15 text-ink-900/70' : 'border-white/10 text-white/65',
                    )}
                  >
                    {p.winners}
                  </p>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-9 max-w-2xl text-center text-xs leading-relaxed text-white/55">
            Orders must be marked delivered on a partner platform and completed on a SGD vehicle to
            count. Full terms are published in the app. SGD employees and their immediate families
            are not eligible.
          </p>
        </Reveal>
      </Section>

      <FeatureGrid
        eyebrow="Summer support"
        title="Prizes are not the only thing on offer"
        lead="Riding through an Indian summer is genuinely hard. These run at every hub through April and May, whether or not you are chasing the leaderboard."
        items={CAMPAIGN.perks}
        tone="muted"
        cols={4}
      />

      {/* ---- leaderboard preview ---- */}
      <Section tone="light">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal from="right">
            <SectionHeading
              align="left"
              eyebrow="Live leaderboard"
              title="See exactly where you stand"
              lead="Your rank, your weekly order count and the gap to the next prize tier — updated every night in the app."
            />
            <Reveal delay={0.2}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button to="/contact" variant="primary">
                  Join the campaign
                </Button>
                <Button to="/scooter-rental" variant="outline">
                  See rental plans
                </Button>
              </div>
            </Reveal>
          </Reveal>

          <Reveal from="left" delay={0.1}>
            <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-card">
              <div className="flex items-center justify-between border-b border-neutral-100 bg-neutral-50 px-6 py-4">
                <p className="font-display font-bold">This week · Delhi NCR</p>
                <span className="flex items-center gap-1.5 text-[12px] font-semibold text-brand-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                  Live
                </span>
              </div>

              <ul className="divide-y divide-neutral-100">
                {[
                  { rank: 1, name: 'Ramesh Y.', orders: 218, you: false },
                  { rank: 2, name: 'Suresh K.', orders: 204, you: false },
                  { rank: 3, name: 'Amit S.', orders: 197, you: false },
                  { rank: 14, name: 'You', orders: 142, you: true },
                  { rank: 15, name: 'Dinesh P.', orders: 139, you: false },
                ].map((r) => (
                  <li
                    key={r.rank}
                    className={cn(
                      'flex items-center gap-4 px-6 py-4',
                      r.you && 'bg-brand-50',
                    )}
                  >
                    <span
                      className={cn(
                        'grid h-9 w-9 shrink-0 place-items-center rounded-full font-display text-sm font-bold',
                        r.rank === 1
                          ? 'bg-volt-500 text-ink-900'
                          : r.you
                            ? 'bg-brand-500 text-white'
                            : 'bg-neutral-100 text-neutral-500',
                      )}
                    >
                      {r.rank}
                    </span>
                    <span
                      className={cn(
                        'flex-1 font-medium',
                        r.you ? 'text-brand-800' : 'text-ink-900',
                      )}
                    >
                      {r.name}
                    </span>
                    <span className="font-display font-bold text-neutral-500">
                      {r.orders}
                      <span className="ml-1 text-[12px] font-medium text-neutral-500">orders</span>
                    </span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-neutral-100 bg-neutral-50 px-6 py-4">
                <div className="flex items-center justify-between text-[13px]">
                  <span className="text-neutral-500">56 orders to the next tier</span>
                  <span className="font-semibold text-brand-700">₹10,000</span>
                </div>
                <div className="mt-2.5 h-2 overflow-hidden rounded-full bg-neutral-200">
                  <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-brand-500 to-volt-500" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTABand
        eyebrow="Beat The Heat"
        title="The leaderboard resets every Monday"
        lead="Every week is a fresh chance at a prize. Get on a SGD plan and your orders start counting immediately."
        primary={{ label: 'Join the campaign', to: '/contact' }}
        secondary={{ label: 'Become a rider', to: '/deliver-and-earn' }}
        points={['100 orders a week to qualify', 'Weekly winners announced Monday', 'Free hydration kits at every hub']}
      />
    </>
  )
}
