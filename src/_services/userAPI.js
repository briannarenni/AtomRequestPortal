import ky from 'ky';

const apiURL = 'https://requestportalapi.azurewebsites.net/';

export const loginUser = async (username, password) => {
  const response = await ky.post(`${URL}/users/login`, {
    json: { username, password }
  }).json();

  return (response.status === 200) ? this.userDetails(username) : response;
}

export const registerUser = async (username, password) => {
  const response = await ky.post(`${URL}/users/register`, {
    json: { username, password }
  }).json();

  return (response.status === 200) ? this.userDetails(username) : response;
}

export const getUserDetails = async (username) => {
  try {
    const response = await ky.post(`${URL}/users/${username}/details`).json();
    if (response.status === 201) {
      return response;
    }
  } catch (error) {
    if (error.response.status === 400) {
      return 'Internal API error';
    }
  }
}

export const getEmployees = async () => {
  const response = await ky.get(`${URL}/employees`).json();
  return (response.status === 200) ? response : 'Internal API Error';
}

export const updateUserPassword = async (username, password) => {
  const response = await ky.patch(`${URL}/users/${username}/update-password`, {
    json: { password }
  }).json();
  return (response.status === 200) ? response : 'Internal API Error';
}

export const updateUserRole = async (userId, role) => {
  const response = await ky.post(`${URL}/users/${userId}/update-role`, {
    json: { role }
  }).json();
  return (response.status === 200) ? response : 'Internal API Error';
}
