import axios from "axios";

// const apiURL = 'https://requestportalapi.azurewebsites.net/';
const apiURL = 'http://localhost:5256';

export const submitTicket = async (userId, username, amount, category, comments = null) => {
  const response = await axios.post(`${apiURL}/tickets/all`, { userId, username, amount, category, comments });

  return (response.status === 200) ? response.data : 'Internal API Error';
};

export const getUserTickets = async (userId) => {
  const response = await axios.post(`${apiURL}/tickets/${userId}`);
  return response.data;
};

export const getAllTickets = async () => {
  const response = await axios.get(`${apiURL}/tickets/all`);
  return response.data;
};

export const getPendingTickets = async () => {
  const response = await axios.get(`${apiURL}/tickets/open`);
  return (response.status === 200) ? response.data : 'Internal API Error';
};

export const searchTickets = async (ticketId) => {
  const response = await axios.post(`${apiURL}/tickets/${ticketId}`, { ticketId });

  return (response.status === 200) ? response.data : response.data;
};
export const updateTicket = async (ticketId, newStatus) => {
  const response = await axios.post(`${apiURL}/tickets/${ticketId}`, { ticketId, newStatus });

  return (response.status === 200) ? response.data : 'Internal API Error';
};
