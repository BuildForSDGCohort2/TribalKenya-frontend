import React from 'react';
import firebase from 'gatsby-plugin-firebase';
import { navigate } from '@reach/router';

const AODropdownOptions = () => {
  const logOut = async () => {
    try {
      await firebase.auth().signOut();
      navigate('login');
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <ul className="ao-dropdown-options p-1 mt-1">
        <li>View Profile</li>
        <li>Settings</li>
        <li onClick={() => logOut()}>Logout</li>
    </ul>
  );
};

export default AODropdownOptions;
