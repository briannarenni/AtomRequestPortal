import React from 'react';
import { Table } from 'react-bootstrap';

export default function EmployeeTable({ employees }) {
  return (
    <Table
      className="w-75 mx-auto mt-4"
      responsive
      striped
      bordered
      hover>
      <thead>
        <tr>
          <th>Dept</th>
          <th>Employee Name</th>
          <th>Employee ID</th>
          <th>Submissions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp) => (
          <tr key={emp.userId}>
            <td>{emp.dept}</td>
            <td>{emp.fullName}</td>
            <td>{emp.userId}</td>
            <td>{emp.totalTickets}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
