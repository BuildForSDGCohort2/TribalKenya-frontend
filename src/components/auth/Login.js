import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { navigate } from '@reach/router';
import firebase from 'gatsby-plugin-firebase';
import { addMessage, printMe } from '../../state/auth/auth.actions';
import LoginForm from './LoginForm';

const Login = ({ addMessage, user }) => {
  const login = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigate('/');
    } catch (error) {
      addMessage(error.message, false);
    }
  };
  useEffect(() => {
    if (user.id) {
      navigate('/');
    }
  }, [user]);
  return (
    <>
    <LoginForm login={login} />
    </>
  );
};

const mapStateToProps = (state) => ({
  message: state.auth.message,
  success: state.auth.message,
  user: state.auth.user
});

const mapDispatchToProps = (dispatch) => ({
  addMessage: (message, success) => dispatch(addMessage(message, success)),
  printMe: (me) => printMe(me)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
