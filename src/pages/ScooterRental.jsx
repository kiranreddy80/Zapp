import Seo from '@/components/ui/Seo'
import Button from '@/components/ui/Button'
import PageHero from '@/components/sections/PageHero'
import FeatureGrid from '@/components/sections/FeatureGrid'
import SpecGrid from '@/components/sections/SpecGrid'
import PricingPlans from '@/components/sections/PricingPlans'
import SplitFeature from '@/components/sections/SplitFeature'
import StepList from '@/components/sections/StepList'
import CTABand from '@/components/sections/CTABand'
import FaqSection from '@/components/home/FaqSection'
import { PLANS_2W, SPECS_2W, HOW_IT_WORKS, FAQS } from '@/data/content'
import { IMG } from '@/data/media'

const INCLUDED = [
  {
    icon: 'BatteryCharging',
    title: 'Unlimited battery swaps',
    body: 'Pull into any of 900+ swap points, trade a depleted pack for a full one and ride on. Ninety seconds, no queue on most days.',
  },
  {
    icon: 'Wrench',
    title: 'Every service, every spare',
    body: 'Brake pads, tyres, cables, controller, motor. Scheduled servicing happens at your hub in a slot you pick in the app.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Insurance and accident cover',
    body: 'Comprehensive vehicle insurance plus ₹5 lakh personal accident cover for you, active from the day you collect.',
  },
  {
    icon: 'Headphones',
    title: 'Roadside assistance',
    body: 'Average response of 45 minutes across our live cities. If a fix takes over two hours you get a replacement vehicle.',
  },
  {
    icon: 'FileCheck',
    title: 'Paperwork handled',
    body: 'Registration, fitment, permits and compliance are ours to worry about. Your vehicle is road-legal on handover.',
  },
  {
    icon: 'CalendarClock',
    title: 'Pause when life happens',
    body: 'Freeze your plan for up to 30 days a year from the app. You are not billed for paused days and your slot is held.',
  },
]

const MODELS = [
  {
    icon: 'Bike',
    title: 'Zapp City 25',
    body: 'Low-speed, licence-free and the easiest model to start on. Capped at 25 km/h, ideal for dense neighbourhood routes.',
    points: ['No licence or RC needed', '95 km certified range', 'Best for food delivery'],
  },
  {
    icon: 'Zap',
    title: 'Zapp Sprint 65',
    body: 'Our high-speed model for riders covering longer distances and the stretches between delivery zones.',
    points: ['65 km/h top speed', '130 km certified range', 'Valid licence required'],
  },
  {
    icon: 'Package',
    title: 'Zapp Haul',
    body: 'Reinforced rear frame and a 90-litre box for grocery and quick-commerce runs with bulkier baskets.',
    points: ['90 L cargo box', '150 kg payload', 'Reinforced suspension'],
  },
]

export default function ScooterRental() {
  return (
    <>
      <Seo
        title="Electric Scooter Rental for Delivery Riders"
        description="Rent an electric scooter from ₹129/day. Insurance, servicing and unlimited battery swaps included. No licence needed on low-speed models. Zero lock-in."
        image={IMG.riderScooter}
        path="/scooter-rental"
      />

      <PageHero
        eyebrow="2-Wheeler rental"
        title="An electric scooter that pays for itself"
        lead="From ₹129 a day, with insurance, servicing and unlimited battery swaps built in. Ride it for a week or for four years — there is no lock-in either way."
        image={IMG.riderScooter}
        crumbs={[{ label: 'Rent' }, { label: '2-Wheeler Rental' }]}
        stats={[
          { label: 'Starting at', value: '₹129 / day' },
          { label: 'Certified range', value: '110 km' },
          { label: 'Swap time', value: '90 seconds' },
          { label: 'Lock-in', value: 'None' },
        ]}
      >
        <Button to="/deliver-and-earn" variant="volt" size="lg">
          Start renting
        </Button>
        <Button href="#plans" variant="outline-light" size="lg" icon="ArrowDown">
          See plans
        </Button>
      </PageHero>

      <FeatureGrid
        eyebrow="What is included"
        title="One price. Everything in it."
        lead="The rental is not just the vehicle — it is every running cost you would otherwise carry yourself."
        items={INCLUDED}
        tone="light"
      />

      <SpecGrid
        eyebrow="The vehicle"
        title="Built for 120 km days, not weekend rides"
        lead="Commercial-grade motors, LFP battery chemistry and a frame rated for continuous delivery duty."
        specs={SPECS_2W}
        image={IMG.evCharging}
        imageAlt="Zapp electric scooter charging"
        note="Figures are certified test values. Real-world range varies with load, terrain, traffic and riding style — most riders see 15–20% below certified range in dense city conditions."
      />

      <FeatureGrid
        eyebrow="Choose your model"
        title="Three scooters, three kinds of route"
        lead="Every plan lets you move between models at your hub as your routes change."
        items={MODELS}
        tone="muted"
      />

      <PricingPlans
        id="plans"
        eyebrow="Plans"
        title="Pick the rhythm that fits your week"
        lead="Switch plans, pause, or walk away. Deposits are refunded within seven working days."
        plans={PLANS_2W}
        ctaTo="/deliver-and-earn"
        note="A ₹3,000 security deposit applies to all 2-wheeler plans and is fully refundable. Prices shown are for Delhi NCR and Bengaluru; other cities vary by up to 8%. GST included."
        tone="light"
      />

      <SplitFeature
        tone="deep"
        eyebrow="Swap, do not wait"
        title="A charge that takes ninety seconds"
        body="Charging is the reason most riders reject electric, so we removed it. Ride into any Zapp point, trade your pack for a charged one and go — no plugging in, no waiting, no planning your day around a socket."
        points={[
          {
            title: '900+ swap points',
            body: 'Across 12 cities, sited using rider heat-maps rather than guesswork.',
          },
          {
            title: '96% pack availability',
            body: 'We forecast demand per station per hour and pre-position charged packs.',
          },
          {
            title: 'Included in every plan',
            body: 'Unlimited swaps. No per-swap fee and no monthly cap.',
          },
        ]}
        image={IMG.mechanicWorkshop}
        imageAlt="Battery swap and service point"
        stat={{ value: '90 sec', label: 'average swap time' }}
        flip
      />

      <StepList
        eyebrow="Getting started"
        title="On the road within a day"
        lead="Everything below happens in the app. No branch visit, no agent, no paperwork."
        steps={HOW_IT_WORKS}
        tone="light"
      />

      <FaqSection items={FAQS.slice(0, 6)} tone="muted" />

      <CTABand
        title="Stop paying for petrol this week"
        lead="Book a hub visit, take a test ride, and leave with a scooter the same day if your KYC clears."
        primary={{ label: 'Book a test ride', to: '/contact' }}
        secondary={{ label: 'Compare rent to own', to: '/rent-to-own' }}
        points={['₹3,000 refundable deposit', 'No licence on low-speed models', 'Cancel any day']}
      />
    </>
  )
}
