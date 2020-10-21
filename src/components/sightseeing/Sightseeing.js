import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PageIntro from '../PageIntro';
import './sightseeing.css';
import { getCategories } from '../../state/sightseeing/sightseeing.actions';
import Category from './Category';
import PreLoader from '../pre-loader/PreLoader';

const Sightseeing = ({ getCategories, siteCategories, toggleLoading, loading }) => {
  const fetchCategories = async () => {
    try {
      if (siteCategories.length < 1) {
        await getCategories();
      }
      toggleLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
      <div className="ss-wrapper">
        <PageIntro title="Sightseeing" text="Exlpore Kenya like never before" color="c-cream" />
        {loading ? <PreLoader /> : (
          <article className="categories">
            {siteCategories.map((key) => (
                <Category siteCategory={key} key={key.id} />
            ))}
          </article>
        ) }
      </div>
  );
};

const mapStateToProps = (state) => ({
  siteCategories: state.sightSeeing.siteCategories
});

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(getCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sightseeing);
