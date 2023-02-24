import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import styles from '../assets/styles/Form.module.css';
import { useAuth } from '../hooks/useAuth';
import { validatePass } from '../utils';
import { PageHeader } from '../components/ui';
import * as Control from '../components/form';
import { registerUser } from '../data';

export default function Register() {
  const navigate = useNavigate();
  const { setIsLoggedIn, currUser, setCurrUser } = useAuth();

  useEffect(() => {
    if (Object.keys(currUser).length > 0) {
      setIsLoggedIn(true);
      navigate('/dashboard');
    }
  }, [currUser, setIsLoggedIn, navigate]);

  const initialValues = {
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirm: '',
  };

  const schema = Yup.object().shape({
    firstName: Yup.string().required('Required field'),
    lastName: Yup.string().required('Required field'),
    username: Yup.string()
      .required('❌ Required')
      .matches(/^[a-zA-Z0-9_]+(?!.*\s).*$/, '❌ No special characters allowed'),
    password: Yup.string().required('❌ Required'),
    confirm: Yup.string().required('❌ Required'),
  });

  const onSubmit = async (values, { setFieldError }) => {
    if (values.password !== values.confirm) {
      setFieldError('password', '❌ Passwords must match');
      setFieldError('confirm', '❌ Passwords must match');
      return;
    }

    const { errors, validatePassword } = validatePass(values.password);

    if (!validatePassword) {
      const errorMessage = errors.join(' ');
      setFieldError('password', errorMessage);
      return;
    }

    const response = await registerUser(
      values.firstName,
      values.lastName,
      values.username,
      values.password
    );

    if (response === 'Username already registered') {
      setFieldError('username', response);
      return;
    } else {
      setCurrUser(response.data);
    }
  };

  return (
    <div className="container-xs">
      <header>
        <PageHeader title="Register Employee Account" />
      </header>

      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onSubmit}>
        {({ errors, touched }) => (
          <Form className={styles.formContainer}>
            <div className="mt-4">
              <Row>
                <Col>
                  <Control.FirstName
                    name="firstName"
                    error={errors.firstName}
                    touched={touched.firstName}
                  />
                </Col>
                <Col>
                  <Control.LastName
                    name="lastName"
                    error={errors.lastName}
                    touched={touched.lastName}
                  />
                </Col>
              </Row>
            </div>

            <Control.Username
              name="username"
              error={errors.username}
              touched={touched.username}
            />

            <Row>
              <Col>
                <Control.Password
                  name="password"
                  error={errors.password}
                  touched={touched.password}
                />
              </Col>
              <Col>
                <Control.ConfirmPassword
                  name="confirm"
                  error={errors.confirm}
                  touched={touched.confirm}
                />
              </Col>
            </Row>

            <Control.SubmitBtn btnTxt="Register Account" />

            <div className={styles.formNote}>
              <p>
                Username may contain numbers, but no spaces or special chars.
                <br />
                Password must be at least 8 characters.
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
