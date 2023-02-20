import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

export default function BackBtn() {
  const location = useLocation();
  const path = location.pathname;

  if (path === '/' || path === '/dashboard') {
    return null;
  }

  return (
    <Link to={ -1 }>
      <Button size="sm" variant="outline-primary" className="mx-4 my-1 px-2 py-1">← Back</Button>
    </Link>
  )
}
