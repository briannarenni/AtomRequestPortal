import React, { useState, useEffect } from 'react';

import { BannerSuccess, BannerError } from '../../components/ux';
import { PageHeader } from '../../components/ui';
import { PwUpdateForm } from '../../components/form';

export default function UpdatePassword() {
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    let timeout;
    if (success || error) {
      timeout = setTimeout(() => {
        setSuccess('');
        setError('');
      }, 5000);
    }
    return () => clearTimeout(timeout);
  }, [success, error]);

  return (
    <>
      <header className="mb-3">
        {' '}
        <PageHeader title="Update User Password" />
      </header>

      {success && <BannerSuccess content={success} />}
      {error && <BannerError content={error} />}

      <PwUpdateForm
        setSuccess={(message) => {
          setSuccess(message);
          setError('');
        }}
        setError={(message) => {
          setError(message);
          setSuccess('');
        }}
      />
    </>
  );
}
