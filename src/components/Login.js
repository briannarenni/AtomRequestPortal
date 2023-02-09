import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function Login() {

  return (
    <>
      <Button className="btn-sm">← Back</Button>
      <h1 className="text-center my-4">Login</h1>

      <Form className="w-50 mx-auto my-3">
        <Form.Group className="mb-3" controlId="loginUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="loginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="rememberCheck">
          <Form.Check type="switch" label="Remember Me" />
        </Form.Group>

        <Form.Group className="mb-2">
          <Button type="submit" className="w-100">Sign In</Button>
        </Form.Group>

        <p className="text-center form-note">For forgotten passwords, please speak to HR.</p>
      </Form>
    </>
  );
}
