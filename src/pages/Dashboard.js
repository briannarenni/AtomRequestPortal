import React from 'react';
import { Button, Card } from 'react-bootstrap';
import styles from '../styles/Dashboard.module.css';

export default function Dashboard() {
  const employeeMenu = {
    'New Request': 'Submit a new reimbursement request',
    'Check Inbox': 'Manage your messages',
    'Submission History': 'See all submitted requests',
    'Account Information': 'View or update account details',
  };

  const managerMenu = {
    'Process Requests': 'View all pending requests',
    'Check Inbox': 'Manage employee messages',
    'Request Log': 'See all submitted requests',
    'Manage Roles': 'Update employee roles',
    'Add New Employee': 'Register a new employee account',
    'Account Information': 'View or update account details',
  };

  const isManager = true;
  const menu = isManager ? managerMenu : employeeMenu;

  return (
    <>
      <h1 className="text-center my-1">{ isManager ? 'Manager Dashboard' : 'Employee Dashboard' }</h1>
      <p className="text-center fst-italic my-3">Welcome, (username)</p>
      <div className="${styles.cardContainer} mx-4 px-2 row text-center">
        { Object.entries(menu).map(([btnText, desc]) => (
          <Card key={ btnText } className="col-sm-5 mx-auto my-3 px-3 py-4" >
            <Card.Body>
              <Card.Text className="lead">{ desc }</Card.Text>
              <Button variant="primary" className="mx-auto mt-2">{ btnText }</Button>
            </Card.Body>
          </Card>
        )) }
      </div>
    </>
  )
}


