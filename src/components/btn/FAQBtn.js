import React from 'react';
import styles from '../../assets/styles/NavBtn.module.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { HelpIcon } from '../icon';

export default function FAQBtn() {

  return (
    <Link to="/faq">
      <Button variant="outline-primary" className={ styles.navBtn }>
        <HelpIcon />
        FAQ
      </Button>
    </Link>
  )
}
