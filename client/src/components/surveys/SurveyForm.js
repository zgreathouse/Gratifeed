// SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component} from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';

//components
import SurveyField from './SurveyField';

const FIELDS = [
  {label: 'Survey Title', name: 'title', noValueError: 'a title'},
  {label: 'Subject Line', name: 'subject', noValueError: 'a subject'},
  {label: 'Email Body', name: 'body', noValueError: 'a body'},
  {label: 'Recipient List', name: 'emails', noValueError: 'at least one email'}
];

class SurveyForm extends Component {
  renderFields() {
    // map over fields array and produce a Field tag with the respective
    // prop values
    return _.map(FIELDS, ({ label, name }) => {
      return <Field key={name} component={SurveyField} type="text" label={label} name={name} />
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>

          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

//This validate function is passd to redux form for input validations
//on the form
function validate(values) {
  const errors = {};

  errors.emails = validateEmails(values.emails || '');

  _.forEach(FIELDS, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = `You must provide ${noValueError}`;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm'
})(SurveyForm);
