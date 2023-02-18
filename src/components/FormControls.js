import React from 'react';
import { Form } from 'react-bootstrap';

export function UsernameControl({ value, onChange, error, submitted }) {
  return (
    <Form.Group className="mb-3" controlId="username">
      <Form.Label>Username</Form.Label>
      <Form.Control
        type="text"
        name="username"
        placeholder="Enter username"
        required
        isValid={ (value.trim() && submitted && !error) }
        isInvalid={ (!value.trim() && submitted) || (error) }
        onChange={ onChange }
      />
      <Form.Control.Feedback type="invalid">
        { error || "Username cannot be blank" }
      </Form.Control.Feedback>
    </Form.Group>
  );
}

export function PasswordControl({ value, onChange, error, submitted }) {
  return (
    <Form.Group className="mb-3" controlId="password">
      <Form.Label>Password</Form.Label>
      <Form.Control
        type="password"
        placeholder="Enter password"
        required
        isValid={ (value.trim() && submitted && !error) }
        isInvalid={ (!value.trim() && submitted) || (error) }
        onChange={ onChange }
      />
      <Form.Control.Feedback type="invalid">
        { error || "Password cannot be blank" }
      </Form.Control.Feedback>
    </Form.Group>
  );
}

export function ConfirmPasswordControl({ value, onChange, error, submitted }) {
  return (
    <Form.Group className="mb-3" controlId="confirmedPassword">
      <Form.Label>Confirm New Password</Form.Label>
      <Form.Control
        type="password"
        placeholder="Confirm password"
        required
        isValid={ (value.trim() && submitted && !error) }
        isInvalid={ (!value.trim() && submitted) || (error) }
        onChange={ onChange }
      />
      <Form.Control.Feedback type="invalid">
        { error || "Password cannot be blank" }
      </Form.Control.Feedback>
    </Form.Group>
  );
}
