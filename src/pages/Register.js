import React, { useState, useEffect } from 'react';
import styles from '../assets/styles/Forms.module.css';
import { useNavigate } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import { useAuth } from '../hooks/useAuth';
import { UsernameControl, PasswordControl, ConfirmPasswordControl } from '../components/form';
import { registerUser } from "../data";

export default function Register() {
  const navigate = useNavigate();
  const { setIsLoggedIn, currUser, setCurrUser } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (Object.keys(currUser).length > 0) {
      setIsLoggedIn(true);
      navigate('/dashboard');
    }
  }, [currUser, setIsLoggedIn, navigate]);

  const handleRegister = async () => {
    const response = await registerUser(username, password);
    if (response === 'Username already registered') {
      setUsernameError(response);
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
    } else if (password !== confirmedPassword) {
      setPasswordError("Passwords don't match");
      return;
    }

    handleRegister();
  };

  return (
    <>
      <h1 className="text-center">Register New Employee</h1>
      <p className="text-center mx-auto">
        <span className={ styles.formNote }>
          <span className="fw-bold">HR Note: </span>
          New usernames may contain numbers, but no spaces or special chars.
          <br /> (ex. BrianSmith, BSmith, BSmith12)
        </span>
      </p>

      <Form noValidate onSubmit={ handleSubmit } className="w-50 mx-auto my-3">
        <UsernameControl
          value={ username }
          onChange={ (event) => {
            setUsername(event.target.value);
            setUsernameError('');
          } }
          error={ usernameError }
          submitted={ formSubmitted }>
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

        <ConfirmPasswordControl
          value={ confirmedPassword }
          onChange={ (event) => {
            setConfirmedPassword(event.target.value);
            setPasswordError('');
          } }
          error={ passwordError }
          submitted={ formSubmitted }>
        </ConfirmPasswordControl>

        <Form.Group className="mt-4">
          <Button type="submit" className="w-100">Register</Button>
        </Form.Group>
      </Form>
    </>
  );
}
