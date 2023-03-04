import React, { useState } from 'react';
import { Form, InputGroup, Button, Image } from 'react-bootstrap';
import { ErrorMessage } from '@hookform/error-message';
import clsx from 'clsx';

import showEye from '../../../assets/icons/show-eye.svg';
import hideEye from '../../../assets/icons/hide-eye.svg';

export default function PasswordControl(props) {
  const { register, name, errors, formState} = props;
  const hasError = errors && errors[name];
  const isDirty = formState.dirtyFields.hasOwnProperty(name);
  const isValid = !hasError && isDirty;
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Form.Group
        controlId="password"
        className="my-2">
        <Form.Label className="fw-light">Password</Form.Label>
        <InputGroup>
          <Form.Control
            type={showPassword ? 'text' : 'password'}
            name={name}
            placeholder="Enter password"
            {...register('password')}
            isInvalid={hasError}
            isValid={isValid}
            {...props}
            className={clsx({
              'rounded-start': true,
            })}
          />

          <Button
            variant="none"
            className={clsx('bg-light border', {
              'border-danger': hasError,
              'border-success': !hasError,
              'rounded-end': true,
            })}
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            tabIndex={'-1'}>
            <Image
              src={showPassword ? showEye : hideEye}
              alt={!showPassword ? 'Show password' : 'Hide password'}
            />
          </Button>
        </InputGroup>

        <div className=" small fst-italic my-1">
          <ErrorMessage
            errors={errors}
            name={name}
          />
        </div>
      </Form.Group>
    </>
  );
}
