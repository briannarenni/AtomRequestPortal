import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import styles from '../assets/styles/Form.module.css';
import { useAuth, useUserAPI } from '../hooks';
import { updatePassSchema, updatePassDefaults } from '../_data/schemas';
import { PageHeader } from '../components/ui';
import { Password, ConfirmPassword, SubmitBtn } from '../components/form';

export default function ChangePassword() {
  const navigate = useNavigate();
  const { isLoggedIn, currUser } = useAuth();
  const { isLoading, updateUserPassword } = useUserAPI();

  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors, dirtyFields },
  } = useForm({
    resolver: yupResolver(updatePassSchema),
    mode: 'onBlur',
    defaultValues: { ...updatePassDefaults },
  });

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    if (!isEmpty(currUser)) {
      setUserId(currUser.userId);
    }
  }, [currUser]);

  const updatePassword = async (values) => {
    const response = await updateUserPassword(userId, values.password, values.confirm);
    console.log(response);
  };

  const onSubmit = async (data) => {
    clearErrors();
    await updatePassword(data);
  };

  return (
    <>
      <header>
        <PageHeader title="Update User Password" />
        {userMessage && <h3>{userMessage}</h3>}
      </header>

      <Form
        formNoValidate
        className={styles.formContainer}
        onSubmit={handleSubmit(onSubmit)}>
        <Password
          name="password"
          errors={errors}
          register={register}
          formState={{ dirtyFields }}
        />

        {/* show/hide readonly currPassword field? */}

        <ConfirmPassword
          name="confirm"
          errors={errors}
          register={register}
          formState={{ dirtyFields }}
        />
        <p className={styles.formNote}>
          Must be min. 7 characters with at least 1 special char, may not contain spaces.
        </p>
        <SubmitBtn
          btnTxt="Save Changes"
          disabled={!isValid || !dirty}
        />
      </Form>
    </>
  );
}
