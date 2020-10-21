import React, { useState } from 'react';
import TreksNavbar from './TreksNavbar';
import SortDescription from './SortDescription';
import animateCSS from '../animate';

const Treks = () => {
  const [sortDes, setsortDes] = useState('Most recent Treks');
  const changeDes = (newValue) => {
    animateCSS('.trek-page-content', 'slideInUp');
    setsortDes(newValue);
  };
  return (
        <div className="center column mt-2">
            <TreksNavbar changeDes={changeDes} sortDes={sortDes} />
            <div className="trek-page-content">
                <SortDescription sortDes={sortDes} />
            </div>
        </div>
  );
};

export default Treks;
