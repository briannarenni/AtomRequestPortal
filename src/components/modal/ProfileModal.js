import React, { useState } from 'react';
import { Modal, Button, ModalTitle } from 'react-bootstrap';
import { startCase } from 'lodash';

import styles from '../../assets/_styles/NavBtn.module.css';
import { useAuth } from '../../hooks/useAuth';
import { UserIcon } from '../btn/icon';

export default function ProfileModal() {
  const { currUser } = useAuth();
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Button
        variant="outline-primary"
        className={styles.navBtn}
        onClick={handleShow}>
        <UserIcon />
        Profile
      </Button>

      <Modal
        centered
        size="lg"
        show={show}
        onHide={handleClose}
        className="bg-primary bg-opacity-25"
        aria-labelledby="user-profile">
        <Modal.Header
          className="bg-primary bg-opacity-75 border-bottom border-dark"
          closeButton>
          <ModalTitle></ModalTitle>
        </Modal.Header>
        <Modal.Body className="bg-light">
          <h1 className="display-6 text-center">{currUser.fullName}</h1>
          <h2 className="lead text-center">
            {currUser.dept} {startCase(currUser.role)}
          </h2>
          <div className="px-3 mx-auto">
            <strong>Employee ID:</strong>
            <p className="lead">{currUser.userId}</p>
            <strong>Username:</strong>
            <p className="lead">{currUser.username}</p>
            <strong>Pending Tickets:</strong>
            <p className="lead">{currUser.pendingTickets}</p>
            <strong>Total Requests Submitted:</strong>
            <p className="lead">{currUser.totalTickets}</p>
          </div>
        </Modal.Body>
        <Modal.Footer className="bg-primary bg-opacity-75"></Modal.Footer>
      </Modal>
    </>
  );
}
