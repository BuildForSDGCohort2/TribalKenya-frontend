import React from 'react';
import { InputGroupAddon, Input, InputGroup } from 'reactstrap';
import { FaPhoneAlt } from 'react-icons/fa';

const PhoneInput = ({ getPhone, getCC }) => {
  return (
    <InputGroup className="mb-3 group-input">
      <InputGroupAddon addonType="prepend">
        <FaPhoneAlt />
      </InputGroupAddon>
      <InputGroupAddon addonType="prepend">
      <Input
        type="text"
        name="country-code"
        placeholder="+254"
        id="country-code"
        className="auth-input ml-2"
        onChange={(ev) => getCC(ev.target.value)}
      />
      </InputGroupAddon>
      {' | '}
      <Input
        type="text"
        name="phone-number"
        placeholder="712345678"
        id="phone-number"
        className="auth-input ml-2"
        onChange={(ev) => getPhone(ev.target.value)}
      />
    </InputGroup>
  );
};

export default PhoneInput;
