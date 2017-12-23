import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    const { surveys } = this.props;

    return surveys.reverse().map( ({_id, title, body, dateSent, yes, no}) => {
      return (
        <div className="card darken-1" key={title}>
          <div className="card-content">
            <span className="card-title">{title}</span>
            <p>
              {body}
            </p>
            <p className="right">
              Sent On: {new Date(dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>Yes: {yes}</a>
            <a>No: {no}</a>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderSurveys()}
      </div>
    );
  }
}

const mapStateToProps = ({ surveys }) => ({
  surveys
});

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
