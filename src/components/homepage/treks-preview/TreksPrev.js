import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { navigate } from 'gatsby';
import { addTreks, fetchRecentTreks } from '../../../state/treks/treks.actions';
import TextContent from '../../TextContent';
import Trek from '../../trek/Trek';
import LargeBtn from '../../LargeBtn';
import { checkPageLoading } from '../../../state/auth/auth.actions';
import PreLoader from '../../pre-loader/PreLoader';

const TreksPrev = ({ recentTreks, checkPageLoading, fetchRecentTreks, profile }) => {
  const [loading, setLoading] = useState(false);
  const goToTreks = () => {
    checkPageLoading(true);
    navigate('treks');
  };
  useEffect(() => {
    fetchRecentTreks({ currentNav: 'recent', profile: profile, limit: 4 }, () => setLoading(true), () => setLoading(false));
  }, []);
  return (
    <section className="treks-prev-sec">
      {loading ? <PreLoader /> : (
        <>
        <TextContent heading="Recent Treks" textColor="c-cream text-center" />
        <div className="center column">
          {recentTreks.map((key) => (
            <Trek key={key.id} trek={key} profile={profile} treks={recentTreks} />
          ))}
        </div>
        <LargeBtn activate={goToTreks} textContent="Treks" extraClass="white-bg mb-2"/>
        </>
      )}
    </section>
  );
};

const mapStateToProps = (state) => ({
  recentTreks: state.treksStore.recentTreks,
  profile: state.auth.profile
});

const mapDispatchToProps = (dispatch) => ({
  fetchRecentTreks: (info, startLoading, stopLoading) => dispatch(fetchRecentTreks(info, startLoading, stopLoading)),
  checkPageLoading: (pageLoading) => dispatch(checkPageLoading(pageLoading)),
  addTreks: (treks) => dispatch(addTreks(treks))
});

export default connect(mapStateToProps, mapDispatchToProps)(TreksPrev);
