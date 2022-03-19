import React from 'react'
import { useGlobalContext } from '../context'

function ChartFilter() {
  const { setChartTime } = useGlobalContext()
  const filterTexts = ['1d', '7d', '30d', '90d', '1y']

  return (
    <div className='flex items-center justify-between mb-6 sm:w-1/2 sm:m-auto lg:w-1/3'>
      {filterTexts.map((item, index) => {
        return (
          <button
            key={index}
            className='bg-gray-700 p-2 px-4 text-xs rounded-lg w-12 hover:bg-gray-500'
            onClick={(e) => setChartTime(e.target.innerText.slice(0, -1))}
          >
            {item}
          </button>
        )
      })}
      <button
        className='bg-gray-700 p-2 px-4 text-xs rounded-lg w-12 hover:bg-gray-500'
        onClick={(e) => setChartTime(e.target.innerText)}
      >
        max
      </button>
    </div>
  )
}

export default ChartFilter
