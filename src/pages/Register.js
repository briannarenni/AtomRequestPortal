import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { isEmpty, startCase } from 'lodash';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import styles from '../assets/styles/Form.module.css';
import { useAuth } from '../hooks/useAuth';
import { useUserAPI } from '../hooks/useUserAPI';
import { validatePass } from '../_utils';
import { PageHeader } from '../components/ui';
import * as Control from '../components/form';

export default function Register() {
  const navigate = useNavigate();
  const { dispatch, currUser } = useAuth();
  const { isLoading, error, registerUser } = useUserAPI();

  useEffect(() => {
    if (!isEmpty(currUser)) {
      dispatch({ type: 'SET_IS_LOGGED_IN', payload: true });
      navigate('/dashboard');
    }
  }, [currUser, dispatch, navigate]);

  const initialValues = {
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirm: '',
  };

  const schema = Yup.object().shape({
    firstName: Yup.string().required('❌ Required'),
    lastName: Yup.string().required('❌ Required'),
    username: Yup.string()
      .required('❌ Required')
      .matches(/^[a-zA-Z0-9_]+(?!.*\s).*$/, '❌ No special characters allowed'),
    password: Yup.string().required('❌ Required'),
    confirm: Yup.string().required('❌ Required'),
  });

  const sendRegistration = async (values, { setFieldError }) => {
    const response = await registerUser(
      startCase(values.firstName),
      startCase(values.lastName),
      startCase(values.username),
      startCase(values.password)
    );

    if (response === 'Username already registered') {
      setFieldError('username', response);
    } else {
      dispatch({ type: 'SET_CURR_USER', payload: response.data });
    }
  };

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
    }

    await sendRegistration(values, { setFieldError });
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
