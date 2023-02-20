import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import styles from '../assets/styles/Form.module.css';
import { useAuth } from '../hooks/useAuth';
import { PageHeader } from "../components/ui";
import { UsernameControl, PasswordControl, SubmitBtn } from '../components/form';
import { loginUser } from "../data";

export default function Login() {
  const navigate = useNavigate();
  const { setIsLoggedIn, currUser, setCurrUser } = useAuth();

  useEffect(() => {
    if (Object.keys(currUser).length > 0) {
      setIsLoggedIn(true);
      navigate('/dashboard');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currUser]);

  const initialValues = {
    username: '',
    password: '',
  };

  const schema = Yup.object().shape({
    username: Yup.string().required('Username cannot be blank'),
    password: Yup.string().required('Password cannot be blank'),
  });

  const onSubmit = async (values, { setFieldError }) => {
    const response = await loginUser(values.username, values.password);
    if (response === 'Username incorrect') {
      setFieldError('username', response);
    } else if (response === 'Password incorrect') {
      setFieldError('password', response);
    } else {
      setCurrUser(response.data);
    }
  };

  return (
    <>
      <header>
        <PageHeader title='Account Login' />
        <p className={ styles.formNote }>
          For forgotten passwords, please speak to HR for reset.
        </p>
      </header>

      <Formik
        initialValues={ initialValues }
        validationSchema={ schema }
        onSubmit={ onSubmit }
      >
        { ({ isValid, dirty, errors, touched }) => (
          <Form className={ styles.formContainer }>

            <UsernameControl
              name='username'
              error={ errors.username }
              touched={ touched.username }
            />

            <PasswordControl
              name='password'
              error={ errors.password }
              touched={ touched.password }
            />

            <SubmitBtn btnTxt='Login' disabled={ !isValid || !dirty } />
          </Form>
        ) }
      </Formik>
    </>
  );
}

