import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import NavBar from '../components/Navbar/NavBar';
import Sightseeing from '../components/sightseeing/Sightseeing';

const SightseeingPage = () => {
  return (
    <Layout>
    <SEO title="Sightseeing" />
    <main className="black-bg">
      <NavBar bg="c-white" barColor="white" />
      <Sightseeing />
    </main>
  </Layout>
  );
};

export default SightseeingPage;
