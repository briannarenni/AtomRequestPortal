import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isEmpty } from 'lodash';

import { AuthProvider } from './useAuth';
import { Landing, FAQ, Login, Register, NotFound } from '../pages';
import { Dashboard, UpdatePass, Submissions } from '../pages/user-pages';
import { UserHistory, UserPending, SubmitRequest } from '../pages/employee-pages';
// import { RequestHistory } from '../pages/admin-pages';

// * Placeholder
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
          <UpdatePass isProtected />
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
        // <PageHeader title={'🚧Under Construction🚧'} />
        <AuthRoute>
          <UserPending isProtected />
        </AuthRoute>
      )
    },
    // ! Update with
    // <AuthRoute>
    //    <Submissions isProtected/>
    // </AuthRoute>
    {
      path: '/dashboard/submissions/:userId',
      element: (
        <AuthRoute>
          <Submissions isProtected />
        </AuthRoute>
      )
    },
    {
      path: '/dashboard/submissions/all',
      element: (
        <AuthRoute>
          <Submissions isProtected />
        </AuthRoute>
      )
    },
    {
      path: '/dashboard/employee-roster',
      element: (
        <PageHeader title={'🚧Under Construction🚧'} />
        // <AuthRoute>
        //   <EmployeeRoster isProtected />
        // </AuthRoute>
      )
    },
    {
      path: '/dashboard/process-pending',
      element: (
        <PageHeader title={'🚧Under Construction🚧'} />
        // <AuthRoute >
        //   <ProcessPending isProtected/>
        // </AuthRoute>
      )
    },
    {
      path: '/dashboard/manage-users',
      element: (
        <PageHeader title={'🚧Under Construction🚧'} />
        // <AuthRoute>
        //    <ManageUsers isProtected/>
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
