import React from 'react';
import { navigate } from 'gatsby';
import { connect } from 'react-redux';
import AODropdown from './AODropdown';
import { checkPageLoading } from '../../state/auth/auth.actions';

const AccountOption = ({ dropdown, link, text, close, checkPageLoading }) => {
  const handleClick = (event) => {
    event.preventDefault();
    close();
    checkPageLoading(true);
    navigate(link);
  };
  return (
        <>
        {link ? <a href="/" className="account-option nav-link medium-text" onClick={handleClick} >{text}</a> : null}
        {dropdown ? <AODropdown close={close} /> : null}
        </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  checkPageLoading: (pageLoading) => dispatch(checkPageLoading(pageLoading))
});

export default connect(null, mapDispatchToProps)(AccountOption);
