import LegalLayout from '@/components/sections/LegalLayout'
import { IMG } from '@/data/media'

const SECTIONS = [
  {
    id: 'introduction',
    title: 'Introduction',
    body: [
      'SGD Electric Mobility Pvt. Ltd. ("SGD", "we", "us") operates the SGD Rider app, the SGD fleet dashboard and this website. This policy explains what personal data we collect, why we collect it, how long we keep it and what rights you have over it.',
      'We process personal data in accordance with the Digital Personal Data Protection Act, 2023 and applicable Indian law. Where we act as a data fiduciary, the obligations in this policy are ours. Where we process data on behalf of an enterprise client, that client is the fiduciary and their policy also applies.',
    ],
  },
  {
    id: 'what-we-collect',
    title: 'Information we collect',
    body: [
      'We collect only what we need to onboard you, keep you insured, keep the vehicle safe and pay you correctly.',
      [
        'Identity data — name, date of birth, photograph, Aadhaar number (masked after verification), PAN, driving licence where applicable.',
        'Contact data — mobile number, email address, residential address and emergency contact.',
        'Financial data — bank account or UPI handle for payouts, transaction history relating to rentals and deposits.',
        'Vehicle and location data — GPS position, speed, battery state and trip history for the vehicle assigned to you, recorded while the vehicle is in your custody.',
        'Usage data — app interactions, support tickets, device identifiers and IP address.',
        'Verification data — background and police verification results where required by an enterprise client or by law.',
      ],
      'We do not collect biometric data beyond the liveness check used during KYC, and that check is processed by our verification partner without a retained template.',
    ],
  },
  {
    id: 'how-we-use-it',
    title: 'How we use your information',
    body: [
      'We use personal data for the following purposes, each of which has a lawful basis under the DPDP Act:',
      [
        'To verify your identity and eligibility to rent a vehicle.',
        'To assign, insure and register a vehicle to you.',
        'To calculate and disburse your earnings and to itemise deductions.',
        'To locate a vehicle in the event of theft, accident or unauthorised use.',
        'To predict maintenance needs and dispatch roadside assistance.',
        'To provide support in your preferred language and resolve grievances.',
        'To meet statutory, tax and insurance obligations.',
        'To produce aggregated, de-identified analytics about fleet performance and emissions.',
      ],
      'We do not sell personal data. We do not use rider location data for advertising targeting, and we do not share individual rider location with advertisers under any circumstance.',
    ],
  },
  {
    id: 'sharing',
    title: 'Who we share it with',
    body: [
      'We share personal data only where it is necessary to deliver the service:',
      [
        'Delivery platforms you have chosen to work with, limited to the data they require to activate your account.',
        'Insurers, for policy issuance and claims processing.',
        'Verification partners, for Aadhaar, PAN and background checks.',
        'Payment processors and banks, for disbursing earnings and collecting rentals.',
        'Franchise partners operating the hub you are assigned to, limited to operational data.',
        'Law enforcement or regulators, where compelled by a valid legal order.',
      ],
      'Every processor is bound by a written agreement restricting them to our instructions, and we audit the material ones annually.',
    ],
  },
  {
    id: 'retention',
    title: 'How long we keep it',
    body: [
      'We retain personal data only as long as we need it, or as long as the law requires:',
      [
        'Active rider records — for the duration of your relationship with us.',
        'Financial and tax records — eight years from the end of the relevant financial year, as required by Indian tax law.',
        'Vehicle telemetry — 24 months, after which it is aggregated and de-identified.',
        'Support tickets and grievance records — five years from closure.',
        'KYC verification records — as required by our insurers and regulators, typically five years.',
      ],
      'When a retention period ends, data is deleted or irreversibly anonymised. Anonymised aggregates used for emissions and fleet reporting may be retained indefinitely because they cannot be linked back to an individual.',
    ],
  },
  {
    id: 'your-rights',
    title: 'Your rights',
    body: [
      'Under the DPDP Act you have the right to access a summary of the personal data we hold about you, to have inaccurate data corrected, to have data erased where we no longer have a lawful basis to keep it, to nominate someone to exercise these rights if you are unable to, and to raise a grievance.',
      'You can exercise the first three directly in the SGD Rider app under Profile → Data & Privacy. Requests submitted in the app are actioned within seven working days.',
      'If you are unsatisfied with our response, you may escalate to our Data Protection Officer, and thereafter to the Data Protection Board of India.',
    ],
  },
  {
    id: 'security',
    title: 'How we protect it',
    body: [
      'We maintain controls aligned to ISO 27001, including encryption of personal data at rest and in transit, role-based access limited to staff with an operational need, mandatory multi-factor authentication for all internal systems, annual third-party penetration testing, and logging of every access to rider records.',
      'No system is perfectly secure. If a breach occurs that is likely to affect you, we will notify you and the Data Protection Board without undue delay, and we will tell you what happened rather than issue a generic notice.',
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies and tracking',
    body: [
      'This website uses a small number of cookies. Our use of cookies, the categories involved and how to control them are described in full in our Cookie Policy.',
      'The SGD Rider app does not use advertising identifiers for third-party tracking.',
    ],
  },
  {
    id: 'children',
    title: "Children's data",
    body: [
      'Our services are not offered to anyone under 18. We do not knowingly collect personal data from children. If we become aware that we hold data about a child, we delete it promptly.',
    ],
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    body: [
      'We update this policy when our practices change. Material changes are notified in the app and by email at least fourteen days before they take effect, and the previous version remains available on request.',
    ],
  },
]

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lead="What we collect, why we collect it, how long we keep it and what you can ask us to do about it — written to be read, not to be skipped."
      description="SGD Electric's privacy policy: the personal data we collect from riders and clients, our lawful basis, retention periods and your rights under the DPDP Act 2023."
      path="/privacy-policy"
      image={IMG.citySpring}
      sections={SECTIONS}
      contactEmail="privacy@sgdelectric.in"
    />
  )
}
