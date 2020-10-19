import React from 'react';

const ProfilePic = ({ profile }) => {
  return (
        <img src={profile.photoURL} alt="profile" width="100" height="auto" className="round" />
  );
};

export default ProfilePic;
