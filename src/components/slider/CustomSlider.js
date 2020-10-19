import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import { FiPause, FiPlay } from 'react-icons/fi';

const CustomSlider = ({ children, customStyles, nextAndPrev, extraClass }) => {
  // eslint-disable-next-line init-declarations
  const [paused, setPaused] = useState(false);
  const slider = useRef();
  const prev = (event) => {
    event.preventDefault();
    slider.current.slickPrev();
  };
  const next = (event) => {
    event.preventDefault();
    slider.current.slickNext();
  };
  const pause = (event) => {
    event.preventDefault();
    if (paused) {
      slider.current.slickPlay();
      setPaused(false);
    } else {
      slider.current.slickPause();
      setPaused(true);
    }
  };
  return (
      <div className="slider-container w-100">
        <Slider ref={slider} {...customStyles} className={`${extraClass || ''}`} >
                {children}
        </Slider>
        {nextAndPrev ? (<div className="slide-options center mt-2 pb-2">
          <button className="prev mr-2 pl-2 pr-2" onClick={prev}>Prev</button>
          <span className="pause cursor pl-2 pr-2 pb-1" onClick={pause}> {paused ? <FiPlay /> : <FiPause /> } </span>
          <button className="next ml-2 pl-2 pr-2" onClick={next}>Next</button>
        </div>) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  sliderStyle: state.introSlider.style
});

export default connect(mapStateToProps)(CustomSlider);
