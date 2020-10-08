import React from 'react';
import { navigate } from '@reach/router';
import { connect } from 'react-redux';
import LargeBtn from '../LargeBtn';
import { checkLoading } from '../../state/sightseeing/sightseeing.actions';

const Category = ({ siteCategory, checkLoading }) => {
  const goToCategoryPage = async (category) => {
    try {
      checkLoading(true);
      localStorage.setItem('category', JSON.stringify(category));
      // Fetch all site/places related to selected category
      const response = await fetch(`https://us-central1-tribalkenya-ff470.cloudfunctions.net/places/${category.id}`);
      const results = await response.json();
      localStorage.setItem('places', JSON.stringify(results));
      checkLoading(false);
      navigate('/category');
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
        <div className="custom-card m-2 center">
            <div className="custom-card-body text-center p-2 c-cream">
                <img src={siteCategory.poster} alt="" className="category-poster mt-2" />
                <h1>{siteCategory.name}</h1>
                <LargeBtn textContent="Explore" extraClass="black" activate={() => goToCategoryPage(siteCategory)} />
            </div>
        </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  checkLoading: (loading) => dispatch(checkLoading(loading))
});

export default connect(null, mapDispatchToProps)(Category);
