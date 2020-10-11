import React from 'react';
import { connect } from 'react-redux';
import './homepage.css';
import CustomSlider from '../slider/CustomSlider';
import TextContent from '../TextContent';
import VideoPlayBtn from '../VideoPlayBtn';
import { toggleVideo } from '../../state/intro/intro.actions';
import Slide from '../slider/Slide';

const Intro = ({ videoToggle, introSlides }) => {
  const texts = 'A platform where tourists can meet and chat with other tourists, share their own experiences with others and also find out amazing places to go to and things to do in their tours. Also, managars/marketers of tourist attraction sites can easily interact with potentioal tourists and market their services';
  const showVideo = () => videoToggle(true);
  const style = {
    infinite: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    pauseOnHover: false
  };
  return (
        <div className="intro-container center">
          <div className="left-col-flex center">
            <TextContent heading="Tribal Kenya" text={texts} >
              <VideoPlayBtn activate={showVideo} />
            </TextContent>
          </div>
          <div className="right-col-flex center">
            <CustomSlider customStyles={style} >
                {introSlides.map((key) => (
                  <Slide key={key} image={key.image} content={key.content} />
                ))}
            </CustomSlider>
          </div>
        </div>
  );
};

const mapStateToProps = (state) => ({
  introSlides: state.introSlider.introSlides,
  sliderStyle: state.introSlider.style
});

const mapDispatchToProps = (dispatch) => ({
  videoToggle: (isVideoShown) => dispatch(toggleVideo(isVideoShown))
});

export default connect(mapStateToProps, mapDispatchToProps)(Intro);
