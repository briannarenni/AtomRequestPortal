import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function PasswordReset() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async event => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    setFormSubmitted(true);

    if (password !== confirmPassword) {
      setPasswordError("Passwords don't match");
      return;
    }
  }

  return (
    <>
      <Button className="btn-sm">← Back</Button>
      <h1 className="text-center my-4">Reset Password</h1>

      <Form className="w-50 mx-auto my-3">
        <Form.Group className="mb-3" controlId="resetPassword">
          <Form.Label>Enter New Password</Form.Label>
          <Form.Control type="password" placeholder="New password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="confirmNewPassword">
          <Form.Label>Confirm New Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm password" required />
        </Form.Group>

        <Form.Group className="mt-4">
          <Button type="submit" id="reset-btn" className="btn w-100">Update Password</Button>
        </Form.Group>
      </Form>
    </>
  );
}

