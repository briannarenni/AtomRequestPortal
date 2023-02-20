import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function SubmitBtn() {
  return (
    <Form.Group className="mb-2">
      <Button type="submit" className="w-100">Submit</Button>
    </Form.Group>
  )
}
