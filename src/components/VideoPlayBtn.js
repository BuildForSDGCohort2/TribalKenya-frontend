import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';

const VideoPlayBtn = () => {
  return (
      <div className="text-center">
        <span >
            <FaPlayCircle className="play-btn-large" />
        </span>
      </div>
  );
};

export default VideoPlayBtn;
