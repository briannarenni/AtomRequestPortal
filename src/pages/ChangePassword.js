import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../AuthContext';
import { updateUserPassword } from "../modules/ServiceModule";
import { PasswordControl, ConfirmPasswordControl } from '../modules/ComponentModule';

export default function ChangePassword() {
  const navigate = useNavigate();
  const { isLoggedIn, currUser } = useAuth();
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
      return;
    }
    setUserId(currUser.userId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const updatePassword = async () => {
    const response = await updateUserPassword(userId, password, confirmedPassword);
    setUserMessage(response.data);
  }

  const handleSubmit = async event => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    setFormSubmitted(true);

    if (form.checkValidity() === false) {
      return;
    }

    if (password !== confirmedPassword) {
      setPasswordError("Passwords don't match");
      return;
    }

    updatePassword();
  }

  return (
    <>
      <h1 className="text-center my-4">Reset Password</h1>

      { userMessage && (<h3>{ userMessage }</h3>) }

      <Form noValidate onSubmit={ handleSubmit } className="w-50 mx-auto my-3">
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
          <Button type="submit" id="reset-btn" className="btn w-100">Update Password</Button>
        </Form.Group>
      </Form>
    </>
  );
}

