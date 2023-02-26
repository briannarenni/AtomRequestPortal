import * as yup from 'yup';

export const loginDefaults = { username: '', password: '' };

export const loginSchema = yup.object().shape({
  username: yup.string().required('❌ Required'),
  password: yup.string().required('❌ Required')
});
