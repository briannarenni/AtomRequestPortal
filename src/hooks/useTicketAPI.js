import { useState } from 'react';
import axios from 'axios';

import { Tickets, handleAPIError } from '../_data';

export function useTicketAPI() {
  const [isLoading, setIsLoading] = useState(false);

  const getUserTickets = async (userId) => {
    try {
      setIsLoading(true);
      const response = await axios.post(Tickets.getUserTickets(userId), { userId });
      setIsLoading(false);
      return response.data;
    } catch (error) {
      setIsLoading(false);
      return error.response ? error.response.data : 'Internal API Error';
    }
  };

  const getAllTickets = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(Tickets.getAllTickets);
      setIsLoading(false);
      return response.data;
    } catch (error) {
      setIsLoading(false);
      return handleAPIError(error);
    }
  };

  const getPendingTickets = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(Tickets.getPendingTickets);
      setIsLoading(false);
      return response.data;
    } catch (error) {
      setIsLoading(false);
      return error.response ? error.response.data : 'Internal API Error';
    }
  };

  const submitTicket = async (userId, username, amount, category, comments = null) => {
    try {
      setIsLoading(true);
      const response = await axios.post(Tickets.submitTicket, {
        userId,
        username,
        amount,
        category,
        comments
      });
      setIsLoading(false);
      return response.data;
    } catch (error) {
      setIsLoading(false);
      return error.response ? error.response.data : 'Internal API Error';
    }
  };

  const searchTickets = async (ticketId) => {
    try {
      setIsLoading(true);
      const response = await axios.post(Tickets.searchTickets(ticketId), { ticketId });
      setIsLoading(false);
      return response.data;
    } catch (error) {
      setIsLoading(false);
      return error.response ? error.response.data : 'Internal API Error';
    }
  };

  const updateTicket = async (ticketId, newStatus) => {
    try {
      setIsLoading(true);
      const response = await axios.post(Tickets.updateTicket(ticketId), {
        ticketId,
        newStatus
      });
      setIsLoading(false);
      return response.data;
    } catch (error) {
      setIsLoading(false);
      return error.response ? error.response.data : 'Internal API Error';
    }
  };

  return {
    isLoading,
    getAllTickets,
    getPendingTickets,
    getUserTickets,
    submitTicket,
    searchTickets,
    updateTicket
  };
}
