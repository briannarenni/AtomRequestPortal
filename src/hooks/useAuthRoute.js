import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isEmpty } from 'lodash';

import { AuthProvider } from './useAuth';
import { Landing, FAQ, Login, Register, NotFound } from '../pages';
import { Dashboard, PasswordUpdate, EmpHistory } from '../pages/auth-pages';
import { PageHeader } from '../components/ui';

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
    // Placeholder: <PageHeader title={'🚧Under Construction🚧'} />
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
        <PageHeader title={'🚧Under Construction🚧'} />
        // <AuthRoute isProtected>
        //   <SubmitRequest />
        // </AuthRoute>
      )
    },
    {
      path: '/dashboard/view-pending/:userId',
      element: (
        <PageHeader title={'🚧Under Construction🚧'} />
        //     <AuthRoute isProtected>
        //       <PendingRequests />
        // </AuthRoute>
      )
    },
    {
      path: '/dashboard/submissions/:userId',
      element: (
        <AuthRoute>
          <EmpHistory isProtected />
          {/* <ShowHistory /> */}
        </AuthRoute>
      )
    },
    {
      path: '/dashboard/employee-roster',
      element: (
        <PageHeader title={'🚧Under Construction🚧'} />
        // <AuthRoute isProtected>
        //   <EmployeeRoster />
        // </AuthRoute>
      )
    },
    {
      path: '/dashboard/process-pending',
      element: (
        <PageHeader title={'🚧Under Construction🚧'} />
        // <AuthRoute isProtected>
        //   <ProcessPending />
        // </AuthRoute>
      )
    },
    {
      path: '/dashboard/submissions/all',
      element: (
        <PageHeader title={'🚧Under Construction🚧'} />
        // <AuthRoute isProtected>
        //    <SubmissionLog />
        // </AuthRoute>
      )
    },
    {
      path: '/dashboard/manage-users',
      element: (
        <PageHeader title={'🚧Under Construction🚧'} />
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
