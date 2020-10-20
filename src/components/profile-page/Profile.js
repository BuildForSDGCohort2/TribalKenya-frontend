import React from 'react';
import { connect } from 'react-redux';
import { navigate } from '@reach/router';
import ProfilePic from './ProfilePic';
import ProfileDetails from './ProfileDetails';
import './profile.css';
import LargeBtn from '../LargeBtn';

const Profile = ({ profile }) => {
  return (
        <div className="center column pb-3">
            <ProfilePic photoURL={profile.photoURL} />
            <ProfileDetails profile={profile} />
            <LargeBtn textContent="Edit Profile" extraClass="small-text black-bg" activate={() => navigate('/settings')} />
        </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.auth.profile
});

export default connect(mapStateToProps)(Profile);
