import React from 'react';
import PlaceImage from './PlaceImage';
import CustomSlider from '../slider/CustomSlider';

const PlaceImagesSlider = ({ images }) => {
  const sliderFor = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
    pauseOnHover: false,
    lazyLoad: 'ondemand',
    centerMode: true
  };
  return (
    <div className="container-fluid">
        {images === [] ? null : (
            <>
            <CustomSlider customStyles={sliderFor} nextAndPrev={images.length > 1}>
                {images.map((key) => (
                    <PlaceImage image={key} key={key} />
                ))}
            </CustomSlider>
            </>
        )}
    </div>
  );
};

export default PlaceImagesSlider;
