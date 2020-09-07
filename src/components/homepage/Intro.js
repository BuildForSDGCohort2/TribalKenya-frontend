import React from 'react';
import { connect } from 'react-redux';
import './homepage.css';
import CustomSlider from '../slider/CustomSlider';
import TextContent from '../TextContent';
import VideoPlayBtn from '../VideoPlayBtn';
import { toggleVideo } from '../../state/intro/intro.actions';

const Intro = ({ videoToggle }) => {
  const texts = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, maiores veniam? Soluta recusandae quod accusamus ipsa, similique consequatur vero error?';
  const showVideo = () => videoToggle(true);
  return (
        <div className="intro-container two-sec-grid-cols">
          <div className="left-col center">
            <TextContent heading="Tribal Kenya" text={texts} >
              <VideoPlayBtn activate={showVideo} />
            </TextContent>
          </div>
          <div className="right-col center">
            <CustomSlider />

          </div>
        </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  videoToggle: (isVideoShown) => dispatch(toggleVideo(isVideoShown))
});

export default connect(null, mapDispatchToProps)(Intro);
