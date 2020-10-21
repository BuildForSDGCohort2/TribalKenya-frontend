import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import SEO from '../components/seo';
import Layout from '../components/layout';
import NavBar from '../components/Navbar/NavBar';
import CategoryPage from '../components/category-page/CategoryPage';
import PreLoader from '../components/pre-loader/PreLoader';
import { checkPageLoading } from '../state/auth/auth.actions';
import { addToLocalStorage } from '../state/sightseeing/sightseeing.actions';

const SingleCategoryPage = ({ location, pageLoading, checkPageLoading, addToLocalStorage }) => {
  const [loading, setloading] = useState(false);
  const onMount = async () => {
    try {
      checkPageLoading(false);
      if (location.state.category) {
        await addToLocalStorage(location.state.category, () => setloading(true), () => setloading(false));
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    onMount();
  }, []);
  return (
  <Layout>
    <SEO title="Category" />
    {pageLoading ? <PreLoader /> : (
      <div className="black-bg">
        {loading ? <PreLoader /> : (
          <>
          <NavBar bg="c-white" barColor="white-bg" />
          <CategoryPage />
          </>
        )}
      </div>
    )}
  </Layout>
  );
};

const mapStateToProps = (state) => ({
  pageLoading: state.auth.pageLoading
});

const mapDispatchToProps = (dispatch) => ({
  checkPageLoading: (pageLoading) => dispatch(checkPageLoading(pageLoading)),
  addToLocalStorage: (category, load, stopLoad) => dispatch(addToLocalStorage(category, load, stopLoad))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleCategoryPage);
