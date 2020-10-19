import React from 'react';

const PlaceImage = ({ image }) => {
  return (
        <div className="w-100 center container mt-3 pb-2">
            <img src={image} alt="" className="place-image img-fluid" />
        </div>
  );
};

export default PlaceImage;
