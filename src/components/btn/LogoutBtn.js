import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import styles from '../../assets/styles/NavBtn.module.css';
import { LogoutIcon } from '../icon';

export default function LogoutBtn({ handler }) {
  return (
    <Link to="/">
      <Button
        variant="outline-danger"
        onClick={handler}
        className={styles.logoutBtn}>
        <LogoutIcon />
        Logout
      </Button>
    </Link>
  );
}
