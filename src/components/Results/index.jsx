import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

Results.propTypes = {
  score: PropTypes.number.isRequired
};

export default function Results({ score }) {
  return (
    <div className="results">
      <h2 className="heading">Congratulations!</h2>
      <div className="score-text">
        <p>You got</p>
        <h3>{score} / 10</h3>
        <p>answers correct!</p>
      </div>
      <button className="button" onClick={() => window.location.reload()}>
        RESTART
      </button>
    </div>
  );
}
