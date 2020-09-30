import React, { useState } from 'react';
import { Form } from 'reactstrap';
import { Link } from 'gatsby';
import Alert from './Alert';
import TextInput from './TextInput';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import SubmitBtn from './SubmitBtn';
import PreLoader from '../pre-loader/PreLoader';
import PhoneInput from './PhoneInput';

const SignUpForm = ({ loading, signUp }) => {
  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [password, setpassword] = useState('');
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const userData = {
      email: email,
      username: username,
      phone: phone
    };
    signUp(userData, password);
  };
  return (
        <div className="form-container c-white text-center">
            <h2 className="medium-text">Sign Up</h2>
            {loading ? <PreLoader /> : null}
            <Alert />
            <Form onSubmit={handleSubmit} >
                <TextInput inputId="username" getText={(username) => setusername(username)} ph="Username" />
                <EmailInput inputId="signup-email" getEmail={(email) => setemail(email)} />
                <PhoneInput getCC={(phoneNumber) => setphone(phoneNumber)} />
                <PasswordInput inputId="signup-password" getPassword={(password) => setpassword(password)} />
                <SubmitBtn text="Sign Up" />
                <Link to="/login"><small className="form-text c-green bold mt-2">Already have an account? Log In</small></Link>
            </Form>
        </div>
  );
};

export default SignUpForm;
