import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import styles from '../../assets/_styles/NavBtn.module.css';
import { useAuthRoute } from '../../hooks';
import { SigninIcon } from './icon';

export default function LoginBtn() {
  const { baseURL } = useAuthRoute();

  return (
    <Link to={`${baseURL}/login`}>
      <Button
        variant="outline-primary"
        className={styles.navBtn}>
        <SigninIcon />
        Login
      </Button>
    </Link>
  );
}
