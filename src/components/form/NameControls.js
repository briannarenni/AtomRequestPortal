import React from 'react';
import { Form } from 'react-bootstrap';
import { Field, ErrorMessage } from 'formik';

export function FNameControl({ name, error, touched }) {
  return (
    <Form.Group className="mb-3" controlId="firstName">
      <Form.Label className="fw-light">Employee First Name</Form.Label>
      <Field
        as={ Form.Control }
        type="text"
        name="firstName"
        placeholder="Enter first name"
        isValid={ !error && touched }
        isInvalid={ !!error && touched }
      />

      <ErrorMessage name={ name }
        component={ Form.Control.Feedback }
        type="invalid"
        className="fst-italic" />
    </Form.Group>
  );
}

export function LNameControl({ name, error, touched }) {
  return (
    <Form.Group className="mb-3" controlId="lastName">
      <Form.Label className="fw-light">Employee Last Name</Form.Label>
      <Field
        as={ Form.Control }
        type="text"
        name="lastName"
        placeholder="Enter last name"
        isValid={ !error && touched }
        isInvalid={ !!error && touched }
      />

      <ErrorMessage name={ name }
        component={ Form.Control.Feedback }
        type="invalid"
        className="fst-italic" />
    </Form.Group>
  )
}
