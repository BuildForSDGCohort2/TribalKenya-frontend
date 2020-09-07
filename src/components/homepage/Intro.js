import React from 'react';
import './homepage.css';
import CustomSlider from '../slider/CustomSlider';
import TextContent from '../TextContent';
import VideoPlayBtn from '../VideoPlayBtn';

const Intro = () => {
  const texts = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, maiores veniam? Soluta recusandae quod accusamus ipsa, similique consequatur vero error?';
  return (
        <div className="intro-container two-sec-grid-cols">
          <div className="left-col center">
            <TextContent heading="Tribal Kenya" text={texts} >
              <VideoPlayBtn />
            </TextContent>
          </div>
          <div className="right-col center">
            <CustomSlider />

          </div>
        </div>
  );
};

export default Intro;
