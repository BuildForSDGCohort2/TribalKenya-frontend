/* eslint-disable no-undefined */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PageIntro from '../PageIntro';
import PreLoader from '../pre-loader/PreLoader';
import Place from './Place';
import { checkLoading } from '../../state/sightseeing/sightseeing.actions';

const CategoryPage = ({ loading, checkLoading }) => {
  const [category, setCategory] = useState({});
  const [places, setPlaces] = useState([]);
  const addToLocalStorage = () => {
    setCategory(JSON.parse(localStorage.getItem('category')));
    setPlaces(JSON.parse(localStorage.getItem('places')));
    checkLoading(false);
  };

  useEffect(() => {
    addToLocalStorage();
  }, []);
  return (
        <>
          {loading ? <PreLoader /> : (
            <div className="ss-wrapper">
              {category === {} && places === [] ? <PreLoader /> : (
                <>
                  <PageIntro title={category.name} color="c-cream" />
                  <article className="categories">
                    {places.map((key) => (
                        <Place place={key} key={key.id} />
                    ))}
                </article>
                </>
              ) }
            </div>
          )}
        </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.sightSeeing.loading
});

const mapDispatchToProps = (dispatch) => ({
  checkLoading: (loading) => dispatch(checkLoading(loading))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
