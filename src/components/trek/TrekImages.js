import React from 'react';

const TrekImages = ({ slides }) => {
  return (
        <>
        {slides.map((slide) => (
            <li className="uk-width-3-4" key={slide}>
              <div className="uk-cover-container">
                <img src={slide} alt="" className="w-100" />
              </div>
            </li>
        ))}
        </>
  );
};

export default TrekImages;
