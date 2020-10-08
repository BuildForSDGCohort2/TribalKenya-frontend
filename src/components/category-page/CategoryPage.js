/* eslint-disable no-undefined */
import React, { useEffect, useState } from 'react';
import PageIntro from '../PageIntro';
import PreLoader from '../pre-loader/PreLoader';

const CategoryPage = () => {
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
        <div className="ss-wrapper">
          {category === {} && places === [] ? <PreLoader /> : (
            <>
              <PageIntro title={category.name} color="c-black" />
            </>
          ) }
        </div>
  );
};

export default CategoryPage;
