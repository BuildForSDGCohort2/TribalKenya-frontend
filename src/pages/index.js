import React from 'react';
import { connect } from 'react-redux';
import SEO from '../components/seo';
import NavBar from '../components/Navbar/NavBar';
import Layout from '../components/layout';
import Intro from '../components/homepage/Intro';
import CustomVideoPlayer from '../components/homepage/CustomVideoPlayer';

const IndexPage = ({ showVideo, introVideo, introPoster }) => (
  <Layout>
    <SEO title="Home" />
    <header className="home-intro">
      <NavBar extraClasses="transparent" />
      <Intro />
    </header>
    {showVideo ? <section className="video-wrapper center">
      <CustomVideoPlayer videoSRC={introVideo} poster={introPoster} />
    </section> : null}
  </Layout>
);

const mapStateToProps = (state) => ({
  showVideo: state.intro.showVideo,
  introVideo: state.intro.introVideo,
  introPoster: state.intro.introPoster
});

export default connect(mapStateToProps)(IndexPage);
