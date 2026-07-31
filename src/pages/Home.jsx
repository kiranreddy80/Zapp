import Seo from '@/components/ui/Seo'
import MissionBanner from '@/components/home/MissionBanner'
import Hero from '@/components/home/Hero'
import PartnerMarquee from '@/components/home/PartnerMarquee'
import MissionVision from '@/components/home/MissionVision'
import CeoMessage from '@/components/home/CeoMessage'
// import OurJourney from '@/components/home/OurJourney'
import Gallery from '@/components/home/Gallery'
import ReviewWall from '@/components/home/ReviewWall'
import SavingsCalculator from '@/components/home/SavingsCalculator'
import GetStarted from '@/components/home/GetStarted'
import ImpactSection from '@/components/home/ImpactSection'
import Testimonials from '@/components/home/Testimonials'
import BackedBy from '@/components/home/BackedBy'
import FaqSection from '@/components/home/FaqSection'
import SectionNav from '@/components/home/SectionNav'
import GetInTouch from '@/components/sections/GetInTouch'
import { IMG } from '@/data/media'

export default function Home() {
  return (
    <>
      <Seo
        title="EV Rentals for Last-Mile Delivery"
        description="Rent an electric scooter or 3-wheeler cargo loader with SGD Electric. Insurance, servicing and unlimited battery swaps included. Live in 12 Indian cities."
        image={IMG.riderScooter}
        path="/"
      />

      <MissionBanner />
      <PartnerMarquee />
      <Hero />
      <MissionVision />
      <CeoMessage />
      {/* Our journey — hidden for now, uncomment to bring it back.
          The component and its data are untouched. */}
      {/* <OurJourney /> */}
      <Gallery />
      <SavingsCalculator />
      <ReviewWall />
      <GetStarted />
      <ImpactSection />
      <Testimonials />
      <BackedBy />
      <FaqSection id="faq" tone="muted" scene />
      <GetInTouch />
      <SectionNav />
    </>
  )
}
