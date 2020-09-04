import React from 'react';
import VideoPlayer from 'react-video-js-player';
import './homepage.css';
import TextContent from '../TextContent';

const Intro = ({ poster, videoSRC }) => {
  return (
        <div className="intro-container">
            <VideoPlayer
            controls={false}
            src={videoSRC}
            poster={poster}
            className="intro-video-player"
            >
            </VideoPlayer>
        </div>
  );
};

export default Intro;
