import React, { useState } from 'react';
import { Field, ErrorMessage } from 'formik';
import { Form, InputGroup, Button, Image } from 'react-bootstrap';
import clsx from 'clsx';

import showEye from '../../assets/icons/show-eye.svg';
import hideEye from '../../assets/icons/hide-eye.svg';

export default function ConfirmPasswordControl({ name, error, touched }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Form.Group
      className="mb-3"
      controlId="password">
      <Form.Label className="fw-light">Confirm Password</Form.Label>
      <InputGroup>
        <Field
          as={Form.Control}
          type={showPassword ? 'text' : 'password'}
          name="confirm"
          placeholder="Confirm password"
          className={clsx({
            'is-valid': !error && touched,
            'is-invalid': error && touched,
            'rounded-start': true,
          })}
        />

        <Button
          variant="none"
          className={clsx('bg-light border', {
            'border-danger': !!error && touched,
            'border-success': !error && touched,
            'rounded-end': true,
          })}
          onClick={() => setShowPassword(!showPassword)}
          aria-label={showPassword ? 'Hide password' : 'Show password'}>
          <Image
            src={showPassword ? showEye : hideEye}
            alt={!showPassword ? 'Show password' : 'Hide password'}
          />
        </Button>

        <ErrorMessage
          name={name}
          component={Form.Control.Feedback}
          type="invalid"
          className="fst-italic"
        />
      </InputGroup>
    </Form.Group>
  );
}
