import React from 'react';
import { navigate } from 'gatsby';
import { useLocation } from '@reach/router';
import { connect } from 'react-redux';
import AODropdown from './AODropdown';
import { checkPageLoading } from '../../state/auth/auth.actions';

const AccountOption = ({ dropdown, link, text, close, checkPageLoading }) => {
  const location = useLocation();
  const handleClick = (event) => {
    event.preventDefault();
    close();
    if (location.pathname !== link) {
      checkPageLoading(true);
      navigate(link);
    }
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
