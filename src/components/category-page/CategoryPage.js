/* eslint-disable no-undefined */
import React, { useEffect, useState } from 'react';

const CategoryPage = () => {
  const [category, setCategory] = useState(undefined);
  useEffect(() => {
    setCategory(JSON.parse(localStorage.getItem('category')));
  }, []);
  return (
        <div>
            {category === undefined ? null : <p>{category.name}</p> }
        </div>
  );
};

export default CategoryPage;
