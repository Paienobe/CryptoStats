import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGlobalContext } from '../context'
import CoinCardSparkLineChart from './CoinCardSparkLineChart'

function Coinrow({
  id,
  name,
  market_cap_rank,
  image,
  symbol,
  current_price,
  price_change_percentage_1h_in_currency,
  price_change_percentage_24h,
  total_volume,
  market_cap,
  circulating_supply,
  sparkline_in_7d,
  price_change_percentage_7d_in_currency,
}) {
  const { currencySymbol } = useGlobalContext()
  return (
    <Link
      to={`/coin/${id}`}
      className='my-4 sm:w-1/2 sm:p-4 lg:w-1/2 lg:my-0 hover:scale-105 lg:hover:scale-95'
    >
      <div>
        <div className='bg-gray-800  p-4 rounded-lg text-gray-100  '>
          <div className='flex items-center justify-between border border-transparent border-b-gray-100 border-opacity-20 pb-2'>
            <p className='font-medium text-lg'>
              {market_cap_rank}. {name} ({symbol})
            </p>
            <img src={image} alt={symbol} className='w-8' />
          </div>
          <div className='flex items-center justify-between'>
            <div className='mt-2 font-medium'>
              <p>
                Price:{' '}
                <span className='font-light text-sm'>
                  {currencySymbol}
                  {current_price
                    ?.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>{' '}
              </p>

              <p>
                Market Cap:{' '}
                <span className='font-light text-sm'>
                  {currencySymbol}
                  {market_cap?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>{' '}
              </p>

              <p>
                1h:{' '}
                <span
                  className={`font-light text-sm ${
                    price_change_percentage_1h_in_currency
                      ?.toString()
                      .includes('-')
                      ? 'text-red-600'
                      : 'text-green-500'
                  }`}
                >
                  {price_change_percentage_1h_in_currency?.toFixed(2)}%
                </span>{' '}
              </p>

              <p>
                24h:{' '}
                <span
                  className={`font-light text-sm ${
                    price_change_percentage_24h?.toString().includes('-')
                      ? 'text-red-600'
                      : 'text-green-500'
                  }`}
                >
                  {price_change_percentage_24h?.toFixed(2)}%
                </span>{' '}
              </p>

              <p>
                Total Volume:{' '}
                <span className='font-light text-sm '>
                  {total_volume
                    ?.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>{' '}
              </p>

              <p>
                Circulating Supply:{' '}
                <span className='font-light text-sm '>
                  {circulating_supply
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>{' '}
              </p>
            </div>
            <div className='hidden lg:flex flex-col justify-between py-4 w-2/5 '>
              <p className='text-center'>Last 7d</p>
              <CoinCardSparkLineChart
                sparkLineData={sparkline_in_7d}
                sparkLineStats={price_change_percentage_7d_in_currency}
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Coinrow
