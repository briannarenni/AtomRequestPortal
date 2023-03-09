import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Table, Form } from 'react-bootstrap';
import { isEmpty } from 'lodash';

import { CommentsModal } from '../../modal';
import { SortDrop, FilterDrop } from '../../ui/tables';
import { ProcessBtns } from '../../btn';

export default function TicketTable({ ticketsArr }) {
  const { pathname } = useLocation();
  const onPendingPage = pathname.includes('view-pending');
  const onProcessPending = pathname.includes('view-pending/process');
  const [tickets, setTickets] = useState([]);
  const [filterValue, setFilterValue] = useState('none');
  const [sortValue, setSortValue] = useState('submittedOn');
  const options = [
    { value: 'submittedOn', label: 'Most Recent' },
    { value: 'employeeName', label: 'Employee Name' },
    { value: 'status', label: 'Request Status' }
  ];

  useEffect(() => {
    setTickets(ticketsArr.slice());
  }, [ticketsArr]);

  useEffect(() => {
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
    // eslint-disable-next-line
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
      <div className="d-flex justify-content-between gap-2">
        <div className="d-flex flex-column mx-1">
          <Form.Label className="fw-light small mb-1">Sort Requests</Form.Label>
          <SortDrop
            name="sortTickets"
            options={options}
            handleSortChange={handleSortChange}
          />
        </div>
        {onPendingPage ? null : (
          <div className="d-flex flex-column mx-1">
            <Form.Label className="fw-light small mb-1">Filter Status</Form.Label>
            <FilterDrop handleFilterChange={handleFilterChange} />
          </div>
        )}
      </div>

      <Table
        className="text-center align-middle mt-3"
        responsive
        striped
        bordered
        hover>
        <thead>
          <tr>
            <th>Request ID</th>
            <th>Date</th>
            <th>Status</th>
            <th>Employee</th>
            <th>Amount Requested</th>
            <th>Expense Type</th>
            <th>Comments</th>
            {onProcessPending ? <th></th> : null}
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.ticketId}>
              <td>{ticket.ticketId}</td>
              <td>{ticket.submittedOn}</td>
              <td>{ticket.status}</td>
              <td>{ticket.employeeName}</td>
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
              {onProcessPending ? (
                <td>
                  <ProcessBtns
                    ticketId={ticket.ticketId}
                  />
                </td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
