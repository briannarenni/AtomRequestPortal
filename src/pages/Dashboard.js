import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

import { useAuth } from '../hooks/useAuth';
import { PageHeader, BannerSuccess } from '../components/ui';

export default function Dashboard() {
  const { fullName, isManager } = useAuth();

  const employeeMenu = {
    'Submit New Request': 'submit-request',
    'Pending Requests': 'view-pending',
    'Submission History': 'submissions',
    'Update Password': 'update-password'
  };

  const managerMenu = {
    'Employee Roster': 'employee-roster',
    'Process Pending Requests': 'view-pending/process',
    'Submission Log': 'submissions',
    'Manage Users': 'manage-users',
    'Update Password': 'update-password'
  };

  const menu = isManager ? managerMenu : employeeMenu;

  return (
    <div className="container-xs">
      <header className=" mx-auto">
        <PageHeader title={isManager ? 'Manager Dashboard' : 'Employee Dashboard'} />
        <BannerSuccess content={`Hello, ${fullName}`} />
      </header>

      <main className="mx-4 my-3 px-1 row text-center">
        {Object.entries(menu).map(([text, link]) => (
          <Card
            key={text}
            className="col-sm-5 border-info mx-auto my-2 py-4">
            <Link
              key={link}
              to={link}>
              <Button
                size="lg"
                variant="primary"
                className="mx-auto mt-2 p-3">
                {text}
              </Button>
            </Link>
          </Card>
        ))}
      </main>
    </div>
  );
}
