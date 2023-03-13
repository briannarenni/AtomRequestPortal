import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Table, Form } from 'react-bootstrap';
import { isEmpty } from 'lodash';
import clsx from 'clsx';

import { useSortFilter } from '../../../hooks';
import { CommentsModal } from '../../ui/modal';
import { SortDrop, FilterDrop } from '../../ui/table';
import { ProcessBtns } from '../../btn';

const getStatusClass = (status) => {
  return clsx({
    'table-light': status === 'Pending',
    'table-success': status === 'Approved',
    'table-danger': status === 'Denied'
  });
};

export default function TicketTable({ ticketsArr }) {
  const { pathname } = useLocation();
  const { filterBy } = useSortFilter();
  const onPendingPage = pathname.includes('view-pending');
  const onProcessPending = pathname.includes('view-pending/process');

  const [tickets, setTickets] = useState([]);
  const [filterValue, setFilterValue] = useState('none');
  const [sortValue, setSortValue] = useState('submittedOn');

  const options = [
    { value: 'submittedOn', label: 'Most Recent' },
    { value: 'status', label: 'Request Status' },
    { value: 'amount', label: 'Requested Amount' },
    { value: 'employeeName', label: 'Employee Name' }
  ];

  useEffect(() => {
    setTickets(ticketsArr.slice());
    console.log(tickets);
  }, [ticketsArr]);

  useEffect(() => {
    const filtered = filterBy(ticketsArr, filterValue, sortValue);
    setTickets(filtered);
  }, [filterValue, sortValue]);

  const updateTicketStatus = (ticketId, newStatus) => {
    setTickets((prevTickets) => {
      return prevTickets.map((ticket) => {
        if (ticket.ticketId === ticketId) {
          return {
            ...ticket,
            status: newStatus
          };
        }
        return ticket;
      });
    });
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
        bordered>
        <thead>
          <tr>
            <th>ID #</th>
            <th>Request Date</th>
            <th>Status</th>
            <th>Employee</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
            {onProcessPending ? <th></th> : null}
          </tr>
        </thead>
        <tbody className="small">
          {tickets.map((ticket) => (
            <tr
              key={ticket.ticketId}
              className={getStatusClass(ticket.status)}>
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
                    submittedBy={ticket.employeeName}
                    text={ticket.comments}
                  />
                )}
              </td>
              {onProcessPending ? (
                <td>
                  <ProcessBtns
                    ticketId={ticket.ticketId}
                    updateStatus={updateTicketStatus}
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
