import ky from 'ky';

const apiURL = 'https://requestportalapi.azurewebsites.net/';

export const loginUser = async (username, password) => {
  const response = await ky.post(`${apiURL}/users/login`, {
    json: { username, password }
  }).json();

  return response.status;
}

export const registerUser = async (username, password) => {
  const response = await ky.post(`${apiURL}/users/register`, {
    json: { username, password }
  }).json();

  return response.status;
}

export const getUserDetails = async (username) => {
  const response = await ky.post(`${apiURL}/users/${username}/details`).json();
  return (response.status === 200) ? response : 'Internal API Error';
}

export const getEmployees = async () => {
  const response = await ky.get(`${apiURL}/employees`).json();
  return (response.status === 200) ? response : 'Internal API Error';
}

export const updateUserPassword = async (username, password) => {
  const response = await ky.patch(`${apiURL}/users/${username}/update-password`, {
    json: { password }
  }).json();

  return (response.status === 200) ? response : 'Internal API Error';
}

export const updateUserRole = async (userId, role) => {
  const response = await ky.post(`${apiURL}/users/${userId}/update-role`, {
    json: { role }
  }).json();

  return (response.status === 200) ? response : 'Internal API Error';
}
