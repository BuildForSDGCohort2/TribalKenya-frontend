import React from 'react';

const ProfilePic = ({ photoURL }) => {
  return (
        <img src={photoURL} alt="profile" width="200" height="200" className="round" />
  );
};

export default ProfilePic;
