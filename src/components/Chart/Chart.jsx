import React , { useState , useEffect } from 'react';
import { fetchDataDaily } from './../../api/index';
import { Line, Bar } from 'react-chartjs-2';
import styles from './../../App.module.css';

function Chart({ data: { confirmed, recovered, deaths }, country }) {
  

  const barChart = (
    confirmed ? (
      <Bar
        width="500"
        height="200"
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [confirmed.value, recovered.value, deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
        }}
      />
    ) : null
  );

  return (
    <div className={ styles.container }>
      { country ? barChart : null }
    </div>
  )
}

export default Chart;
