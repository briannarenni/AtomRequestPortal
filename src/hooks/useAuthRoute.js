import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isEmpty } from 'lodash';

import { AuthProvider } from './useAuth';
import { Landing, FAQ, Login, Register, Dashboard, Submissions, NotFound } from '../pages';
import { UpdatePass, UserHistory, UserPending, SubmitRequest } from '../pages/user-pages';
// import {} from '../pages/admin-pages';
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
    // <AuthRoute isProtected>
    //    <Submissions/>
    // </AuthRoute>
    {
      path: '/dashboard/submissions/:userId',
      element: (
        <AuthRoute>
          <UserHistory isProtected />
          {/* <Submissions /> */}
        </AuthRoute>
      )
    },
    {
      path: '/dashboard/submissions/all',
      element: <PageHeader title={'🚧Under Construction🚧'} />
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
