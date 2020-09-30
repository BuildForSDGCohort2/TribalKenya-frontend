import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import NavBar from '../components/Navbar/NavBar';
import Sightseeing from '../components/sightseeing/Sightseeing';

const SightseeingPage = () => (
  <Layout>
    <SEO title="Sightseeing" />
    <main>
      <NavBar />
      <Sightseeing />
    </main>
  </Layout>
);

export default SightseeingPage;
