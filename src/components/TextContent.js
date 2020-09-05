import React from 'react';

const TextContent = ({ heading, children }) => {
  return (
        <div className="text-content">
            <h1 className="mb-2 heading">{heading}</h1>
            {children}
        </div>
  );
};

export default TextContent;
