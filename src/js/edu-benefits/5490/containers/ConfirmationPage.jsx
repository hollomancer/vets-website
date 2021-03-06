import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import Scroll from 'react-scroll';

import { focusElement } from '../../../common/utils/helpers';

import { benefitsLabels } from '../../utils/helpers';

const scroller = Scroll.scroller;
const scrollToTop = () => {
  scroller.scrollTo('topScrollElement', {
    duration: 500,
    delay: 0,
    smooth: true,
  });
};

class ConfirmationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isExpanded: false };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    focusElement('.edu-page-title');
    scrollToTop();
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ isExpanded: !this.state.isExpanded });
  }

  render() {
    const form = this.props.form;
    const response = this.props.form.submission.response
      ? this.props.form.submission.response.attributes
      : {};
    const name = form.veteranInformation.data.veteranFullName;
    const benefit = form.benefitSelection.data.benefit;

    const docExplanation = this.state.isExpanded
      ? (<div className="usa-accordion-content">
        <p>In the future, you might need:</p>
        <ul>
          <li>Your reserve kicker</li>
          <li>Documentation of additional contributions that would increase your monthly benefits.</li>
        </ul>
        <p>Documents can be uploaded using the <a href="https://gibill.custhelp.com/app/utils/login_form/redirect/account%252">GI Bill site</a>.</p>
      </div>)
      : null;

    return (
      <div className="edu-benefits-submit-success">
        <h3 className="edu-page-title">Claim received</h3>
        <p>Normally processed within <strong>30 days</strong></p>
        <p>
          We may contact you for more information or documents.<br/>
          <i>Please print this page for your records.</i>
        </p>
        <div className="inset">
          <h4>Education Benefit Claim <span className="additional">(Form 22-5490)</span></h4>
          <span>for {name.first} {name.middle} {name.last} {name.suffix}</span>

          <ul className="claim-list">
            <li>
              <strong>Benefit to be transferred</strong><br/>
              {benefitsLabels[benefit]}
            </li>
            <li>
              <strong>Confirmation number</strong><br/>
              <span>{response.confirmationNumber}</span>
            </li>
            <li>
              <strong>Date received</strong><br/>
              <span>{moment(form.submission.submittedAt).format('MMM D, YYYY')}</span>
            </li>
            <li>
              <strong>Your claim was sent to</strong><br/>
              <address className="edu-benefits-pre">{response.regionalOffice}</address>
            </li>
          </ul>
        </div>
        <div id="collapsiblePanel" className="usa-accordion-bordered">
          <ul className="usa-unstyled-list">
            <li>
              <div className="accordion-header clearfix">
                <button
                    className="usa-button-unstyled"
                    aria-expanded={this.state.isExpanded ? 'true' : 'false'}
                    aria-controls="collapsible-document-explanation"
                    onClick={this.handleClick}>
                  No documents required at this time
                </button>
              </div>
              {docExplanation}
            </li>
          </ul>
        </div>
        <p>Need help? If you have questions, call 888-442-4551 (888-GI-BILL-1) from 8:00 a.m. - 7:00 p.m. ET Mon - Fri.</p>
        <div className="row form-progress-buttons schemaform-back-buttons">
          <div className="small-6 medium-6 columns">
            <a href="/">
              <button className="usa-button-primary">Go Back to Vets.gov</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    form: state.form
  };
}

export default connect(mapStateToProps)(ConfirmationPage);
export { ConfirmationPage };
