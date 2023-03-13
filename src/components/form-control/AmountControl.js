import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { ErrorMessage } from '@hookform/error-message';

import styles from '../../assets/_styles/Form.module.css';

export function AmountControl(props) {
  const { register, name, errors, watch } = props;

  return (
    <Form.Group
      controlId="amount"
      className="my-3">
      <Form.Label className="fw-light">
        <span>Expense Amount</span>
        <span className={styles.formNote}> (Format: $0.00)</span>
      </Form.Label>
      <InputGroup>
        <InputGroup.Text>$</InputGroup.Text>
        <Form.Control
          name="amount"
          step="0.01"
          isInvalid={errors && errors['amount']}
          isValid={!errors.amount && watch('amount')}
          {...register('amount', {
            required: '❌ Required',
            min: {
              value: 0.01,
              message: '❌ Must be more than $0.00'
            },
            pattern: {
              value: /^\d+(\.\d{1,2})?$/,
              message: '❌ Incorrect format'
            }
          })}
        />
      </InputGroup>

      <div className="small text-danger fst-italic my-2">
        <ErrorMessage
          errors={errors}
          name={name}
        />
      </div>
    </Form.Group>
  );
}
