/* eslint-disable max-statements */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import firebase from 'gatsby-plugin-firebase';
import { navigate } from 'gatsby';
import SignUpForm from './SignUpForm';
import { addMessage } from '../../state/auth/auth.actions';
import { createUserEndpoint, confirmUsernameExists } from '../../state/auth/authBackend';

const SignUp = ({ addMessage }) => {
  const [loading, setloading] = useState(false);
  // Get default profile picture for new users
  const getProfPic = async () => {
    try {
      const storageRef = firebase.storage().ref();
      const image = storageRef.child('default/user-icon.png');
      const imageUrl = await image.getDownloadURL();
      return imageUrl;
    } catch (error) {
      addMessage(error.message, false);
      return error.message;
    }
  };
  // Create profile for new user
  const createProfile = async (data) => {
    try {
      await createUserEndpoint(data);
    } catch (error) {
      addMessage(error.message, false);
    }
  };
  // Confirm if username already exists during sign up
  const confirmIfUserExists = async (username) => {
    try {
      const result = await confirmUsernameExists(username);
      return result;
    } catch (error) {
      return error.message;
    }
  };
  // register new user
  const signUp = async (data, password) => {
    try {
      setloading(true);
      const userExists = await confirmIfUserExists(data.username);
      if (userExists) {
        addMessage('Username already exists', false);
        setloading(false);
      } else {
        const imageUrl = await getProfPic();
        const userData = { ...data, profile_pic: imageUrl };
        const newUser = await firebase.auth().createUserWithEmailAndPassword(userData.email, password);
        await createProfile({ ...userData, id: newUser.user.uid });
        setloading(false);
        addMessage(`Welcome ${userData.username}`, true);
        setTimeout(() => navigate('/'), 2000);
      }
    } catch (error) {
      addMessage(error.message, false);
      setloading(false);
    }
  };
  return (
        <div className="h-100vh w-100 center black-bg">
            <SignUpForm loading={loading} signUp={signUp} />
        </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user
});

const mapDispatchToProps = (dispatch) => ({
  addMessage: (message, success) => dispatch(addMessage(message, success))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
