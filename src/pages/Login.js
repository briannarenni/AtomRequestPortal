import React, { useState, useEffect } from 'react';
import styles from '../styles/Forms.module.css';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../AuthContext';
import { loginUser } from "../modules/ServiceModule";


export default function Login() {
  const navigate = useNavigate();
  const { setIsLoggedIn, setCurrUser } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [UXMessage, setUXMessage] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();
    const response = await loginUser(username, password);
    if (response === 'Username incorrect' || response === 'Password incorrect') {
      setUXMessage(response);
    }
    else {
      setCurrUser(response.data);
      setUXMessage("Login successful. Redirecting...");
      setIsLoggedIn(true);
    }
  };

  return (
    <>
      <h1 className="text-center">Account Login</h1>
      { UXMessage && <div className="error-message">{ UXMessage }</div> }

      <Form onSubmit={ handleSubmit } className="w-50 mx-auto my-3">
        <Form.Group className="mb-3" controlId="loginUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            required
            onChange={ (event) => setUsername(event.target.value) }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="loginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            required
            onChange={ (event) => setPassword(event.target.value) }
          />
        </Form.Group>

        <Form.Group id="toggle-btn" className="mb-3" controlId="rememberCheck">
          <Form.Check type="switch" label="Remember Me"></Form.Check>
        </Form.Group>

        <Form.Group className="mb-2">
          <Button type="submit" className="w-100">Log In</Button>
        </Form.Group>

        <p className={ styles.formNote }>For forgotten passwords, please speak to HR.</p>
      </Form>
    </>
  );
}
