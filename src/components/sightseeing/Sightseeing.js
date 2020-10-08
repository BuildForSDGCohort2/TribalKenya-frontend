import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Preloader from '../pre-loader/PreLoader';
import PageIntro from '../PageIntro';
import './sightseeing.css';
import { getCategories } from '../../state/sightseeing/sightseeing.actions';
import Category from './Category';

const Sightseeing = ({ getCategories, siteCategories, loading }) => {
  useEffect(() => {
    if (siteCategories.length < 1) {
      getCategories();
    }
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
  getCategories: () => dispatch(getCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sightseeing);
