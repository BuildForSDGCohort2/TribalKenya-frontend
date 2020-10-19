import React from 'react';
import { navigate } from '@reach/router';
import AODropdown from './AODropdown';

const AccountOption = ({ dropdown, link, text }) => {
  const handleClick = (event) => {
    event.preventDefault();
    navigate(link);
  };
  return (
        <>
        {link ? <a href="/" className="account-option nav-link medium-text" onClick={handleClick} >{text}</a> : null}
        {dropdown ? <AODropdown/> : null}
        </>
  );
};

export default AccountOption;
