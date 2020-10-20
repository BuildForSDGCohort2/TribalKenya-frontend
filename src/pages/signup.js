import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import NavBar from '../components/Navbar/NavBar';
import SignUp from '../components/auth/SignUp';

const signup = () => {
  return (
    <Layout>
        <SEO title="Sign Up" />
        <NavBar barColor="black" />
        <SignUp />
    </Layout>
  );
};

export default signup;
