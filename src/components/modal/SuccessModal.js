import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button, ModalTitle } from 'react-bootstrap';

import { useAuthRoute } from '../../hooks';

export default function SuccessModal({ ticketObj }) {
  const navigate = useNavigate();
  const { baseURL } = useAuthRoute();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    if (ticketObj !== null && Object.keys(ticketObj).length > 0) {
      setShow(true);
    }
  }, [ticketObj]);

  return (
    <>
      <Modal
        centered
        size="lg"
        backdrop="static"
        show={show}
        onHide={handleClose}
        aria-labelledby="ticket-details">
        <Modal.Header className="text-white bg-success border-bottom">
          <ModalTitle>
            <h2 className="fst-italic">Success!</h2>
          </ModalTitle>
        </Modal.Header>
        <Modal.Body>
          <div className="px-3 mx-auto">
            <strong>Submission Date:</strong>
            <p className="lead">{ticketObj.submittedOn}</p>
            <strong>Employee Name:</strong>
            <p className="lead">{ticketObj.employeeName}</p>
            <strong>Requested Amount:</strong>
            <p className="lead">{ticketObj.amount}</p>
            <strong>Request Category:</strong>
            <p className="lead">{ticketObj.category}</p>
            <strong>Comments:</strong>
            <p className="lead">{ticketObj.comments !== null ? ticketObj.comments : ' '}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            className="w-50 mx-auto"
            onClick={() => {
              handleClose();
              navigate(`${baseURL}/dashboard`);
            }}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
