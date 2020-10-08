import React from 'react';
import { navigate } from '@reach/router';
import AODropdown from './AODropdown';

const AccountOption = ({ dropdown, link }) => {
  const handleClick = (event) => {
    event.preventDefault();
    navigate(link);
  };
  return (
        <>
        {link ? <a href="/" className="account-option medium-text" onClick={handleClick} >{link}</a> : null}
        {dropdown ? <AODropdown/> : null}
        </>
  );
};

export default AccountOption;
