import React from 'react';
import { useLocation } from '@reach/router';
import { navigate } from 'gatsby';
import { connect } from 'react-redux';
import { checkPageLoading } from '../../state/auth/auth.actions';

const Navitem = ({ link, title, icon, classname, handleIconClick, children, close, checkPageLoading }) => {
  const location = useLocation();
  const handleClick = (event) => {
    event.preventDefault();
    close();
    if (location.pathname !== link) {
      navigate(link);
      checkPageLoading(true);
    }
  };
  const iconClick = (event) => {
    if (handleIconClick) {
      close();
      handleIconClick(event);
    }
  };
  return (
        <li className="nav-item">
            {link ? <a href="/" className="nav-link medium-text" onClick={handleClick}>{title}</a> : null}
            {icon ? <a href="/" className={`nav-link medium-text ${classname}`} onClick={iconClick}>{icon}</a> : null}
            {children || null}
        </li>
  );
};

const mapDispatchToProps = (dispatch) => ({
  checkPageLoading: (pageLoading) => dispatch(checkPageLoading(pageLoading))
});

export default connect(null, mapDispatchToProps)(Navitem);
