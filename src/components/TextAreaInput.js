import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const TextAreaInput = ({ ph, textId, getText }) => {
  return (
    <FormGroup>
      <Label for="exampleText"></Label>
      <Input type="textarea" className="overpass medium-text" name={textId} id={textId} placeholder={ph} onChange={(ev) => getText(ev.target.value)} />
    </FormGroup>
  );
};

export default TextAreaInput;
