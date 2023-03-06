import React from 'react';
import Alert from 'react-bootstrap/Alert';

import styles from '../../assets/_styles/Banner.module.css';
import { AlertIcon } from '../../components/icon';

export default function BannerSuccess({ content }) {
  return (
    <>
      <Alert
        variant="none"
        className={styles.bannerError}>
        <AlertIcon />
        <span className="mx-1">{content}</span>
      </Alert>
    </>
  );
}
