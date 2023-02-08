import React from 'react';
import { Button } from 'react-bootstrap';

function Landing() {

  return (
    <>
      <header className="my-5">
        <h1 className="text-center">Reimbursement Request Portal</h1>
      </header>

      <main id="landing-container" className="p-5 d-flex justify-content-center align-content-center">
        <div className="mx-auto">
          <Button size="lg" className="landing-btn mx-3">Login to Account</Button>
          <Button size="lg" className="landing-btn mx-3">Register Employee</Button>
        </div>
      </main>
    </>
  )
}
export default Landing;
