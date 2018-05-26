import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

Results.propTypes = {
  score: PropTypes.number.isRequired
};

export default function Results({ score }) {
  const flippedScore = 10 - score;
  return (
    <div className="results">
      {flippedScore > 5 ? (
        <Fragment>
          <h2 className="heading">Congratulations!</h2>
          <div className="score-text">
            <p>You got</p>
            <h3>{flippedScore} / 10</h3>
            <p>answers correct!</p>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <h2 className="heading">Unlucky!</h2>
          <div className="score-text">
            <p>You {flippedScore > 0 && 'only '}got</p>
            <h3>{flippedScore} / 10</h3>
            <p>answers correct!</p>
          </div>
          <p className="sermon">
            A lot of people think that chalk and cheese are polar opposites, but
            recent studies have shown they are actually{' '}
            <span style={{ fontStyle: 'italic' }}>really</span> similar!
          </p>
        </Fragment>
      )}
      <button className="button" onClick={() => window.location.reload()}>
        GO AGAIN
      </button>
    </div>
  );
}
