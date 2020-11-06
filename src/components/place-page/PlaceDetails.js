import React from 'react';
import { BiPhone } from 'react-icons/bi';

const PlaceDetails = ({ place }) => {
  return (
        <article className="c-white overpass">
            <h2 className="medium-text bold overpass c-white">Description</h2>
            <p className="small-text">{place.description}</p>
            {place.phone === '' ? null
              : <p className="small-text">
                    <span><BiPhone className="c-green medium-text" /> </span>{place.phone}
                </p> }
        </article>
  );
};

export default PlaceDetails;
