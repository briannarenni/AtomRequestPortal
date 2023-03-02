import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { SigninIcon, RegisterIcon } from '../components/icon';

export default function Landing() {
  return (
    <div className="container-xs">
      <header>
        <h1 className="display-5 mt-2 text-center">Reimbursement Request Portal</h1>
      </header>
      <main
        id="landing-container"
        className="p-5 d-flex justify-content-center align-content-center">
        <div className="mx-auto">
          <Link to="/login">
            <Button
              size="lg"
              className="landing-btn m-3 p-4">
              <SigninIcon />
              Login Existing Account
            </Button>
          </Link>
          <Link to="/register">
            <Button
              size="lg"
              className="landing-btn m-3 p-4">
              <RegisterIcon />
              Register Employee Account
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
