import React, { useState } from 'react';
import { connect } from 'react-redux';
import ProfilePic from '../profile-page/ProfilePic';
import { addImageToStorage } from '../../state/auth/auth.actions';

const UploadPic = ({ profile, addImageToStorage }) => {
  const [photoUrl, setPhotoUrl] = useState(profile.photoURL);
  const addImage = async (image) => {
    try {
      const imageUrl = await addImageToStorage(`profilepics/${profile.username}`, image);
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      const options = { method: 'PUT', headers, body: JSON.stringify({ photoURL: imageUrl }) };
      const request = new Request(`https://us-central1-tribalkenya-ff470.cloudfunctions.net/auth/profile-pic/update/${profile.id}`, options);
      await fetch(request);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleChange = (ev) => {
    ev.preventDefault();
    const newPhoto = URL.createObjectURL(ev.target.files[0]);
    setPhotoUrl(newPhoto);
    addImage(ev.target.files[0]);
  };
  return (
        <>
            <ProfilePic photoURL={photoUrl} />
            <label htmlFor="profile-pic-change" className="small-btn white-bg cursor">Change Profile Pic</label>
            <input type="file" accept="image/*" name="profile-pic-change" id="profile-pic-change" className="small-btn white-bg mt-3 hidden" onChange={handleChange} />
        </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addImageToStorage: (folder, image) => dispatch(addImageToStorage(folder, image))
});

export default connect(null, mapDispatchToProps)(UploadPic);
