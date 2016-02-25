import React from 'react';

class FiniancialDisclosureSection extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="small-12 columns">
            <h4>Financial Disclosure</h4>
          </div>
        </div>

        <div className="row">
          <div className="small-12 columns">
            Disclosure allows VA to accurately determine whether certain Veterans
            will be charged copays for care and medications, their eligibility for
            other services and enrollment. Veterans are not required to disclose
            their financial information; however, VA is not currently enrolling new
            applicants who decline to provide their financial information unless they
            have other qualifying eligibility factors (i.e., a former Prisoner of
            War, in <b>receipt of a Purple Heart, discharged for a disability incurred or
            aggravated in the line of duty, receiving VA service-connected disability
            compensation, receiving VA pension, in receipt of Medicaid benefits, or a
            recently discharged Combat Veteran (e.g., OEF/OIF/OND), who was
            discharged within the past 5 years are eligible for enrollment without
            disclosing their financial information)</b> but like other Veterans may
            provide their financial information to establish their eligibility for
            travel assistance, cost-free medications and/or medical care for services
            unrelated to military experience.
          </div>
        </div>

        <div className="row">
          <div className="small-12 columns">
            <input type="checkbox"
                name="veteran_wants_to_provide_financial_info"
                id="veteran_wants_to_provide_financial_info"/>
            <label htmlFor="veteran_wants_to_provide_financial_info">
              Do you want to provide your financial information so the VA can determine your eligibility for
              other services and enrollment and if you will be charged copays for care and medication?
            </label>
          </div>
        </div>

        <div className="row">
          <div className="small-12 columns">
            <input
                type="checkbox"
                name="veteran_understands_financial_disclosure_is_important"
                id="veteran_understands_financial_disclosure_is_important"/>
            <label htmlFor="veteran_understands_financial_disclosure_is_important">I understand VA is not enrolling new applicants who decline to provide their financial information unless they have other qualifying criteria as outlined above</label>
          </div>
        </div>

        <div className="row">
          <div className="small-12 columns">
            <a target="_blank" href="http://www.va.gov/healthbenefits/cost/income_thresholds.asp">Click here</a> to view more information about the income thresholds and copayments.
          </div>
        </div>
      </div>
    );
  }
}

export default FiniancialDisclosureSection;
