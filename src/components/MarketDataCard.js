import React from 'react'
import LabelIcon from '@material-ui/icons/Label'

function MarketDataCard({ market_data }) {
  return (
    <div className='bg-gray-800 p-4 rounded-lg my-6 lg:my-0'>
      <div className='flex items-center'>
        <LabelIcon className='text-green-500 mr-2' />
        <p>
          Market Cap: $
          {market_data?.market_cap?.usd
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </p>
      </div>

      <div className='flex items-center'>
        <LabelIcon className='text-green-500 mr-2' />
        <p>
          Fully Diluted Valuation: $
          {market_data?.market_cap?.usd
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </p>
      </div>

      <div className='flex items-center'>
        <LabelIcon className='text-green-500 mr-2' />
        <p>
          Trading Vol: $
          {market_data?.total_volume?.usd
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </p>
      </div>

      <div className='flex items-center'>
        <LabelIcon className='text-green-500 mr-2' />
        <p>
          Circulating Supply:{' '}
          {market_data?.circulating_supply
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </p>
      </div>

      <div className='flex items-center'>
        <LabelIcon className='text-green-500 mr-2' />
        <p>
          Total Supply:{' '}
          {market_data?.total_supply
            ?.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </p>
      </div>
    </div>
  )
}

export default MarketDataCard
