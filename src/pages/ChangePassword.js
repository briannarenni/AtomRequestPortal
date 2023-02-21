import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import styles from '../assets/styles/Form.module.css';
import { useAuth } from '../hooks/useAuth';
import { validatePass } from '../utils';
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

  const schema = Yup.object().shape({
    password: Yup.string().required('Required field'),
    confirm: Yup.string().required('Required field'),
  });

  const onSubmit = async (values, { setFieldError }) => {
    if (values.password !== values.confirm) {
      setFieldError('confirm', "Passwords don't match");
      return;
    }

    const { errors, validatePassword } = validatePass(values.password);

    if (!validatePassword) {
      const errorMessage = errors.join(" ");
      setFieldError('password', errorMessage);
    }

    const response = await updateUserPassword(userId, password, confirmedPassword);

    // setUserMessage(response.data);
  }

  return (
    <>
      <header>
        <PageHeader title="Update User Password" />
        { userMessage && (<h3>{ userMessage }</h3>) }
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

