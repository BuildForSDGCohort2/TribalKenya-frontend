import React, { useState, useEffect } from 'react';
import animateCSS from '../animate';
import SearchBar from './SearchBar';
import Navlist from './Navlist';
import './NavBar.css';
import Account from './Account';
import Brand from './Brand';

const NavBar = () => {
  const [isNavOpen, setisNavOpen] = useState(false);
  const [search, setsearch] = useState(false);
  useEffect(() => {
    if (isNavOpen) {
      animateCSS('.drop-navlist', 'fadeInDown');
    } else {
      animateCSS('.drop-navlist', 'fadeOutUp');
    }
  }, [isNavOpen]);
  return (
    <nav className="my-navbar">
      <div className="top-nav">
        <div className="brand">
          <Brand/>
        </div>
        <div className="right w-100">
            <div
              className={
                isNavOpen ? 'mytoggler mt-1 ml-2 mr-1 open' : 'mytoggler mt-1 ml-2 mr-2'
              }
              onClick={() => setisNavOpen(!isNavOpen)}
            >
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
        </div>
        <div className={isNavOpen ? 'center animate__animated animate__fadeInDown' : 'center'}>
          <Navlist isNavOpen={isNavOpen} />
          {search ? <SearchBar setsearch={setsearch} /> : null}
        </div>
      </div>
      <div className="bottom-nav">
        <div className="center pt-1">
          <span className="brand-name medium-text">Tribal Kenya</span>
        </div>
        <div className="center">
          <Account />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
