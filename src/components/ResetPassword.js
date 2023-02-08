import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

function ResetPassword() {

  return (
    <>
      <Button className="btn-sm">← Back</Button>
      <h1 className="text-center my-4">Reset Password</h1>

      <Form className="w-50 mx-auto my-3">
        <Form.Group className="mb-3" controlId="resetPassword">
          <Form.Label>Enter New Password</Form.Label>
          <Form.Control type="password" placeholder="New password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="confirmNewPassword">
          <Form.Label>Confirm New Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm password" required />
        </Form.Group>

        <Form.Group className="mt-4">
          <Button type="submit" id="reset-btn" className="btn w-100">Reset</Button>
        </Form.Group>
      </Form>
    </>
  );
}

export default ResetPassword;
