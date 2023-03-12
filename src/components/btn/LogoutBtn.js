import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import styles from '../../assets/_styles/NavBtn.module.css';
import { useAuthRoute } from '../../hooks';
import { LogoutIcon } from './icon';

export default function LogoutBtn({ handler }) {
    const { baseURL } = useAuthRoute();

  return (
    <Link to={`/${baseURL}`}>
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
