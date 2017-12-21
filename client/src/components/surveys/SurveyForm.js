// SurveyForm shows a form for a user to add input
import React, { Component} from 'react';
import { reduxForm, Field } from 'redux-form';

//components
import SurveyField from './SurveyField';

class SurveyForm extends Component {
  renderFields() {
    return (
      <div>
        <Field
          label='Survey Title'
          type="text"
          name="Title"
          component={SurveyField}  />
        <Field
          label='Subject Line'
          type="text"
          name="Subject"
          component={SurveyField}  />
        <Field
          label='Email Body'
          type="text"
          name="Body"
          component={SurveyField}  />
        <Field
          label='Recipent List'
          type="text"
          name="Emails"
          component={SurveyField}  />
      </div>
    );
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(values => console.log(values))}
        >
          {this.renderFields()}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm);
