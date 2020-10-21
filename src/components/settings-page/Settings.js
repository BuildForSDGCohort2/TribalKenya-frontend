import React, { useState } from 'react';
import { connect } from 'react-redux';
import './settings.css';
import UploadPic from './UploadPic';
import UpdateDetails from './UpdateDetails';
import { updateProfile, addMessage, addProfile } from '../../state/auth/auth.actions';

const Settings = ({ profile, updateProfile, addMessage, addProfile }) => {
  const [loading, setloading] = useState(false);
  const update = async (updateDetails) => {
    try {
      setloading(true);
      addProfile({ ...profile, ...updateDetails });
      addMessage('Profile updated', true);
      setloading(false);
      await updateProfile(updateDetails, profile.id);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
        <div className="center column">
            <UploadPic profile={profile} />
            <UpdateDetails profile={profile} update={update} loading={loading} />
        </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.auth.profile
});

const mapDispatchToProps = (dispatch) => ({
  updateProfile: (updates, userId) => dispatch(updateProfile(updates, userId)),
  addMessage: (message, success) => dispatch(addMessage(message, success)),
  addProfile: (profile) => dispatch(addProfile(profile))
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
