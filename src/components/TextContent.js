import React from 'react';

const TextContent = ({ heading, children, text, textColor }) => {
  return (
        <div className="text-content pl-2">
            <h1 className={`mb-2 heading ${textColor}`}>{heading}</h1>
            <p className="small-text">{text}</p>
            {children}
        </div>
  );
};

export default TextContent;
