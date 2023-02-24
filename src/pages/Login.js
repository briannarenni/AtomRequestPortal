import React, { useEffect } from 'react';
import isEmpty from 'lodash/isEmpty';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import styles from '../assets/styles/Form.module.css';
import { useAuth } from '../hooks/useAuth';
import { PageHeader } from '../components/ui';
import { Username, Password, SubmitBtn } from '../components/form';
import { loginUser } from '../data';

export default function Login() {
  const navigate = useNavigate();
  const { dispatch, currUser } = useAuth();

  useEffect(() => {
    if (!isEmpty(currUser)) {
      dispatch({ type: 'SET_IS_LOGGED_IN', payload: true });
      navigate('/dashboard');
    }
  }, [currUser, dispatch, navigate]);

  const initialValues = {
    username: '',
    password: '',
  };

  const schema = Yup.object().shape({
    username: Yup.string().required('❌ Required'),
    password: Yup.string().required('❌ Required'),
  });

  const onSubmit = async (values, { setFieldError }) => {
    const response = await loginUser(values.username, values.password);
    if (response === 'Username incorrect') {
      setFieldError('username', response);
    } else if (response === 'Password incorrect') {
      setFieldError('password', response);
    } else {
      dispatch({ type: 'SET_CURR_USER', payload: response.data });
    }
  };

  return (
    <div className="container-xs">
      <header>
        <PageHeader title="Account Login" />
        <p className={styles.formNote}>For forgotten passwords, please speak to HR for reset.</p>
      </header>

      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onSubmit}>
        {({ isValid, dirty, errors, touched }) => (
          <Form className={styles.formContainer}>
            <Username
              name="username"
              error={errors.username}
              touched={touched.username}
            />

            <Password
              name="password"
              error={errors.password}
              touched={touched.password}
            />

            <SubmitBtn
              btnTxt="Login"
              disabled={!isValid || !dirty}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}
