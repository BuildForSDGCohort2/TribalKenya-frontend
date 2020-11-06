import React, { useState, useEffect } from 'react';
import { treksNavData } from './TreksNavData';
import TreksNavItem from './TreksNavItem';

const TreksNavbar = ({ changeDes, sortDes, changeNav, currentNav }) => {
  const [sorts, setsorts] = useState([]);

  useEffect(() => {
    setsorts(treksNavData);
  }, []);
  return (
        <>
            <ul className="treks-navlist white-bg w-100 pl-0 mb-0">
                {sorts.map((key) => (
                    <TreksNavItem key={key.type} currentNav={currentNav} navitem={key} changeDes={changeDes} des={sortDes} changeNav={changeNav} />
                ))}
            </ul>

        </>
  );
};

export default TreksNavbar;
