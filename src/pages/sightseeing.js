import React, { useState } from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import NavBar from '../components/Navbar/NavBar';
import Sightseeing from '../components/sightseeing/Sightseeing';

const SightseeingPage = () => {
  const [loading, setloading] = useState(true);
  const toggleLoading = (state) => setloading(state);
  return (
    <Layout>
    <SEO title="Sightseeing" />
    <main className="black-bg">
      <NavBar bg="c-white" barColor="white" />
      <Sightseeing toggleLoading={toggleLoading} loading={loading} />
    </main>
  </Layout>
  );
};

export default SightseeingPage;
