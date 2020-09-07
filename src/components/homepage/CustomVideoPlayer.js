import React from 'react';
import './homepage.css';

const CustomVideoPlayer = ({ poster, videoSRC }) => {
  return (
        <div className="intro-container">
            <video src={videoSRC} poster={poster}></video>
        </div>
  );
};

export default CustomVideoPlayer;
