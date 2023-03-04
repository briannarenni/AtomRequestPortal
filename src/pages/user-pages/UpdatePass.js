import React from 'react';

import { PageHeader } from '../../components/ui';
import { PwUpdateForm } from '../../components/form';

export default function UpdatePassword() {

  return (
    <>
      <header>
        <PageHeader title="Update User Password" />
        {/* {userMessage && <h3>{userMessage}</h3>} */}
      </header>

      <PwUpdateForm />
    </>
  );
}
