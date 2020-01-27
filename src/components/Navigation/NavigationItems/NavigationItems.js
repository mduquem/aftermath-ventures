import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.module.css';

const NavigationItems = props => {
   return (
      <div className={classes.NavigationItems}>
         <ul>
            <NavigationItem clicked={props.clicked} link='/'>
               Inicio
            </NavigationItem>
         </ul>
      </div>
   );
};

export default NavigationItems;
