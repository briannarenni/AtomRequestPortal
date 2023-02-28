import React from 'react';
import Alert from 'react-bootstrap/Alert';

import styles from '../../assets/styles/Banner.module.css';
import { MessageIcon } from '../../components/icon';

export default function BannerSuccess({ content }) {
  return (
    <>
      <Alert
        variant="none"
        className={styles.bannerSignin}>
        <MessageIcon />
        <span className="mx-1">{content}</span>
      </Alert>
    </>
  );
}