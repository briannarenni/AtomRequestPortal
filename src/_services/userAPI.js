// const apiURL = 'https://requestportalapi.azurewebsites.net';
import axios from "axios";

const apiURL = 'http://localhost:5256';

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${apiURL}/users/login`, { username, password });
    return response;
  } catch (error) {
    return (error.response) ? error.response.data : 'Internal API Error';
  }
};

export const registerUser = async (username, password) => {
  try {
    const response = await axios.post(`${apiURL}/users/register`, { username, password });
    return response;
  } catch (error) {
    return (error.response) ? error.response.data : 'Internal API Error';
  }
};

export const getUserDetails = async (username) => {
  try {
    const response = await axios.post(`${apiURL}/users/${username} `, { username });
    return (response.status === 200) ? response : 'Internal API Error';
  } catch (error) {
    return 'Internal API Error';
  }

};

export const getEmployees = async () => {
  try {
    const response = await axios.get(`${apiURL}/employees`);
    return (response.status === 200) ? response.data : 'Internal API Error';
  } catch (error) {
    return 'Internal API Error';
  }
};

export const updateUserPassword = async (userId, password, confirmPassword) => {
  try {
    const response = await axios.patch(`${apiURL}/users/${userId}/password`, { userId, password, confirmPassword });
    return (response.status === 200) ? response.data : 'Internal API Error';
  } catch (error) {
    return 'Internal API Error';
  }
};

export const updateUserRole = async (userId) => {
  try {
    const response = await axios.patch(`${apiURL}/users/${userId}/update-role`);
    return (response.status === 200) ? response.data : 'Internal API Error';
  } catch (error) {
    return 'Internal API Error';
  }

}
