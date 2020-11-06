/* eslint-disable react/display-name */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './layout.css';
import './font.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'video.js/dist/video';
import 'video.js/dist/video-js.min.css';
import 'aos/dist/aos.css';
import 'intl-tel-input/build/css/intlTelInput.css';
import 'uikit/dist/css/uikit.css';
import 'uikit/dist/js/uikit';
import { connect } from 'react-redux';
import firebase from 'gatsby-plugin-firebase';
import { addMessage, checkUser, addProfile } from '../state/auth/auth.actions';
import { getProfileEndpoint } from '../state/auth/authBackend';

const Layout = ({ children, checkUser, addProfile }) => {
  const getProfile = async (userId) => {
    try {
      const result = await getProfileEndpoint(userId);
      addProfile(result);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        checkUser({ id: user.uid, email: user.email });
        getProfile(user.uid);
      } else {
        checkUser({});
        addProfile({});
      }
    });
  }, []);
  return (
    <main>
      {children}
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  addMessage: (message, success) => dispatch(addMessage(message, success)),
  checkUser: (user) => dispatch(checkUser(user)),
  addProfile: (profile) => dispatch(addProfile(profile))
});

export default connect(null, mapDispatchToProps)(Layout);
