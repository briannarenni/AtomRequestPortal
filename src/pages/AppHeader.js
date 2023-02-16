import React from 'react';
import styles from '../styles/Navbar.module.css';
import { Button, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';

export default function AppHeader() {
  const { isLoggedIn, isManager, logout } = useAuth();

  const handleLogout = async (event) => {
    event.preventDefault();
    logout();
  }

  return (
    <Navbar expand="md" className="d-flex justify-content-between mx-1 mb-2 border-bottom border-bottom-secondary">
      <Navbar.Brand href="/dashboard" className="fst-italic fw-bold fs-6">
        <img
          src="https://seeklogo.com/images/A/Aaperture_Science__Portal_-logo-84EA44F1CB-seeklogo.com.png"
          alt="logo" height="60" className="me-2" />
        <span className={ styles.logoName }>Request Portal</span>
      </Navbar.Brand>

      {/*  eslint-disable-next-line */ }
      <Nav className="${styles.navContainer} justify-content-end gap-2 mx-1">
        { !isLoggedIn && (
          <Link to="/faq">
            <Button variant="outline-primary" className={ styles.navBtn }>FAQ</Button>
          </Link>
        ) }
        { isLoggedIn && (
          <>
            { !isManager && (
              <>
                <Link to="/faq">
                  <Button variant="outline-primary" className={ styles.navBtn }>FAQ</Button>
                </Link>
                <Link to="/account">
                  <Button variant="outline-primary" className={ styles.navBtn }>Profile</Button>
                </Link>
                <Link to="/">
                  <Button variant="outline-danger" onClick={ handleLogout } className={ styles.logoutBtn }>Logout</Button>
                </Link>
              </>
            ) }
            { isManager && (
              <Link to="/">
                <Button variant="outline-danger" onClick={ handleLogout } className={ styles.logoutBtn }>Logout</Button>
              </Link>
            ) }
          </>
        ) }
        {/*
        <Link to="/faq">
          <Button variant="outline-primary" className={ styles.navBtn }>FAQ</Button>
        </Link>
        { isLoggedIn && (
          <>
            <Link to="/account">
              <Button variant="outline-primary" className={ styles.navBtn }>Profile</Button>
            </Link>

            <Link to="/">
              <Button variant="outline-danger" onClick={ handleLogout } className={ styles.logoutBtn }>Logout</Button>
            </Link>
          </>
        ) } */}
      </Nav>
    </Navbar>
  )
}
