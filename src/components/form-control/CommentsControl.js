import React, { useState } from 'react';
import { Form, FloatingLabel } from 'react-bootstrap';
import { Divider } from 'primereact/divider';

import styles from '../../assets/_styles/Form.module.css';

export function CommentsControl(props) {
  const { register } = props;
  const [commentsLength, setCommentsLength] = useState(0);

  return (
    <>
      <Divider
        align="left"
        className="mb-0">
        <span className="fw-light small">Comments</span>
        <span className={styles.formNote}> (optional)</span>
      </Divider>

      <Form.Group
        controlId="comments"
        className="mt-2 mb-1">
        <FloatingLabel
          controlId="floatingInput"
          className="text-secondary"
          label={'If category is "Other", include details here.'}>
          <Form.Control
            as="textarea"
            maxLength={500}
            placeholder=""
            {...register('comments')}
            onChange={(e) => {
              const inputLength = e.target.value.length;
              setCommentsLength(inputLength);
            }}
          />
        </FloatingLabel>

        <div className="small  fst-italic my-1 text-end">
          {commentsLength}/{500} characters
          {/* turn red after 400 chars? text-danger */}
        </div>
      </Form.Group>
    </>
  );
}
