import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { checkLoading } from '../../state/sightseeing/sightseeing.actions';
import NavBar from '../Navbar/NavBar';
import PageIntro from '../PageIntro';
import PreLoader from '../pre-loader/PreLoader';
import PlaceImage from './PlaceImage';

const PlacePage = ({ checkLoading, loading }) => {
  const [place, setPlace] = useState({});
  const loadPage = () => {
    setPlace(JSON.parse(localStorage.getItem('place')));
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
                <NavBar bg="fade-black c-white" />
                <PageIntro title={place.name} color="c-white mt-2" />
            </header>
            <div className="container-fluid">
                {place.images.map((key) => (
                    <PlaceImage image={key} key={key} />
                ))}
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
