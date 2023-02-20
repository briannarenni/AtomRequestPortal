import React, { useState, useEffect } from 'react';
import styles from '../assets/styles/Forms.module.css';
import { useNavigate } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import { useAuth } from '../hooks/useAuth';
import { UsernameControl, PasswordControl } from '../components/form';
import { loginUser } from "../data";

export default function Login() {
  const navigate = useNavigate();
  const { setIsLoggedIn, currUser, setCurrUser } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (Object.keys(currUser).length > 0) {
      setIsLoggedIn(true);
      navigate('/dashboard');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currUser]);

  const handleLogin = async () => {
    const response = await loginUser(username, password);
    if (response === 'Username incorrect') {
      setUsernameError(response);
      return;
    } else if (response === 'Password incorrect') {
      setPasswordError(response);
      return;
    } else {
      setCurrUser(response.data);
    }
  }

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    setFormSubmitted(true);

    if (form.checkValidity() === false) {
      return;
    }

    handleLogin();
  };

  return (
    <>
      <h1 className="text-center">Account Login</h1>
      <Form noValidate onSubmit={ handleSubmit } className="w-50 mx-auto my-3">
        <UsernameControl
          value={ username }
          onChange={ (event) => {
            setUsername(event.target.value);
            setUsernameError('');
          } }
          error={ usernameError }
          submitted={ formSubmitted } >
        </UsernameControl>

        <PasswordControl
          value={ password }
          onChange={ (event) => {
            setPassword(event.target.value);
            setPasswordError('');
          } }
          error={ passwordError }
          submitted={ formSubmitted }>
        </PasswordControl>

        <Form.Group className="mb-2">
          <Button type="submit" className="w-100">Log In</Button>
        </Form.Group>

        <p className={ styles.formNote }>For forgotten passwords, please speak to HR for reset.</p>
      </Form>
    </>
  );
}
