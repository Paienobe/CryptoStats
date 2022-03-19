import React from 'react'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

function PriceDataCard({ market_data }) {
  return (
    <div className='bg-gray-700 p-4 rounded-lg my-6 lg:my-0'>
      <p className='text-center font-semibold text-2xl'>
        $
        {market_data?.current_price?.usd
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
        <span
          className={`text-lg font-normal ${
            market_data?.price_change_percentage_24h?.toString().includes('-')
              ? 'text-red-500'
              : 'text-green-500'
          }`}
        >
          {market_data?.price_change_percentage_24h?.toFixed(2)}%
        </span>
      </p>

      <div className='text-center mt-4'>
        <p>
          <span className='font-semibold'>
            {' '}
            <ArrowDropUpIcon className='text-green-500' />
            All Time High:
          </span>{' '}
          $
          {market_data?.ath?.usd
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </p>

        <p>{market_data?.ath_date?.usd.slice(0, 10)}</p>

        <p>
          <span className='font-semibold'>
            <ArrowDropDownIcon className='text-red-500' />
            All Time Low:
          </span>{' '}
          $
          {market_data?.atl?.usd
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </p>

        <p>{market_data?.atl_date?.usd.slice(0, 10)}</p>
      </div>
    </div>
  )
}

export default PriceDataCard
