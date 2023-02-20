import React from 'react';
import { Form } from 'react-bootstrap';
import { Field, ErrorMessage } from 'formik';

export default function UsernameControl({ name, error, touched }) {
  return (
    <Form.Group className="mb-3" controlId="username">
      <Form.Label>Username</Form.Label>
      <Field
        as={ Form.Control }
        type="text"
        name={ name }
        placeholder="Enter username"
        isValid={ !error && touched }
        isInvalid={ !!error && touched }
      />
      <ErrorMessage name={ name } component={ Form.Control.Feedback } type="invalid" />
    </Form.Group>
  );
}
