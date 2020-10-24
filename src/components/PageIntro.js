import React from 'react';

const PageIntro = ({ title, text, color }) => {
  return (
        <div className={`page-intro text-center ${color}`}>
            <h2 className={`heading overpass ${color}`}>{title}</h2>
            {text ? <p className="small-text">{text}</p> : null}
        </div>
  );
};

export default PageIntro;
