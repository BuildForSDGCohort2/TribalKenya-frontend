import React from 'react';
import { navigate } from 'gatsby';
import Navitem from './Navitem';
import Brand from './Brand';
import Account from './Account';

const Navlist = ({ isNavOpen }) => {
  const goHome = (ev) => {
    ev.preventDefault();
    navigate('/');
  };
  return (
        <ul className={isNavOpen ? 'nav-list drop-navlist' : 'nav-list'}>
            <Navitem icon={<Brand/>} classname="nav-logo" handleIconClick={goHome} />
            <Navitem link="/" title="Home" />
            <Navitem link="sightseeing" title="Sightseeing" />
            <Navitem link="treks" title="Treks" />
            <Navitem link="live-tv" title="Live TV" />
            <Navitem><Account /></Navitem>
        </ul>
  );
};

export default Navlist;
