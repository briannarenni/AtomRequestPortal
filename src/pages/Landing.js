import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { LoginIcon, RegisterIcon } from '../components/icon';
import LogoutIcon from "../components/icon/LogoutIcon";

export default function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('isLoggedIn'))) {
      navigate('/dashboard');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (

    <div className="container-sm">
      <header>
        <h1 className="text-center">Reimbursement Request Portal</h1>
      </header>
      <main id="landing-container" className="p-5 d-flex justify-content-center align-content-center">
        <div className="mx-auto">
          <Link to="/login">
            <Button size="lg" className="landing-btn m-3 p-4">
              <LogoutIcon />
              Login to Account
            </Button>
          </Link>
          <Link to="/register">
            <Button size="lg" className="landing-btn m-3 p-4">
              <RegisterIcon />
              Register Employee
            </Button>
          </Link>
        </div>
      </main>
    </div>

  )
}
