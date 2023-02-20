import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { Form } from 'react-bootstrap';

export default function PasswordControl({ name, error, touched }) {
  return (
    <Form.Group className="mb-3" controlId="password">
      <Form.Label>Password</Form.Label>
      <Field
        as={ Form.Control }
        type="password"
        name={ name }
        placeholder="Enter password"
        isValid={ !error && touched }
        isInvalid={ !!error && touched }
      />
      <ErrorMessage name={ name } component={ Form.Control.Feedback } type="invalid" />
    </Form.Group>
  )
}
