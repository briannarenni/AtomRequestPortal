import React, { useState, useEffect } from 'react';
import { FormControl, FormLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Login/Login.css';

function Login() {

  return (

    <Form className="w-50 mx-auto my-3">
      <h1 className="text-center">User Login</h1>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rememberCheck">
        <Form.Check label="Remember me" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Button type="submit">Sign in</Button>
      </Form.Group>

      <div>
        <a href="#">Forgot Password?</a>
      </div>
    </Form>
  );
}

export default Login;
