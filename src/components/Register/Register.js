import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Register.css';

function Register() {

  return (

    <Form className="w-50 mx-auto my-3">
      <h1 className="text-center my-3">Register New Employee</h1>
      <p className="mx-auto text-center mt-2">HR Note: New usernames may contain numbers, but no spaces or special chars. (ex. BrianSmith, BSmith, BSmith12) </p>
      <Form.Group className="mb-3" controlId="registerUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="email" placeholder="Enter employee username" required />
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
