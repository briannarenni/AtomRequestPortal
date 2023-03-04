import React, { useState } from 'react';

import { PageHeader, BannerNote } from '../../components/ui';
import { NewRequestForm } from '../../components/form';
import { SuccessModal } from '../../components/modal';

export default function SubmitRequest() {
  const [submittedTicket, setSubmittedTicket] = useState({});

  return (
    <div className="container-xs">
      <header className="mx-auto">
        <PageHeader title={'Submit New Request'} />
        <BannerNote
          note={'Please be sure to double check all given info before clicking Submit Request'}
        />
      </header>
      <NewRequestForm setSubmittedTicket={setSubmittedTicket} />
      <SuccessModal ticketObj={submittedTicket} />
    </div>
  );
}
