import React from 'react';
import { Grid } from '@material-ui/core';
import styles from './../../App.module.css';
import styles2 from './Cards.module.css';
import CardItem from './CardItem';
function Cards({data}) {

  return (
    <div className={ styles.container }>
      <Grid container spacing={ 3 } justify="center">
        <CardItem
        title="Infected"
        value={ data.confirmed }
        lastUpdate={ data.lastUpdate }
        description="Number of active cases of COVID-19"
        style={ styles2.infected }
        ></CardItem>
        <CardItem
        title="Recovered"
        value={ data.recovered }
        lastUpdate={ data.lastUpdate }
        description="Number of recoveries from COVID-19"
        style={ styles2.recovered }
        ></CardItem>
        <CardItem
        title="Deaths"
        value={ data.deaths }
        lastUpdate={ data.lastUpdate }
        description="Number of deaths caused by COVID-19"
        style={ styles2.deaths }
        ></CardItem>
      </Grid>
    </div>
  );
}

export default Cards;
