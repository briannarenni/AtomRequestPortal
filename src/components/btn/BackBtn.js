import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { BackIcon } from '../icon';

export default function BackBtn() {
  const location = useLocation();
  const path = location.pathname;

  if (path === '/' || path === '/dashboard') {
    return null;
  }

  return (
    <Link to={-1}>
      <Button
        size="md"
        variant="back"
        className="mx-2 my-1 px-3 py-1">
        <BackIcon />
        <div className="d-inline-block fs-5">BACK</div>
      </Button>
    </Link>
  );
}
