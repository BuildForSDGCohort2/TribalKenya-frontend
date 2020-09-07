import React from 'react';
import Slider from 'react-slick';
import Slide from './Slide';
import navigate from './navigate.svg';
import adventure from './adventure.svg';
import memories from './memories.svg';
import people from './people.svg';

const CustomSlider = () => {
  const style = {
    infinite: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    vertical: true
  };
  return (
      <div className="slider-container w-100">
        <Slider {...style} >
                <Slide image={adventure} content="Get Started on your adventure" />
                <Slide image={navigate} content="Find and visit popular sites" />
                <Slide image={people} content="Meet new people and chat" />
                <Slide image={memories} content="Make new memories and share them" />
        </Slider>
    </div>
  );
};

export default CustomSlider;
