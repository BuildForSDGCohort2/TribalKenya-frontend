import React, { useEffect, useState } from 'react';

const ImagePreview = ({ image }) => {
  const [imgSRC, setImageSRC] = useState('');
  useEffect(() => {
    const newPhoto = URL.createObjectURL(image);
    setImageSRC(newPhoto);
  }, []);
  return (
    <li className="uk-width-3-4">
        <div className="uk-panel">
            <img src={imgSRC} alt="preview" className="form-preview-media" />
        </div>
    </li>
  );
};

export default ImagePreview;
