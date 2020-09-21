import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import NavBar from '../components/Navbar/NavBar';

const signup = () => {
  return (
    <Layout>
        <SEO title="Sign Up" />
        <NavBar />
    </Layout>
  );
};

export default signup;
