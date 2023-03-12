import React from 'react';
import { Form, Button } from 'react-bootstrap';

import { LoadingComp } from '../../ux';
import { CheckIcon } from '../../btn/icon';

export function SubmitBtn({ btnTxt, isLoading }) {
  return (
    <Form.Group className="w-75 mx-auto">
      <Button
        type="submit"
        className="w-100 mt-3"
        disabled={isLoading}>
        {isLoading ? (
          <LoadingComp
            animation="border"
            size="sm"
            className="me-2"
          />
        ) : (
          btnTxt
        )}
      </Button>
    </Form.Group>
  );
}
