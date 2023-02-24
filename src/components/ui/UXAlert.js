import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

function UXAlert(props) {
  const { message } = props;
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      {message && (
        <Alert
          variant="danger"
          dismissible
          show={show}
          onClose={handleClose}
          className="w-50 mx-auto text-center">
          {message}
        </Alert>
      )}
    </>
  );
}

export default UXAlert;
