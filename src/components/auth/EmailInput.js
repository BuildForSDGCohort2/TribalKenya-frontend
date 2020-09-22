import React from 'react';
import { InputGroup, Label, InputGroupAddon, Input } from 'reactstrap';
import { FiUser } from 'react-icons/fi';

const EmailInput = ({ getEmail, inputId }) => {
  return (
        <InputGroup className="mb-3 group-input">
          <Label for={inputId} hidden>
            Email
          </Label>
          <InputGroupAddon addonType="prepend">
            <FiUser/>
          </InputGroupAddon>
          <Input
            type="email"
            name={inputId}
            id={inputId}
            placeholder="Email"
            className="auth-input"
            onChange={(ev) => getEmail(ev.target.value)}
          />
        </InputGroup>
  );
};

export default EmailInput;
