import React from 'react';
import { Form } from 'react-bootstrap';
import { ErrorMessage } from '@hookform/error-message';

export default function UsernameControl({ register, name, errors, ...props }) {
  const hasError = errors && errors[name];

  return (
    <>
      <Form.Group
        controlId={name}
        className="my-2">
        <Form.Label className="fw-light">Username</Form.Label>
        <Form.Control
          type="text"
          name={name}
          placeholder="Enter username"
          {...register('username')}
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
    </>
  );
}
