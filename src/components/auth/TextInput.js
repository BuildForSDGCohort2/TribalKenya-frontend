import React from 'react';
import { InputGroupAddon, Input, InputGroup } from 'reactstrap';
import { FiUser } from 'react-icons/fi';

const TextInput = ({ inputId, ph, getText }) => {
  return (
    <InputGroup className="mb-3 group-input">
      <InputGroupAddon addonType="prepend">
        <FiUser />
      </InputGroupAddon>
      <Input
        type="text"
        name={inputId}
        placeholder={ph}
        id={inputId}
        className="auth-input"
        onChange={(ev) => getText(ev.target.value)}
      />
    </InputGroup>
  );
};

export default TextInput;
