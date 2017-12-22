// SurveyNew contains SurveyForm and SurveyReview
import React, { Component} from 'react';
import { reduxForm } from 'redux-form';

//components
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    const { showFormReview } = this.state;

    if (showFormReview) {
      return (
        <SurveyFormReview
          onCancel={() => this.setState({ showFormReview: false})}
        />
      );
    }

    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true})}
      />
    );
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);
