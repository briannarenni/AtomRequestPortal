import React, { useState } from 'react';
import { Modal, Button, ModalTitle } from 'react-bootstrap';

export default function CommentsModal({ ticketId, text }) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Button
        size="sm"
        variant="outline-primary"
        onClick={handleShow}>
        See Comments
      </Button>

      <Modal
        centered
        show={show}
        onHide={handleClose}
        aria-labelledby="ticket-comments">
        <Modal.Header
          className="border-bottom border-dark"
          closeButton>
          <ModalTitle>
            {' '}
            <small className="text-center fst-italic">Ticket ID: {ticketId}</small>
          </ModalTitle>
        </Modal.Header>
        <Modal.Body>
          <div className="px-3 mx-auto">
            <p> {text}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-primary"
            className="w-75 mx-auto"
            onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
