import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { SigninIcon, RegisterIcon } from '../components/btn/icon';

export default function Landing() {
  return (
    <div className="container-xs">
      <header>
        <h1 className="display-5 mt-2 text-center">ATOM Studios Request Portal</h1>
        <p className="lead mt-2 text-center">Request reimbursement for expenses from job assignments</p>
      </header>
      <main
        id="landing-container"
        className="p-5 d-flex justify-content-center align-content-center">
        <div className="mx-auto">
          <Link to={`/AtomRequestPortal/login`}>
            <Button
              size="lg"
              className="landing-btn m-2 p-4">
              <SigninIcon />
              Login - Existing Accounts
            </Button>
          </Link>
          <Link to={`/AtomRequestPortal/register`}>
            <Button
              size="lg"
              className="landing-btn m-2 p-4">
              <RegisterIcon />
              Register - New Employees
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
