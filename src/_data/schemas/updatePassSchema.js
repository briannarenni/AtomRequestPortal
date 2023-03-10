import * as yup from 'yup';

export const updatePassDefaults = {
  password: '',
  confirm: ''
};

export const updatePassSchema = yup.object().shape({
  password: yup
    .string()
    .required('❌ Required')
    .min(7, '❌ Password must be at least 7 characters long')
    .matches(/^[^\s]+$/, '❌ No spaces allowed')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, '❌ Must contain at least 1 special character'),
  confirm: yup
    .string()
    .required('❌ Required')
    .min(7, '❌ Password must be at least 7 characters long')
    .oneOf([yup.ref('password'), null], '❌ Passwords must match')
    .matches(/^[^\s]+$/, '❌ No spaces allowed')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, '❌ Must contain at least 1 special character')
});
