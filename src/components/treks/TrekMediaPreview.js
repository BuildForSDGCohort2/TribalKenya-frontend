import React from 'react';
import ImagePreview from './ImagePreview';
import VideoPreview from './VideoPreview';

const TrekMediaPreview = ({ images, videos }) => {
  return (
    <>
            {images.length > 0 || videos.length > 0 ? (
                <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" uk-slider="center: true">
                    <ul className="uk-slider-items uk-grid">
                        {images.map((key) => (
                            <ImagePreview image={key} key={key.name} />
                        ))}
                        {videos.map((key) => (
                            <VideoPreview key={key.name} video={key} />
                        ))}
                    </ul>
                    <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="true" uk-slider-item="previous"></a>
                    <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="true" uk-slider-item="next"></a>
                </div>
            ) : null}

        {videos.length > 0 ? (
            <span className="small-text overpass c-cream">{videos.length} video{videos.length > 1 ? 's' : ''} to be uploaded</span>
        ) : null}
        {videos.length > 0 ? (
            <span className="small-text overpass c-cream">{images.length} image{images.length > 1 ? 's' : ''} to be uploaded</span>
        ) : null}
    </>
  );
};

export default TrekMediaPreview;
