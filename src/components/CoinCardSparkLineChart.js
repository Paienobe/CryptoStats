import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJs } from 'chart.js/auto'
import { useGlobalContext } from '../context'

function CoinCardSparkLineChart({ sparkLineData, sparkLineStats }) {
  console.log(sparkLineStats)

  return (
    <Line
      data={{
        labels: sparkLineData?.price.map((price, index) => index),
        datasets: [
          {
            label: '',
            data: sparkLineData?.price,
            backgroundColor: sparkLineStats.toString().includes('-')
              ? ['red']
              : ['#22c55e'],
            borderColor: sparkLineStats.toString().includes('-')
              ? 'red'
              : '#22c55e',
            borderWidth: 2,
          },
        ],
      }}
      options={{
        elements: {
          point: {
            radius: 0,
          },
        },
        scales: {
          x: {
            ticks: {
              display: false,
              beginAtZero: true,
              maxTicksLimit: 5,
            },
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
            ticks: {
              display: false,
              beginAtZero: true,
              maxTicksLimit: 5,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  )
}

export default CoinCardSparkLineChart
