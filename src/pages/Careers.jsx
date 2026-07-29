import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Seo from '@/components/ui/Seo'
import Button from '@/components/ui/Button'
import PageHero from '@/components/sections/PageHero'
import FeatureGrid from '@/components/sections/FeatureGrid'
import SplitFeature from '@/components/sections/SplitFeature'
import CTABand from '@/components/sections/CTABand'
import Section, { SectionHeading, Glow } from '@/components/ui/Section'
import Reveal, { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import Icon from '@/components/ui/Icon'
import Img from '@/components/ui/Img'
import { JOBS, JOB_TEAMS, PERKS, VALUES } from '@/data/content'
import { CONTACT } from '@/data/site'
import { IMG } from '@/data/media'
import cn from '@/lib/cn'

const CULTURE_IMAGES = [
  { src: IMG.teamMeeting, alt: 'Team reviewing fleet data', span: 'col-span-2 row-span-2' },
  { src: IMG.workshopTools, alt: 'Hub service bay', span: '' },
  { src: IMG.teamProject, alt: 'Engineers pairing on a problem', span: '' },
  { src: IMG.mechanicsChecking, alt: 'Technicians inspecting a vehicle', span: 'col-span-2' },
]

export default function Careers() {
  const [team, setTeam] = useState('All')

  const jobs = useMemo(
    () => (team === 'All' ? JOBS : JOBS.filter((j) => j.team === team)),
    [team],
  )

  return (
    <>
      <Seo
        title="Careers — Work at SGD Electric"
        description="Join SGD Electric. Engineering, operations, data, design and ESG roles across India. ESOPs at every level, remote-first engineering, 26-week parental leave."
        image={IMG.teamMeeting}
        path="/careers"
      />

      <PageHero
        eyebrow="Careers"
        title="Build the infrastructure that makes electric actually work"
        lead="Twelve cities is not India. There are 186 hubs, 24,000 riders and a very long list of things we have not built yet."
        image={IMG.teamMeeting}
        crumbs={[{ label: 'Company' }, { label: 'Careers' }]}
        stats={[
          { label: 'Open roles', value: `${JOBS.length}` },
          { label: 'Employees', value: '1,000+' },
          { label: 'Cities', value: '12' },
          { label: 'ESOPs', value: 'Every level' },
        ]}
      >
        <Button href="#roles" variant="volt" size="lg" icon="ArrowDown">
          See open roles
        </Button>
        <Button to="/about" variant="outline-light" size="lg">
          About SGD
        </Button>
      </PageHero>

      {/* ---- culture collage ---- */}
      <Section tone="light">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Life at SGD"
              title="Ninety per cent of us are not in an office"
              lead="Our people are at hubs, in service bays and on the road with riders. Engineering and design run remote-first; operations is field-first, because that is where the problems are."
            />

            <Reveal delay={0.2}>
              <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
                {[
                  { v: '1,000+', l: 'Employees' },
                  { v: '186', l: 'Hubs' },
                  { v: '38%', l: 'Women in workforce' },
                  { v: '4.4★', l: 'Glassdoor rating' },
                  { v: '26 wks', l: 'Parental leave' },
                  { v: '₹75k', l: 'Annual learning budget' },
                ].map((s) => (
                  <div key={s.l}>
                    <dt className="font-display text-2xl font-extrabold text-brand-700">{s.v}</dt>
                    <dd className="mt-1 text-[13.5px] text-neutral-500">{s.l}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal from="left" delay={0.1}>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {CULTURE_IMAGES.map((img) => (
                <div key={img.alt} className={cn('overflow-hidden rounded-2xl', img.span)}>
                  <Img
                    src={img.src}
                    alt={img.alt}
                    wrapperClassName="h-full w-full aspect-[4/3]"
                    className="transition-transform duration-[1.6s] hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <FeatureGrid
        eyebrow="Benefits"
        title="What we actually offer"
        lead="Not a list of ping-pong tables. These are the things people told us mattered when they were deciding."
        items={PERKS}
        tone="muted"
      />

      {/* ---- open roles ---- */}
      <Section id="roles" tone="dark" className="overflow-hidden">
        <Glow className="-right-24 top-1/4 h-96 w-96" />

        <SectionHeading
          dark
          eyebrow="Open roles"
          title={`${JOBS.length} positions across India`}
          lead="If nothing here fits but you think you should be here, write to us anyway — a third of our hires came in that way."
        />

        <Reveal from="none" className="mt-12">
          <div className="flex flex-wrap gap-2.5">
            {JOB_TEAMS.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTeam(t)}
                className={cn(
                  'rounded-full border px-4 py-2 text-[14px] font-medium transition-all duration-300',
                  team === t
                    ? 'border-volt-400 bg-volt-500 text-ink-900'
                    : 'border-white/15 text-white/60 hover:border-white/35 hover:text-white',
                )}
              >
                {t}
              </button>
            ))}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.ul
            key={team}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="mt-8 space-y-3"
          >
            {jobs.map((j) => (
              <li key={j.title}>
                <a
                  href={`mailto:${CONTACT.careersEmail}?subject=Application: ${encodeURIComponent(j.title)}`}
                  className="card-dark card-dark-hover group flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="min-w-0">
                    <h3 className="text-lg text-white transition-colors group-hover:text-volt-400">
                      {j.title}
                    </h3>
                    <div className="mt-2.5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13.5px] text-white/65">
                      <span className="flex items-center gap-1.5">
                        <Icon name="Briefcase" className="h-3.5 w-3.5" />
                        {j.team}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Icon name="MapPin" className="h-3.5 w-3.5" />
                        {j.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Icon name="Clock" className="h-3.5 w-3.5" />
                        {j.type}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Icon name="TrendingUp" className="h-3.5 w-3.5" />
                        {j.exp}
                      </span>
                    </div>
                  </div>

                  <span className="flex shrink-0 items-center gap-2 text-sm font-semibold text-white">
                    Apply
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-volt-500 group-hover:text-ink-900">
                      <Icon name="ArrowUpRight" className="h-4 w-4" />
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>

        <Reveal delay={0.2}>
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[.04] p-8 text-center">
            <p className="font-display text-lg font-bold text-white">
              Nothing here that fits?
            </p>
            <p className="mx-auto mt-2.5 max-w-lg text-[15px] leading-relaxed text-white/55">
              Send us what you have worked on and what you would want to work on here. We read every
              one, and we reply either way.
            </p>
            <div className="mt-6">
              <Button href={`mailto:${CONTACT.careersEmail}`} variant="volt" icon="Mail" iconPosition="left">
                {CONTACT.careersEmail}
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>

      <SplitFeature
        eyebrow="How we hire"
        title="Four conversations, no take-home marathons"
        body="We do not ask for weekend projects or eight rounds. You will speak to the hiring manager, do one practical exercise inside a scheduled session, meet the team, and talk to a founder."
        points={[
          { title: 'Week 1 — Intro call', body: '30 minutes with the hiring manager about the role and your work.' },
          { title: 'Week 1 — Practical session', body: '90 minutes, paid, on a real problem. No unpaid take-homes.' },
          { title: 'Week 2 — Team conversations', body: 'Two people you would work with day to day.' },
          { title: 'Week 2 — Founder chat and offer', body: 'We aim to give a decision within two working days of the last round.' },
        ]}
        image={IMG.teamDiverse}
        imageAlt="Interview conversation at SGD"
        stat={{ value: '~2 wks', label: 'median time to offer' }}
        tone="light"
        flip
      />

      <FeatureGrid
        eyebrow="What we believe"
        title="The values you will be held to"
        lead="These come up in performance reviews, not just on a wall."
        items={VALUES}
        tone="muted"
        cols={4}
      />

      <CTABand
        eyebrow="Careers"
        title="Come build the boring, important things"
        lead="Battery telemetry, hub inventory, payout reconciliation. Unglamorous systems are what let 24,000 people earn a living every day."
        primary={{ label: 'See open roles', to: '/careers' }}
        secondary={{ label: 'Learn about SGD', to: '/about' }}
        points={['ESOPs at every level', 'Remote-first engineering', '₹75k learning budget']}
      />
    </>
  )
}
