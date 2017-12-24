// Landing is the main component of the landing page
import React from 'react';

const Landing = () => {
  return (
    <div style={{ textAlign: 'center'}}>
      <h1>
        Gratifeed!
      </h1>
      Collect feedback from your users
      <div className="bottom-right">
        <button
          href="https://www.linkedin.com/in/zachary-greathouse-11345813b/"
          className="grey right white-text"
        >
          Linkedin
        </button>
        <button
          href="https://github.com/zgreathouse/Gratifeed"
          className="grey right white-text"
        >
          Github
        </button>
      </div>
    </div>
  );
};

export default Landing;
