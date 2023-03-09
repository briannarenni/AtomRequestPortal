export function useSortFilter() {
  const filterBy = (ticketsArr, filter, sort) => {
    let filteredTickets = ticketsArr.slice();
    if (filter === 'none') {
      return filteredTickets;
    } else {
      filteredTickets = ticketsArr.filter((ticket) => ticket.status === filter);
      return sortTickets(filteredTickets, sort);
    }
  };

  const sortTickets = (ticketsArr, sortValue) => {
    let sortedTickets = ticketsArr.slice();
    // eslint-disable-next-line
    return sortedTickets.sort((a, b) => {
      if (sortValue === 'submittedOn') {
        return new Date(b.submittedOn) - new Date(a.submittedOn);
      } else if (sortValue === 'employeeName') {
        return a.employeeName.localeCompare(b.employeeName);
      } else if (sortValue === 'status') {
        return a.status.localeCompare(b.status);
      }
    });
  };

  const sortUsers = (usersArr, sortValue) => {
    let sortedUsers = usersArr.slice();
    // eslint-disable-next-line
    return sortedUsers.sort((a, b) => {
      if (sortValue === 'dept') {
        return a.dept.localeCompare(b.dept);
      } else if (sortValue === 'fullName') {
        return a.fullName.localeCompare(b.fullName);
      }
    });
  };

  return { filterBy, sortTickets, sortUsers };
}
