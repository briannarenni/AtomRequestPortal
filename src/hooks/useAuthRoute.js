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
      path: '/dashboard/submit-request',
      element: (
        <p className="text-center lead">🚧Under Construction🚧</p>
        // <AuthRoute isProtected>
        //   <SubmitRequest />
        // </AuthRoute>
      )
    },
    {
      path: '/dashboard/view-pending/:userId',
      element: (
        <p className="text-center lead">🚧Under Construction🚧</p>
        //     <AuthRoute isProtected>
        //       <PendingRequests />
        // </AuthRoute>
      )
    },
    {
      path: '/dashboard/submissions/:userId',
      element: (
        <p className="text-center lead">🚧Under Construction🚧</p>
        // <AuthRoute isProtected>
        // <SubmissionHistory />
        // </AuthRoute>
      )
    },
    {
      path: '/dashboard/employee-roster',
      element: (
        <p className="text-center lead">🚧Under Construction🚧</p>
        // <AuthRoute isProtected>
        //   <EmployeeRoster />
        // </AuthRoute>
      )
    },
    {
      path: '/dashboard/process-pending',
      element: (
        <p className="text-center lead">🚧Under Construction🚧</p>
        // <AuthRoute isProtected>
        //   <ProcessPending />
        // </AuthRoute>
      )
    },
    {
      path: '/dashboard/submissions/all',
      element: (
        <p className="text-center lead">🚧Under Construction🚧</p>
        // <AuthRoute isProtected>
        //    <SubmissionLog />
        // </AuthRoute>
      )
    },
    {
      path: '/dashboard/manage-users',
      element: (
        <p className="text-center lead">🚧Under Construction🚧</p>
        // <AuthRoute isProtected>
        //    <ManageUsers />
        // </AuthRoute>
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
