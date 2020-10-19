import React from 'react';
import { connect } from 'react-redux';
import './settings.css';
import UploadPic from './UploadPic';

const Settings = ({ profile }) => {
  return (
        <div className="center column">
            <UploadPic profile={profile} />
        </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.auth.profile
});

export default connect(mapStateToProps)(Settings);
