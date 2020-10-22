import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import TreksNavbar from './TreksNavbar';
import animateCSS from '../animate';
import { treksData } from '../../state/treks/treksData';
import TreksPageContent from './TreksPageContent';

const Treks = () => {
  const [sortDes, setsortDes] = useState('Most recent Treks');
  const [treks, setTreks] = useState([]);
  const [currentNav, setcurrentNav] = useState('recent');
  const changeDes = (newValue) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    animateCSS('.trek-page-content', 'slideInUp');
    setsortDes(newValue);
  };
  useEffect(() => {
    setTreks(treksData);
    AOS.init();
  }, []);
  return (
        <div className="center column mt-2">
            <TreksNavbar changeDes={changeDes} sortDes={sortDes} changeNav={(nav) => setcurrentNav(nav)} />
            <TreksPageContent sortDes={sortDes} treks={treks} currentNav={currentNav} />
        </div>
  );
};

export default Treks;
