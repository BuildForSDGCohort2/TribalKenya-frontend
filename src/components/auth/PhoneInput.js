import React, { useEffect } from 'react';
import { InputGroupAddon, InputGroup } from 'reactstrap';
import { FaPhoneAlt } from 'react-icons/fa';
import intlTelInputJs from 'intl-tel-input/build/js/utils';
import IntlTelInput from 'intl-tel-input';

const PhoneInput = ({ getCC }) => {
  const countryCodeDisplay = () => {
    const input = document.querySelector('#country-code');
    IntlTelInput(input, {
      autoPlaceholder: 'polite',
      utilsScript: intlTelInputJs,
      separateDialCode: true
    });
  };

  const handleChange = (ev) => {
    ev.preventDefault();
    const iti = document.querySelector('.iti__selected-dial-code');
    getCC(`${iti.innerHTML}${ev.target.value}`);
  };

  useEffect(() => {
    countryCodeDisplay();
  }, []);
  return (
    <InputGroup className="mb-3 group-input">
      <InputGroupAddon addonType="prepend">
        <FaPhoneAlt />
      </InputGroupAddon>
      <InputGroupAddon addonType="prepend">
      <input
        type="tel"
        name="country-code"
        id="country-code"
        className="auth-input ml-2"
        onChange={handleChange}
      />
      </InputGroupAddon>
    </InputGroup>
  );
};

export default PhoneInput;
