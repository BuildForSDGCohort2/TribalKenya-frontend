import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { navigate } from 'gatsby';
import Navitem from './Navitem';
import Brand from './Brand';

const Navlist = ({ isNavOpen, toggleSearch }) => {
  const goHome = () => {
    navigate('/');
  };
  return (
        <ul className={isNavOpen ? 'nav-list drop-navlist' : 'nav-list'}>
            <Navitem icon={<Brand/>} classname="nav-logo" handleIconClick={goHome} />
            <Navitem link="/" title="Home" />
            <Navitem link="about" title="About" />
            <Navitem link="sightseeing" title="Sightseeing" />
            <Navitem link="treks" title="Treks" />
            <Navitem link="live-tv" title="Live TV" />
            <Navitem icon={<BiSearchAlt className="medium-text" />} handleIconClick={toggleSearch} />
        </ul>
  );
};

export default Navlist;
