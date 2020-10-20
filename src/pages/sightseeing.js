import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import SEO from '../components/seo';
import Layout from '../components/layout';
import NavBar from '../components/Navbar/NavBar';
import Sightseeing from '../components/sightseeing/Sightseeing';
import { checkPageLoading } from '../state/auth/auth.actions';
import PreLoader from '../components/pre-loader/PreLoader';

const SightseeingPage = ({ pageLoading, checkPageLoading }) => {
  const [loading, setloading] = useState(true);
  const toggleLoading = (state) => setloading(state);
  useEffect(() => {
    checkPageLoading(false);
  }, []);
  return (
    <Layout>
    <SEO title="Sightseeing" />
    <main className="black-bg">
      {pageLoading ? <PreLoader /> : (
        <>
          <NavBar bg="c-white" barColor="white-bg" />
          <Sightseeing toggleLoading={toggleLoading} loading={loading} />
        </>
      )}
    </main>
  </Layout>
  );
};

const mapStateToProps = (state) => ({
  pageLoading: state.auth.pageLoading
});

const mapDispatchToProps = (dispatch) => ({
  checkPageLoading: (pageLoading) => dispatch(checkPageLoading(pageLoading))
});

export default connect(mapStateToProps, mapDispatchToProps)(SightseeingPage);
