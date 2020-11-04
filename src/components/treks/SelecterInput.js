import React from 'react';

const SelecterInput = ({ sId, options, selected, dV }) => {
  const handleChange = (ev) => {
    ev.preventDefault();
    selected(ev.target.value);
  };
  return (
        <select name={sId} id={sId} className="select-input overpass medium-text small-btn white-bg" onChange={handleChange} value={dV || ''}>
            {options.map((key) => (
                <option value={key.option} key={key.option}>{key.option}</option>
            ))}
        </select>
  );
};

export default SelecterInput;
