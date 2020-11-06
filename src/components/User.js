import React, { useState, useEffect } from 'react';

const User = ({ user }) => {
  const [profile, setProfile] = useState({});
  const fetchPhotoURL = async (userId) => {
    try {
      const response = await fetch(`https://us-central1-tribalkenya-78cfa.cloudfunctions.net/auth/profile-pic/${userId}`);
      const result = await response.json();
      setProfile(result);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchPhotoURL(user.id);
  }, []);
  return (
    <div className="trek-owner">
      <img src={profile.photoURL} alt="trek owner" />
      <span className="trek-username">{profile.username}</span>
    </div>
  );
};

export default User;
