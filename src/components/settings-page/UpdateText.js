import React from 'react';

const UpdateText = ({ dV, getText, textId, textType }) => {
  const updateText = (ev) => {
    ev.preventDefault();
    getText(ev.target.value);
  };
  return (
        <input type={textType} id={textId} name={textId} className="tp-input transparent" defaultValue={dV} onChange={updateText} />
  );
};

export default UpdateText;
