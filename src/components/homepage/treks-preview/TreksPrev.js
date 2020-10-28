import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { navigate } from 'gatsby';
import { addTreks, fetchRecentTreks } from '../../../state/treks/treks.actions';
import TextContent from '../../TextContent';
import Trek from '../../trek/Trek';
import LargeBtn from '../../LargeBtn';
import { checkPageLoading } from '../../../state/auth/auth.actions';

const TreksPrev = ({ recentTreks, checkPageLoading, fetchRecentTreks }) => {
  const goToTreks = () => {
    checkPageLoading(true);
    navigate('treks');
  };
  useEffect(() => {
    fetchRecentTreks();
  }, [recentTreks]);
  return (
    <section className="treks-prev-sec">
      <TextContent heading="Recent Treks" textColor="c-cream text-center" />
      <div className="two-sec-grid-cols">
        {recentTreks.map((key) => (
          <Trek key={key.id} trek={key} />
        ))}
      </div>
      <LargeBtn activate={goToTreks} textContent="Treks" extraClass="white-bg mb-2"/>
    </section>
  );
};

const mapStateToProps = (state) => ({
  recentTreks: state.treksStore.recentTreks
});

const mapDispatchToProps = (dispatch) => ({
  fetchRecentTreks: () => dispatch(fetchRecentTreks()),
  checkPageLoading: (pageLoading) => dispatch(checkPageLoading(pageLoading)),
  addTreks: (treks) => dispatch(addTreks(treks))
});

export default connect(mapStateToProps, mapDispatchToProps)(TreksPrev);
