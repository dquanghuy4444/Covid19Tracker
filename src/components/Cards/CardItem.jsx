import React from 'react';
import { Card , CardContent , Typography , Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

function CardItem({title , value , lastUpdate , description , style}) {

    var classNameGridItem = cx(styles.card , style)

  return (
    <Grid item component={ Card } xs={ 12 } md={ 3 } className={ classNameGridItem }>
        <CardContent>
            <Typography color="textSecondary" gutterBottom>
                { title }
            </Typography>

            <Typography variant="h5">
                <CountUp 
                start={ 0 } 
                end={ value.value }
                duration={ 2.5 }
                separator=","
                ></CountUp>
            </Typography>

            <Typography color="textSecondary">
                { new Date(lastUpdate).toDateString() }
            </Typography>
            
            <Typography variant="body2">
                { description }
            </Typography>

        </CardContent>
    </Grid>
  );
}

export default CardItem;
