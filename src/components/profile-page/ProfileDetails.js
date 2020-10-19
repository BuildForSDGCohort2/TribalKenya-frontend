import React from 'react';

const ProfileDetails = ({ profile }) => {
  return (
        <div className="mt-3">
            <h1 className="heading text-left overpass">Profile Info</h1>
            <hr/>
            <dl className="profile-details overpass">
                <dt><small>Username</small>{profile.username}</dt>
                <dt><small>Email</small>{profile.email}</dt>
                <dt><small>Phone number</small>{profile.phoneNumber}</dt>
                <dt><small>{profile.location ? 'Location' : null}</small>{profile.location || null}</dt>
                <dt><small>{profile.bio ? 'Bio' : null}</small>{profile.bio || null}</dt>
                <dt><small>{profile.work ? 'Work' : null}</small>{profile.work || null}</dt>
                <dt><small>{profile.interests ? 'Interests' : null}</small>{profile.interests || null}</dt>
            </dl>
        </div>
  );
};

export default ProfileDetails;
