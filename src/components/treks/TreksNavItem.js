import React from 'react';

const TreksNavItem = ({ navitem, changeDes, changeNav, currentNav }) => {
  const handleClick = () => {
    changeDes(navitem.des);
    changeNav(navitem.type);
  };
  return (
        <li onClick={handleClick}
            className={`center column overpass cursor ${navitem.type === currentNav ? 'c-green' : ''}`}>
            <span className="trek-nav-icon p-1">{navitem.icon}</span>
            <span className="trek-nav-type">{navitem.type}</span>
        </li>
  );
};

export default TreksNavItem;
