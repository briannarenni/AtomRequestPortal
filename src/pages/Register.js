import React, { useEffect } from 'react';
import { isEmpty, startCase } from 'lodash';
import { useNavigate } from 'react-router-dom';
import { Form, Alert, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import styles from '../assets/styles/Form.module.css';
import { useAuth, useUserAPI } from '../hooks';
import { registerSchema, registerDefaults } from '../_data/schemas';
import { PageHeader, BannerNote } from '../components/ui';
import * as Control from '../components/form';

export default function Register() {
  const navigate = useNavigate();
  const { dispatch, currUser } = useAuth();
  const { isLoading, registerUser } = useUserAPI();
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: 'onBlur',
    defaultValues: { registerDefaults },
  });

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  useEffect(() => {
    if (!isEmpty(currUser)) {
      dispatch({ type: 'SET_IS_LOGGED_IN', payload: true });
      navigate('/dashboard');
    }
  }, [currUser, dispatch, navigate]);

  const sendRegistration = async (data) => {
    const response = await registerUser(
      startCase(data.firstName),
      startCase(data.lastName),
      startCase(data.username),
      startCase(data.password)
    );

    if (response === 'Username already registered') {
      setError('username', {
        type: 'manual',
        message: '❌ Username already registered',
      });
    } else {
      dispatch({ type: 'SET_CURR_USER', payload: response.data });
    }
  };

  const onSubmit = async (data) => {
    clearErrors();
    await sendRegistration(data);
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
              />
            </Col>
            <Col>
              <Control.LastName
                name="lastName"
                errors={errors}
                register={register}
              />
            </Col>
          </Row>
        </div>

        <Control.Username
          name="username"
          errors={errors}
          register={register}
        />
        <p className={styles.formNote}>May contain numbers, but no spaces or special characters.</p>

        <Row>
          <Col>
            <Control.Password
              name="password"
              errors={errors}
              register={register}
            />
          </Col>
          <Col>
            <Control.ConfirmPassword
              name="confirm"
              errors={errors}
              register={register}
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
