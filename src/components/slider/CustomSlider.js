import React from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';

const CustomSlider = ({ children, customStyles }) => {
  return (
      <div className="slider-container w-100">
        <Slider {...customStyles} >
                {children}
        </Slider>
    </div>
  );
};

const mapStateToProps = (state) => ({
  sliderStyle: state.introSlider.style
});

export default connect(mapStateToProps)(CustomSlider);
