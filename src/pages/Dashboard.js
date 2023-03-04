import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

import { useAuth } from '../hooks/useAuth';
import { PageHeader, BannerSuccess } from '../components/ui';

export default function Dashboard() {
  const { currUser, isManager } = useAuth();

  const employeeMenu = [
    {
      title: 'Submit a new reimbursement request',
      btnText: 'Submit New Request',
      link: 'submit-request'
    },
    {
      title: 'See your pending requests',
      btnText: 'Pending Requests',
      link: `view-pending/${currUser.userId}`
    },
    {
      title: 'See a log of your submissions',
      btnText: 'Submission History',
      link: `submissions/${currUser.userId}`
    },
    {
      title: 'Update your account password',
      btnText: 'Update Password',
      link: 'update-password'
    }
  ];

  const managerMenu = [
    {
      title: 'See current employee roster',
      btnText: 'Employee Roster',
      link: 'employee-roster'
    },
    {
      title: 'Process current pending requests',
      btnText: 'Process Requests',
      link: 'view-pending/process'
    },
    {
      title: 'View complete submission log',
      btnText: 'Submission Log',
      link: 'submissions'
    },
    {
      title: 'Manage all registered users',
      btnText: 'Manage Users',
      link: 'manage-users'
    },
    {
      title: 'Update your account password',
      btnText: 'Update Password',
      link: 'update-password'
    }
  ];

  const menu = isManager ? managerMenu : employeeMenu;

  return (
    <div className="container-xs">
      <header className="mx-auto">
        <PageHeader title={isManager ? 'Manager Dashboard' : 'Employee Dashboard'} />
        <BannerSuccess content={`Hello, ${currUser.fullName}`} />
      </header>

      <main className="mx-4 my-3 px-1 row text-center">
        {menu.map(({ title, btnText, link }) => (
          <Card
            key={btnText}
            className="col-sm-5 border-0 mx-auto my-2 py-4">
            <Card.Title className="fw-normal">{title}</Card.Title>
            <Link
              key={link}
              to={link}>
              <Button
                size="lg"
                variant="primary"
                className="mx-auto mt-2 p-3">
                {btnText}
              </Button>
            </Link>
          </Card>
        ))}
      </main>
    </div>
  );
}
