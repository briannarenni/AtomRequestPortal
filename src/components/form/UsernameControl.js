import React from 'react';
import { Form } from 'react-bootstrap';
import { ErrorMessage } from '@hookform/error-message';

export default function UsernameControl(props) {
  const { register, name, errors, formState } = props;

  const hasError = errors && errors[name];
  const isDirty = formState.dirtyFields.hasOwnProperty(name);
  const isValid = !hasError && isDirty;

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
    </>
  );
}
