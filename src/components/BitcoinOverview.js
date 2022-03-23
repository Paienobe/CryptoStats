import React from 'react'
import BitcoinDailyPriceChart from '../components/BitcoinDailyPriceChart'
import BitcoinDailyVolumeChart from '../components/BitcoinDailyVolumeChart'

function BitcoinOverview() {
  return (
    <div>
      <h1 className='text-xl lg:text-2xl lg:font-medium lg:pl-4'>
        Bitcoin Overview
      </h1>
      <div className='flex flex-col items-center justify-between pt-4 sm:flex-row '>
        <BitcoinDailyPriceChart />
        <BitcoinDailyVolumeChart />
      </div>
    </div>
  )
}

export default BitcoinOverview
