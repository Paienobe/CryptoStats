import React from 'react'
import { useGlobalContext } from '../context'

function GlobalMarketData() {
  const { globalMarketData } = useGlobalContext()

  return (
    <div className='sm:text-lg  lg:text-xl mt-16'>
      <p>
        <span className='font-medium'>Active Coins:</span>{' '}
        {globalMarketData?.data?.active_cryptocurrencies
          ?.toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </p>
      <p>
        <span className='font-medium'>Markets:</span>{' '}
        {globalMarketData?.data?.markets
          ?.toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </p>
      <p>
        <span className='font-medium'>Total Market Cap:</span> $
        {globalMarketData?.data?.total_market_cap.usd
          ?.toFixed(2)
          ?.toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
        <span
          className={`${
            globalMarketData?.data?.market_cap_change_percentage_24h_usd[0]?.toString() ===
            '-'
              ? 'text-red-500'
              : 'text-green-500'
          } text-sm`}
        >
          {globalMarketData?.data?.market_cap_change_percentage_24h_usd
            ?.toFixed(2)
            ?.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          %
        </span>
      </p>
    </div>
  )
}

export default GlobalMarketData
