import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
// import * as Yup from 'yup';

import styles from '../assets/styles/Form.module.css';
import { useAuth, useUserAPI } from '../hooks';
import { validatePass, pwUpdateSchema } from '../_utils';
import { PageHeader } from '../components/ui';
import { Password, ConfirmPassword, SubmitBtn } from '../components/form';

export default function ChangePassword() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const { isLoggedIn, currUser } = useAuth();
  const { isLoading, error, updateUserPassword } = useUserAPI();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    } else {
      setUserId(currUser.userId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initialValues = {
    password: '',
    confirm: '',
  };


  const updatePassword = async (values) => {
    const response = await updateUserPassword(userId, values.password, values.confirm);
    console.log(response);
    // setUserMessage(response.data);
  };

  const onSubmit = async (values, { setFieldError }) => {
    if (values.password !== values.confirm) {
      setFieldError('confirm', "❌ Passwords don't match");
      return;
    }

    const { errors, validatePassword } = validatePass(values.password);

    if (!validatePassword) {
      const errorMessage = errors.join(' ');
      setFieldError('password', errorMessage);
    } else {
      await updatePassword(values);
    }
  };

  return (
    <>
      <header>
        <PageHeader title="Update User Password" />
        {userMessage && <h3>{userMessage}</h3>}
      </header>

      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onSubmit}>
        {({ isValid, dirty, errors, touched }) => (
          <Form className={styles.formContainer}>
            {/* show/hide readonly currPassword field? */}

            <Password
              name="password"
              error={errors.password}
              touched={touched.password}
            />

            <ConfirmPassword
              name="confirm"
              error={errors.confirm}
              touched={touched.confirm}
            />

            <SubmitBtn
              btnTxt="Save Changes"
              disabled={!isValid || !dirty}
            />
          </Form>
        )}
      </Formik>
    </>
  );
}
