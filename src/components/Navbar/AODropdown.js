import React, { useState } from 'react';
import { connect } from 'react-redux';
import { CgUserList } from 'react-icons/cg';
import AODropdownOptions from './AODropdownOptions';

const AODropdown = ({ close }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <div className="ao">
      <a
        href="/"
        className="nav-link medium-text"
        onClick={(ev) => handleClick(ev)}
      >
        Profile <CgUserList />
      </a>
      {isOpen ? <AODropdownOptions close={close} /> : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  profile: state.auth.profile
});

export default connect(mapStateToProps)(AODropdown);
