import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SEO from '../components/seo';
import NavBar from '../components/Navbar/NavBar';
import Layout from '../components/layout';
import Intro from '../components/homepage/Intro';
import CustomVideoPlayer from '../components/homepage/CustomVideoPlayer';
import SightSeeingPrev from '../components/homepage/sightseeing-preview/SightSeeingPrev';
import TreksPrev from '../components/homepage/treks-preview/TreksPrev';
import Footer from '../components/footer/Footer';
import PreLoader from '../components/pre-loader/PreLoader';
import { checkLoading } from '../state/sightseeing/sightseeing.actions';

const IndexPage = ({ showVideo, introVideo, introPoster, loading, checkLoading }) => {
  useEffect(() => {
    checkLoading(false);
  }, []);
  return (
    <Layout>
    <SEO title="Home" />
    {loading ? <PreLoader /> : (
      <>
      <header className="home-intro">
        <NavBar extraClasses="transparent" />
        <Intro />
      </header>
      {showVideo ? (
        <CustomVideoPlayer videoSRC={introVideo} poster={introPoster} />
      ) : null}
      <SightSeeingPrev />
      <TreksPrev />
      <Footer />
      </>
    )}
  </Layout>
  );
};

const mapStateToProps = (state) => ({
  showVideo: state.intro.showVideo,
  introVideo: state.intro.introVideo,
  introPoster: state.intro.introPoster,
  loading: state.sightSeeing.loading
});

const mapDispatchToProps = (dispatch) => ({
  checkLoading: (loading) => dispatch(checkLoading(loading))
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
