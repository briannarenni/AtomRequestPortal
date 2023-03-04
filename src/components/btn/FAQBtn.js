import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import styles from '../../assets/_styles/NavBtn.module.css';
import { HelpIcon } from '../icon';

export default function FAQBtn() {
  return (
    <Link to="/faq">
      <Button
        variant="outline-primary"
        className={styles.navBtn}>
        <HelpIcon />
        FAQ
      </Button>
    </Link>
  );
}
