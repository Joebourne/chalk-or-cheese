import React from 'react';
import PropTypes from 'prop-types';

Question.propTypes = {
  url: PropTypes.string.isRequired,
  onClickChalk: PropTypes.func.isRequired,
  onClickCheese: PropTypes.func.isRequired
};

export default function Question({ url, onClickChalk, onClickCheese }) {
  return (
    <div>
      <div>
        <img src={url} />
      </div>
      <hr />
      <div>
        <button onClick={onClickChalk}>chalk</button>
        <button onClick={onClickCheese}>cheese</button>
      </div>
    </div>
  );
}
