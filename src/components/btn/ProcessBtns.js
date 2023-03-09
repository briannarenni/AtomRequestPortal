import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

import { XIcon, CheckIcon } from './icon';
import { useTicketAPI } from '../../hooks';

export default function ProcessBtns({ ticketId, updateStatus }) {
  const { updateTicket } = useTicketAPI();

  const handleApprove = async () => {
    const updateResp = await updateTicket(ticketId, 'approved');
    console.log(updateResp);
    updateStatus(ticketId, 'Approved');
  };

  const handleDeny = async () => {
    const updateResp = await updateTicket(ticketId, 'denied');
    console.log(updateResp);
    updateStatus(ticketId, 'Denied');
  };

  return (
    <ButtonGroup
      size="sm"
      aria-label="Approve/Deny Buttons">
      <Button
        variant="success"
        className="table-btn"
        onClick={handleApprove}>
        <CheckIcon />
      </Button>
      <Button
        variant="danger"
        className="table-btn"
        onClick={handleDeny}>
        <XIcon />
      </Button>
    </ButtonGroup>
  );
}
