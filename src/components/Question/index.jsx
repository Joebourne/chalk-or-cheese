import React from 'react';
import PropTypes from 'prop-types';

Question.propTypes = {
  src: PropTypes.string.isRequired,
  onClickChalk: PropTypes.func.isRequired,
  onClickCheese: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default function Question({ src, onClickChalk, onClickCheese }) {
  return (
    <div
      className="question"
      style={{
        backgroundColor: 'red',
        background: `url(${src}) center center / cover no-repeat fixed`
      }}
    >
      <div className="buttons">
        <button className="button" onClick={onClickChalk}>
          CHALK
        </button>
        <button className="button cheese-button" onClick={onClickCheese}>
          CHEESE
        </button>
      </div>
    </div>
  );
}
