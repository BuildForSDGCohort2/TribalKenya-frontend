import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { navigate } from '@reach/router';
import firebase from 'gatsby-plugin-firebase';
import { addMessage } from '../../state/auth/auth.actions';
import LoginForm from './LoginForm';
import './login.css';

const Login = ({ addMessage, user }) => {
  const [loading, setloading] = useState(false);
  const login = async (email, password) => {
    try {
      setloading(true);
      await firebase.auth().signInWithEmailAndPassword(email, password);
      setloading(false);
      setTimeout(() => navigate('/'), 1000);
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
        <LoginForm login={login} loading={loading} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  message: state.auth.message,
  success: state.auth.message,
  user: state.auth.user
});

const mapDispatchToProps = (dispatch) => ({
  addMessage: (message, success) => dispatch(addMessage(message, success))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
