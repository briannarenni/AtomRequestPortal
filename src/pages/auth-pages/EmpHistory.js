import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

import { useAuth, useTicketAPI } from '../../hooks';
import { Ticket } from '../../data';
import { PageHeader, BannerSuccess, BannerError, Loading } from '../../components/ui';

export default function EmpHistory() {
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
    const tickets = fetchedTickets.map(
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
    setTickets(tickets);
  }

  return (
    <div className="container-xs">
      <header className="mx-auto">
        <PageHeader title={'Submission History'} />
      </header>

      <main>
        {ticketCount === 0 ? (
          <div className="mt-3">
            <BannerError content={`No tickets found for ${currUser.fullName}`} />
          </div>
        ) : isLoading ? (
          <Loading />
        ) : (
          <>
            <BannerSuccess content={`Tickets submitted by: ${currUser.fullName}`} />

            <Table
              className="text-center mt-4"
              responsive
              striped
              bordered
              hover>
              <thead>
                <tr>
                  <th>Ticket ID</th>
                  <th>Submission Date</th>
                  <th>Ticket Status</th>
                  <th>Requested Amount</th>
                  <th>Expense Category</th>
                  <th>Comments</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket) => (
                  <tr key={ticket.ticketId}>
                    <td>{ticket.ticketId}</td>
                    <td>{ticket.submittedOn}</td>
                    <td>{ticket.status}</td>
                    <td>{ticket.amount}</td>
                    <td>{ticket.category}</td>
                    <td>{ticket.comments}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        )}
      </main>
    </div>
  );
}
