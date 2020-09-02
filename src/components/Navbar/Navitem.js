import React from 'react';

const Navitem = ({ link, title, icon }) => {
  const handleClick = (event) => {
    event.preventDefault();
  };
  return (
        <li className="nav-item">
            {link ? <a href="/" className="nav-link medium-text" onClick={handleClick}>{title}</a> : null}
            {icon || null}
        </li>
  );
};

export default Navitem;
