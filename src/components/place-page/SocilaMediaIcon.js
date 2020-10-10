import React from 'react';

const SocilaMediaIcon = ({ icon, link }) => {
  return <a href={link} className="sm-icon c-green p-1" target="_blank" rel="noreferrer">{icon}</a>;
};

export default SocilaMediaIcon;
