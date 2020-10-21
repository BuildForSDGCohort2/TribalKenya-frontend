import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SEO from '../components/seo';
import NavBar from '../components/Navbar/NavBar';
import Profile from '../components/profile-page/Profile';
import Layout from '../components/layout';
import { checkPageLoading } from '../state/auth/auth.actions';
import PreLoader from '../components/pre-loader/PreLoader';

const ProfilePage = ({ checkPageLoading, pageLoading }) => {
  useEffect(() => {
    checkPageLoading(false);
  }, []);
  return (
    <Layout>
      <NavBar bg="c-black" barColor="black" />
      <SEO title="Profile" />
      <main>
          {pageLoading ? <PreLoader /> : <Profile />}
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
