import React, { useState, useEffect } from 'react';
import { treksNavData } from './TreksNavData';
import TreksNavItem from './TreksNavItem';

const TreksNavbar = () => {
  const [sortDes, setsortDes] = useState('Most recent Treks');
  const [sorts, setsorts] = useState([]);
  useEffect(() => {
    setsorts(treksNavData);
  }, []);
  return (
        <nav>
            <ul className="treks-navlist white-bg center pl-0">
                {sorts.map((key) => (
                    <TreksNavItem key={key} navitem={key} changeDes={(newValue) => setsortDes(newValue)} />
                ))}
            </ul>
            <div className="sort-description center animate__animated animate__slideInUp c-cream pt-3">
                <p className="small-text overpass">{sortDes}</p>
            </div>
        </nav>
  );
};

export default TreksNavbar;
