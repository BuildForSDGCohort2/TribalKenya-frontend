import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import NavBar from '../components/Navbar/NavBar';
import CategoryPage from '../components/category-page/CategoryPage';

const SingleCategoryPage = () => (
  <Layout>
    <SEO title="Category" />
    <div className="black-bg">
      <NavBar bg="c-white" />
      <CategoryPage />
    </div>
  </Layout>
);

export default SingleCategoryPage;
