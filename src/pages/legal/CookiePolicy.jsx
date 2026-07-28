import LegalLayout from '@/components/sections/LegalLayout'
import { IMG } from '@/data/media'

const SECTIONS = [
  {
    id: 'what-are-cookies',
    title: 'What cookies are',
    body: [
      'Cookies are small text files a website stores on your device. They let a site remember things between page loads — that you are signed in, which city you selected, whether you have dismissed a banner.',
      'Similar technologies including local storage, session storage and pixels do comparable things. Everything in this policy applies to those too.',
    ],
  },
  {
    id: 'what-we-use',
    title: 'What we use, and why',
    body: [
      'We keep our cookie use deliberately small. There are four categories:',
      [
        'Strictly necessary — session management, security tokens and load balancing. These cannot be switched off because the site does not function without them.',
        'Preference — remembering your selected city, language and whether you have dismissed a notice. Set only after you accept.',
        'Analytics — aggregated, de-identified measurement of which pages are used and where people abandon a form. We use this to fix the site, not to profile you.',
        'Marketing — used to measure whether a campaign brought someone to the site. Set only with your explicit consent, and never on the Zapp Rider app.',
      ],
      'We do not use cookies to track riders across other websites, and we do not sell any data collected through cookies.',
    ],
  },
  {
    id: 'third-party',
    title: 'Third-party cookies',
    body: [
      'Where we embed content from another service — a video player, a map — that service may set its own cookies. We limit embedded third parties to those we consider necessary, and we load them only after consent where they are not strictly necessary.',
      'Third parties set their own cookies under their own policies. We link to those policies from our consent banner.',
    ],
  },
  {
    id: 'managing',
    title: 'Managing your choices',
    body: [
      'You can change your cookie preferences at any time through the cookie settings link in the site footer. Withdrawing consent is as easy as giving it.',
      'You can also control cookies through your browser. Every major browser lets you block all cookies, block third-party cookies only, or delete cookies already stored. Blocking strictly necessary cookies will stop parts of this site from working.',
      'Most browsers also support a Global Privacy Control signal. Where your browser sends one, we treat it as a withdrawal of consent for analytics and marketing cookies.',
    ],
  },
  {
    id: 'retention',
    title: 'How long cookies last',
    body: [
      'Session cookies are deleted when you close your browser. Persistent cookies last for a defined period:',
      [
        'Strictly necessary — session only, or up to 24 hours for security tokens.',
        'Preference — up to 12 months.',
        'Analytics — up to 13 months.',
        'Marketing — up to 90 days.',
      ],
    ],
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    body: [
      'We update this policy when the cookies we use change. The date at the top of this page reflects the most recent update, and material changes trigger a fresh consent prompt.',
    ],
  },
]

export default function CookiePolicy() {
  return (
    <LegalLayout
      title="Cookie Policy"
      lead="The four kinds of cookie this site uses, how long each lasts, and how to turn off everything that is not strictly necessary."
      description="Zapp Electric cookie policy: the categories of cookies we set, third-party embeds, retention periods and how to manage your consent."
      path="/cookie-policy"
      image={IMG.forestSun}
      sections={SECTIONS}
      contactEmail="privacy@zappelectric.in"
    />
  )
}
