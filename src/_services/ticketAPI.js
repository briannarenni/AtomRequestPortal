import ky from 'ky';

const apiURL = 'https://requestportalapi.azurewebsites.net/';

export const getUserTickets = async (userId) => {
  const response = await ky.post(`${this.URL}/tickets/${userId}`).json();
  return response;
}

export const submitTicket = async () => {
  const response = await ky.post(`${this.URL}/tickets/all`).json();
  return (response.status === 200) ? response : 'Internal API Error';
}

export const getAllTickets = async (userId, username, amount, category, comments = null) => {
  const response = await ky.get(`${this.URL}/tickets/all`).json();
  return response;
}

export const getPendingTickets = async () => {
  const response = await ky.get(`${this.URL}/tickets/open`).json();
  return (response.status === 200) ? response : 'Internal API Error';
}

export const searchTickets = async (ticketId) => {
  const response = await ky.post(`${this.URL}/tickets/${ticketId}`, {
    json: { ticketId }
  }).json();
  return (response.status === 200) ? response : response;
}

export const updateTicket = async (ticketId, newStatus) => {
  const response = await ky.post(`${this.URL}/tickets/${ticketId}`, {
    json: { ticketId, newStatus }
  }).json();
  return (response.status === 200) ? response : 'Internal API Error';
}
