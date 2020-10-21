import React, { useState, useEffect } from 'react';
import TreksNavbar from './TreksNavbar';
import SortDescription from './SortDescription';
import animateCSS from '../animate';
import { treksData } from '../../state/treks/treksData';
import Trek from '../trek/Trek';

const Treks = () => {
  const [sortDes, setsortDes] = useState('Most recent Treks');
  const [treks, setTreks] = useState([]);
  const changeDes = (newValue) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    animateCSS('.trek-page-content', 'slideInUp');
    setsortDes(newValue);
  };
  useEffect(() => {
    setTreks(treksData);
  }, []);
  return (
        <div className="center column mt-2">
            <TreksNavbar changeDes={changeDes} sortDes={sortDes} />
            <div className="trek-page-content">
                <SortDescription sortDes={sortDes} />
                <div className="treks">
                    {treks.map((key) => (
                      <Trek key={key.id} trek={key} treks={treks} />
                    ))}
                </div>
            </div>

        </div>
  );
};

export default Treks;
