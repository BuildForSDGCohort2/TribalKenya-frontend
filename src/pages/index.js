import React from 'react';
import SEO from '../components/seo';
import NavBar from '../components/Navbar/NavBar';
import Layout from '../components/layout';
import Intro from '../components/homepage/Intro';
import poster from '../images/flag2.jpg';
import video from '../images/intro.mp4';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <header className="home-intro">
      <NavBar />
      <Intro poster={poster} videoSRC={video} />
    </header>
  </Layout>
);

export default IndexPage;
