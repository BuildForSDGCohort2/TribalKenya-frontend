import React from 'react';
import { navigate } from '@reach/router';
import Navitem from './Navitem';
import Brand from './Brand';
import Account from './Account';

const Navlist = ({ isNavOpen, closeNav }) => {
  const goHome = (ev) => {
    ev.preventDefault();
    navigate('/');
  };
  return (
        <ul className={isNavOpen ? 'nav-list drop-navlist' : 'nav-list'}>
            <Navitem icon={<Brand/>} classname="nav-logo" handleIconClick={goHome} close={closeNav} />
            <Navitem link="/" title="Home" close={closeNav} />
            <Navitem link="/sightseeing" title="Sightseeing" close={closeNav} />
            <Navitem link="/treks" title="Treks" close={closeNav} />
            <Navitem link="/live-tv" title="Live TV" close={closeNav} />
            <Navitem><Account close={closeNav} /></Navitem>
        </ul>
  );
};

export default Navlist;
