import React from 'react';

const Footer = () => {
  const date = new Date(Date.now());
  const year = date.getFullYear();
  return (
        <footer className="text-center pb-2 pt-2 white-bg">
            <span>Copyright ©{year} | BuildForSDG</span>
        </footer>
  );
};

export default Footer;
