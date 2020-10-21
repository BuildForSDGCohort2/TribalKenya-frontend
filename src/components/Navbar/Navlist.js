import React from 'react';
import Navitem from './Navitem';
import Brand from './Brand';
import Account from './Account';

const Navlist = ({ isNavOpen, closeNav }) => {
  return (
        <ul className={isNavOpen ? 'nav-list drop-navlist' : 'nav-list'}>
            <Navitem icon={<Brand/>} classname="nav-logo" close={closeNav} />
            <Navitem link="/" title="Home" close={closeNav} />
            <Navitem link="/sightseeing" title="Sightseeing" close={closeNav} />
            <Navitem link="/treks" title="Treks" close={closeNav} />
            <Navitem link="/live-tv" title="Live TV" close={closeNav} />
            <Navitem><Account close={closeNav} /></Navitem>
        </ul>
  );
};

export default Navlist;
