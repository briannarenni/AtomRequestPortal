import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { BackIcon } from './icon';

export default function BackBtn() {
  const location = useLocation();
  const path = location.pathname;

  if (path === '/AtomRequestPortal/' || path === '/AtomRequestPortal/dashboard') {
    return null;
  }

  return (
    <Link to={-1}>
      <Button
        variant="back"
        className="mx-1 px-2 py-2">
        <BackIcon />
        <p className="d-inline-block fs-5 mb-0">BACK</p>
      </Button>
    </Link>
  );
}
