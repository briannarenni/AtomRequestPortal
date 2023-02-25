import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function SubmitBtn({ btnTxt }) {
  return (
    <Form.Group>
      <Button
        type="submit"
        className="w-100 my-3">
        {btnTxt}
      </Button>
    </Form.Group>
  );
}
