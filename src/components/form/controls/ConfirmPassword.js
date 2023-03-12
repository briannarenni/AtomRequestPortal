import React, { useState } from 'react';
import { Form, FloatingLabel, InputGroup, Button, Image } from 'react-bootstrap';
import { ErrorMessage } from '@hookform/error-message';
import clsx from 'clsx';

import showEye from '../../../assets/icons/show-eye.svg';
import hideEye from '../../../assets/icons/hide-eye.svg';

export function ConfirmPassword(props) {
  const { register, name, errors, formState } = props;
  const hasError = errors && errors[name];
  const isDirty = formState.dirtyFields.hasOwnProperty(name);
  const isValid = !hasError && isDirty;
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Form.Group
        controlId="confirm"
        className="my-2">
        <InputGroup>
          <FloatingLabel
            controlId="floatingPassword"
            label="Confirm Password">
            <Form.Control
              type={showPassword ? 'text' : 'password'}
              name={name}
              placeholder="Confirm password"
              {...register('confirm')}
              isInvalid={hasError}
              isValid={isValid}
              {...props}
              className={clsx({
                'rounded-start': true
              })}
            />
          </FloatingLabel>

          <Button
            variant="none"
            className={clsx('bg-light border-secondary', {
              'border-danger': hasError,
              'rounded-end': true
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

        <div className="small text-danger fst-italic m-1">
          <ErrorMessage
            errors={errors}
            name={name}
          />
        </div>
      </Form.Group>
    </>
  );
}
