import React from 'react';
import { Button } from 'react-bootstrap';

export default function Landing() {

  return (
    <>
      <header>
        <h1 className="text-center">Reimbursement Request Portal</h1>
      </header>

      <main id="landing-container" className="p-5 d-flex justify-content-center align-content-center">
        <div className="mx-auto">
          <Button size="lg" className="landing-btn m-3 p-4">Login to Account</Button>
          <Button size="lg" className="landing-btn m-3 p-4">Register Employee</Button>
        </div>
      </main>
    </>
  )
}
