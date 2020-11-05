import React from 'react';

const TrekImages = ({ slides, extraClass, container }) => {
  return (
        <>
        {slides.map((slide) => (
            <li className="uk-width-3-4" key={slide}>
              <div className={`uk-cover-container ${container}`}>
                <img src={slide} alt="" className={`w-100 ml-2 mr-2 ${extraClass}`} />
              </div>
            </li>
        ))}
        </>
  );
};

export default TrekImages;
