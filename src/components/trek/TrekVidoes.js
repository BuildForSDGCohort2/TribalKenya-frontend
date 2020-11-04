import React, { useState } from 'react';
import { BiPauseCircle, BiPlayCircle } from 'react-icons/bi';

const TrekVidoes = ({ slides }) => {
  let videoRef;
  const [videoPaused, setVideoPaused] = useState(false);
  const playPause = (ev) => {
    ev.preventDefault();
    videoRef.paused ? setVideoPaused(true) : setVideoPaused(false);
    videoRef.paused ? videoRef.play() : videoRef.pause();
  };
  return (
        <>
        {slides.map((slide) => (
            <li className="uk-width-3-4" key={slide}>
              <div className="uk-cover-container">
                <video onClick={(ev) => playPause(ev)} ref={(node) => (videoRef = node)} className="w-100 trek-video" >
                    <source src={slide} />
                </video>
                <div className="uk-position-center uk-panel" onClick={(ev) => playPause(ev)}>
                    <span className="heading">{videoPaused ? <BiPauseCircle className="fade-black br-1"/> : <BiPlayCircle className="fade-black br-1"/> }</span>
                </div>
              </div>
            </li>
        ))}
        </>
  );
};

export default TrekVidoes;
