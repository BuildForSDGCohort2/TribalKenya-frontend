import React from 'react';
import { connect } from 'react-redux';
import ProfilePic from './ProfilePic';
import ProfileDetails from './ProfileDetails';
import './profile.css';
import LargeBtn from '../LargeBtn';

const Profile = ({ profile }) => {
  return (
        <div className="center column profile-container">
            <ProfilePic profile={profile} />
            <ProfileDetails profile={profile} />
            <LargeBtn textContent="Edit Profile" extraClass="small-text black-bg" activate={() => console.log('settings')} />
        </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.auth.profile
});

export default connect(mapStateToProps)(Profile);
