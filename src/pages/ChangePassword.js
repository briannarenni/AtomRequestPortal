import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import styles from '../assets/styles/Form.module.css';
import { useAuth } from '../hooks/useAuth';
import { updateUserPassword } from "../modules/ServiceModule";
import { PageHeader } from "../components/ui";
import { PasswordControl, ConfirmPasswordControl, SubmitBtn } from '../components/form';
import { PageHeader } from "../components/ui";

export default function ChangePassword() {
  const navigate = useNavigate();
  const { isLoggedIn, currUser } = useAuth();
  const [userId, setUserId] = useState('');

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }

    setUserId(currUser.userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const initialValues = {
    username: '',
    password: '',
    confirm: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
    confirm: Yup.string().required('Password confirmation is required'),
  });

  const updatePassword = async () => {
    const response = await updateUserPassword(userId, password, confirmedPassword);

    // setUserMessage(response.data);
  }

  const onSubmit = async (values, { setFieldError }) => {
    if (values.password !== values.confirm) {
      setFieldError('password', "Passwords don't match");
      setFieldError('confirm', "Passwords don't match");
      return;
    }

    updatePassword();
  }

  return (
    <>
      <header>
        <PageHeader title="Update User Password" />
        { userMessage && (<h3>{ userMessage }</h3>) }
      </header>

      <Formik
        initialValues={ initialValues }
        validationSchema={ validationSchema }
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

            <ConfirmPasswordControl
              name='confirm'
              error={ errors.confirm }
              touched={ touched.confirm }
            />

            <SubmitBtn btnTxt='Save Changes' disabled={ !isValid || !dirty } />
          </Form>
        ) }
      </Formik>
    </>
  );
}

