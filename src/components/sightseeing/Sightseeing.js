import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Preloader from '../pre-loader/PreLoader';
import PageIntro from '../PageIntro';
import './sightseeing.css';
import { addCategories, checkLoading } from '../../state/sightseeing/sightseeing.actions';
import Category from './Category';

const Sightseeing = ({ addCategories, siteCategories, loading, checkLoading }) => {
  const getCategories = async () => {
    try {
      checkLoading(true);
      const response = await fetch('https://us-central1-tribalkenya-ff470.cloudfunctions.net/categories/');
      const results = await response.json();
      addCategories(results);
      checkLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
      <div className="ss-wrapper">
        <PageIntro title="Sightseeing" text="Exlpore Kenya like never before" color="c-black" />
        {loading ? (
          <Preloader />
        ) : (

            <article className="categories">
                {siteCategories.map((key) => (
                    <Category siteCategory={key} key={key.id} />
                ))}
            </article>

        )}
      </div>
  );
};

const mapStateToProps = (state) => ({
  siteCategories: state.sightSeeing.siteCategories,
  loading: state.sightSeeing.loading
});

const mapDispatchToProps = (dispatch) => ({
  addCategories: (categories) => dispatch(addCategories(categories)),
  checkLoading: (loading) => dispatch(checkLoading(loading))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sightseeing);
