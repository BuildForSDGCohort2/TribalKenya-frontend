import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { navigate } from '@reach/router';
import { fetchTreks } from '../../../state/treks/treks.actions';
import TextContent from '../../TextContent';
import { treksData } from '../../../state/treks/treksData';
import Trek from '../../trek/Trek';
import LargeBtn from '../../LargeBtn';

const TreksPrev = ({ treks, fetchTreks }) => {
  let recentTreks = [];
  treksData.forEach((key) => {
    if (treksData.indexOf(key) <= 6) {
      recentTreks = [...recentTreks, key];
    }
  });
  const goToTreks = () => navigate('treks');
  useEffect(() => {
    fetchTreks(treksData);
  }, [treks, fetchTreks]);
  return (
    <section className="treks-prev-sec">
      <TextContent heading="Recent Treks" textColor="c-cream text-center" />
      <div className="two-sec-grid-cols">
        {treks.map((key) => (
          <Trek key={key.id} trek={key} treks={treks} />
        ))}
      </div>
      <LargeBtn activate={goToTreks} textContent="Treks" extraClass="white-bg mb-2"/>
    </section>
  );
};

const mapStateToProps = (state) => ({
  treks: state.treksStore.treks
});

const mapDispatchToProps = (dispatch) => ({
  fetchTreks: (treks) => dispatch(fetchTreks(treks))
});

export default connect(mapStateToProps, mapDispatchToProps)(TreksPrev);
