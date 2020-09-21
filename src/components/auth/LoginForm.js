import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Alert from './Alert';

const LoginForm = ({ login }) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const handleSubmit = (ev) => {
    ev.preventDefault();
    login(email, password);
  };
  return (
        <div className="form-container black-bg">
      <div className="form-wrapper white-bg p-3">
          <h2 className="medium-text">Admin</h2>
          <Alert />
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="exampleEmail" hidden>
              Email
            </Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Email"
              onChange={(ev) => setemail(ev.target.value)}
            />
          </FormGroup>{' '}
          <FormGroup>
            <Label for="examplePassword" hidden>
              Password
            </Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Password"
              onChange={(ev) => setpassword(ev.target.value)}
            />
          </FormGroup>{' '}
          <Button type="submit" className="black-bg">Submit</Button>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
