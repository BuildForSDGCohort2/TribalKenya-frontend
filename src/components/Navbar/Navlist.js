import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import Navitem from './Navitem';
import Brand from './Brand';

const Navlist = ({ isNavOpen, toggleSearch }) => {
  return (
        <ul className={isNavOpen ? 'nav-list drop-navlist' : 'nav-list'}>
            <Navitem icon={<Brand/>} classname="nav-logo" />
            <Navitem link="/" title="Home" />
            <Navitem link="/about" title="About" />
            <Navitem link="/sightseeing" title="Sightseeing" />
            <Navitem link="/treks" title="Treks" />
            <Navitem link="live-tv" title="Live TV" />
            <Navitem icon={<BiSearchAlt className="medium-text" />} handleIconClick={toggleSearch} />
        </ul>
  );
};

export default Navlist;
