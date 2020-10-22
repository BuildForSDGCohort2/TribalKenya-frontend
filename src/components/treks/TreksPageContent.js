import React from 'react';
import SortDescription from './SortDescription';
import Trek from '../trek/Trek';

const TreksPageContent = ({ sortDes, treks, currentNav }) => {
  return (
        <div className="trek-page-content">
            <SortDescription sortDes={sortDes} />
            {currentNav === 'post' ? (<span className="c-white">Post</span>) : (
                <div className="treks">
                    {treks.map((key) => (
                      <div key={key.id} data-aos="fade-up">
                        <Trek trek={key} treks={treks} />
                      </div>
                    ))}
                </div>
            )}
        </div>
  );
};

export default TreksPageContent;
