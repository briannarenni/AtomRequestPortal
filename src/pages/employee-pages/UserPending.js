import React, { useState, useEffect } from 'react';

import { useAuth, useTicketAPI } from '../../hooks';
import { Ticket } from '../../_data';
import { BannerSuccess, BannerError, LoadingComp } from '../../components/ux';
import { PageHeader } from '../../components/ui';
import { TicketTable } from '../../components/ui/table';

export default function EmpPending() {
  const { currUser } = useAuth();
  const { isLoading, getPendingTickets } = useTicketAPI();
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    if (currUser.pendingTickets > 0) {
      fetchUserPending();
    }
  }, []);

  async function fetchUserPending() {
    const fetchedTickets = await getPendingTickets();
    const filteredTickets = filterPending(fetchedTickets);
    setTickets(filteredTickets);
  }

  function filterPending(ticketsArr) {
    const filteredByUser = ticketsArr.filter(
      (ticket) => ticket.submittedBy === currUser.userId && ticket.status === 'pending'
    );

    const filteredTickets = filteredByUser.map(
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

    return filteredTickets;
  }

  return (
    <div className="container-xs">
      <header className="mx-auto">
        <PageHeader title={'Pending Requests'} />
      </header>

      <main>
        {isLoading && <LoadingComp />}
        {currUser.pendingTickets === 0 ? (
          <div className="mt-3">
            <BannerError content={`No pending requests found for ${currUser.fullName}`} />
          </div>
        ) : (
          <>
            <BannerSuccess content={`Open requests submitted by: ${currUser.fullName}`} />
            <TicketTable ticketsArr={tickets} />
          </>
        )}
      </main>
    </div>
  );
}
