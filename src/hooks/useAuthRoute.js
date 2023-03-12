import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isEmpty } from 'lodash';

import { AuthProvider } from './useAuth';
import { Landing, FAQ, Login, Register, NotFound } from '../pages';
import { Dashboard, UpdatePass, Submissions } from '../pages/user-pages';
import { UserPending, SubmitRequest } from '../pages/employee-pages';
import { ProcessPending, EmployeeRoster } from '../pages/admin-pages';

export function useAuthRoute() {
  const navigate = useNavigate();
  const { currUser } = AuthProvider;
  const baseURL = '/AtomRequestPortal';

  function AuthRoute({ isProtected = false, children }) {
    useEffect(() => {
      if (isProtected && isEmpty(currUser)) {
        navigate(`${baseURL}`);
        return;
      } else if (!isProtected && !isEmpty(currUser)) {
        navigate(`${baseURL}/dashboard`);
        return;
      }
    }, [currUser, navigate, isProtected]);

    return children;
  }

  const getRoutes = () => [
    {
      path: `${baseURL}`,
      element: <Landing />
    },
    {
      path: `${baseURL}/faq`,
      element: <FAQ />
    },
    {
      path: `${baseURL}/login`,
      element: (
        <AuthRoute>
          <Login />
        </AuthRoute>
      )
    },
    {
      path: `${baseURL}/register`,
      element: (
        <AuthRoute>
          <Register />
        </AuthRoute>
      )
    },
    {
      path: `${baseURL}/dashboard`,
      element: (
        <AuthRoute>
          <Dashboard isProtected />
        </AuthRoute>
      )
    },
    {
      path: `${baseURL}/dashboard/update-password`,
      element: (
        <AuthRoute>
          <UpdatePass isProtected />
        </AuthRoute>
      )
    },
    {
      path: `${baseURL}/dashboard/submit-request`,
      element: (
        <AuthRoute>
          <SubmitRequest isProtected />
        </AuthRoute>
      )
    },
    {
      path: `${baseURL}/dashboard/view-pending/:userId`,
      element: (
        <AuthRoute>
          <UserPending isProtected />
        </AuthRoute>
      )
    },
    {
      path: `${baseURL}/dashboard/submissions/:userId`,
      element: (
        <AuthRoute>
          <Submissions isProtected />
        </AuthRoute>
      )
    },
    {
      path: `${baseURL}/dashboard/submissions`,
      element: (
        <AuthRoute>
          <Submissions isProtected />
        </AuthRoute>
      )
    },
    {
      path: `${baseURL}/dashboard/employee-roster`,
      element: (
        <AuthRoute>
          <EmployeeRoster isProtected />
        </AuthRoute>
      )
    },
    {
      path: `${baseURL}/dashboard/view-pending/process`,
      element: (
        <AuthRoute>
          <ProcessPending isProtected />
        </AuthRoute>
      )
    },
    {
      path: '*',
      element: <NotFound />
    }
  ];

  return {
    AuthRoute,
    baseURL,
    getRoutes
  };
}
