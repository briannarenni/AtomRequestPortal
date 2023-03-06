import React, { useState, useEffect } from 'react';

import { useTicketAPI } from '../../hooks';
import { Ticket } from '../../_data';
import { PageHeader, BannerError, Loading } from '../../components/ui';
import { TicketTable } from '../../components/ui/tables';

export default function ProcessPending() {
  const { isLoading, getPendingTickets } = useTicketAPI();
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetchPending();
  }, []);

  async function fetchPending() {
    const fetchedTickets = await getPendingTickets();
    const tickets = fetchedTickets.map(
      (ticket) =>
        new Ticket(
          ticket.ticketId,
          ticket.submittedOn,
          ticket.userId,
          ticket.employeeName,
          ticket.amount,
          ticket.category,
          ticket.status,
          ticket.comments
        )
    );
    setTickets(tickets);
  }

  return (
    <div className="container-xs">
      <header className="mx-auto">
        <PageHeader title={'Process Pending Requests'} />
      </header>

      <main>
        {isLoading && <Loading />}
        {!isLoading && tickets.length === 0 ? (
          <div className="mt-3">
            <BannerError content={`No pending requests in queue`} />
          </div>
        ) : (
          <>
            <TicketTable tickets={tickets} />
          </>
        )}
      </main>
    </div>
  );
}
