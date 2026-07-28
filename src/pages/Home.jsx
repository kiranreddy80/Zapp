import Seo from '@/components/ui/Seo'
import MissionBanner from '@/components/home/MissionBanner'
import Hero from '@/components/home/Hero'
import PartnerMarquee from '@/components/home/PartnerMarquee'
import MissionVision from '@/components/home/MissionVision'
import OurJourney from '@/components/home/OurJourney'
import SavingsCalculator from '@/components/home/SavingsCalculator'
import GetStarted from '@/components/home/GetStarted'
import ImpactSection from '@/components/home/ImpactSection'
import Testimonials from '@/components/home/Testimonials'
import BackedBy from '@/components/home/BackedBy'
import FaqSection from '@/components/home/FaqSection'
import GetInTouch from '@/components/sections/GetInTouch'
import { IMG } from '@/data/media'

export default function Home() {
  return (
    <>
      <Seo
        title="EV Rentals for Last-Mile Delivery"
        description="Rent an electric scooter or 3-wheeler cargo loader with Zapp Electric. Insurance, servicing and unlimited battery swaps included. Live in 12 Indian cities."
        image={IMG.riderScooter}
        path="/"
      />

      <MissionBanner />
      <Hero />
      <PartnerMarquee />
      <MissionVision />
      <OurJourney />
      <SavingsCalculator />
      <GetStarted />
      <ImpactSection />
      <Testimonials />
      <BackedBy />
      <FaqSection tone="muted" />
      <GetInTouch />
    </>
  )
}
