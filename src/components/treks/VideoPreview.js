import React, { useState, useEffect } from 'react';
import { BiPauseCircle, BiPlayCircle } from 'react-icons/bi';

const VideoPreview = ({ video }) => {
  let videoRef;
  const [videoURL, setvideoURL] = useState('');
  const [videoPaused, setVideoPaused] = useState(false);
  const playPause = (ev) => {
    ev.preventDefault();
    videoRef.paused ? setVideoPaused(true) : setVideoPaused(false);
    videoRef.paused ? videoRef.play() : videoRef.pause();
  };
  useEffect(() => {
    setvideoURL(URL.createObjectURL(video));
  }, []);
  return (
        <li className="uk-width-3-4">
            <div className="uk-panel show-on-hover-wrapper">
              <video onClick={(ev) => playPause(ev)} ref={(node) => (videoRef = node)} className="form-preview-media" onEnded={() => setVideoPaused(false)} >
                  <source src={videoURL} />
              </video>
              <div className="uk-position-center uk-panel c-white" onClick={(ev) => playPause(ev)}>
                  <span className={`heading ${videoPaused ? 'show-on-hover' : ''}`}>{videoPaused ? <BiPauseCircle className="fade-black br-1"/> : <BiPlayCircle className="fade-black br-1"/> }</span>
              </div>
            </div>
        </li>
  );
};

export default VideoPreview;
