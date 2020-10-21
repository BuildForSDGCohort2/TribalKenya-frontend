import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SEO from '../components/seo';
import Layout from '../components/layout';
import NavBar from '../components/Navbar/NavBar';
import { checkPageLoading } from '../state/auth/auth.actions';
import PreLoader from '../components/pre-loader/PreLoader';
import Treks from '../components/treks/Treks';

const TreksPage = ({ pageLoading, checkPageLoading }) => {
  useEffect(() => {
    checkPageLoading(false);
  }, []);
  return (
    <Layout>
      <SEO title="About" />
      {pageLoading ? <PreLoader /> : (
        <div className="black-bg h-100vh">
          <NavBar bg="c-white" barColor="white-bg" />
          <Treks />
        </div>
      )}
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  pageLoading: state.auth.pageLoading
});

const mapDispatchToProps = (dispatch) => ({
  checkPageLoading: (pageLoading) => dispatch(checkPageLoading(pageLoading))
});

export default connect(mapStateToProps, mapDispatchToProps)(TreksPage);
