import React from 'react';
import firebase from 'gatsby-plugin-firebase';
import { connect } from 'react-redux';
import { navigate } from 'gatsby';
import { checkUser, checkPageLoading } from '../../state/auth/auth.actions';

const AODropdownOptions = ({ checkUser, close, checkPageLoading }) => {
  const logOut = async () => {
    try {
      checkPageLoading(true);
      await firebase.auth().signOut();
      checkUser({});
      close();
      navigate('/login');
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleClick = (ev) => {
    ev.preventDefault();
    close();
    logOut();
  };
  return (
    <ul className="ao-dropdown-options p-1 mt-1 ml-1">
        <li onClick={() => {
          close();
          checkPageLoading(true);
          navigate('/profile');
        }}>View Profile</li>
        <li onClick={() => {
          close();
          checkPageLoading(true);
          navigate('/settings');
        }}>Settings</li>
        <li onClick={(ev) => handleClick(ev)}>Log Out</li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => ({
  checkUser: (user) => dispatch(checkUser(user)),
  checkPageLoading: (pageLoading) => dispatch(checkPageLoading(pageLoading))
});

export default connect(null, mapDispatchToProps)(AODropdownOptions);
