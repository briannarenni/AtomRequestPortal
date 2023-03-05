import React from 'react';

export function useDashMenu(currUser) {
  const employeeMenu = [
    {
      title: 'Submit a new reimbursement request',
      btnText: 'Submit New Request',
      link: 'submit-request'
    },
    {
      title: 'See your pending requests',
      btnText: 'Pending Requests',
      link: `view-pending/${currUser.userId}`,
      badgeCount: currUser.pendingTickets
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

  return { employeeMenu, managerMenu };
}
