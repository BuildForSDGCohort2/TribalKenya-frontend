import React, { useEffect, useState } from 'react';

const ImagePreview = ({ image, images }) => {
  const [imgSRC, setImageSRC] = useState('');
  useEffect(() => {
    const newPhoto = URL.createObjectURL(image);
    setImageSRC(newPhoto);
  }, []);
  return (
    <li className="uk-width-3-4">
        <div className="uk-panel">
            <img src={imgSRC} alt="preview" className="form-preview-media" />
            <div className="uk-position-center uk-panel fade-black br-1 p-2">
              <span className="heading">{images.indexOf(image) + 1}</span>
            </div>
        </div>
    </li>
  );
};

export default ImagePreview;
