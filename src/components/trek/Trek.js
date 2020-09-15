import React from 'react';
import { BsFillCollectionFill } from 'react-icons/bs';
import LazyLoad from 'react-lazyload';
import PreLoader from '../pre-loader/PreLoader';
import TrekInteractions from './TrekInteractions';
import TimeTrekPosted from './TimeTrekPosted';

const Trek = ({ trek, treks }) => {
  return (
    <>
      {treks.indexOf(trek) < 4 ? (
        <LazyLoad
          key={trek.id}
          debounce={100}
          height={200}
          offset={100}
          placeholder={<PreLoader />}
        >
          <article className="p-2" key={trek.id}>
            <div className="trek">
              <div
                className="trek-left m-1 p-1 c-white"
                style={{ backgroundImage: `url(${trek.trek[0].images[0]})` }}
              >
                {trek.trek[0].images.length > 1 ? (
                  <BsFillCollectionFill />
                ) : null}
              </div>
              <div className="trek-right">
                <div className="trek-owner">
                  <img src={trek.user.profile_pic} alt="trek owner" />
                  <span className="trek-username">{trek.user.username}</span>
                </div>
                <div className="trek-text-content pt-2 small-text">
                  <span className="trek-text">{trek.trek[0].text}</span>
                </div>
                <TrekInteractions trek={trek} />
                <TimeTrekPosted timePosted={trek.date_posted} />
              </div>
            </div>
          </article>
        </LazyLoad>
      ) : null}
    </>
  );
};

export default Trek;
