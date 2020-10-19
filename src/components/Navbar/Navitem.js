import React from 'react';
import { navigate } from 'gatsby';

const Navitem = ({ link, title, icon, classname, handleIconClick, children }) => {
  const handleClick = (event) => {
    event.preventDefault();
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

export default Navitem;
