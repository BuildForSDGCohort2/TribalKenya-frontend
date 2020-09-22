import React from 'react';
import { InputGroup, Label, InputGroupAddon, Input } from 'reactstrap';
import { FiUser } from 'react-icons/fi';

const EmailInput = ({ getEmail, inputId }) => {
  return (
        <InputGroup className="mb-3 group-input">
          <Label for="exampleEmail" hidden>
            Email
          </Label>
          <InputGroupAddon addonType="prepend">
            <FiUser/>
          </InputGroupAddon>
          <Input
            type="email"
            name="email"
            id={inputId}
            placeholder="Email"
            onChange={(ev) => getEmail(ev.target.value)}
          />
        </InputGroup>
  );
};

export default EmailInput;
