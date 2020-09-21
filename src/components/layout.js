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
import { connect } from 'react-redux';
import firebase from 'gatsby-plugin-firebase';
import { addMessage, checkUser } from '../state/auth/auth.actions';

const Layout = ({ children, checkUser }) => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        checkUser({ id: user.uid, email: user.email });
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
  checkUser: (user) => dispatch(checkUser(user))
});

export default connect(null, mapDispatchToProps)(Layout);
