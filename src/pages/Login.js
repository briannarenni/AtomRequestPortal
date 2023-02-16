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
  const [UXMessage, setUXMessage] = useState('');

  useEffect(() => {
    if (Object.keys(currUser).length > 0) {
      setIsLoggedIn(true);
      navigate('/dashboard');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currUser]);

  const handleSubmit = async event => {
    event.preventDefault();
    const response = await loginUser(username, password);
    if (response === 'Username incorrect' || response === 'Password incorrect') {
      setUXMessage(response);
    }
    else {
      setCurrUser(response.data);
    }
  };

  return (
    <>
      <h1 className="text-center">Account Login</h1>
      { UXMessage && <Alert variant="danger" className=" w-50 mx-auto error-message text-center">{ UXMessage }</Alert> }

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

        <Form.Group className="mb-2">
          <Button type="submit" className="w-100">Log In</Button>
        </Form.Group>

        <p className={ styles.formNote }>For forgotten passwords, please speak to HR for reset.</p>
      </Form>
    </>
  );
}
