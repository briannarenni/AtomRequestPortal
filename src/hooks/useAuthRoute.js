import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isEmpty } from 'lodash';

import { AuthProvider } from './useAuth';
import { Landing, FAQ, Login, Register, NotFound } from '../pages';
import { Dashboard, UpdatePass, Submissions } from '../pages/user-pages';
import { UserPending, SubmitRequest } from '../pages/employee-pages';
import { ProcessPending, EmployeeRoster, ManageUsers } from '../pages/admin-pages';

export function useAuthRoute() {
  const navigate = useNavigate();
  const { currUser } = AuthProvider;

  function AuthRoute({ isProtected = false, children }) {
    useEffect(() => {
      if (isProtected && isEmpty(currUser)) {
        navigate('/');
        return;
      } else if (!isProtected && !isEmpty(currUser)) {
        navigate('/dashboard');
        return;
      }
    }, [currUser, navigate, isProtected]);

    return children;
  }

  const getRoutes = () => [
    {
      path: '/',
      element: <Landing />
    },
    {
      path: '/faq',
      element: <FAQ />
    },
    {
      path: '/login',
      element: (
        <AuthRoute>
          <Login />
        </AuthRoute>
      )
    },
    {
      path: '/register',
      element: (
        <AuthRoute>
          <Register />
        </AuthRoute>
      )
    },
    {
      path: '/dashboard',
      element: (
        <AuthRoute>
          <Dashboard isProtected />
        </AuthRoute>
      )
    },
    {
      path: '/dashboard/update-password',
      element: (
        <AuthRoute>
          <UpdatePass isProtected />
        </AuthRoute>
      )
    },
    {
      path: '/dashboard/submit-request',
      element: (
        <AuthRoute>
          <SubmitRequest isProtected />
        </AuthRoute>
      )
    },
    {
      path: '/dashboard/view-pending/:userId',
      element: (
        <AuthRoute>
          <UserPending isProtected />
        </AuthRoute>
      )
    },
    {
      path: '/dashboard/submissions/:userId',
      element: (
        <AuthRoute>
          <Submissions isProtected />
        </AuthRoute>
      )
    },
    {
      path: '/dashboard/submissions',
      element: (
        <AuthRoute>
          <Submissions isProtected />
        </AuthRoute>
      )
    },
    {
      path: '/dashboard/employee-roster',
      element: (
        <AuthRoute>
          <EmployeeRoster isProtected />
        </AuthRoute>
      )
    },
    {
      path: '/dashboard/view-pending/process',
      element: (
        <AuthRoute>
          <ProcessPending isProtected />
        </AuthRoute>
      )
    },
    {
      path: '/dashboard/manage-users',
      element: (
        <AuthRoute>
          <ManageUsers isProtected />
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
    getRoutes
  };
}
