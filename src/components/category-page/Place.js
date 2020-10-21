import React from 'react';
import { connect } from 'react-redux';
import { navigate } from 'gatsby';
import LargeBtn from '../LargeBtn';
import { checkLoading } from '../../state/sightseeing/sightseeing.actions';
import { checkPageLoading } from '../../state/auth/auth.actions';

const Place = ({ place, checkLoading, checkPageLoading }) => {
  const goToPlace = (selectedPlace) => {
    checkLoading(true);
    localStorage.setItem('place', JSON.stringify(selectedPlace));
    localStorage.setItem('placeImages', JSON.stringify(selectedPlace.images));
    checkPageLoading(true);
    navigate('/place');
  };
  return (
        <div className="custom-card m-2 center">
            <div className="custom-card-body text-center p-2 c-cream">
                <img src={place.poster} alt="" className="category-poster mt-2" />
                <h1>{place.name}</h1>
                <LargeBtn textContent="Explore" extraClass="black" activate={() => goToPlace(place)} />
            </div>
        </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  checkLoading: (loading) => dispatch(checkLoading(loading)),
  checkPageLoading: (pageLoading) => dispatch(checkPageLoading(pageLoading))
});

export default connect(null, mapDispatchToProps)(Place);
