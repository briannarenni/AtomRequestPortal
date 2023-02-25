import React from 'react';
import { Form } from 'react-bootstrap';
import { ErrorMessage } from '@hookform/error-message';

export function FirstName({ register, name, errors, ...props }) {
  const hasError = errors && errors[name];

  return (
    <Form.Group
      controlId={name}
      className="my-2">
      <Form.Label className="fw-light">First Name</Form.Label>
      <Form.Control
        type="text"
        name={name}
        placeholder="Enter first name"
        {...register('firstName')}
        isInvalid={hasError}
        {...props}
      />

      <div className="small fst-italic my-1">
        <ErrorMessage
          errors={errors}
          name={name}
        />
      </div>
    </Form.Group>
  );
}

export function LastName({ register, name, errors, ...props }) {
  const hasError = errors && errors[name];

  return (
    <Form.Group
      controlId={name}
      className="my-2">
      <Form.Label className="fw-light">Last Name</Form.Label>
      <Form.Control
        type="text"
        name={name}
        placeholder="Enter last name"
        {...register('lastName')}
        isInvalid={hasError}
        {...props}
      />

      <div className="small fst-italic my-1">
        <ErrorMessage
          errors={errors}
          name={name}
        />
      </div>
    </Form.Group>
  );
}
