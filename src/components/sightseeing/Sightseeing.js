import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PageIntro from '../PageIntro';
import './sightseeing.css';
import { addCategories } from '../../state/sightseeing/sightseeing.actions';
import Category from './Category';

const Sightseeing = ({ addCategories, siteCategories }) => {
  const getCategories = async () => {
    try {
      const response = await fetch('https://us-central1-tribalkenya-ff470.cloudfunctions.net/categories/');
      const results = await response.json();
      addCategories(results);
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
        {console.log(siteCategories)}
        <article className="categories">
            {siteCategories.map((key) => (
                <Category siteCategory={key} key={key.id} />
            ))}
        </article>
       </div>
  );
};

const mapStateToProps = (state) => ({
  siteCategories: state.sightSeeing.siteCategories
});

const mapDispatchToProps = (dispatch) => ({
  addCategories: (categories) => dispatch(addCategories(categories))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sightseeing);
