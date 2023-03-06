const apiURL = 'http://localhost:5256';

export const Users = {
  getUsers: `${apiURL}/users`,
  login: `${apiURL}/users/login`,
  register: `${apiURL}/users/register`,
  getEmployees: `${apiURL}/users/employees`,
  userDetails: (userId) => `${apiURL}/users/${userId}`,
  updatePassword: (userId) => `${apiURL}/users/${userId}/password`,
  updateRole: (userId) => `${apiURL}/users/${userId}/role`
};

export const Tickets = {
  getAllTickets: `${apiURL}/tickets`,
  getPendingTickets: `${apiURL}/tickets/open`,
  submitTicket: `${apiURL}/tickets/submit`,
  getUserTickets: (userId) => `${apiURL}/users/${userId}/tickets`,
  searchTickets: (ticketId) => `${apiURL}/tickets/${ticketId}`,
  updateTicket: (ticketId) => `${apiURL}/tickets/${ticketId}`
};

export const handleAPIError = (error) => {
  const status = error.response ? error.response.status : 500;
  return `${status} ${error.message}`;
};

export const getStatusMessage = (status) => {
  switch (status) {
    case 400:
      return 'Bad Request';
    case 401:
      return 'Unauthorized';
    case 403:
      return 'Forbidden';
    case 404:
      return 'Not Found';
    case 500:
      return 'Internal Server Error';
    default:
      return 'Unknown Error';
  }
};
