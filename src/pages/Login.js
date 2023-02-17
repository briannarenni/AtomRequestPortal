import React, { useState, useEffect } from 'react';
import styles from '../styles/Forms.module.css';
import { useNavigate } from "react-router-dom";
import { Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../AuthContext';
import { loginUser } from "../modules/ServiceModule";

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

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    setFormSubmitted(true);

    if (form.checkValidity() === false) {
      return;
    }

    const response = await loginUser(username, password);
    if (response === 'Username incorrect') {
      setUsernameError(response);
      return;
    } else if (response === 'Password incorrect') {
      setPasswordError(response);
      return;
    }

    setCurrUser(response.data);
  };

  return (
    <>
      <h1 className="text-center">Account Login</h1>
      <Form noValidate formSubmitted={ formSubmitted } onSubmit={ handleSubmit } className="w-50 mx-auto my-3">
        <Form.Group className="mb-3" controlId="loginUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Enter username"
            required
            isValid={ username.trim() && formSubmitted && !usernameError }
            isInvalid={ !username.trim() && formSubmitted || usernameError }
            onChange={ (event) => {
              setUsername(event.target.value);
              setUsernameError('');
            } }
          />
          <Form.Control.Feedback type="invalid">
            { usernameError || "Username cannot be blank" }
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="loginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter password"
            required
            isValid={ password.trim() && formSubmitted && !passwordError }
            isInvalid={ !password.trim() && formSubmitted || passwordError }
            onChange={ (event) => {
              setPassword(event.target.value);
              setPasswordError('');
            } }
          />
          <Form.Control.Feedback type="invalid">
            { passwordError || "Password cannot be blank" }
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-2">
          <Button type="submit" className="w-100">Log In</Button>
        </Form.Group>

        <p className={ styles.formNote }>For forgotten passwords, please speak to HR for reset.</p>
      </Form>
    </>
  );
}
