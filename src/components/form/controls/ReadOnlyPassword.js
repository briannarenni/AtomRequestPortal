import React, { useState } from 'react';
import { Form, InputGroup, Button, Image } from 'react-bootstrap';

import showEye from '../../../assets/icons/show-eye.svg';
import hideEye from '../../../assets/icons/hide-eye.svg';

export default function ReadOnlyPassword(props) {
  const { name, currPass } = props;
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Form.Group controlId="currPass">
      <Form.Label className="fw-light">Current Password</Form.Label>
      <InputGroup>
        <Form.Control
          name={name}
          disabled
          readOnly
          defaultValue={showPassword ? currPass : '*'.repeat(currPass.length)}
        />
        <Button
          variant="none"
          className="rounded-end border-secondary"
          onClick={() => setShowPassword(!showPassword)}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
          tabIndex={'-1'}>
          <Image
            src={showPassword ? showEye : hideEye}
            alt={!showPassword ? 'Show password' : 'Hide password'}
          />
        </Button>
      </InputGroup>
    </Form.Group>
  );
}
