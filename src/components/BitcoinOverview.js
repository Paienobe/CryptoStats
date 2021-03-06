import React from 'react'
import BitcoinDailyPriceChart from '../components/BitcoinDailyPriceChart'
import BitcoinDailyVolumeChart from '../components/BitcoinDailyVolumeChart'

function BitcoinOverview() {
  return (
    <div>
      <h1 className='text-xl lg:text-2xl lg:font-medium lg:pl-4'>
        Bitcoin Overview
      </h1>
      <div className='flex flex-col items-center justify-between pt-4 sm:flex-row lg:bg-gray-700 lg:bg-opacity-80 lg:pt-3 lg:mt-2 lg:rounded-xl'>
        <BitcoinDailyPriceChart />
        <BitcoinDailyVolumeChart />
      </div>
    </div>
  )
}

export default BitcoinOverview
