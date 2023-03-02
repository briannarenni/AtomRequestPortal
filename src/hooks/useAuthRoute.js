import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isEmpty } from 'lodash';

import { AuthProvider } from './useAuth';
import { Landing, FAQ, Login, Register, Dashboard, NotFound } from '../pages';
import { PasswordUpdate } from '../pages/auth-pages';

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
          <PasswordUpdate isProtected />
        </AuthRoute>
      )
    },
    {
      path: '*',
      element: <NotFound />
    },
    {
      path: '/dashboard/submit-request',
      element: (
        <AuthRoute isProtected>
          <p className="text-center lead">🚧Under Construction🚧</p>
        </AuthRoute>
      )
      // unfinished element: <SubmitRequest />
    },
    {
      path: '/dashboard/view-pending/:userId',
      element: (
        <AuthRoute isProtected>
          <p className="text-center lead">🚧Under Construction🚧</p>
        </AuthRoute>
      )
      // unfinished element: <PendingRequests />
    },
    {
      path: '/dashboard/submissions/:userId',
      element: (
        <AuthRoute isProtected>
          <p className="text-center lead">🚧Under Construction🚧</p>
        </AuthRoute>
      )
      // unfinished element: <SubmissionHistory />
    },
    {
      path: '/dashboard/employee-roster',
      element: (
        <AuthRoute isProtected>
          <p className="text-center lead">🚧Under Construction🚧</p>
        </AuthRoute>
      )
      // unfinished element: <EmployeeRoster />
    },
    {
      path: '/dashboard/process-pending',
      element: (
        <AuthRoute isProtected>
          <p className="text-center lead">🚧Under Construction🚧</p>
        </AuthRoute>
      )
      // unfinished element: <ProcessPending />
    },
    {
      path: '/dashboard/submissions/all',
      element: (
        <AuthRoute isProtected>
          <p className="text-center lead">🚧Under Construction🚧</p>
        </AuthRoute>
      )
      // unfinished element: <SubmissionLog />
    },
    {
      path: '/dashboard/manage-users',
      element: (
        <AuthRoute isProtected>
          <p className="text-center lead">🚧Under Construction🚧</p>
        </AuthRoute>
      )
      // unfinished element: <ManageUsers />
    }
  ];

  return {
    AuthRoute,
    getRoutes
  };
}
