import React from 'react';

const PlaceMap = ({ place }) => {
  return (
    <iframe
      className="w-100"
      src={place.geo}
      height="450"
      frameBorder="0"
      style={{ border: 0, borderRadius: '10px' }}
      allowFullScreen=""
      aria-hidden="false"
      tabIndex="0"
    ></iframe>
  );
};

export default PlaceMap;
