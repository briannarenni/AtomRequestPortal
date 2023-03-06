import React, { useState, useEffect } from 'react';

import { useTicketAPI } from '../../hooks';
import { Ticket } from '../../_data';
import { PageHeader,  BannerError, Loading } from '../../components/ui';
import { TicketTable } from '../../components/ui/tables';

export default function FullHistory() {
  const { isLoading, getAllTickets } = useTicketAPI();
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetchAllTickets();
  }, []);

  async function fetchAllTickets() {
    const fetchedTickets = await getAllTickets();

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
        <PageHeader title={'All Submitted Requests '} />
      </header>

      <main>
        {isLoading && <Loading />}
        {!isLoading && tickets.length === 0 ? (
          <div className="mt-3">
            <BannerError content={`No requests found`} />
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
