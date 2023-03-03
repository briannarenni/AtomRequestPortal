import React from 'react';
import { Table } from 'react-bootstrap';
import { isEmpty } from 'lodash';

import { CommentsModal } from '../../components/modal';

export default function TicketTable({ tickets }) {
  return (
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
            <td>
              {!isEmpty(ticket.comments) && (
                <CommentsModal
                  ticketId={ticket.ticketId}
                  text={ticket.comments}
                />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
