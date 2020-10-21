import React, { useState } from 'react';
import SmallBtn from '../SmallBtn';
import UpdateText from './UpdateText';
import PreLoader from '../pre-loader/PreLoader';
import Alert from '../auth/Alert';

const UpdateDetails = ({ profile, update, loading }) => {
  const [updates, setupdates] = useState({});
  return (
        <div className="mt-3 overpass pb-3">
            <h1 className="heading text-left">My Profile</h1>
            <hr/>
            <dl className="profile-details overpass">
                <dt><small>Username</small><UpdateText dV={profile.username} textId="update-username" textType="text" getText={(text) => text === '' ? null : setupdates({ ...updates, username: text }) } /></dt>
                <dt><small>Email</small><UpdateText dV={profile.email} textId="update-email" textType="email" getText={(text) => text === '' ? null : setupdates({ ...updates, email: text }) } /></dt>
                <dt><small>Phone number</small><UpdateText dV={profile.phoneNumber} textId="update-phone" textType="text" getText={(text) => text === '' ? null : setupdates({ ...updates, phoneNumber: text })} /></dt>
                <dt><small>Location</small><UpdateText dV={profile.location} textId="update-location" textType="text" getText={(text) => text === '' ? null : setupdates({ ...updates, location: text })} /></dt>
                <dt><small>Bio</small><UpdateText dV={profile.bio} textId="update-bio" textType="text" getText={(text) => text === '' ? null : setupdates({ ...updates, bio: text })} /></dt>
                <dt><small>Work</small><UpdateText dV={profile.work} textId="update-work" textType="text" getText={(text) => text === '' ? null : setupdates({ ...updates, work: text })} /></dt>
                <dt><small>Interests</small><UpdateText dV={profile.interests} textId="update-interests" textType="text" getText={(text) => text === '' ? null : setupdates({ ...updates, interests: text })} /></dt>
            </dl>
            <Alert />
            {loading ? <PreLoader /> : <SmallBtn textContent="Save Changes" extraClass="white-bg" activate={() => update(updates)} />}
        </div>
  );
};

export default UpdateDetails;
