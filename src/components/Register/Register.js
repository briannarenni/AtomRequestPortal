import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Register.css';

function Register() {

  return (

    <Form className="w-50 mx-auto my-3">
      <h1 className="text-center my-4">Register New Employee</h1>
      <Form.Group className="mb-3" controlId="registerEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="registerPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="confirmPassword">
        <Form.Label>Confirm New Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm password" required />
      </Form.Group>

      <Form.Group className="mt-4">
        <Button type="submit" className="w-100">Register</Button>
      </Form.Group>

    </Form>
  );
}

export default Register;
