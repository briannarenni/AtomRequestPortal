import { Landing, FAQ, Login, Register, Dashboard, NotFound } from '../pages';
import { PasswordUpdate } from '../pages/auth-pages';

export const appRoutes = [
  {
    path: '/',
    element: <Landing />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/faq',
    element: <FAQ />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/dashboard/update-password',
    element: <PasswordUpdate />
  },
  {
    path: '/dashboard/submit-request',
    element: <p className="text-center lead">🚧Under Construction🚧</p>
    // element: <SubmitRequest />
  },
  {
    path: '/dashboard/pending-requests/:userId',
    element: <p className="text-center lead">🚧Under Construction🚧</p>
    // element: <PendingRequests />
  },
  {
    path: '/dashboard/submissions/:userId',
    element: <p className="text-center lead">🚧Under Construction🚧</p>
    // element: <SubmissionHistory />
  },
  {
    path: '/dashboard/employee-roster',
    element: <p className="text-center lead">🚧Under Construction🚧</p>
    // element: <EmployeeRoster />
  },
  {
    path: '/dashboard/pending-requests/all',
    element: <p className="text-center lead">🚧Under Construction🚧</p>
    // element: <ProcessPending />
  },
  {
    path: '/dashboard/submissions/all',
    element: <p className="text-center lead">🚧Under Construction🚧</p>
    // element: <SubmissionLog />
  },
  {
    path: '/dashboard/manage-users',
    element: <p className="text-center lead">🚧Under Construction🚧</p>
    // element: <ManageUsers />
  },
  {
    path: '*',
    element: <NotFound />
  }
];
