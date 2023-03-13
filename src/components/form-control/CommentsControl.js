import React, { useState } from 'react';
import { Form, FloatingLabel } from 'react-bootstrap';
import { Divider } from 'primereact/divider';
import clsx from 'clsx';

import styles from '../../assets/_styles/Form.module.css';

export function CommentsControl(props) {
  const { register } = props;
  const [commentsLength, setCommentsLength] = useState(0);

  const commentsClass = clsx({
    'text-danger': commentsLength >= 400
  });

  return (
    <>
      <Divider
        align="left"
        className="mb-0">
        <span className="fw-light small">Comments*</span>
        <span className={styles.formNote}> (opt.)</span>
      </Divider>

      <Form.Group
        controlId="comments"
        className="mt-2 mb-1">

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

        <div className="small d-flex justify-content-between my-1 fst-italic">
          <div>*For category "Other", be sure to include details here.</div>
          <div className={commentsClass}>
            {commentsLength}/{500} characters
            {/* turn red after 400 chars? text-danger */}
          </div>
        </div>
      </Form.Group>
    </>
  );
}
