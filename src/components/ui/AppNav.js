import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';

import { useAuth, useAuthRoute } from '../../hooks';

import { FAQBtn, LoginBtn, LogoutBtn } from '../btn';
import { ProfileModal } from '../ui/modal';
import logo from '../../assets/logo.svg';

export default function AppNav() {
  const { isLoggedIn, isManager, logout } = useAuth();
  const { baseURL } = useAuthRoute();

  const handleLogout = async (event) => {
    event.preventDefault();
    logout();
  };

  return (
    <Navbar
      expand="md"
      className="d-flex justify-content-between mx-1 mb-1 border-bottom border-bottom-secondary">
      <Navbar.Brand
        href={isLoggedIn ? ` ${baseURL}/dashboard` : `${baseURL}`}
        className="fst-italic fw-bold fs-6">
        <Image
          src={logo}
          alt={'Logo'}
          width={45}
          height={45}
        />
        <span className="logoName">ATOM Studios</span>
      </Navbar.Brand>

      <Nav className="justify-content-end gap-2 mx-1">
        {!isLoggedIn && (
          <>
            <FAQBtn />
            <LoginBtn />
          </>
        )}

        {isLoggedIn && (
          <>
            {!isManager && (
              <>
                <ProfileModal />

                <FAQBtn />

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
