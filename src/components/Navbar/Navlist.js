import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import Navitem from './Navitem';

const Navlist = () => {
  return (
        <ul className="nav-list">
            <Navitem link="/" title="Home" />
            <Navitem link="/about" title="About" />
            <Navitem link="/sightseeing" title="Sightseeing" />
            <Navitem link="/treks" title="Treks" />
            <Navitem link="live-tv" title="Live TV" />
            <Navitem icon={<BiSearchAlt className="medium-text" />} />
        </ul>
  );
};

export default Navlist;
