import React, { useState, useEffect } from 'react';
import { treksNavData } from './TreksNavData';
import TreksNavItem from './TreksNavItem';

const TreksNavbar = ({ changeDes, sortDes }) => {
  const [sorts, setsorts] = useState([]);

  useEffect(() => {
    setsorts(treksNavData);
  }, []);
  return (
        <>
            <ul className="treks-navlist white-bg w-100 pl-0 mb-0">
                {sorts.map((key) => (
                    <TreksNavItem key={key} navitem={key} changeDes={changeDes} des={sortDes} />
                ))}
            </ul>

        </>
  );
};

export default TreksNavbar;
