import React, { useEffect } from 'react';
import { isEmpty } from 'lodash';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import styles from '../assets/styles/Form.module.css';
import { useAuth, useUserAPI } from '../hooks';
import { loginSchema, loginDefaults } from '../_data/schemas';
import { PageHeader, BannerNote } from '../components/ui';
import { Username, Password, SubmitBtn } from '../components/form';

export default function Login() {
  const navigate = useNavigate();
  const { dispatch, currUser } = useAuth();
  const { isLoading, loginUser } = useUserAPI();
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onBlur',
    defaultValues: { loginDefaults },
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

  const onSubmit = async (data) => {
    clearErrors();

    const response = await loginUser(data.username, data.password);
    if (response === 'Username incorrect') {
      setError('username', {
        type: 'manual',
        message: '❌ Username incorrect',
      });
    } else if (response === 'Password incorrect') {
      setError('password', {
        type: 'manual',
        message: '❌ Password incorrect',
      });
    } else {
      dispatch({ type: 'SET_CURR_USER', payload: response.data });
    }
  };

  return (
    <div className="container-xs">
      <header className=" mx-auto">
        <PageHeader title="Account Login" />
        <BannerNote
          note={'For forgotten passwords, please speak to your supervisor or HR for reset.'}
        />
      </header>

      <Form
        formNoValidate
        className={styles.formContainer}
        onSubmit={handleSubmit(onSubmit)}>
        <Username
          name="username"
          errors={errors}
          register={register}
        />

        <Password
          name="password"
          errors={errors}
          register={register}
        />

        <SubmitBtn
          btnTxt="Login"
          disabled={isLoading}
        />
      </Form>
    </div>
  );
}
