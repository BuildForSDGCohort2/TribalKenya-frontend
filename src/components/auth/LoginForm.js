import React, { useState } from 'react';
import { Button, Form, Label, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import { Link } from 'gatsby';
import { FiUser } from 'react-icons/fi';
import { RiLockPasswordLine, RiLoginCircleLine } from 'react-icons/ri';
import Alert from './Alert';

const LoginForm = ({ login }) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const handleSubmit = (ev) => {
    ev.preventDefault();
    login(email, password);
  };
  return (
    <div className="form-container c-white text-center">
      <h2 className="medium-text">Login</h2>
      <Alert />
      <Form onSubmit={handleSubmit}>
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
            id="login-email"
            placeholder="Email"
            onChange={(ev) => setemail(ev.target.value)}
          />
        </InputGroup>{' '}
        <InputGroup className="mb-3 group-input">
          <Label for="examplePassword" hidden>
            Password
          </Label>
          <InputGroupAddon addonType="prepend">
            <RiLockPasswordLine />
          </InputGroupAddon>
          <Input
            type="password"
            name="password"
            id="login-password"
            placeholder="Password"
            onChange={(ev) => setpassword(ev.target.value)}
          />
        </InputGroup>{' '}
        <Button type="submit" className="green-bg">
          <RiLoginCircleLine /> Login
        </Button>
        <Link to="/signup"><small className="form-text c-green bold">Don&apos;t have an account yet? Sign up</small></Link>
      </Form>
    </div>
  );
};

export default LoginForm;
