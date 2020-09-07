import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';

const VideoPlayBtn = ({ activate, extraWrapper, extraClass }) => {
  const hanldeClick = (event) => {
    event.preventDefault();
    activate();
  };
  return (
      <div className={`text-center ${extraWrapper}`}>
        <span >
            <FaPlayCircle className={`play-btn-large ${extraClass}`} onClick={hanldeClick} />
        </span>
      </div>
  );
};

export default VideoPlayBtn;
