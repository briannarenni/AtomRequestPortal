import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

import { useAuth } from '../hooks/useAuth';
import { PageHeader, BannerSuccess } from '../components/ui';

export default function Dashboard() {
  const navigate = useNavigate();
  const { isLoggedIn, fullName, isManager } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const employeeMenu = {
    'Submit New Request': '/submit-request',
    'Check Pending Requests': '/pending-requests',
    'View All Submissions': '/submissions',
    'Update Password': '/update-password'
  };

  const managerMenu = {
    'Process Pending Requests': '/pending-requests',
    'View Full Request History': '/all-requests',
    'Manage Roles': '/user-roles',
    'See Employee Roster': '/employees',
    'Update Password': '/update-password'
  };

  const menu = isManager ? managerMenu : employeeMenu;

  return (
    <div className="container-xs">
      <header className=" mx-auto">
        <PageHeader title={isManager ? 'Manager Dashboard' : 'Employee Dashboard'} />
        <BannerSuccess content={`Hello, ${fullName}`} />
      </header>

      <main className="mx-4 my-2 px-1 row text-center">
        {Object.entries(menu).map(([btnText, pageURL]) => (
          <Card
            key={btnText}
            className="col-sm-5 mx-auto my-2 px-3 py-4">
            <Link to={pageURL}>
              <Button
                size="lg"
                variant="primary"
                className="mx-auto mt-2 p-3">
                {btnText}
              </Button>
            </Link>{' '}
            {/* <Card.Text className="lead mt-4 mb-2">{btnCaption}</Card.Text> */}
          </Card>
        ))}
      </main>
    </div>
  );
}
