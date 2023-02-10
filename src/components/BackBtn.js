import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function BackBtn() {

  return (
    <Link to={ -1 }>
      <Button size="sm" variant="outline-primary" className="mx-4 my-0">← Back</Button>
    </Link>
  )
}
