import React from 'react';
import { Table } from 'react-bootstrap';

export default function UserTable({ users }) {
  return (
    <Table
      className="w-75 mx-auto mt-4"
      responsive
      striped
      bordered
      hover>
      <thead>
        <tr>
          <th>Role</th>
          <th>Employee Name</th>
          <th>Employee ID</th>
          <th>Dept</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.userId}>
            <td>{user.role}</td>
            <td>{user.fullName}</td>
            <td>{user.userId}</td>
            <td>{user.dept}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
