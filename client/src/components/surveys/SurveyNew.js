// SurveyNew contains SurveyForm and SurveyReview
import React, { Component} from 'react';

//components
import SurveyForm from './SurveyForm';

class SurveyNew extends Component {
  render() {
    return (
      <div>
        <SurveyForm />
      </div>
    );
  }
}

export default SurveyNew;
