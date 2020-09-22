import React from 'react';
import { InputGroup, Input, InputGroupAddon, Label } from 'reactstrap';
import { RiLockPasswordLine } from 'react-icons/ri';

const PasswordInput = ({ getPassword, inputId }) => {
  return (
        <InputGroup className="mb-3 group-input">
          <Label for={inputId} hidden>
            Password
          </Label>
          <InputGroupAddon addonType="prepend">
            <RiLockPasswordLine />
          </InputGroupAddon>
          <Input
            type="password"
            name={inputId}
            id={inputId}
            placeholder="Password"
            className="auth-input"
            onChange={(ev) => getPassword(ev.target.value)}
          />
        </InputGroup>
  );
};

export default PasswordInput;
