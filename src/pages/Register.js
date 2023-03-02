import React, { useState, useEffect } from 'react';
import { isEmpty, startCase } from 'lodash';
import { Form, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import styles from '../assets/styles/Form.module.css';
import { useAuth, useUserAPI } from '../hooks';
import { depts, registerSchema, registerDefaults } from '../data/schemas';
import { PageHeader } from '../components/ui';
import * as Control from '../components/form';

export default function Register() {
  const navigate = useNavigate();
  const { dispatch, currUser } = useAuth();
  const { isLoading, registerUser } = useUserAPI();
  const [selectedDept, setSelectedDept] = useState('');
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

  useEffect(() => {
    if (!isEmpty(currUser)) {
      dispatch({ type: 'SET_IS_LOGGED_IN', payload: true });
      navigate('/dashboard');
    }
  }, [currUser, dispatch]);

  const handleDeptSelect = (selectedOption) => {
    setSelectedDept(selectedOption.value);
    console.log('selectedDept:', selectedOption.value);
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
      dispatch({ type: 'SET_CURR_USER', payload: response.data });
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
    <div className="container-xs">
      <header>
        <PageHeader title="Register Employee Account" />
      </header>

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
          disabled={isLoading}
        />
      </Form>
    </div>
  );
}
