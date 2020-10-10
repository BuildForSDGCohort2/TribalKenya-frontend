import React from 'react';
import { navigate } from '@reach/router';
import { connect } from 'react-redux';
import { checkLoading } from '../../state/sightseeing/sightseeing.actions';

const Navitem = ({ link, title, icon, classname, handleIconClick, children, checkLoading }) => {
  const handleClick = (event) => {
    event.preventDefault();
    checkLoading(true);
    navigate(link);
  };
  const iconClick = (event) => {
    if (handleIconClick) {
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
  checkLoading: (loading) => dispatch(checkLoading(loading))
});

export default connect(null, mapDispatchToProps)(Navitem);
