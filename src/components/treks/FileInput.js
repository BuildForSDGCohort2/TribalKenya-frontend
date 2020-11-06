import React from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';

const FileInput = ({ fileId, getFiles }) => {
  const handleChange = (ev) => {
    ev.preventDefault();
    getFiles([...ev.target.files]);
  };
  return (
      <>
        <label htmlFor={fileId} className="small-btn white-bg center column cursor">
            <span className="image-upload-icon"><FaCloudUploadAlt /></span>
            Upload images/videos
        </label>
        <input type="file" id={fileId} name={fileId} accept="image/*,video/*" multiple className="hidden small-text" onChange={handleChange} />
      </>
  );
};

export default FileInput;
