import React, { useState, useEffect } from 'react';
import { Table, Form } from 'react-bootstrap';

import { UserSortDrop } from '../../ui/tables';

export default function EmployeeTable({ employees }) {
  const [empArr, setEmpArr] = useState([]);
  const [sortValue, setSortValue] = useState('dept');

  useEffect(() => {
    setEmpArr(employees.slice());
  }, [employees]);

  useEffect(() => {
    console.log('emp arr changed');
  }, [empArr]);

  const sortUsers = (usersArr, sortValue) => {
    let sortedUsers = usersArr.slice();
    // eslint-disable-next-line
    sortedUsers.sort((a, b) => {
      if (sortValue === 'dept') {
        return a.dept.localeCompare(b.dept);
      } else if (sortValue === 'fullName') {
        return a.fullName.localeCompare(b.fullName);
      }
    });
    return sortedUsers;
  };

  const handleSortChange = (value) => {
    setSortValue(value);
    const sortedUsers = sortUsers(empArr, value);
    setEmpArr(sortedUsers);
  };

  return (
    <>
      <div className="d-flex justify-content-end gap-2">
        <div className="d-flex flex-column">
          <Form.Label className="fw-light">Sort Users</Form.Label>
          <UserSortDrop handleSortChange={handleSortChange} />
        </div>
      </div>

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
          {empArr.map((emp) => (
            <tr key={emp.userId}>
              <td>{emp.dept}</td>
              <td>{emp.fullName}</td>
              <td>{emp.userId}</td>
              <td>{emp.totalTickets}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}