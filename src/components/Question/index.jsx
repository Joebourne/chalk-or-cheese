import React from 'react';
import PropTypes from 'prop-types';

Question.propTypes = {
  src: PropTypes.string.isRequired,
  onClickChalk: PropTypes.func.isRequired,
  onClickCheese: PropTypes.func.isRequired,
  className: PropTypes.string
};

Question.defaultProps = {
  className: null
};

export default function Question({
  src,
  onClickChalk,
  onClickCheese,
  className
}) {
  return (
    <div
      className={className}
      style={{
        backgroundColor: 'red',
        background: `url(${src}) no-repeat center center`,
        backgroundSize: 'cover'
      }}
    >
      <div className="buttons">
        <button className="button" onClick={onClickChalk}>
          CHALK
        </button>
        <button className="button" onClick={onClickCheese}>
          CHEESE
        </button>
      </div>
    </div>
  );
}
