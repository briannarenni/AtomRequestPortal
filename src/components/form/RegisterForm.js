import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { isEmpty, startCase } from 'lodash';

import styles from '../../assets/_styles/Form.module.css';
import { useAuth, useUserAPI } from '../../hooks';
import { depts, registerSchema, registerDefaults } from '../../_data/_schemas';
import * as Control from '../../components/form/controls';
import { User } from '../../_data';

export default function RegisterForm() {
  const [selectedDept, setSelectedDept] = useState('');
  const { dispatch } = useAuth();
  const { isLoading, registerUser } = useUserAPI();
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, dirtyFields }
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: 'onBlur',
    defaultValues: { ...registerDefaults, dept: selectedDept }
  });

  const handleDeptSelect = (selectedOption) => {
    setSelectedDept(selectedOption.value);
  };

  const sendRegistration = async (data) => {
    const response = await registerUser(
      data.firstName,
      data.lastName,
      data.username,
      data.password,
      data.dept
    );

    if (response === 'Username already registered') {
      setError('username', {
        type: 'manual',
        message: '❌ Username already registered'
      });
    } else {
      const { userId, username, firstName, lastName, role, dept, numPending, numTickets } =
        response.data;

      const user = new User(
        userId,
        username,
        firstName,
        lastName,
        role,
        dept,
        numPending,
        numTickets
      );

      dispatch({ type: 'SET_CURR_USER', payload: user });
    }
  };

  const onSubmit = async (data) => {
    data.firstName = startCase(data.firstName);
    data.lastName = startCase(data.lastName);
    data.dept = selectedDept;

    if (isEmpty(data.dept)) {
      setError('dept', {
        type: 'manual',
        message: '❌ Required'
      });
      return;
    } else {
      console.log(data);
      clearErrors();
      await sendRegistration(data);
    }
  };

  return (
    <Form
      formNoValidate
      className={styles.formContainer}
      onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Row>
          <Col>
            <Control.FirstName
              name="firstName"
              errors={errors}
              register={register}
              formState={{ dirtyFields }}
            />
          </Col>
          <Col>
            <Control.LastName
              name="lastName"
              errors={errors}
              register={register}
              formState={{ dirtyFields }}
            />
          </Col>
        </Row>
      </div>

      <Control.DeptSelect
        name="dept"
        value={selectedDept}
        options={depts}
        onChange={handleDeptSelect}
        errors={errors}
        register={register}
        formState={{ dirtyFields }}
      />

      <Control.Username
        name="username"
        errors={errors}
        register={register}
        formState={{ dirtyFields }}
      />

      <p className={styles.formNote}>May contain numbers, but no spaces or special characters.</p>

      <Row>
        <Col>
          <Control.Password
            name="password"
            errors={errors}
            register={register}
            formState={{ dirtyFields }}
          />
        </Col>
        <Col>
          <Control.ConfirmPassword
            name="confirm"
            errors={errors}
            register={register}
            formState={{ dirtyFields }}
          />
        </Col>
        <p className={styles.formNote}>
          Must be min. 7 characters with at least 1 special char, may not contain spaces.
        </p>
      </Row>

      <Control.SubmitBtn
        btnTxt="Register Account"
        isLoading={isLoading}
      />
    </Form>
  );
}
