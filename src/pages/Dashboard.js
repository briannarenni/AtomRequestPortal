import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../assets/styles/Banner.module.css';
import { Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../hooks/useAuth';
import { PageHeader } from '../components/ui';
import { MessageIcon } from '../components/icon';

export default function Dashboard() {
  const { isLoggedIn, currUser, isManager } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const employeeMenu = {
    'Submit Request': 'New Reimbursement Request',
    'Check Pending': 'See Pending Requests',
    'Request History': 'See Completed Requests',
    'User Details': 'See User Profile Details',
  };

  const managerMenu = {
    'Pending Requests': 'Process Pending Requests',
    'Request Log': 'See Full Request History',
    'Manage Roles': 'Update Employee Roles',
    'See Employee Roster': 'See All Employees',
    'Add New Employee': 'Register Employee Account',
    'User Details': 'See User Profile Details',
  };

  const menu = isManager ? managerMenu : employeeMenu;

  return (
    <div className='container-sm'>

      <PageHeader title={ isManager ? 'Manager Dashboard' : 'Employee Dashboard' } />

      <Alert variant="none" className={ styles.bannerSuccess }>
        <MessageIcon />
        <span className="mx-1">Hello, { currUser.firstName } { currUser.lastName }</span>
      </Alert>

      <div className="mx-4 my-2 px-1 row text-center">
        { Object.entries(menu).map(([btnText, desc]) => (
          <Card key={ btnText } className="col-sm-5 mx-auto my-2 px-3 py-4" >
            <Button size="lg"
              variant="primary"
              className="mx-auto mt-2 p-3">
              { btnText }
            </Button>
            <Card.Text className="lead mt-4 mb-2">{ desc }</Card.Text>
          </Card>
        )) }
      </div>
    </div>
  )
}


