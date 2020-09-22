import React, { useState } from 'react';
import { Button, Form } from 'reactstrap';
import { Link } from 'gatsby';
import { RiLoginCircleLine } from 'react-icons/ri';
import Alert from './Alert';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';

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
        <EmailInput getEmail={(email) => setemail(email)} inputId="login-email" />
        <PasswordInput getPassword={(passw) => setpassword(passw)} inputId="login-password" />
        <Button type="submit" className="green-bg">
          <RiLoginCircleLine /> Login
        </Button>
        <Link to="/signup"><small className="form-text c-green bold">Don&apos;t have an account yet? Sign up</small></Link>
      </Form>
    </div>
  );
};

export default LoginForm;
