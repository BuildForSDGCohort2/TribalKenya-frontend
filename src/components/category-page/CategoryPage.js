/* eslint-disable no-undefined */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PageIntro from '../PageIntro';
import PreLoader from '../pre-loader/PreLoader';
import Place from './Place';

const CategoryPage = ({ loading }) => {
  const [category, setCategory] = useState({});
  const [places, setPlaces] = useState([]);
  const addToLocalStorage = () => {
    setCategory(JSON.parse(localStorage.getItem('category')));
    setPlaces(JSON.parse(localStorage.getItem('places')));
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

export default connect(mapStateToProps)(CategoryPage);
