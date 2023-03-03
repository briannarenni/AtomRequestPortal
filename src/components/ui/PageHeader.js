import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { BackBtn } from '../../components/btn/';

export default function PageHeader({ title }) {
  return (
    <Row className="align-items-center">
      <Col
        xs={2}
        className="pe-0">
        <BackBtn />
      </Col>
      <Col
        xs={8}
        className="text-center px-0">
        <div>
          <h1 className="display-6 mb-2">{title}</h1>
        </div>
      </Col>
    </Row>
  );
}
