import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { isEmpty } from 'lodash';
import { format } from 'date-fns';

import styles from '../../assets/_styles/Form.module.css';
import { useAuth, useTicketAPI } from '../../hooks';
import { ReadOnlyControls, CategorySelect, CommentsControl } from './request-controls';
import { SubmitBtn } from './controls';
import { Ticket } from '../../_data';

export default function RequestForm({ setSubmittedTicket }) {
  const { currUser, dispatch } = useAuth();
  const { isLoading, submitTicket } = useTicketAPI();
  const [selectedCategory, setSelectedCategory] = useState('');

  const defaults = {
    userId: currUser.userId,
    employeeName: currUser.fullName,
    amount: 0.0,
    category: '',
    comments: null
  };

  const {
    register,
    watch,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors }
  } = useForm({
    mode: 'onBlur',
    defaultValues: { ...defaults }
  });

  const handleCategorySelect = (selectedOption) => {
    setSelectedCategory(selectedOption.value);
  };

  const submitNewTicket = async ({ amount, category, comments }) => {
    const response = await submitTicket(
      currUser.userId,
      currUser.fullName,
      amount,
      category,
      comments
    );

    if (response.status === 200 || response.status === 201) {
      console.log('Success');
      dispatch({
        type: 'SET_CURR_USER',
        payload: {
          ...currUser,
          totalPending: currUser.totalPending + 1,
          totalTickets: currUser.totalTickets + 1
        }
      });
      return true;
    } else {
      console.log(response.data);
      return false;
    }
  };

  const onSubmit = async (data) => {
    clearErrors();
    data.category = selectedCategory;
    const currentDate = format(new Date(), 'MMM dd, yyyy');

    if (isEmpty(data.category)) {
      setError('category', {
        type: 'manual',
        message: '❌ Required'
      });
      return;
    } else {
      console.log(data);
      const success = await submitNewTicket(data);
      if (success) {
        setSubmittedTicket(
          new Ticket(
            0,
            currentDate,
            currUser.userId,
            currUser.fullName,
            data.amount,
            data.category,
            'pending',
            data.comments
          )
        );
        return;
      } else {
        console.log('API Error');
      }
    }
  };

  return (
    <>
      <Form
        formNoValidate
        className={styles.formContainer}
        onSubmit={handleSubmit(onSubmit)}>
        <ReadOnlyControls register={register} />

        <CategorySelect
          name="category"
          value={selectedCategory}
          onChange={handleCategorySelect}
          errors={errors}
          register={register}
        />

        <Form.Group controlId="amount">
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
                required: '❌ Amount is required',
                min: {
                  value: 0.01,
                  message: '❌ Amount must be greater than 0.00'
                },
                pattern: {
                  value: /^\d+(\.\d{1,2})?$/,
                  message: '❌ Incorrect format'
                }
              })}
            />
          </InputGroup>
        </Form.Group>

        <div className="small fst-italic my-1">
          <ErrorMessage
            errors={errors}
            name="amount"
          />
        </div>

        <CommentsControl register={register} />

        <SubmitBtn
          btnTxt="Submit Request"
          isLoading={isLoading}
        />
      </Form>
    </>
  );
}
