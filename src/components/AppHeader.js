import React from 'react';
import { Button, Navbar, Nav } from 'react-bootstrap';

export default function AppHeader() {

  return (
    <Navbar expand="lg" className="gap-3 px-3">
      <Navbar.Brand href="#" className="fst-italic fw-bold">
        <img
          src="https://seeklogo.com/images/A/Aaperture_Science__Portal_-logo-84EA44F1CB-seeklogo.com.png"
          alt="logo" height="70" className="me-2" />
        Request Portal
      </Navbar.Brand>

      <Nav className="flex-grow-1 gap-2 mx-1 justify-content-end">
        <Button variant="outline-primary" className="nav-btn">Dashboard</Button>
        <Button variant="outline-primary" className="nav-btn">Account</Button>
        <Button variant="outline-danger" id="logout-btn" className="px-3">Log Out</Button>
      </Nav>
    </Navbar>
  )
}


