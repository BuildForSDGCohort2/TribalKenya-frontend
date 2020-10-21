import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SEO from '../components/seo';
import NavBar from '../components/Navbar/NavBar';
import Layout from '../components/layout';
import Settings from '../components/settings-page/Settings';
import { checkPageLoading } from '../state/auth/auth.actions';
import PreLoader from '../components/pre-loader/PreLoader';

const SettingsPage = ({ pageLoading, checkPageLoading }) => {
  useEffect(() => {
    checkPageLoading(false);
  }, []);
  return (
    <Layout>
      <NavBar bg="c-black" barColor="black" />
      <SEO title="Settings" />
      <main>
          {pageLoading ? <PreLoader /> : <Settings />}
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

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
