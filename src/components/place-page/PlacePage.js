import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { checkLoading } from '../../state/sightseeing/sightseeing.actions';
import NavBar from '../Navbar/NavBar';
import PageIntro from '../PageIntro';
import PreLoader from '../pre-loader/PreLoader';
import PlaceDetails from './PlaceDetails';
import PlaceMap from './PlaceMap';
import SocilaMediaIcon from './SocilaMediaIcon';
import PlaceImagesSlider from './PlaceImagesSlider';
import PlaceReviews from './PlaceReviews';
import PlaceReviewsForm from './PlaceReviewsForm';

const PlacePage = ({ checkLoading, loading }) => {
  const [place, setPlace] = useState({});
  const [images, setImages] = useState([]);
  const loadPage = () => {
    setPlace(JSON.parse(localStorage.getItem('place')));
    setImages(JSON.parse(localStorage.getItem('placeImages')));
    checkLoading(false);
  };
  useEffect(() => {
    loadPage();
  }, []);
  return (
        <>
        {loading ? <PreLoader /> : (
            <>
            <header className="place-page-header" style={{ backgroundImage: `url(${place.poster})` }}>
                <NavBar bg="fade-black c-white" barColor="white-bg" />
                <PageIntro title={place.name} color="c-white mt-2" />
            </header>
            <PlaceImagesSlider images={images} />
            <div className="two-sec-grid-cols">
                <div className="left-col p-2">
                    <PlaceMap place={place} />
                </div>
                <div className="right-col p-2 center column text-left">
                    <PlaceDetails place={place} />
                    <div className="left w-100 text-left">
                      {place.facebook === '' ? null : <SocilaMediaIcon icon={<FaFacebookSquare />} link={place.facebook} />}
                      {place.instagram === '' ? null : <SocilaMediaIcon icon={<FaInstagramSquare />} link={place.instagram} />}
                    </div>
                </div>
            </div>
            <div className="reviews-rw white-bg p-1">
              <h1 className="heading text-center overpass m-0 small-caps">Reviews</h1>
              <PlaceReviews />
              <PlaceReviewsForm />
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
