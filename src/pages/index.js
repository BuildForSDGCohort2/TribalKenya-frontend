import React from 'react';
import { connect } from 'react-redux';
import { FaRegWindowClose } from 'react-icons/fa';
import SEO from '../components/seo';
import NavBar from '../components/Navbar/NavBar';
import Layout from '../components/layout';
import Intro from '../components/homepage/Intro';
import CustomVideoPlayer from '../components/homepage/CustomVideoPlayer';
import { toggleVideo } from '../state/intro/intro.actions';

const IndexPage = ({ showVideo, introVideo, introPoster, videoToggle }) => (
  <Layout>
    <SEO title="Home" />
    <header className="home-intro">
      <NavBar extraClasses="transparent" />
      <Intro />
    </header>
    {showVideo ? <section className="video-wrapper center">
      <div className="close-video">
      <FaRegWindowClose className="cursor" onClick={() => videoToggle(false)} />
      </div>
      <CustomVideoPlayer videoSRC={introVideo} poster={introPoster} />
    </section> : null}
  </Layout>
);

const mapStateToProps = (state) => ({
  showVideo: state.intro.showVideo,
  introVideo: state.intro.introVideo,
  introPoster: state.intro.introPoster
});

const mapDispatchToProps = (dispatch) => ({
  videoToggle: (isVideoShown) => dispatch(toggleVideo(isVideoShown))
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
