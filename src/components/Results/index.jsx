import React from 'react';
import PropTypes from 'prop-types';

Results.propTypes = {
  score: PropTypes.number.isRequired
};

export default function Results({ score }) {
  return (
    <div className="results">
      <h1>Congratulations!</h1>
      <p>You got</p>
      <h2>{score} / 10</h2>
      <p>answers correct!</p>
    </div>
  );
}
