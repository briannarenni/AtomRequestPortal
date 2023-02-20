import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function UsernameControl({ value, onChange, error, submitted }) {
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
