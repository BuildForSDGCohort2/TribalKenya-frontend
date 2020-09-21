import React, { useRef } from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import { FiPause } from 'react-icons/fi';

const CustomSlider = ({ children, customStyles, nextAndPrev }) => {
  // eslint-disable-next-line init-declarations
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
    slider.current.slickPause();
  };
  return (
      <div className="slider-container w-100">
        <Slider ref={slider} {...customStyles} >
                {children}
        </Slider>
        {nextAndPrev ? (<div className="slide-options center mt-2 mb-2">
          <button className="prev mr-2 pl-2 pr-2" onClick={prev}>Prev</button>
          <span className="pause cursor pl-2 pr-2 pb-1" onClick={pause}> <FiPause /> </span>
          <button className="next ml-2 pl-2 pr-2" onClick={next}>Next</button>
        </div>) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  sliderStyle: state.introSlider.style
});

export default connect(mapStateToProps)(CustomSlider);
