'use client'

import './rates.css'

export default function RatesSection() {
  return (
    <section className="rates-section">
      <h2 className="rates-heading">Rates and Insurance</h2>

      <div className="rates-content space-y-6">
        <p><br />Session Fee – $200</p>
        <p><br />Psychodiagnostic Evaluation – $225</p>
        <p>
          <br />I accept both private pay and insurance. I am in-network with BCBS and Aetna.
        </p>
        <p>
          <br />For out-of-network plans, I’ve partnered with Mentaya using{' '}
          <u>this tool </u>to help you check your eligibility for reimbursement for my services.
        </p>
      </div>
    </section>
  )
}
