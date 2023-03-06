import React from 'react';

import { useAuth } from '../../hooks/useAuth';
import { FullHistory } from '../admin-pages';
import { UserHistory } from '../employee-pages';

export default function Submissions() {
  const { isManager } = useAuth();

  return <>{isManager ? <FullHistory /> : <UserHistory />}</>;
}
