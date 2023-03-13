import React, { useState } from 'react';

import { PageHeader } from '../../components/ui';
import { BannerNote } from '../../components/ux';
import { RequestForm } from '../../components/form';
import { SuccessModal } from '../../components/ui/modal';

export default function SubmitRequest() {
  const [submittedTicket, setSubmittedTicket] = useState({});

  return (
    <div className="container-xs">
      <header className="mx-auto">
        <PageHeader title={'Submit New Request'} />
        <BannerNote note={'Please be sure to double check all fields before submitting'} />
      </header>
      <RequestForm setSubmittedTicket={setSubmittedTicket} />
      <SuccessModal ticketObj={submittedTicket} />
    </div>
  );
}
