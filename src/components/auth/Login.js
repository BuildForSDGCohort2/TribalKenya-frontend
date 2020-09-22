import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { navigate } from '@reach/router';
import firebase from 'gatsby-plugin-firebase';
import { addMessage, printMe } from '../../state/auth/auth.actions';
import LoginForm from './LoginForm';
import './login.css';

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
    <div className="h-100vh w-100 center black-bg">
        <LoginForm login={login} />
    </div>
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
