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
        <a
          href="https://www.linkedin.com/in/zachary-greathouse-11345813b/"
          className="right grey-text"
          style={{ margin: '0 10px'}}
        >
          Linkedin
        </a>
        <a
          href="https://github.com/zgreathouse/Gratifeed"
          className="right grey-text"
          style={{ margin: '0 10px'}}
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default Landing;
