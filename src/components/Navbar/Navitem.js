import React from 'react';

const Navitem = ({ link, title, icon, classname, handleIconClick }) => {
  const handleClick = (event) => {
    event.preventDefault();
  };
  const iconClick = (event) => {
    event.preventDefault();
    handleIconClick();
  };
  return (
        <li className="nav-item">
            {link ? <a href="/" className="nav-link medium-text" onClick={handleClick}>{title}</a> : null}
            {icon ? <a href="/" className={`nav-link medium-text ${classname}`} onClick={iconClick}>{icon}</a> : null}
        </li>
  );
};

export default Navitem;
