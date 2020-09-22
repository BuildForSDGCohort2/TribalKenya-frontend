import React, { useState } from 'react';
import { Form } from 'reactstrap';
import { Link } from 'gatsby';
import Alert from './Alert';
import TextInput from './TextInput';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import SubmitBtn from './SubmitBtn';

const SignUpForm = () => {
  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log(username, email, password);
  };
  return (
        <div className="form-container c-white text-center">
            <h2 className="medium-text">Sign Up</h2>
            <Alert />
            <Form onSubmit={handleSubmit} >
                <TextInput inputId="username" getText={(text) => setusername(text)} ph="Username" />
                <EmailInput inputId="signup-email" getEmail={(email) => setemail(email)} />
                <PasswordInput inputId="signup-password" getPassword={(password) => setpassword(password)} />
                <SubmitBtn text="Sign Up" />
                <Link to="/login"><small className="form-text c-green bold">Already have an account? Log In</small></Link>
            </Form>
        </div>
  );
};

export default SignUpForm;
