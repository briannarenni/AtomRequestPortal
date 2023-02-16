import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAuth } from '../AuthContext';

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
    'Account Details': 'View User Details',
  };

  const managerMenu = {
    'Pending Requests': 'Process Pending Requests',
    'Request Log': 'See Full Request History',
    'Manage Roles': 'Update Employee Roles',
    'Add New Employee': 'Register Employee Account',
  };

  const menu = isManager ? managerMenu : employeeMenu;

  return (
    <>
      <h1 className="text-center my-1">{ isManager ? 'Manager Dashboard' : 'Employee Dashboard' }</h1>
      <h5 className="text-center fst-italic my-3">Welcome back { currUser.username }</h5>
      <div className="mx-4 px-2 row text-center">
        { Object.entries(menu).map(([btnText, desc]) => (
          <Card key={ btnText } className="col-sm-5 mx-auto my-3 px-3 py-4" >
            <Card.Body>
              <Card.Text className="lead">{ desc }</Card.Text>
              <Button size="lg" variant="primary" className="mx-auto mt-2">{ btnText }</Button>
            </Card.Body>
          </Card>
        )) }
      </div>
    </>
  )
}


