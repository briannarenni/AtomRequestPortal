import { useState } from 'react';
import axios from 'axios';

import { Users, handleAPIError } from '../data/endpoints';

export function useUserAPI() {
  const [isLoading, setIsLoading] = useState(false);

  const loginUser = async (username, password) => {
    try {
      setIsLoading(true);
      const response = await axios.post(Users.login, { username, password });
      setIsLoading(false);
      return response;
    } catch (error) {
      setIsLoading(false);
      return error.response ? error.response.data : 'Internal API Error';
    }
  };

  const registerUser = async (firstName, lastName, username, password) => {
    try {
      setIsLoading(true);
      const response = await axios.post(Users.register, {
        firstName,
        lastName,
        username,
        password,
      });
      setIsLoading(false);
      return response;
    } catch (error) {
      setIsLoading(false);
      return error.response ? error.response.data : 'Internal API Error';
    }
  };

  const getUserDetails = async (userId) => {
    try {
      setIsLoading(true);
      const response = await axios.post(Users.userDetails(userId), { userId });
      setIsLoading(false);
      return response.status === 200 ? response : 'Internal API Error';
    } catch (error) {
      setIsLoading(false);
      const status = error.response ? error.response.status : 500;
      return `${status} ${error.message}`;
    }
  };

  const updateUserPassword = async (userId, password, confirmPassword) => {
    try {
      setIsLoading(true);
      const response = await axios.patch(Users.updatePassword(userId), {
        userId,
        password,
        confirmPassword,
      });
      setIsLoading(false);
      return response.status === 200 ? response.data : 'Internal API Error';
    } catch (error) {
      setIsLoading(false);
      return handleAPIError(error);
    }
  };

  const updateUserRole = async (userId) => {
    try {
      setIsLoading(true);
      const response = await axios.patch(Users.updateRole(userId));
      setIsLoading(false);
      return response.status === 200 ? response.data : 'Internal API Error';
    } catch (error) {
      setIsLoading(false);
      return handleAPIError(error);
    }
  };

  const getEmployees = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(Users.employees);
      setIsLoading(false);
      return response.status === 200 ? response.data : 'Internal API Error';
    } catch (error) {
      setIsLoading(false);
      return handleAPIError(error);
    }
  };

  return {
    isLoading,
    loginUser,
    registerUser,
    getUserDetails,
    updateUserPassword,
    updateUserRole,
    getEmployees,
  };
}
