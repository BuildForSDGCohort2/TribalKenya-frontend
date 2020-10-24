import React from 'react';
import { InputGroupAddon, Input, InputGroup } from 'reactstrap';

const TextInput = ({ inputId, ph, getText, dV, extraClass, icon, iconColor }) => {
  return (
    <InputGroup className="mb-3 group-input">
      <InputGroupAddon addonType="prepend" className={`${iconColor}`}>
        {icon}
      </InputGroupAddon>
      <Input
        type="text"
        name={inputId}
        placeholder={ph || ''}
        defaultValue={dV || ''}
        id={inputId}
        className={`auth-input ml-2 ${extraClass}`}
        onChange={(ev) => getText(ev.target.value)}
        autoComplete="off"
      />
    </InputGroup>
  );
};

export default TextInput;
