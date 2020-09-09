import React from 'react';
import image from '../../../images/forest.jpg';
import mountain from '../../../images/mountain.jpg';
import TextContent from '../../TextContent';

const SightSeeingPrev = () => {
  return (
      <>
        <section className="st-prev-sec w-100 p-3">
            <TextContent heading="Sightseeing" textColor="c-cream text-center" />
            <div className="gallery">
            <div className="gallery-item p-1">
                <img src={image} alt="gallery" className="gallery-img" />
            </div>
            <div className="gallery-item p-1">
                <img src={mountain} alt="gallery" className="gallery-img" />
            </div>
            <div className="gallery-item p-1">
                <img src={image} alt="gallery" className="gallery-img" />
            </div>
            <div className="gallery-item p-1">
                <img src={image} alt="gallery" className="gallery-img" />
            </div>
            <div className="gallery-item p-1">
                <img src={mountain} alt="gallery" className="gallery-img" />
            </div>
            <div className="gallery-item p-1">
                <img src={image} alt="gallery" className="gallery-img" />
            </div>
            </div>
        </section>
</>
  );
};

export default SightSeeingPrev;
