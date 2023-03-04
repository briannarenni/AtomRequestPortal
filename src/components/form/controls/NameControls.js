import React from 'react';
import { Form } from 'react-bootstrap';
import { ErrorMessage } from '@hookform/error-message';

export function FirstName(props) {
  const { register, name, errors, formState } = props;
  const hasError = errors && errors[name];
  const isDirty = formState.dirtyFields.hasOwnProperty(name);
  const isValid = !hasError && isDirty;

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
        isValid={isValid}
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

export function LastName(props) {
  const { register, name, errors, formState } = props;
  const hasError = errors && errors[name];
  const isDirty = formState.dirtyFields.hasOwnProperty(name);
  const isValid = !hasError && isDirty;

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
        isValid={isValid}
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
