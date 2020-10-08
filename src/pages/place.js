import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import PlacePage from '../components/place-page/PlacePage';

const SinglePlacePage = () => (
  <Layout>
    <SEO title="Category" />
    <main className="black-bg">
        <PlacePage />
    </main>
  </Layout>
);

export default SinglePlacePage;
