import React from 'react';

const TreksNavItem = ({ navitem, changeDes }) => {
  return (
        <li onClick={() => changeDes(navitem.des)} className="center column overpass p-2 cursor">
            <span className="trek-nav-icon p-1">{navitem.icon}</span>
            <span className="trek-nav-type">{navitem.type}</span>
        </li>
  );
};

export default TreksNavItem;
