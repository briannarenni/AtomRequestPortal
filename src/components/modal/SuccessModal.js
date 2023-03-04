import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button, ModalTitle } from 'react-bootstrap';

export default function SuccessModal({ ticketObj }) {
  const navigate = useNavigate();
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
      {/* <Button
        size="sm"
        variant="outline-primary"
        onClick={handleShow}>
        Test Submit
      </Button> */}

      <Modal
        centered
        size="lg"
        show={show}
        onHide={handleClose}
        aria-labelledby="ticket-details">
        <Modal.Header
          className="text-white bg-success border-bottom"
          closeButton>
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
              navigate('/dashboard');
            }}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
