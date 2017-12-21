//SurveyField contains logic to render a single label and text input
import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{marginBottom: '5px'}}/>
      <div
        className="red-text"
        style={{
          marginBottom: '20px',
          marginLeft: "10px",
          fontStyle: 'italic'
        }}
      >
        {touched && error /* if touched show error */}
      </div>
    </div>
  );
};
