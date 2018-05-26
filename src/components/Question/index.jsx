import React from 'react';
import PropTypes from 'prop-types';

Question.propTypes = {
  src: PropTypes.string.isRequired,
  onClickChalk: PropTypes.func.isRequired,
  onClickCheese: PropTypes.func.isRequired
};

export default function Question({ src, onClickChalk, onClickCheese }) {
  return (
    <div>
      <div>
        <div
          style={{
            height: '200px',
            backgroundColor: 'red',
            background: `url(${src}) no-repeat center center`,
            backgroundSize: 'cover'
          }}
        />
      </div>
      <hr />
      <div>
        <button onClick={onClickChalk}>chalk</button>
        <button onClick={onClickCheese}>cheese</button>
      </div>
    </div>
  );
}
