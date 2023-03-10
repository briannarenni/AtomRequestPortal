import React from 'react';
import { Form } from 'react-bootstrap';
import { Divider } from 'primereact/divider';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import styles from '../../assets/_styles/Form.module.css';
import { useAuth, useUserAPI } from '../../hooks';
import { loginSchema, loginDefaults } from '../../_data/schemas';
import { Username, PasswordInput, SubmitBtn } from '../form-control';
import { User } from '../../_data';

export default function LoginForm() {
  const { dispatch } = useAuth();
  const { isLoading, loginUser } = useUserAPI();
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, dirtyFields }
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onBlur',
    defaultValues: { ...loginDefaults }
  });

  const successLogin = (response) => {
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
    return;
  };

  const onSubmit = async (data) => {
    clearErrors();

    const response = await loginUser(data.username, data.password);
    if (response === 'Username incorrect') {
      setError('username', {
        type: 'manual',
        message: '❌ Username incorrect'
      });
    } else if (response === 'Password incorrect') {
      setError('password', {
        type: 'manual',
        message: '❌ Password incorrect'
      });
    } else {
      successLogin(response);
    }
  };

  return (
    <Form
      formNoValidate
      className={styles.formContainer}
      onSubmit={handleSubmit(onSubmit)}>
      <Divider
        align="left"
        className="mb-0">
        <span className="fw-bold small">Enter Login Info</span>
      </Divider>

      <div className="my-3">
        <Username
          name="username"
          errors={errors}
          register={register}
          formState={{ dirtyFields }}
        />
      </div>

      <div className="">
        <PasswordInput
          name="password"
          label={'Enter Password'}
          errors={errors}
          register={register}
          formState={{ dirtyFields }}
        />
      </div>

      <SubmitBtn
        btnTxt="Login"
        isLoading={isLoading}
      />
    </Form>
  );
}
