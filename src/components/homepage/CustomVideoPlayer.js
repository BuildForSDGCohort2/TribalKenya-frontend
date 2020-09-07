import React from 'react';
import VideoPlayer from 'react-video-js-player';
import './homepage.css';

const CustomVideoPlayer = ({ poster, videoSRC }) => {
  return (
        <div className="intro-container">
            <VideoPlayer
                    controls={true}
                    src={videoSRC}
                    poster={poster}
                    className="video-player-custom"
                />
        </div>
  );
};

export default CustomVideoPlayer;
