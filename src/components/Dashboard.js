import React from 'react';
import { Button, Card } from 'react-bootstrap';

export default function Dashboard() {

  const employeeMenu = {
    'New Request': 'Submit a new reimbursement request',
    'View Request History': 'View all of your submitted requests',
    'Account Details': 'View account details or change password',
    'Send Message': 'Ask a question about reimbursement'
  };

  const managerMenu = {
    'Process Requests': 'View and process all pending requests',
    'Submission Log': 'View full history or update closed requests',
    'Account Details': 'View account details or change password',
    'View Messages': 'View all employee queries and messages'
  };

  const isManager = false;
  const menu = isManager ? managerMenu : employeeMenu;

  return (
    <>
      <h1 className="text-center m-2 p-2">{ isManager ? 'Manager Dashboard' : 'Employee Dashboard' }</h1>
      <div id="dash-container" className="row text-center mx-auto">
        { Object.entries(menu).map(([btnText, desc]) => (
          <Card key={ btnText } className="dash-card col-md-5 p-2" >
            <Card.Body>
              <Card.Text className="lead">{ desc }</Card.Text>
              <Button variant="primary">{ btnText }</Button>
            </Card.Body>
          </Card>
        )) }
      </div>
    </>
  )
}


