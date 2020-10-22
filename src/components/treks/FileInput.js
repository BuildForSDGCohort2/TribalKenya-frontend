import React from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';

const FileInput = ({ fileId }) => {
  return (
      <>
        <label htmlFor={fileId} className="small-btn white-bg center column cursor">
            <span className="image-upload-icon"><FaCloudUploadAlt /></span>
            Upload images/videos
        </label>
        <input type="file" id={fileId} name={fileId} accept="image/*,video/*" multiple className="hidden small-text" />
      </>
  );
};

export default FileInput;
