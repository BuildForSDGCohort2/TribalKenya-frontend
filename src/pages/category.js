import React, { useEffect, useState } from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import NavBar from '../components/Navbar/NavBar';
import CategoryPage from '../components/category-page/CategoryPage';
import PreLoader from '../components/pre-loader/PreLoader';

const SingleCategoryPage = ({ location }) => {
  const [loading, setloading] = useState(false);
  const addToLocalStorage = async (category) => {
    try {
      setloading(true);
      localStorage.setItem('category', JSON.stringify(category));
      // Fetch all site/places related to selected category
      const response = await fetch(`https://us-central1-tribalkenya-ff470.cloudfunctions.net/places/${category.id}`);
      const results = await response.json();
      localStorage.setItem('places', JSON.stringify(results));
      setloading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    if (location.state.category) {
      addToLocalStorage(location.state.category);
    }
  }, []);
  return (
  <Layout>
    <SEO title="Category" />
    <div className="black-bg">
      {loading ? <PreLoader /> : (
        <>
        <NavBar bg="c-white" />
        <CategoryPage />
        </>
      )}
    </div>
  </Layout>
  );
};

export default SingleCategoryPage;
