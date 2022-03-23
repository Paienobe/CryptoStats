import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJs } from 'chart.js/auto'
import { useGlobalContext } from '../context'
import millify from 'millify'

function BitcoinDailyPriceChart() {
  const { bitcoinChartData, myData, convertUnixTimeStampToReadableDate } =
    useGlobalContext()
  const bitcoinData = myData.find((item) => {
    return item.id === 'bitcoin'
  })
  const bitcoinPrice = bitcoinData?.current_price
  const time = new Date().getTime()

  return (
    <div className='w-full sm:w-1/2 sm:p-4 relative'>
      <div className='absolute left-2 top-6 sm:left-8 sm:top-8 lg:text-lg'>
        <p>Price</p>
        <p className='lg:text-3xl'>${bitcoinPrice && millify(bitcoinPrice)}</p>
        <p>{convertUnixTimeStampToReadableDate(time)}</p>
      </div>
      <div className='bg-gray-800 p-4 rounded-xl my-4 mb-0 lg:mb-4 lg:my-0'>
        <Line
          data={bitcoinChartData}
          options={{
            elements: {
              point: {
                radius: 0,
              },
            },
            scales: {
              x: {
                ticks: {
                  align: 'start',
                  source: 'auto',
                  maxRotation: 0,
                  autoSkip: true,
                  maxTicksLimit: 7,
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
      </div>
    </div>
  )
}

export default BitcoinDailyPriceChart
