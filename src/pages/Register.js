import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import styles from '../assets/styles/Form.module.css';
import { useAuth } from '../hooks/useAuth';
import { PageHeader } from "../components/ui";
import { UsernameControl, PasswordControl, ConfirmPasswordControl, SubmitBtn } from '../components/form';
import { registerUser } from "../data";

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
    username: '',
    password: '',
    confirm: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
    confirm: Yup.string().required('Password confirmation is required'),
  });

  const handleLogin = async (values, { setFieldError }) => {
    const response = await registerUser(values.username, values.password);

    if (response === 'Username already registered') {
      setFieldError('username', response);
      return;
    } else {
      setCurrUser(response.data);
    }
  }

  const onSubmit = async (values, { setFieldError }) => {
    if (values.password !== values.confirm) {
      setFieldError('password', "Passwords don't match");
      setFieldError('confirm', "Passwords don't match");
      return;
    }

    handleLogin();
  };

  return (
    <>
      <header>
        <PageHeader title='Register Employee' />
        <p className={ styles.formNote }>
          <span className={ styles.formNote }>
            <span className="fw-bold">HR Note: </span>
            New usernames may contain numbers, but no spaces or special chars.
            <br /> (ex. BrianSmith, BSmith, BSmith12)
          </span>
        </p>
      </header>

      <Formik
        initialValues={ initialValues }
        validationSchema={ validationSchema }
        onSubmit={ onSubmit }
      >
        { ({ isValid, dirty, errors, touched}) => (
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

            <SubmitBtn btnTxt='Register' disabled={ !isValid || !dirty } />
          </Form>
        ) }
      </Formik>
    </>
  );
}
