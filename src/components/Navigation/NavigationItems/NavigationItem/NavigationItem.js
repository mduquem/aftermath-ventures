import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NavigationItem.module.css';

const NavigationItem = props => {
  return (
    <li className={classes.NavigationItem}>
      <Link
        onClick={props.clicked}
        className={props.active ? 'active' : null}
        to={props.link}
      >
        {' '}
        <strong>
          <h3>{props.children}</h3>
        </strong>
      </Link>
    </li>
  );
};

export default NavigationItem;
