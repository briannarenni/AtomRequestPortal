import React, { useState, useEffect } from 'react';
import { Table, Form } from 'react-bootstrap';
import { isEmpty } from 'lodash';

import { CommentsModal } from '../../modal';
import { SortDrop, FilterDrop } from '../../ui/tables';

export default function TicketTable({ ticketsArr }) {
  const [tickets, setTickets] = useState([]);
  const [filterValue, setFilterValue] = useState('none');
  const [sortValue, setSortValue] = useState('submittedOn');

  useEffect(() => {
    console.log(ticketsArr.slice());
    setTickets(ticketsArr.slice());
  }, [ticketsArr]);

  useEffect(() => {
    console.log(filterValue, sortValue);
    filterBy(filterValue, sortValue);
  }, [filterValue, sortValue]);

  const filterBy = (filter, sort) => {
    let filteredTickets = [];
    if (filter === 'none') {
      filteredTickets = ticketsArr.slice();
    } else {
      filteredTickets = ticketsArr.filter((ticket) => ticket.status === filter);
    }
    sortTickets(filteredTickets, sort);
  };

  const sortTickets = (ticketArray, sortValue) => {
    ticketArray.sort((a, b) => {
      if (sortValue === 'submittedOn') {
        return new Date(b.submittedOn) - new Date(a.submittedOn);
      } else if (sortValue === 'employeeName') {
        return a.employeeName.localeCompare(b.employeeName);
      } else if (sortValue === 'status') {
        return a.status.localeCompare(b.status);
      }
    });
    setTickets(ticketArray);
  };

  const handleSortChange = (value) => {
    setSortValue(value);
  };

  const handleFilterChange = (value) => {
    setFilterValue(value);
  };

  return (
    <>
      <div className="d-flex justify-content-end gap-2">
        <div className="d-flex flex-column">
          <Form.Label className="fw-light">Filter By Status</Form.Label>
          <FilterDrop handleFilterChange={handleFilterChange} />
        </div>
        <div className="d-flex flex-column">
          <Form.Label className="fw-light">Sort Requests</Form.Label>
          <SortDrop handleSortChange={handleSortChange} />
        </div>
      </div>

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
            <th>Submitted By</th>
            <th>Ticket Status</th>
            <th>Requested Amount</th>
            <th>Expense Type</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.ticketId}>
              <td>{ticket.ticketId}</td>
              <td>{ticket.submittedOn}</td>
              <td>{ticket.employeeName}</td>
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
    </>
  );
}
