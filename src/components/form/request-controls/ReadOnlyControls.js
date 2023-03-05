import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

import { useAuth } from '../../../hooks';

export default function ReadOnlyControls(props) {
  const { register } = props;
  const { currUser } = useAuth();

  return (
    <div>
      <Row>
        <Col sm={6}>
          <Form.Group controlId="employeeName">
            <Form.Label className="fw-light">Employee Name</Form.Label>
            <Form.Control
              disabled
              readOnly
              defaultValue={currUser.fullName}
              {...register('employeeName')}
            />
          </Form.Group>
        </Col>

        <Col sm={6}>
          <Form.Group controlId="userId">
            <Form.Label className="fw-light">Employee ID</Form.Label>
            <Form.Control
              disabled
              readOnly
              defaultValue={currUser.userId}
              {...register('userId')}
            />
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
}
