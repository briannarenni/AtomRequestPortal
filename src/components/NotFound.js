import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="mx-auto text-center w-50">
      <h1 className="mb-2">404: Page Not Found</h1>
      <p className="fs-4 fst-italic mb-2">Whoops, this page doesn't seem to exist!</p>
      {/* <Link to="/dashboard">
        <Button size="lg" variant="warning" className="mx-auto my-4">Back to Dashboard</Button>
      </Link> */}
    </div>
  )
}

