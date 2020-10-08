import React from 'react';
import { navigate } from '@reach/router';
import LargeBtn from '../LargeBtn';

const Category = ({ siteCategory }) => {
  const goToCategoryPage = async (category) => {
    try {
      localStorage.setItem('category', JSON.stringify(category));
      navigate('/category');
      // Fetch all site/places related to selected category
      const response = await fetch(`https://us-central1-tribalkenya-ff470.cloudfunctions.net/places/${category.id}`);
      const results = await response.json();
      localStorage.setItem('places', JSON.stringify(results));
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
        <div className="custom-card m-2 center">
            <div className="custom-card-body text-center p-2">
                <img src={siteCategory.poster} alt="" className="category-poster mt-2" />
                <h1>{siteCategory.name}</h1>
                <LargeBtn textContent="Explore" extraClass="black-bg category-link" activate={() => goToCategoryPage(siteCategory)} />
            </div>
        </div>
  );
};

export default Category;
