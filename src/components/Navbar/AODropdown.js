import React, { useState } from 'react';
import { CgUserList } from 'react-icons/cg';
import AODropdownOptions from './AODropdownOptions';

const AODropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <div className="ao">
      <a
        href="/"
        className="account-option small-text"
        onClick={(ev) => handleClick(ev)}
      >
        Profile <CgUserList />
      </a>
      {isOpen ? <AODropdownOptions /> : null}
    </div>
  );
};

export default AODropdown;
