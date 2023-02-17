import React, { useState, useEffect } from 'react';
import styles from '../styles/Forms.module.css';
import { useNavigate } from "react-router-dom";
import { Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../AuthContext';
import { registerUser } from "../modules/ServiceModule";

export default function Register() {
  const navigate = useNavigate();
  const { setIsLoggedIn, currUser, setCurrUser } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (Object.keys(currUser).length > 0) {
      setIsLoggedIn(true);
      navigate('/dashboard');
    }
  }, [currUser, setIsLoggedIn, navigate]);

  const handleSubmit = async event => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    setFormSubmitted(true);

    if (form.checkValidity() === false) {
      return;
    }

    if (password !== confirmPassword) {
      setPasswordError("Passwords don't match");
      return;
    }

    const response = await registerUser(username, password);
    if (response === 'Username already registered') {
      setUsernameError(response);
      return;
    }

    setCurrUser(response.data);
  };

  return (
    <>
      <h1 className="text-center">Register New Employee</h1>
      <p className="text-center mx-auto">
        <span className={ styles.formNote }>
          <span className="fw-bold">HR Note: </span>
          New usernames may contain numbers, but no spaces or special chars.
          <br />
          (ex. BrianSmith, BSmith, BSmith12)
        </span>
      </p>

      <Form noValidate formSubmitted={ formSubmitted } onSubmit={ handleSubmit } className="w-50 mx-auto my-3">
        <Form.Group className="mb-3" controlId="registerUsername">
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

        <Form.Group className="mb-3" controlId="registerPassword">
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

        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label>Confirm New Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter password"
            required
            isValid={ password.trim() && formSubmitted && !passwordError }
            isInvalid={ !password.trim() && formSubmitted || passwordError }
            onChange={ (event) => {
              setConfirmPassword(event.target.value);
              setPasswordError('');
            } }
          />
          <Form.Control.Feedback type="invalid">
            { passwordError || "Password cannot be blank" }
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mt-4">
          <Button type="submit" className="w-100">Register</Button>
        </Form.Group>
      </Form>
    </>
  );
}
