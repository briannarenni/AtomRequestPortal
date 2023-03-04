import React, { useState } from 'react';
import { Form, InputGroup, Row, Col } from 'react-bootstrap';
import Select from 'react-select';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { isEmpty } from 'lodash';
import { format } from 'date-fns';

import styles from '../../assets/_styles/Form.module.css';
import { useAuth, useTicketAPI } from '../../hooks';
import { Ticket } from '../../_data';
import { SubmitBtn } from '../form/controls';

export default function NewRequestForm({ setSubmittedTicket }) {
  const { currUser, dispatch } = useAuth();
  const { isLoading, submitTicket } = useTicketAPI();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [commentsLength, setCommentsLength] = useState(0);

  const defaults = {
    userId: currUser.userId,
    employeeName: currUser.fullName,
    amount: 0.0,
    category: '',
    comments: null
  };

  const categories = [
    { value: 'Travel', label: 'Travel' },
    { value: 'Lodging', label: 'Lodging' },
    { value: 'Job Supplies', label: 'Job Supplies' },
    { value: 'Meals/Catering', label: 'Meals/Catering' },
    { value: 'Medical', label: 'Medical' },
    { value: 'Misc/Other', label: 'Misc/Other' }
  ];

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
        <div>
          <Row>
            <Col sm={6}>
              <Form.Group controlId="employeeName">
                <Form.Label className="fw-light">Employee Name</Form.Label>
                <Form.Control
                  disabled
                  readOnly
                  defaultValue={currUser.fullName}
                  {...register('employeeName')}
                />
              </Form.Group>
            </Col>

            <Col sm={6}>
              <Form.Group controlId="userId">
                <Form.Label className="fw-light">Employee ID</Form.Label>
                <Form.Control
                  disabled
                  readOnly
                  defaultValue={currUser.userId}
                  {...register('userId')}
                />
              </Form.Group>
            </Col>
          </Row>
        </div>

        <Form.Group
          controlId={'category'}
          className="my-2">
          <Form.Label className="fw-light">
            <span>Request Category</span>
            <span className={styles.formNote}> (Required)</span>
          </Form.Label>
          <Select
            placeholder="Select Category"
            {...register('category')}
            options={categories}
            value={categories.find((option) => option.value === selectedCategory)}
            onChange={(selectedOption) => {
              handleCategorySelect(selectedOption);
            }}
            menuPortalTarget={document.body}
            styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
          />

          <div className="small fst-italic my-1">
            <ErrorMessage
              errors={errors}
              name={'category'}
            />
          </div>
        </Form.Group>

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

        <Form.Group controlId="comments">
          <Form.Label className="fw-light">Comments (opt.)</Form.Label>
          <Form.Control
            as="textarea"
            maxLength={500}
            {...register('comments')}
            onChange={(e) => {
              const inputLength = e.target.value.length;
              setCommentsLength(inputLength);
            }}
          />
          <div className="small fst-italic my-1 text-end">
            {commentsLength}/{500} characters
          </div>
        </Form.Group>

        <SubmitBtn
          btnTxt="Submit Request"
          isLoading={isLoading}
        />
      </Form>
    </>
  );
}
