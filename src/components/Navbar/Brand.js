import React from 'react';
import { navigate } from '@reach/router';
import logo from '../../images/flag1.png';

const Brand = () => {
  const goHome = () => navigate('/');
  return (
    <img src={logo} alt="logo" className="logo" onClick={goHome} />
  );
};

export default Brand;
