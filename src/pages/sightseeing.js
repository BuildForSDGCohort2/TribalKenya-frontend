import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SEO from '../components/seo';
import Layout from '../components/layout';
import NavBar from '../components/Navbar/NavBar';
import Sightseeing from '../components/sightseeing/Sightseeing';
import { checkLoading } from '../state/sightseeing/sightseeing.actions';

const SightseeingPage = ({ checkLoading }) => {
  useEffect(() => {
    checkLoading(false);
  }, []);
  return (
    <Layout>
    <SEO title="Sightseeing" />
    <main className="black-bg">
      <NavBar bg="c-white" />
      <Sightseeing />
    </main>
  </Layout>
  );
};

const mapDispatchToProps = (dispatch) => ({
  checkLoading: (loading) => dispatch(checkLoading(loading))
});

export default connect(null, mapDispatchToProps)(SightseeingPage);
