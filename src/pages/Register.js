import React, { useState, useEffect } from 'react';
import styles from '../styles/Forms.module.css';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../_hooks/AuthContext';
import { registerUser } from "../modules/ServiceModule";

export default function Register() {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn, currUser, setCurrUser } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [UXMessage, setUXMessage] = useState('');

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/dashboard');
    }
  }, [isLoggedIn]);

  const handleSubmit = async event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setUXMessage("Passwords don't match. Please try again.");
      return UXMessage;
    }

    const response = await registerUser(username, password);
    if (response === 'Username already exists') {
      setUXMessage(response);
    } else {
      setCurrUser(response.data);
      if (currUser !== {}) {
        setIsLoggedIn(true);
      }
    }
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
      { UXMessage && <Alert variant="danger" className=" w-50 mx-auto error-message text-center">{ UXMessage }</Alert> }

      <Form onSubmit={ handleSubmit } className="w-50 mx-auto my-3">
        <Form.Group className="mb-3" controlId="registerUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text"
            placeholder="Enter employee username"
            required
            onChange={ event => setUsername(event.target.value) } />
        </Form.Group>

        <Form.Group className="mb-3" controlId="registerPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"
            placeholder="Enter password"
            required
            onChange={ event => setPassword(event.target.value) }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label>Confirm New Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm password" required onChange={ event => setConfirmPassword(event.target.value) } />
        </Form.Group>

        <Form.Group className="mt-4">
          <Button type="submit" className="w-100">Register</Button>
        </Form.Group>
      </Form>
    </>
  );
}
