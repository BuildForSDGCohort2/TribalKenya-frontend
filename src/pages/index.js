import React from 'react';
import SEO from '../components/seo';
import NavBar from '../components/Navbar/NavBar';
import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <NavBar />
  </Layout>
);

export default IndexPage;
