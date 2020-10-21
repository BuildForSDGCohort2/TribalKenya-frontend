import React, { useEffect } from 'react';
import videojs from 'video.js';
import { connect } from 'react-redux';
import { FaRegWindowClose } from 'react-icons/fa';
import './homepage.css';
import VideoPlayBtn from '../VideoPlayBtn';
import { toggleVideo } from '../../state/intro/intro.actions';

const CustomVideoPlayer = ({ poster, videoSRC, videoToggle }) => {
  // eslint-disable-next-line init-declarations
  let videoRef;
  const playVideo = () => {
    const videoPlayer = videojs(videoRef);
    const btn = document.querySelector('.intro-video-btn');
    btn.style.display = 'none';
    videoPlayer.ready(() => {
      videoPlayer.play();
    });
  };
  const closeVideo = () => {
    const videoPlayer = videojs(videoRef);
    videoToggle(false);
    videoPlayer.ready(() => {
      videoPlayer.dispose();
    });
  };
  useEffect(() => {
    videojs(videoRef);
  });
  return (
    <section className="video-wrapper center">
      <div className="close-video">
        <FaRegWindowClose className="cursor" onClick={closeVideo} />
      </div>
      <div className="intro-video-container animate__animated animate__zoomIn">
        <video
          ref={(node) => (videoRef = node)}
          id="my-video"
          className="video-js video-player-custom"
          poster={poster}
          data-setup='{"controls": true, "autoplay": false, "preload": "auto"}'
        >
          <source src={videoSRC} type="video/mp4" />
          <p className="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading
            to a web browser that
            <a
              href="https://videojs.com/html5-video-support/"
              target="_blank"
              rel="noreferrer"
            >
              supports HTML5 video
            </a>
          </p>
        </video>
        <VideoPlayBtn extraWrapper="intro-video-btn" activate={playVideo} />
      </div>
    </section>
  );
};

const mapDispatchToProps = (dispatch) => ({
  videoToggle: (isVideoShown) => dispatch(toggleVideo(isVideoShown))
});

export default connect(null, mapDispatchToProps)(CustomVideoPlayer);
