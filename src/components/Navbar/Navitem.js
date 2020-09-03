import React from 'react';

const Navitem = ({ link, title, icon, classname }) => {
  const handleClick = (event) => {
    event.preventDefault();
  };
  return (
        <li className="nav-item">
            {link ? <a href="/" className="nav-link medium-text" onClick={handleClick}>{title}</a> : null}
            {icon ? <a href="/" className={`nav-link medium-text ${classname}`} onClick={handleClick}>{icon}</a> : null}
        </li>
  );
};

export default Navitem;
