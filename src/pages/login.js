import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SEO from '../components/seo';
import Layout from '../components/layout';
import NavBar from '../components/Navbar/NavBar';
import Login from '../components/auth/Login';
import { checkPageLoading } from '../state/auth/auth.actions';
import PreLoader from '../components/pre-loader/PreLoader';

const login = ({ pageLoading, checkPageLoading }) => {
  useEffect(() => {
    checkPageLoading(false);
  }, []);
  return (
        <Layout>
            <SEO title="Login" />
            {pageLoading ? <PreLoader /> : (
                <>
                    <NavBar bg="black-bg c-white" barColor="white-bg" />
                    <div className="center">
                        <div className="w-100 h-100 center">
                            <Login/>
                        </div>
                    </div>
                </>
            ) }
        </Layout>
  );
};

const mapStateToProps = (state) => ({
  pageLoading: state.auth.pageLoading
});

const mapDispatchToProps = (dispatch) => ({
  checkPageLoading: (pageLoading) => dispatch(checkPageLoading(pageLoading))
});

export default connect(mapStateToProps, mapDispatchToProps)(login);
