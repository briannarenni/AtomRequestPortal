import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';

import { useAuth } from '../../hooks/useAuth';
import { FAQBtn, ProfileBtn, LogoutBtn } from '../btn';
import logo from '../../assets/logo.svg';

export default function AppHeader() {
  const { isLoggedIn, isManager, logout } = useAuth();

  const handleLogout = async (event) => {
    event.preventDefault();
    logout();
  };

  return (
    <Navbar
      expand="md"
      className="d-flex justify-content-between mx-1 mb-1 border-bottom border-bottom-secondary">
      <Navbar.Brand
        href="/dashboard"
        className="fst-italic fw-bold fs-6">
        <Image
          src={logo}
          alt={'Logo'}
          width={45}
          height={45}
        />
        <span className="logoName">AtomPortal</span>
      </Navbar.Brand>

      {/*  eslint-disable-next-line */}
      <Nav className="justify-content-end gap-2 mx-1">
        {!isLoggedIn && <FAQBtn />}

        {isLoggedIn && (
          <>
            {!isManager && (
              <>
                <FAQBtn />

                <ProfileBtn />
                <LogoutBtn handler={handleLogout} />
              </>
            )}
            {isManager && <LogoutBtn handler={handleLogout} />}
          </>
        )}
      </Nav>
    </Navbar>
  );
}
