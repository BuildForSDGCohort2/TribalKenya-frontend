import React from 'react';
import { navigate } from 'gatsby';
import AODropdown from './AODropdown';

const AccountOption = ({ dropdown, link, text, close }) => {
  const handleClick = (event) => {
    event.preventDefault();
    close();
    navigate(link);
  };
  return (
        <>
        {link ? <a href="/" className="account-option nav-link medium-text" onClick={handleClick} >{text}</a> : null}
        {dropdown ? <AODropdown close={close} /> : null}
        </>
  );
};

export default AccountOption;
