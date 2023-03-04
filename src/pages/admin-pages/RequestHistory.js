import React, { useState, useEffect } from 'react';

import { useAuth, useTicketAPI } from '../../hooks';
import { PageHeader, BannerError } from '../../components/ui';

export default function RequestHistory() {
  const { isLoading, getAllTickets } = useTicketAPI();
  const [tickets, setTickets] = useState([]);

  return <div>SubmissionLog</div>;
}
