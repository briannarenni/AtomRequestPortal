import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import styles from '../../assets/_styles/Form.module.css';
import { useAuth, useUserAPI } from '../../hooks';
import { updatePassSchema, updatePassDefaults } from '../../components/form/_schemas';
import { ReadOnlyPassword, Password, ConfirmPassword, SubmitBtn } from '../form/controls';

export default function PwUpdateForm({ setSuccess, setError }) {
  const [currPassword, setCurrPassword] = useState('');
  const { currUser } = useAuth();
  const { isLoading, getUserPassword, updateUserPassword } = useUserAPI();
  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors, dirtyFields }
  } = useForm({
    resolver: yupResolver(updatePassSchema),
    mode: 'onBlur',
    defaultValues: { ...updatePassDefaults }
  });

  useEffect(() => {
    const fetchPassword = async () => {
      const userPassword = await getUserPassword(currUser.userId);
      setCurrPassword(userPassword);
    };
    fetchPassword();
  }, []);

  const updatePassword = async (data) => {
    const response = await updateUserPassword(currUser.userId, data.password, data.confirm);
    if (response.status === 200) {
      setSuccess(response.data);
      reset();
    } else {
      setError(response.data);
    }
    return;
  };

  const onSubmit = async (data) => {
    clearErrors();
    await updatePassword(data);
  };

  return (
    <Form
      formNoValidate
      className={styles.formContainer}
      onSubmit={handleSubmit(onSubmit)}>
      <ReadOnlyPassword
        name="readonly"
        currPass={currPassword}
      />

      <Password
        name="password"
        label={'Enter New Password'}
        errors={errors}
        register={register}
        formState={{ dirtyFields }}
      />

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
        btnTxt="Update Password"
        isLoading={isLoading}
      />
    </Form>
  );
}
