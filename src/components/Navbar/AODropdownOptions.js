import React from 'react';
import firebase from 'gatsby-plugin-firebase';
import { connect } from 'react-redux';
import { navigate } from '@reach/router';
import { checkUser } from '../../state/auth/auth.actions';

const AODropdownOptions = ({ checkUser }) => {
  const logOut = async () => {
    try {
      await firebase.auth().signOut();
      checkUser({});
      navigate('/login');
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleClick = (ev, value) => {
    ev.preventDefault();
    if (value === 'Log Out') {
      logOut();
    }
  };
  return (
    <ul className="ao-dropdown-options p-1 mt-1 ml-1">
        <li onClick={() => navigate('/profile')}>View Profile</li>
        <li onClick={() => navigate('/settings')}>Settings</li>
        <li onClick={(ev) => handleClick(ev, ev.target.innerHTML)}>Log Out</li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => ({
  checkUser: (user) => dispatch(checkUser(user))
});

export default connect(null, mapDispatchToProps)(AODropdownOptions);
