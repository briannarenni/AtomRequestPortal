import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function PasswordControl({ value, onChange, error, submitted }) {
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
