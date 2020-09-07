import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';

const VideoPlayBtn = ({ activate }) => {
  const hanldeClick = (event) => {
    event.preventDefault();
    activate();
  };
  return (
      <div className="text-center">
        <span >
            <FaPlayCircle className="play-btn-large" onClick={hanldeClick} />
        </span>
      </div>
  );
};

export default VideoPlayBtn;
