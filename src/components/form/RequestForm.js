import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Divider } from 'primereact/divider';
import { useForm } from 'react-hook-form';
import { isEmpty } from 'lodash';
import { format } from 'date-fns';

import styles from '../../assets/_styles/Form.module.css';
import { useAuth, useTicketAPI } from '../../hooks';
import { ReadOnlyControls } from '../form-control/readonlys';
import { AmountControl, CommentsControl } from '../form-control';
import { CategorySelect } from '../form-control/dropdowns';
import { SubmitBtn } from '../form-control';
import { Ticket } from '../../_data';

export default function RequestForm({ setSubmittedTicket }) {
  const { currUser, dispatch } = useAuth();
  const { isLoading, submitTicket } = useTicketAPI();
  const [selectedCategory, setSelectedCategory] = useState('');

  const defaults = {
    userId: currUser.userId,
    employeeName: currUser.fullName,
    amount: null,
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
    console.log(selectedOption.value);
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
        <Divider
          align="left"
          className="my-2">
          <span className="fw-bold small">User Details</span>
        </Divider>

        <ReadOnlyControls register={register} />

        <Divider
          align="left"
          className="my-2">
          <span className="fw-bold small">Expense Details</span>
        </Divider>

        <AmountControl
          name="amount"
          errors={errors}
          watch={watch}
          register={register}
        />

        <CategorySelect
          name="category"
          value={selectedCategory}
          onChange={handleCategorySelect}
          errors={errors}
          register={register}
        />

        <CommentsControl register={register} />

        <SubmitBtn
          btnTxt="Submit Request"
          isLoading={isLoading}
        />
      </Form>
    </>
  );
}
