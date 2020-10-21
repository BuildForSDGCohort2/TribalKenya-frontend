import React from 'react';
import { connect } from 'react-redux';
import { navigate } from 'gatsby';
import ProfilePic from './ProfilePic';
import ProfileDetails from './ProfileDetails';
import './profile.css';
import LargeBtn from '../LargeBtn';
import { checkPageLoading } from '../../state/auth/auth.actions';

const Profile = ({ profile, checkPageLoading }) => {
  const goToSettingsPage = () => {
    checkPageLoading(true);
    navigate('/settings');
  };
  return (
        <div className="center column pb-3">
            <ProfilePic photoURL={profile.photoURL} />
            <ProfileDetails profile={profile} />
            <LargeBtn textContent="Edit Profile" extraClass="small-text black-bg" activate={goToSettingsPage} />
        </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.auth.profile
});

const mapDispatchToProps = (dispatch) => ({
  checkPageLoading: (pageLoading) => dispatch(checkPageLoading(pageLoading))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
