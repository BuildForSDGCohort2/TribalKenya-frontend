import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import NavBar from '../components/Navbar/NavBar';

const CategoryPage = () => (
  <Layout>
    <SEO title="Category" />
    <NavBar />
    {console.log(JSON.parse(localStorage.getItem('category')))}
  </Layout>
);

export default CategoryPage;
