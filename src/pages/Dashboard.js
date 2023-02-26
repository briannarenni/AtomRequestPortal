import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Card, Alert } from 'react-bootstrap';

import { useAuth } from '../hooks/useAuth';
import { PageHeader, BannerSuccess } from '../components/ui';

export default function Dashboard() {
  const navigate = useNavigate();
  const { isLoggedIn, currUser, isManager } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const employeeMenu = {
    'Submit Request': 'New Reimbursement Request',
    'Check Pending': 'See Pending Requests',
    'Request History': 'See Completed Requests',
    'User Details': 'Show Account Details',
  };

  const managerMenu = {
    'Pending Requests': 'Process Pending Requests',
    'Request Log': 'See Full Request History',
    'Manage Roles': 'Update Employee Roles',
    'See Employee Roster': 'See All Employees',
    'Add New Employee': 'Register Employee Account',
    'User Details': 'Show Account Details',
  };

  const menu = isManager ? managerMenu : employeeMenu;

  return (
    <div className="container-xs">
      <header className=" mx-auto">
        <PageHeader title={isManager ? 'Manager Dashboard' : 'Employee Dashboard'} />
        <BannerSuccess content={`Hello, ${currUser.firstName} ${currUser.lastName}`} />
      </header>

      <main className="mx-4 my-2 px-1 row text-center">
        {Object.entries(menu).map(([btnText, btnCaption]) => (
          <Card
            key={btnText}
            className="col-sm-5 mx-auto my-2 px-3 py-4">
            <Button
              size="lg"
              variant="primary"
              className="mx-auto mt-2 p-3">
              {btnText}
            </Button>
            <Card.Text className="lead mt-4 mb-2">{btnCaption}</Card.Text>
          </Card>
        ))}
      </main>
    </div>
  );
}
