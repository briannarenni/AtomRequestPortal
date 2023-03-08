import React, { useState, useEffect } from 'react';

import { useAuth, useTicketAPI } from '../../hooks';
import { Ticket } from '../../_data';
import { BannerSuccess, BannerError, LoadingComp } from '../../components/ux';
import { PageHeader } from '../../components/ui';
import { TicketTable } from '../../components/ui/tables';

export default function EmpHistory() {
  const { currUser } = useAuth();
  const { isLoading, getUserTickets } = useTicketAPI();
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    if (currUser.totalTickets > 0) {
      fetchUserTickets();
    }
  }, []);

  async function fetchUserTickets() {
    const fetchedTickets = await getUserTickets(currUser.userId);

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
        <PageHeader title={'Submission History'} />
      </header>

      <main>
        {isLoading && <LoadingComp />}
        {currUser.totalTickets === 0 ? (
          <div className="mt-3">
            <BannerError content={`No requests found for ${currUser.fullName}`} />
          </div>
        ) : (
          <>
            <BannerSuccess content={`Requests submitted by: ${currUser.fullName}`} />
            <TicketTable ticketsArr={tickets} />
          </>
        )}
      </main>
    </div>
  );
}
