import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJs } from 'chart.js/auto'

function CoinChart({ chartData }) {
  return (
    <div className='bg-gray-800 rounded-lg bg-opacity-50 p-2 mb-4'>
      <Line
        data={chartData}
        options={{
          elements: {
            point: {
              radius: 0,
            },
          },
        }}
      />
    </div>
  )
}

export default CoinChart
