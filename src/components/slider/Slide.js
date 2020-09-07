import React from 'react';

const Slide = ({ content, image }) => {
  return (
        <div className="slide text-center" >
            <img src={image} alt="intro"/>
            <h3>{content}</h3>
        </div>
  );
};

export default Slide;
