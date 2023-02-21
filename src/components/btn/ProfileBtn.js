import React from 'react';
import styles from '../../assets/styles/NavBtn.module.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { UserIcon } from '../icon';

export default function ProfileBtn() {

  return (
    <Link to="/account">
      <Button variant="outline-primary" className={ styles.navBtn }>
        <UserIcon />
        Profile
      </Button>
    </Link>

  )
}

