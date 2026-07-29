import LegalLayout from '@/components/sections/LegalLayout'
import { IMG } from '@/data/media'

const SECTIONS = [
  {
    id: 'agreement',
    title: 'Agreement to these terms',
    body: [
      'These terms govern your use of the SGD Electric website, the SGD Rider app and any vehicle rented from SGD Electric Mobility Pvt. Ltd. By creating an account or taking delivery of a vehicle, you agree to them.',
      'Where you have signed a separate rental agreement, lease agreement or enterprise contract with us, that document governs the commercial relationship and these terms cover everything else. If the two conflict, the signed agreement takes precedence.',
    ],
  },
  {
    id: 'eligibility',
    title: 'Eligibility',
    body: [
      'To rent a vehicle from SGD you must:',
      [
        'Be at least 18 years old and legally able to enter into a contract in India.',
        'Complete identity verification using a valid Aadhaar and PAN.',
        'Hold a valid driving licence for any high-speed or three-wheeler vehicle.',
        'Provide a bank account or UPI handle in your own name.',
        'Provide accurate information and keep it current.',
      ],
      'We may decline an application or end a rental if verification fails, if information provided is inaccurate, or if we reasonably believe the vehicle is being used unlawfully.',
    ],
  },
  {
    id: 'vehicle-use',
    title: 'Using the vehicle',
    body: [
      'The vehicle remains the property of SGD or its leasing partner at all times during a rental. You are responsible for it while it is in your custody.',
      'You agree that you will not:',
      [
        'Allow anyone other than yourself to ride the vehicle, unless we have approved it in writing.',
        'Use the vehicle to carry passengers for hire, or for any unlawful purpose.',
        'Exceed the certified payload of the vehicle.',
        'Modify, repaint, rewire or attempt to repair the vehicle yourself.',
        'Remove, disable or tamper with the telematics unit, GPS or immobiliser.',
        'Take the vehicle outside the operating cities without written approval.',
        'Ride while intoxicated or otherwise unfit to ride.',
      ],
      'Riding without a helmet is a breach of these terms as well as of Indian law. We provide a helmet with every vehicle and replace it free of charge when it is worn.',
    ],
  },
  {
    id: 'payments',
    title: 'Payments, deposits and deductions',
    body: [
      'Rental charges are billed in advance for the period you have selected and are collected by auto-debit on the date you nominate. Security deposits are held without interest and refunded within seven working days of the vehicle being returned in normal condition.',
      'Deductions may be made from a deposit or from earnings for unpaid rental, traffic penalties incurred during your custody, damage beyond fair wear and tear, and loss of accessories. Every deduction is itemised in the app on the day it is applied, with a description and the amount.',
      'If you dispute a deduction, raise it in the app within 30 days. Disputed amounts are held and not disbursed until the dispute is resolved.',
      'Fair wear and tear means the deterioration expected from normal commercial use over the rental period. It does not include collision damage, water ingress from submersion, or damage caused by a breach of these terms.',
    ],
  },
  {
    id: 'maintenance',
    title: 'Maintenance and breakdowns',
    body: [
      'We are responsible for all scheduled servicing, wear parts and repairs arising from normal use. You are responsible for presenting the vehicle for service when notified and for daily checks such as tyre condition and brake feel.',
      'If the vehicle becomes unusable, raise a ticket in the app or call the helpline. Our target roadside response is 45 minutes within our operating cities. Where a repair is expected to take more than two hours, we will offer a replacement vehicle where one is available at your hub.',
      'Rental charges are not automatically waived for downtime, but where the vehicle is unavailable for more than 24 consecutive hours through no fault of yours, we will credit the affected days.',
    ],
  },
  {
    id: 'insurance',
    title: 'Insurance and liability',
    body: [
      'Every vehicle carries comprehensive motor insurance and every rider is covered by a ₹5 lakh personal accident policy. Cover is subject to the terms of the underlying policies, which we will provide on request.',
      'Insurance does not respond where the loss arises from riding without a valid licence where one is required, riding under the influence, deliberate damage, or use in breach of these terms. In those cases you may be liable for the repair or replacement cost.',
      'Report any accident to us and to the police within 24 hours. Failure to report promptly can invalidate a claim.',
      'Nothing in these terms limits our liability for death or personal injury caused by our negligence, or for any liability that cannot be limited under Indian law.',
    ],
  },
  {
    id: 'ending',
    title: 'Ending a rental',
    body: [
      'You may end a rental at any time by returning the vehicle to your hub with all accessories. Where you are on a Rent to Own plan, ending early forfeits accrued ownership credit but creates no further liability.',
      'We may end a rental immediately where there is a serious breach of these terms, where the vehicle is being used unlawfully, or where payment has been outstanding for more than 15 days after written notice.',
      'On termination, you must return the vehicle within 48 hours. We may recover a vehicle that is not returned, and we may use the telematics unit to locate it.',
    ],
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual property',
    body: [
      'The SGD name, logo, app, SGD OS platform, website content and documentation are owned by SGD Electric Mobility Pvt. Ltd. or its licensors. You may not copy, reverse-engineer or redistribute them.',
      'You retain ownership of content you submit — reviews, support messages, photographs — and grant us a licence to use it for operating and improving the service.',
    ],
  },
  {
    id: 'disputes',
    title: 'Grievances and disputes',
    body: [
      'Raise any grievance through the app or by writing to our grievance officer. We acknowledge within 48 hours and aim to resolve within 15 working days.',
      'Rider grievances that are not resolved to your satisfaction may be escalated to our ombudsperson, who is independent of the operations team and reports to the board.',
      'These terms are governed by Indian law. Disputes are subject to the exclusive jurisdiction of the courts at Gurugram, Haryana, save that we may pursue recovery of a vehicle in any court with jurisdiction over its location.',
    ],
  },
  {
    id: 'changes',
    title: 'Changes to these terms',
    body: [
      'We may update these terms. Material changes are notified in the app and by email at least 30 days before they take effect. If you do not accept a change, you may end your rental before it takes effect without penalty.',
    ],
  },
]

export default function TermsOfService() {
  return (
    <LegalLayout
      title="Terms of Service"
      lead="The rules that govern renting a vehicle from us and using our apps — written in plain language, because terms nobody can read protect nobody."
      description="SGD Electric terms of service: eligibility, vehicle use, payments and deductions, maintenance, insurance, ending a rental and dispute resolution."
      path="/terms-of-service"
      image={IMG.mumbaiStreet}
      sections={SECTIONS}
      contactEmail="legal@sgdelectric.in"
    />
  )
}
