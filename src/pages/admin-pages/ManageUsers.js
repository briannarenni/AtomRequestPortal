import React, { useState, useEffect } from 'react';

import { useUserAPI } from '../../hooks';
import { User } from '../../_data';
import { BannerError, LoadingComp } from '../../components/ux';
import { PageHeader } from '../../components/ui';
import { UserTable } from '../../components/ui/tables';

export default function ManageUsers() {
  const { isLoading, getUsers } = useUserAPI();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const fetchedUsers = await getUsers();
    console.log(fetchedUsers);

    const Users = fetchedUsers.map(
      (user) =>
        (user = new User(
          user.userId,
          user.username,
          user.firstName,
          user.lastName,
          user.role,
          user.dept,
          user.numPending,
          user.numTickets
        ))
    );
    setUsers(Users);
  }

  return (
    <div className="container-xs">
      <header className="mx-auto">
        <PageHeader title={'Registered Users '} />
      </header>

      <main>
        {isLoading && <LoadingComp />}
        {!isLoading && users.length === 0 ? (
          <div className="mt-3">
            <BannerError content={`No users found`} />
          </div>
        ) : (
          <>
            <UserTable users={users} />
          </>
        )}
      </main>
    </div>
  );
}
