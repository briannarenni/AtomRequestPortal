import React from 'react';
import { Form, Button } from 'react-bootstrap';

import { Loading } from "../../ui";


export default function FormSubmitBtn({ btnTxt, isLoading }) {
  return (
    <Form.Group>
      <Button
        type="submit"
        className="w-100 my-3"
        disabled={isLoading}>
        {isLoading ? (
          <Loading
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
