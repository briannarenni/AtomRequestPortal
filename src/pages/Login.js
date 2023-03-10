import React, { useEffect } from 'react';
import { isEmpty } from 'lodash';
import { useNavigate } from 'react-router-dom';

import { useAuth, useAuthRoute } from '../hooks';
import { BannerNote } from '../components/ux';
import { PageHeader } from '../components/ui';
import { LoginForm } from '../components/form';

export default function Login() {
  const navigate = useNavigate();
  const { dispatch, currUser } = useAuth();
  const { baseURL } = useAuthRoute();

  useEffect(() => {
    if (!isEmpty(currUser)) {
      dispatch({ type: 'SET_IS_LOGGED_IN', payload: true });
      navigate(`${baseURL}/dashboard`);
    }
  }, [currUser, dispatch]);

  return (
    <div className="container-xs">
      <header className="mb-3">
        <PageHeader title="Account Login" />
        <BannerNote
          note={'For forgotten passwords, please speak to your supervisor or HR for reset.'}
        />
      </header>

      <LoginForm />
    </div>
  );
}
