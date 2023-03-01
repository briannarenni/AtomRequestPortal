import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import styles from '../../assets/styles/NavBtn.module.css';
import { SigninIcon } from '../icon';

export default function LoginBtn() {
  return (
    <Link to="/login">
      <Button
        variant="outline-primary"
        className={styles.navBtn}>
        <SigninIcon />
        Login
      </Button>
    </Link>
  );
}
