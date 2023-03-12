import React from 'react';
import { Form, FloatingLabel } from 'react-bootstrap';
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
      <FloatingLabel
        controlId="floatingInput"
        label="First Name"
        className="mb-1">
        <Form.Control
          type="text"
          name={name}
          placeholder=""
          {...register('firstName')}
          isInvalid={hasError}
          isValid={isValid}
          {...props}
        />
      </FloatingLabel>

      <div className="small text-danger fst-italic">
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
      <FloatingLabel
        controlId="floatingInput"
        label="Last Name"
        className="mb-1">
        <Form.Control
          type="text"
          name={name}
          placeholder=""
          {...register('lastName')}
          isInvalid={hasError}
          isValid={isValid}
          {...props}
        />
      </FloatingLabel>

      <div className="small text-danger fst-italic m-1">
        <ErrorMessage
          errors={errors}
          name={name}
        />
      </div>
    </Form.Group>
  );
}
