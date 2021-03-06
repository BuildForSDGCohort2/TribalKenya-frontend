import React from 'react';
import { InputGroupAddon, Input, InputGroup } from 'reactstrap';

const TextInput = ({
  inputId,
  ph,
  getText,
  dV,
  extraClass,
  icon,
  iconColor,
  textarea,
  rows,
  activateOnKeyup
}) => {
  const onClickingEnter = (ev) => {
    if (ev.keyCode === 13) {
      if (activateOnKeyup) activateOnKeyup(ev);
    }
  };
  return (
    <>
      {textarea ? (
        <textarea
          name={inputId}
          id={inputId}
          defaultValue={dV || ''}
          placeholder={ph || ''}
          onChange={(ev) => getText(ev.target.value)}
          className={`auth-input auth-textarea ml-2 p-1 ${extraClass}`}
          rows={rows || '4'}
          cols="35"
          onKeyUp={onClickingEnter}
        />
      ) : (
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
      )}
    </>
  );
};

export default TextInput;
