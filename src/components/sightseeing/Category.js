import React from 'react';
import LargeBtn from '../LargeBtn';

const Category = ({ siteCategory }) => {
  return (
        <div className="custom-card m-2 center">
            <div className="custom-card-body text-center p-2">
                <img src={siteCategory.poster} alt="" className="category-poster mt-2" />
                <h1>{siteCategory.name}</h1>
                <LargeBtn textContent="Explore" extraClass="black-bg category-link" />
            </div>
        </div>
  );
};

export default Category;
