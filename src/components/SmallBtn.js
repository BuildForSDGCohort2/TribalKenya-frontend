import React from 'react';

const SmallBtn = ({ activate, extraWrapper, extraClass, textContent }) => {
  const hanldeClick = (event) => {
    event.preventDefault();
    activate();
  };
  return (
        <div className={`text-center ${extraWrapper}`}>
          <button className={`small-btn ${extraClass}`} onClick={hanldeClick}>{textContent}</button>
        </div>
  );
};

export default SmallBtn;
