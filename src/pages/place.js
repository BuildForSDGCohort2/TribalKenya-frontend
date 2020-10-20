import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SEO from '../components/seo';
import Layout from '../components/layout';
import PlacePage from '../components/place-page/PlacePage';
import { checkPageLoading } from '../state/auth/auth.actions';
import PreLoader from '../components/pre-loader/PreLoader';

const SinglePlacePage = ({ pageLoading, checkPageLoading }) => {
  useEffect(() => {
    checkPageLoading(false);
  }, []);
  return (
    <Layout>
      <SEO title="Category" />
      <main className="black-bg">
          {pageLoading ? <PreLoader /> : <PlacePage />}
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

export default connect(mapStateToProps, mapDispatchToProps)(SinglePlacePage);
