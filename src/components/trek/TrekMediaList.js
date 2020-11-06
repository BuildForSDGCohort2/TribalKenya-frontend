import React from 'react';
import TrekVidoes from './TrekVidoes';
import TrekImages from './TrekImages';

const TrekMediaList = ({ trek }) => {
  return (
      <div
        className="uk-position-relative uk-visible-toggle uk-light trek-bg"
        tabIndex="-1"
        uk-slider="center:true"
      >
        <ul
          className="uk-slider-items uk-child-width-1-2@s uk-child-width-1-3@m uk-grid"
          uk-height-viewport="offset-top: true; offset-bottom: 30"
        >
          {trek.videos.length > 0 ? (
            <TrekVidoes
              slides={trek.videos}
              extraClass="trek-bg"
              container="trek-bg"
            />
          ) : null}
          {trek.images.length > 0 ? (
            <TrekImages
              slides={trek.images}
              extraClass="trek-bg"
              container="trek-bg"
            />
          ) : null}
        </ul>
        <a
          className="uk-position-center-left uk-position-small"
          href="/"
          uk-slidenav-previous="true"
          uk-slider-item="previous"
        ></a>
        <a
          className="uk-position-center-right uk-position-small"
          href="/"
          uk-slidenav-next="true"
          uk-slider-item="next"
        ></a>
      </div>
  );
};

export default TrekMediaList;
