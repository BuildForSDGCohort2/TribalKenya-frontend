import React from 'react';

const LargeBtn = ({ activate, extraWrapper, extraClass, textContent }) => {
  const hanldeClick = (event) => {
    event.preventDefault();
    activate();
  };
  return (
      <div className={`text-center ${extraWrapper}`}>
        <button className={`large-btn ${extraClass}`} onClick={hanldeClick}>{textContent}</button>
      </div>
  );
};

export default LargeBtn;
