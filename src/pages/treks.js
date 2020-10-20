import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SEO from '../components/seo';
import Layout from '../components/layout';
import NavBar from '../components/Navbar/NavBar';
import { checkPageLoading } from '../state/auth/auth.actions';
import PreLoader from '../components/pre-loader/PreLoader';

const TreksPage = ({ pageLoading, checkPageLoading }) => {
  useEffect(() => {
    checkPageLoading(false);
  }, []);
  return (
    <Layout>
      <SEO title="About" />
      {pageLoading ? <PreLoader /> : (
        <>
          <NavBar bg="c-black" barColor="black" />
          <main className="center">
            <h1 className="heading overpass small-caps">Treks</h1>
          </main>
        </>
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
