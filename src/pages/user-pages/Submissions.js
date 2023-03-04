import React from 'react';

import { useAuth } from '../../hooks/useAuth';
import { RequestHistory } from '../admin-pages';
import { UserHistory } from '../employee-pages';

export default function Submissions() {
  const { isManager } = useAuth();

  return <>{isManager ? <RequestHistory /> : <UserHistory />}</>;
}
