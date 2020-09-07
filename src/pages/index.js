import React from 'react';
import SEO from '../components/seo';
import NavBar from '../components/Navbar/NavBar';
import Layout from '../components/layout';
import Intro from '../components/homepage/Intro';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <header className="home-intro">
      <NavBar extraClasses="transparent" />
      <Intro />
    </header>
  </Layout>
);

export default IndexPage;
