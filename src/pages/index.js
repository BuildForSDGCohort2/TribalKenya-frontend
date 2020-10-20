import React, { useState, useEffect } from 'react';
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
import { checkPageLoading } from '../state/auth/auth.actions';

const IndexPage = ({ showVideo, introVideo, introPoster, pageLoading, checkPageLoading }) => {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    checkPageLoading(false);
  }, []);
  return (
    <Layout>
    <SEO title="Home" />
    {pageLoading ? <PreLoader /> : (
      <>
        {loading ? <PreLoader /> : (
        <>
          <header className="home-intro">
            <NavBar bg="transparent" barColor="black" />
            <Intro />
          </header>
          {showVideo ? (
            <CustomVideoPlayer videoSRC={introVideo} poster={introPoster} />
          ) : null}
          <SightSeeingPrev setloading={(state) => setloading(state)} />
          <TreksPrev />
          <Footer />
        </>
        )}
      </>
    )}
  </Layout>
  );
};

const mapStateToProps = (state) => ({
  showVideo: state.intro.showVideo,
  introVideo: state.intro.introVideo,
  introPoster: state.intro.introPoster,
  pageLoading: state.auth.pageLoading
});

const mapDispatchToProps = (dispatch) => ({
  checkPageLoading: (pageLoading) => dispatch(checkPageLoading(pageLoading))
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
