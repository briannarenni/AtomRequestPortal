import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  firstName: yup.string().required('❌ Required'),
  lastName: yup.string().required('❌ Required'),
  username: yup
    .string()
    .required('❌ Required')
    .matches(/^[a-zA-Z0-9_]+(?!.*\s).*$/, '❌ Must not contain spaces or special characters'),
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
    .matches(/[!@#$%^&*(),.?":{}|<>]/, '❌ Must contain at least 1 special character'),
});

export const registerDefaults = {
  firstName: '',
  lastName: '',
  username: '',
  password: '',
  confirm: '',
};
