import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { checkLoading } from '../../state/sightseeing/sightseeing.actions';
import NavBar from '../Navbar/NavBar';
import PageIntro from '../PageIntro';
import PreLoader from '../pre-loader/PreLoader';
import PlaceImage from './PlaceImage';
import CustomSlider from '../slider/CustomSlider';
import PlaceDetails from './PlaceDetails';
import PlaceMap from './PlaceMap';

const PlacePage = ({ checkLoading, loading }) => {
  const [place, setPlace] = useState({});
  const [images, setImages] = useState([]);
  const loadPage = () => {
    setPlace(JSON.parse(localStorage.getItem('place')));
    setImages(JSON.parse(localStorage.getItem('placeImages')));
    checkLoading(false);
  };
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

  useEffect(() => {
    loadPage();
  }, []);
  return (
        <>
        {loading ? <PreLoader /> : (
            <>
            <header className="place-page-header" style={{ backgroundImage: `url(${place.poster})` }}>
                <NavBar bg="fade-black c-white" />
                <PageIntro title={place.name} color="c-white mt-2" />
            </header>
            <div className="container-fluid">
                {images === [] ? null : (
                    <>
                    <CustomSlider customStyles={sliderFor} nextAndPrev="true">
                        {images.map((key) => (
                            <PlaceImage image={key} key={key} />
                        ))}
                    </CustomSlider>
                    </>
                )}
            </div>
            <div className="two-sec-grid-cols">
                <div className="left-col p-2">
                    <PlaceMap place={place} />
                </div>
                <div className="right-col p-2">
                    <PlaceDetails place={place} />
                </div>
            </div>
            </>
        )}
        </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.sightSeeing.loading
});

const mapDispatchToProps = (dispatch) => ({
  checkLoading: (loading) => dispatch(checkLoading(loading))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlacePage);
