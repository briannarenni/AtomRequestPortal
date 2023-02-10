import React from 'react';
import { Button, Navbar, Nav } from 'react-bootstrap';
import styles from '../styles/Navbar.module.css';

export default function AppHeader() {

  return (
    <Navbar expand="md" className="d-flex justify-content-between mx-3 mb-3 border-bottom border-bottom--secondary">
      <Navbar.Brand href="/" className="fst-italic fw-bold">
        <img
          src="https://seeklogo.com/images/A/Aaperture_Science__Portal_-logo-84EA44F1CB-seeklogo.com.png"
          alt="logo" height="70" className="me-2" />
        Request Portal
      </Navbar.Brand>
      <Nav className="${styles.navContainer} justify-content-end gap-2 mx-1">
        <Button variant="outline-primary" className={ styles.navBtn }>Dashboard</Button>
        <Button variant="outline-primary" className={ styles.navBtn }>Account</Button>
        <Button variant="outline-danger" className={ styles.logoutBtn }>Log Out</Button>
      </Nav>
    </Navbar>
  )
}


