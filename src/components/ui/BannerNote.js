import React from 'react';
import Alert from 'react-bootstrap/Alert';

import styles from '../../assets/styles/Banner.module.css';
import { NoteIcon } from '../../components/icon';

export default function BannerNote({ note }) {
  return (
    <>
      <div className={styles.bannerNote}>
        <Alert variant="info">
          <NoteIcon />
          <span className="mx-1 small">{note}</span>
        </Alert>
      </div>
    </>
  );
}
