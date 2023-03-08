import React, { useState, useEffect } from 'react';

import { useUserAPI } from '../../hooks';
import { User } from '../../_data';
import { BannerError, LoadingComp } from '../../components/ux';
import { PageHeader } from '../../components/ui';
import { EmployeeTable } from '../../components/ui/tables';

export default function EmployeeRoster() {
  const { isLoading, getEmployees } = useUserAPI();
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  async function fetchEmployees() {
    const fetchedEmployees = await getEmployees();
    console.log(fetchedEmployees);

    const employees = fetchedEmployees.map(
      (emp) =>
        (emp = new User(
          emp.userId,
          emp.username,
          emp.firstName,
          emp.lastName,
          emp.role,
          emp.dept,
          emp.numPending,
          emp.numTickets
        ))
    );
    setEmployees(employees);
  }

  return (
    <div className="container-xs">
      <header className="mx-auto">
        <PageHeader title={'Current Employee Roster '} />
      </header>

      <main>
        {isLoading && <LoadingComp />}
        {!isLoading && employees.length === 0 ? (
          <div className="mt-3">
            <BannerError content={`No employees found`} />
          </div>
        ) : (
          <>
            <EmployeeTable employees={employees} />
          </>
        )}
      </main>
    </div>
  );
}
