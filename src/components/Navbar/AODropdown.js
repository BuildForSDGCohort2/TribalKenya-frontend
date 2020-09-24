import React, { useState } from 'react';
import { connect } from 'react-redux';
import { CgUserList } from 'react-icons/cg';
import AODropdownOptions from './AODropdownOptions';

const AODropdown = ({ user, profile }) => {
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
        {user.email ? profile.username : null } <CgUserList />
      </a>
      {isOpen ? <AODropdownOptions /> : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  profile: state.auth.profile
});

export default connect(mapStateToProps)(AODropdown);
