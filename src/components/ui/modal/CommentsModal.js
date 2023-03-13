import React, { useState } from 'react';
import { Modal, Button, ModalTitle } from 'react-bootstrap';

export default function CommentsModal({ ticketId, submittedBy, text }) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Button
        size="sm"
        variant="outline-primary"
        className="table-btn w-75"
        onClick={handleShow}>
        Comments
      </Button>

      <Modal
        centered
        size="lg"
        show={show}
        onHide={handleClose}
        className="bg-primary bg-opacity-25"
        aria-labelledby="ticket-comments">
        <Modal.Header
          className="bg-primary bg-opacity-75 text-white border-bottom border-dark"
          closeButton>
          <ModalTitle className="text-center lead fst-italic">
            Comments from {submittedBy}
          </ModalTitle>
        </Modal.Header>
        <Modal.Body className="bg-light px-3">{text}</Modal.Body>
        <Modal.Footer className="bg-light fst-italic">
          <sub>Ticket #{ticketId}</sub>
        </Modal.Footer>
      </Modal>
    </>
  );
}
