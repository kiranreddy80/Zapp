/**
 * Central media registry.
 *
 * Every asset is a Pexels CDN URL — the Pexels licence permits free commercial
 * use and hotlinking with no attribution required. Each URL in this file was
 * verified to return 200 before being committed.
 *
 * To rebrand with your own shoot: replace the values here and nothing else.
 * Swap a remote URL for a local one by dropping the file in /public/media and
 * writing '/media/your-file.jpg'.
 */

const photo = (id, w = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`

const video = (id, variant = 'hd_1920_1080_30fps') =>
  `https://videos.pexels.com/video-files/${id}/${id}-${variant}.mp4`

export const VIDEO = {
  /**
   * Homepage hero — a real Indian market street full of two-wheelers and
   * rickshaws. Chosen over generic delivery footage because the brand is
   * India-first and the setting has to read as India instantly.
   */
  hero: video(20613696),
  heroSd: video(20613696, 'sd_640_360_30fps'),
  heroPoster: photo(28672608, 1920),
  /** Rider with a delivery bag on an electric scooter. */
  rider: video(6868690),
  riderPoster: photo(4393247, 1600),
  /** Courier riding through the city. */
  courier: video(6867868),
  courierPoster: photo(7362948, 1600),
  /** City traffic timelapse — technology + EV-for-delivery pages. */
  city: video(6464757),
  cityPoster: photo(12217823, 1600),
  /** Drone over green canopy — environment + ESG pages. */
  forest: video(10092291),
  forestPoster: photo(2739664, 1600),
}

/**
 * Auto-advancing slides behind the homepage mission banner.
 *
 * Chosen by rendering each candidate behind the banner's green wash first —
 * several otherwise-good shots went muddy under the tint, and one carried a
 * visible KTM sign. Ordered fleet → street → service bay → rider.
 */
export const BANNER_SLIDES = [
  {
    src: '/media/banner-fleet.jpg',
    fallback: photo(28670971, 1920),
    alt: 'A row of SGD electric scooters lined up',
  },
  {
    src: '/media/banner-charging.jpg',
    fallback: photo(17626459, 1920),
    alt: 'A SGD electric scooter charging at an EV point',
  },
  {
    src: '/media/banner-car.jpg',
    fallback: photo(17626460, 1920),
    alt: 'A SGD electric vehicle',
  },
]

export const IMG = {
  // ---- Riders & delivery -------------------------------------------------
  riderScooter: photo(4393247),
  riderBagMotorcycle: photo(7362948),
  courierStreet: photo(7363190),
  /* Was photo 12203732, which shows a Papa John's-branded delivery bike —
     a third-party trademark we have no licence to display. */
  riderCityDay: photo(19972996),
  riderRoad: photo(12203654),
  riderBike: photo(19972996),
  urbanScooterRider: photo(29083047),

  // ---- Vehicles & infrastructure ----------------------------------------
  evCharging: photo(9800000),
  threeWheelerRural: photo(30778957),
  threeWheelerStreet: photo(35755244),
  threeWheelerFlowers: photo(30833470),
  mumbaiStreet: photo(28672608),
  autoWhite: photo(8566523),
  threeWheelGreen: photo(67183),

  // ---- Operations --------------------------------------------------------
  warehouseVan: photo(21838827),
  mechanicWorkshop: photo(3822843),
  mechanicBike: photo(3822784),
  garageBikes: photo(5252118),
  mechanicsChecking: photo(12741638),
  workshopTools: photo(29409960),
  fixingMotorcycle: photo(11890953),

  // ---- People ------------------------------------------------------------
  portraitMan1: photo(34423732, 800),
  portraitMan2: photo(15854251, 800),
  portraitMan3: photo(2324638, 800),
  portraitWoman1: photo(30004322, 800),
  portraitWoman2: photo(34381970, 800),
  portraitWoman3: photo(29852895, 800),
  portraitWoman4: photo(18809829, 800),

  // ---- Workplace ---------------------------------------------------------
  teamMeeting: photo(7869111),
  teamCollab: photo(7970845),
  teamDiverse: photo(3184293),
  teamProject: photo(5685822),
  teamDiscussion: photo(7643739),
  analyticsScreen: photo(3861957),

  // ---- Environment -------------------------------------------------------
  forestTop: photo(572937),
  forestRiver: photo(2739664),
  forestSun: photo(4552902),
  forestAerial: photo(695299),

  // ---- Advertising -------------------------------------------------------
  roadsideBanner: photo(6544553),
  citySpring: photo(12217823),
}

/** Small helper so avatars stay light. */
export const avatar = (id) => photo(id, 400)

export { photo, video }
