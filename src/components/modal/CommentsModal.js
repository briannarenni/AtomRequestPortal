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
        variant="link"
        className="py-1 text-secondary"
        onClick={handleShow}>
        See Comments
      </Button>

      <Modal
        centered
        size="lg"
        show={show}
        onHide={handleClose}
        aria-labelledby="ticket-comments">
        <Modal.Header
          className="bg-secondary text-white border-bottom border-dark"
          closeButton>
          <ModalTitle>
            <small className="text-center lead fst-italic">Ticket #{ticketId}</small>
          </ModalTitle>
        </Modal.Header>
        <Modal.Body>
          <p className="px-3 mx-auto">Comments: {text}</p>
        </Modal.Body>
      </Modal>
    </>
  );
}
