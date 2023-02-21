import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import styles from '../assets/styles/Form.module.css';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { validatePass } from '../utils';
import { PageHeader } from "../components/ui";
import { FNameControl, LNameControl, UsernameControl, PasswordControl, ConfirmPasswordControl, SubmitBtn } from '../components/form';
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
    firstName: "",
    lastName: "",
    username: '',
    password: '',
    confirm: '',
  };

  const schema = Yup.object().shape({
    firstName: Yup.string().required('Required field'),
    lastName: Yup.string().required('Required field'),
    username: Yup.string()
      .required('Required field')
      .matches(/^[a-zA-Z0-9_]+(?!.*\s).*$/, '❌ No special characters allowed'),
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

    const response = await registerUser(values.firstName, values.lastName, values.username, values.password);

    if (response === 'Username already registered') {
      setFieldError('username', response);
    } else {
      setCurrUser(response.data);
    }
  };

  return (
    <div className='container-xs'>
      <header>
        <PageHeader title='Register Employee Account' />
      </header>

      <Formik
        initialValues={ initialValues }
        validationSchema={ schema }
        onSubmit={ onSubmit }
      >
        { ({ isValid, dirty, errors, touched }) => (
          <Form className={ styles.formContainer }>
            <div className='mt-4'>
              <Row>
                <Col>
                  <FNameControl
                    name='firstName'
                    error={ errors.firstName }
                    touched={ touched.firstName }
                  />
                </Col>
                <Col>
                  <LNameControl
                    name='lastName'
                    error={ errors.lastName }
                    touched={ touched.lastName }
                  />
                </Col>
              </Row>
            </div>

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

            <SubmitBtn btnTxt='Register Account' disabled={ !isValid || !dirty } />

            <div className={ styles.formNote }>
              <p>Username may contain numbers, but no spaces or special chars.
                <br />
                Password must be at least 8 characters.
              </p>
            </div>
          </Form>
        ) }
      </Formik>
    </div>
  );
}
