import React from 'react';
import { navigate } from 'gatsby';
import { connect } from 'react-redux';
import LargeBtn from '../LargeBtn';
import { checkLoading } from '../../state/sightseeing/sightseeing.actions';
import { checkPageLoading } from '../../state/auth/auth.actions';

const Category = ({ siteCategory, checkPageLoading }) => {
  const goToCategoryPage = (category) => {
    checkPageLoading(true);
    navigate('/category', { state: { category: category } });
  };
  return (
        <div className="custom-card m-2 center">
            <div className="custom-card-body text-center p-2 c-cream">
                <img src={siteCategory.poster} alt="" className="category-poster mt-2" />
                <h1 className="c-cream overpass">{siteCategory.name}</h1>
                <LargeBtn textContent="Explore" extraClass="black" activate={() => goToCategoryPage(siteCategory)} />
            </div>
        </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  checkLoading: (loading) => dispatch(checkLoading(loading)),
  checkPageLoading: (pageLoading) => dispatch(checkPageLoading(pageLoading))
});

export default connect(null, mapDispatchToProps)(Category);
