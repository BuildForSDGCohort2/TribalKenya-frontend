import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import { connect } from 'react-redux';
import TreksNavbar from './TreksNavbar';
import animateCSS from '../animate';
import TreksPageContent from './TreksPageContent';
import { fetchRecentTreks } from '../../state/treks/treks.actions';

const Treks = ({ fetchRecentTreks, recentTreks }) => {
  const [sortDes, setsortDes] = useState('Most recent Treks');
  const [currentNav, setcurrentNav] = useState('recent');
  const [loading, setLoading] = useState(false);
  const changeDes = (newValue) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    animateCSS('.trek-page-content', 'slideInUp');
    setsortDes(newValue);
  };
  useEffect(() => {
    fetchRecentTreks(() => setLoading(true), () => setLoading(false));
    AOS.init();
  }, []);
  return (
        <div className="center column mt-2">
            <TreksNavbar currentNav={currentNav} changeDes={changeDes} sortDes={sortDes} changeNav={(nav) => setcurrentNav(nav)} />
            <TreksPageContent sortDes={sortDes} loading={loading} treks={recentTreks} currentNav={currentNav} changeNav={(nav) => setcurrentNav(nav)} />
        </div>
  );
};

const mapStateToProps = (state) => ({
  recentTreks: state.treksStore.recentTreks
});

const mapDispatchToProps = (dispatch) => ({
  fetchRecentTreks: (startLoading, stopLoading) => dispatch(fetchRecentTreks(startLoading, stopLoading))
});

export default connect(mapStateToProps, mapDispatchToProps)(Treks);
