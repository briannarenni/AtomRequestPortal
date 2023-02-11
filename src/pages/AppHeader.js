import React from 'react';
import { Button, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import styles from '../styles/Navbar.module.css';

export default function AppHeader({ isLoggedIn }) {

  return (
    <Navbar expand="md" className="d-flex justify-content-between mx-1 mb-2 border-bottom border-bottom-secondary">
      <Navbar.Brand href="/dashboard" className="fst-italic fw-bold fs-6">
        <img
          src="https://seeklogo.com/images/A/Aaperture_Science__Portal_-logo-84EA44F1CB-seeklogo.com.png"
          alt="logo" height="60" className="me-2" />
        <span className={ styles.logoName }>Request Portal</span>
      </Navbar.Brand>

      <Nav className="${styles.navContainer} justify-content-end gap-2 mx-1">
        <Link to="/faq">
          <Button variant="outline-primary" className={ styles.navBtn }>FAQ</Button>
        </Link>

        { isLoggedIn && (
          <>
            <Link to="/account">
              <Button variant="outline-primary" className={ styles.navBtn }>Profile</Button>
            </Link>

            <Link to="/">
              <Button variant="outline-danger" className={ styles.logoutBtn }>Logout</Button>
            </Link>
          </>
        ) }
      </Nav>
    </Navbar>
  )
}


