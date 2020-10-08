import React from 'react';
import LargeBtn from '../LargeBtn';

const Place = ({ place }) => {
  return (
        <div className="custom-card m-2 center">
            <div className="custom-card-body text-center p-2 c-cream">
                <img src={place.poster} alt="" className="category-poster mt-2" />
                <h1>{place.name}</h1>
                <LargeBtn textContent="Explore" extraClass="black" activate={() => console.log(place)} />
            </div>
        </div>
  );
};

export default Place;
