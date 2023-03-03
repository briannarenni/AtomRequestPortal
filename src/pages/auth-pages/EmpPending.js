import React, { useState, useEffect } from 'react';

import { useAuth, useTicketAPI } from '../../hooks';
import { Ticket } from '../../data';
import { PageHeader, TicketTable, BannerSuccess, BannerError, Loading } from '../../components/ui';

export default function EmpPending() {
  const { currUser } = useAuth();
  const { isLoading, getUserTickets } = useTicketAPI();
  const [tickets, setTickets] = useState([]);
  const [ticketCount, setTicketCount] = useState(currUser.totalTickets);

  useEffect(() => {
    if (ticketCount > 0) {
      fetchUserTickets();
    }
  }, []);

  async function fetchUserTickets() {
    const fetchedTickets = await getUserTickets(currUser.userId);
    const filteredTickets = filterPending(fetchedTickets);
    console.log(filteredTickets);
    setTickets(filteredTickets);
  }

  function filterPending(ticketsArr) {
    const filteredTickets = ticketsArr.filter(
      (ticket) => ticket.submittedBy === currUser.userId && ticket.status === 'pending'
    );

    const mappedTickets = filteredTickets.map(
      (ticket) =>
        new Ticket(
          ticket.ticketId,
          ticket.submittedOn,
          ticket.submittedBy,
          ticket.employeeName,
          ticket.amount,
          ticket.category,
          ticket.status,
          ticket.comments
        )
    );

    return mappedTickets;
  }

  return (
    <div className="container-xs">
      <header className="mx-auto">
        <PageHeader title={'Pending Requests'} />
      </header>

      <main>
        {isLoading && <Loading />}
        {ticketCount === 0 ? (
          <div className="mt-3">
            <BannerError content={`No pending requests found for ${currUser.fullName}`} />
          </div>
        ) : (
          <>
            <BannerSuccess content={`Open requests submitted by: ${currUser.fullName}`} />
            <TicketTable tickets={tickets} />
          </>
        )}
      </main>
    </div>
  );
}
